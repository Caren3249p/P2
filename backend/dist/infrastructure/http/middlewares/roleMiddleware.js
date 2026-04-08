"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRole = void 0;
const requireRole = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            res.status(401).json({ error: 'No autenticado' });
            return;
        }
        if (!allowedRoles.includes(req.user.rol)) {
            res.status(403).json({
                error: `No tienes permiso. Se requiere uno de: ${allowedRoles.join(', ')}`
            });
            return;
        }
        next();
    };
};
exports.requireRole = requireRole;
//# sourceMappingURL=roleMiddleware.js.map