"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateItemSchema = exports.CreateItemSchema = exports.GetItemsQuerySchema = exports.SearchQuerySchema = void 0;
const zod_1 = require("zod");
exports.SearchQuerySchema = zod_1.z.object({
    q: zod_1.z.string().min(4, 'La búsqueda debe tener al menos 4 caracteres'),
});
exports.GetItemsQuerySchema = zod_1.z.object({
    tipo: zod_1.z.enum(['Héroe', 'Arma', 'Armadura', 'Habilidad', 'Ítem', 'Épica']).optional(),
    rareza: zod_1.z.enum(['Común', 'Rara', 'Épica', 'Legendaria']).optional(),
    page: zod_1.z.string().default('1').transform(Number).pipe(zod_1.z.number().min(1)),
    limit: zod_1.z.string().default('16').transform(Number).pipe(zod_1.z.number().min(1).max(100)),
});
exports.CreateItemSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(100),
    tipo: zod_1.z.enum(['Héroe', 'Arma', 'Armadura', 'Habilidad', 'Ítem', 'Épica']),
    rareza: zod_1.z.enum(['Común', 'Rara', 'Épica', 'Legendaria']).optional(),
    imagen: zod_1.z.string().url().optional(),
    descripcion: zod_1.z.string().max(1000).optional(),
    habilidades: zod_1.z.array(zod_1.z.string()).optional(),
    efectos: zod_1.z.array(zod_1.z.string()).optional(),
    ataque: zod_1.z.number().int().min(0).optional(),
    defensa: zod_1.z.number().int().min(0).optional(),
});
exports.UpdateItemSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2).max(100).optional(),
    tipo: zod_1.z.enum(['Héroe', 'Arma', 'Armadura', 'Habilidad', 'Ítem', 'Épica']).optional(),
    rareza: zod_1.z.enum(['Común', 'Rara', 'Épica', 'Legendaria']).optional(),
    imagen: zod_1.z.string().url().optional(),
    descripcion: zod_1.z.string().max(1000).optional(),
    habilidades: zod_1.z.array(zod_1.z.string()).optional(),
    efectos: zod_1.z.array(zod_1.z.string()).optional(),
    ataque: zod_1.z.number().int().min(0).optional(),
    defensa: zod_1.z.number().int().min(0).optional(),
});
//# sourceMappingURL=inventory.schemas.js.map