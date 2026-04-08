"use strict";
/**
 * inventory.routes.ts — Infrastructure / HTTP / Routes
 * CRUD completo + Inventarios Global y del Usuario
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInventoryRoutes = void 0;
const express_1 = require("express");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const roleMiddleware_1 = require("../middlewares/roleMiddleware");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const validateMiddleware_1 = require("../middlewares/validateMiddleware");
const inventory_schemas_1 = require("../schemas/inventory.schemas");
const createInventoryRoutes = (controller) => {
    const router = (0, express_1.Router)();
    // ========== BÚSQUEDA Y LECTURA ==========
    router.get('/search', (0, validation_middleware_1.validateQuery)(inventory_schemas_1.SearchQuerySchema), controller.search);
    router.get('/global', (0, validation_middleware_1.validateQuery)(inventory_schemas_1.GetItemsQuerySchema), controller.getGlobalInventory);
    router.get('/me', auth_middleware_1.authenticateJWT, (0, validation_middleware_1.validateQuery)(inventory_schemas_1.GetItemsQuerySchema), controller.getUserInventory);
    router.get('/', (0, validation_middleware_1.validateQuery)(inventory_schemas_1.GetItemsQuerySchema), controller.list);
    router.get('/:id', controller.getById);
    // ========== CRUD DE ITEMS (SOLO ADMIN) ==========
    router.post('/', auth_middleware_1.authenticateJWT, (0, roleMiddleware_1.requireRole)(['ADMIN']), (0, validateMiddleware_1.validate)(inventory_schemas_1.CreateItemSchema), controller.create);
    router.put('/:id', auth_middleware_1.authenticateJWT, (0, roleMiddleware_1.requireRole)(['ADMIN']), (0, validateMiddleware_1.validate)(inventory_schemas_1.UpdateItemSchema), controller.update);
    // ========== SOFT DELETE Y REACTIVATE (SOLO ADMIN) ==========
    router.patch('/:id/delete', auth_middleware_1.authenticateJWT, (0, roleMiddleware_1.requireRole)(['ADMIN']), controller.softDelete);
    router.patch('/:id/reactivate', auth_middleware_1.authenticateJWT, (0, roleMiddleware_1.requireRole)(['ADMIN']), controller.reactivate);
    // ========== COMPATIBILIDAD CON RUTAS LEGACY ==========
    router.delete('/:id', auth_middleware_1.authenticateJWT, controller.delete);
    return router;
};
exports.createInventoryRoutes = createInventoryRoutes;
//# sourceMappingURL=inventory.routes.js.map