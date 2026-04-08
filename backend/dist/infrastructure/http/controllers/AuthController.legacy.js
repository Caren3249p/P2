"use strict";
/**
 * AuthController.legacy.ts — Infrastructure / HTTP / Controllers
 * Controlador de Auth para el flujo de Player (v1).
 * Exporta singleton `authController` usado por authRoutes.ts
 * USA TABLA 'users' (no 'players')
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const MySQLUserRepository_1 = require("../../repositories/MySQLUserRepository");
const jwt_1 = require("../../security/jwt");
const DomainError_1 = require("../../../domain/errors/DomainError");
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthControllerLegacy {
    async register(req, res, next) {
        try {
            const { email, password, username } = req.body;
            // Verificar si el email ya existe
            const existing = await MySQLUserRepository_1.userRepository.findByEmail(email);
            if (existing) {
                res.status(409).json({ success: false, error: 'EMAIL_TAKEN' });
                return;
            }
            // Verificar si el apodo (username) ya existe
            const existingApodo = await MySQLUserRepository_1.userRepository.findByApodo(username);
            if (existingApodo) {
                res.status(409).json({ success: false, error: 'USERNAME_TAKEN' });
                return;
            }
            const passwordHash = await bcrypt_1.default.hash(password, 12);
            const user = await MySQLUserRepository_1.userRepository.save({
                nombres: username, // Usar el username como nombres inicialmente
                apellidos: '',
                email,
                password: passwordHash,
                apodo: username,
                rol: 'PLAYER',
                avatar: null,
                email_verified: false,
            });
            res.status(201).json({
                success: true,
                data: {
                    id: user.id,
                    email: user.email,
                    apodo: user.apodo,
                    rol: user.rol,
                },
            });
        }
        catch (err) {
            next(err);
        }
    }
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await MySQLUserRepository_1.userRepository.findByEmail(email);
            if (!user || !(await bcrypt_1.default.compare(password, user.password))) {
                res.status(401).json({ success: false, error: 'INVALID_CREDENTIALS' });
                return;
            }
            const accessToken = (0, jwt_1.signAccessToken)({ sub: user.id, role: user.rol });
            const refreshToken = (0, jwt_1.signRefreshToken)(user.id);
            res.json({
                success: true,
                data: {
                    accessToken,
                    refreshToken,
                    user: {
                        id: user.id,
                        email: user.email,
                        apodo: user.apodo,
                        rol: user.rol,
                    },
                },
            });
        }
        catch (err) {
            if (err instanceof DomainError_1.DomainError && err.code === 'UNAUTHORIZED') {
                res.status(401).json({ success: false, error: 'INVALID_CREDENTIALS', message: err.message });
                return;
            }
            next(err);
        }
    }
    async logout(_req, res) {
        res.json({ success: true });
    }
    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.body;
            if (!refreshToken) {
                res.status(400).json({ success: false, error: 'REFRESH_TOKEN_REQUIRED' });
                return;
            }
            const payload = (0, jwt_1.verifyRefreshToken)(refreshToken);
            const user = await MySQLUserRepository_1.userRepository.findById(payload.sub);
            if (!user) {
                res.status(401).json({ success: false, error: 'INVALID_TOKEN' });
                return;
            }
            const accessToken = (0, jwt_1.signAccessToken)({ sub: user.id, role: user.rol });
            res.json({ success: true, data: { accessToken } });
        }
        catch {
            res.status(401).json({ success: false, error: 'INVALID_TOKEN' });
        }
    }
}
exports.authController = new AuthControllerLegacy();
//# sourceMappingURL=AuthController.legacy.js.map