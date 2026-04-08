"use strict";
/**
 * MySQLUserRepository.ts
 * Repositorio para tabla 'users' del sistema
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = exports.MySQLUserRepository = void 0;
const connection_1 = require("../database/connection");
class MySQLUserRepository {
    async findById(id) {
        try {
            const [rows] = await connection_1.pool.execute('SELECT * FROM users WHERE id = ? LIMIT 1', [id]);
            if (!rows.length)
                return null;
            return rows[0];
        }
        catch (error) {
            throw error;
        }
    }
    async findByEmail(email) {
        try {
            const [rows] = await connection_1.pool.execute('SELECT * FROM users WHERE email = ? LIMIT 1', [email]);
            if (!rows.length)
                return null;
            return rows[0];
        }
        catch (error) {
            throw error;
        }
    }
    async findByApodo(apodo) {
        try {
            const [rows] = await connection_1.pool.execute('SELECT * FROM users WHERE apodo = ? LIMIT 1', [apodo]);
            if (!rows.length)
                return null;
            return rows[0];
        }
        catch (error) {
            throw error;
        }
    }
    async save(data) {
        const { v4: uuidv4 } = await Promise.resolve().then(() => __importStar(require('uuid')));
        const id = uuidv4();
        try {
            await connection_1.pool.execute(`INSERT INTO users (id, nombres, apellidos, email, password, apodo, avatar, rol, email_verified)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [
                id,
                data.nombres,
                data.apellidos,
                data.email,
                data.password,
                data.apodo,
                data.avatar || null,
                data.rol,
                data.email_verified ? 1 : 0
            ]);
            const user = await this.findById(id);
            if (!user)
                throw new Error('Usuario no fue creado correctamente');
            return user;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.MySQLUserRepository = MySQLUserRepository;
exports.userRepository = new MySQLUserRepository();
//# sourceMappingURL=MySQLUserRepository.js.map