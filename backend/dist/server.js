"use strict";
/**
 * server.ts — Entry point — THE NEXUS BATTLES V
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const env_1 = require("./config/env");
const logger_1 = require("./infrastructure/logging/logger");
const errorHandler_1 = require("./infrastructure/http/middlewares/errorHandler");
// Importamos ÚNICAMENTE la función de prueba, el pool se queda en su archivo
const connection_1 = require("./infrastructure/database/connection");
// ── Rutas v1 ────────────────────────────────────────────────
const authRoutes_1 = __importDefault(require("./infrastructure/http/routes/authRoutes"));
// ── Rutas con factory (Inventario) ─────────────────────────
const inventory_routes_1 = require("./infrastructure/http/routes/inventory.routes");
// ── Repositorios ──────────────────────────────────────────────────────────────
const MySQLItemRepository_1 = require("./infrastructure/repositories/MySQLItemRepository");
// ── Use Cases ─────────────────────────────────────────────────────────────────
const SearchItem_1 = require("./application/usecases/inventory/SearchItem");
const GetItem_1 = require("./application/usecases/inventory/GetItem");
const GetItemById_1 = require("./application/usecases/inventory/GetItemById");
const DeleteItem_1 = require("./application/usecases/inventory/DeleteItem");
const CreateItem_1 = require("./application/usecases/inventory/CreateItem");
const UpdateItem_1 = require("./application/usecases/inventory/UpdateItem");
const SoftDeleteItem_1 = require("./application/usecases/inventory/SoftDeleteItem");
const ReactivateItem_1 = require("./application/usecases/inventory/ReactivateItem");
const GetUserInventory_1 = require("./application/usecases/inventory/GetUserInventory");
// ── Controladores con DI ──────────────────────────────────────────────────────
const InventoryController_1 = require("./infrastructure/http/controllers/InventoryController");
// ============================================================
// INYECCIÓN DE DEPENDENCIAS
// ============================================================
// Inventario
const itemRepository = new MySQLItemRepository_1.MySQLItemRepository();
const inventoryController = new InventoryController_1.InventoryController(new SearchItem_1.SearchItems(itemRepository), new GetItem_1.GetItems(itemRepository), new GetItemById_1.GetItemById(itemRepository), new DeleteItem_1.DeleteItem(itemRepository), new CreateItem_1.CreateItem(itemRepository), new UpdateItem_1.UpdateItem(itemRepository), new SoftDeleteItem_1.SoftDeleteItem(itemRepository), new ReactivateItem_1.ReactivateItem(itemRepository), new GetUserInventory_1.GetUserInventory(itemRepository));
// Auth helpers
// ============================================================
// EXPRESS APP
// ============================================================
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({ origin: env_1.env.CORS_ORIGIN, credentials: true }));
app.use(express_1.default.json({
    verify: (req, _res, buf) => { req.rawBody = buf.toString(); },
}));
app.use(express_1.default.urlencoded({ extended: true }));
// ── Rate limiting ──────────────────────────────────────────────────────────────
const globalLimiter = (0, express_rate_limit_1.default)({ windowMs: 15 * 60 * 1000, max: 100, standardHeaders: true });
const sensitiveLimiter = (0, express_rate_limit_1.default)({ windowMs: 15 * 60 * 1000, max: 20, standardHeaders: true });
const inventoryLimiter = (0, express_rate_limit_1.default)({ windowMs: 60 * 1000, max: 120, standardHeaders: true, legacyHeaders: false, skipFailedRequests: true });
app.use('/api', globalLimiter);
app.use('/api/v1/auth', sensitiveLimiter);
// ── Health check ───────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => res.json({
    status: 'ok', env: env_1.env.NODE_ENV, version: '5.0.0',
    timestamp: new Date().toISOString(),
}));
// ============================================================
// RUTAS
// ============================================================
app.use('/api/v1/auth', authRoutes_1.default);
app.use('/api/v1/inventory', inventoryLimiter, (0, inventory_routes_1.createInventoryRoutes)(inventoryController));
app.use(errorHandler_1.errorHandler);
// ============================================================
// ARRANQUE
// ============================================================
async function bootstrap() {
    try {
        // Esta función se importa de ./infrastructure/database/connection
        await (0, connection_1.testConnection)();
        logger_1.logger.info('Conexión a MySQL/TiDB establecida');
        app.listen(env_1.env.PORT, () => {
            logger_1.logger.info(`Servidor corriendo en puerto ${env_1.env.PORT} [${env_1.env.NODE_ENV}]`);
            console.log('\n  THE NEXUS BATTLES V — API Unificada');
            console.log('═'.repeat(70));
            console.log(` Servidor: http://localhost:${env_1.env.PORT}`);
            console.log(` Health:   GET http://localhost:${env_1.env.PORT}/health`);
            console.log('═'.repeat(70));
        });
    }
    catch (err) {
        console.error('\n ERROR CRÍTICO AL CONECTAR A LA BASE DE DATOS:');
        console.error(`Mensaje: ${err.message}`);
        process.exit(1);
    }
}
bootstrap().catch(err => {
    console.error('\nERROR CRÍTICO AL INICIAR EL SERVIDOR:');
    console.error(err);
    process.exit(1);
});
exports.default = app;
//# sourceMappingURL=server.js.map