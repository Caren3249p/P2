"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateItem = void 0;
// application/usecases/inventory/UpdateItem.ts
const Item_1 = require("../../../domain/entities/Item");
class UpdateItem {
    constructor(itemRepository) {
        this.itemRepository = itemRepository;
    }
    async execute(id, data) {
        const item = await this.itemRepository.findById(id);
        if (!item) {
            throw new Error('Ítem no encontrado');
        }
        // Crear nuevo item con datos actualizados
        const updatedItem = new Item_1.Item({
            id: item.id,
            nombre: data.nombre ?? item.nombre,
            tipo: data.tipo ?? item.tipo,
            rareza: data.rareza ?? item.rareza,
            imagen: (data.imagen ?? item.imagen) || undefined,
            descripcion: data.descripcion ?? item.descripcion,
            habilidades: data.habilidades ?? item.habilidades,
            efectos: data.efectos ?? item.efectos,
            ataque: data.ataque ?? item.ataque,
            defensa: data.defensa ?? item.defensa,
            userId: item.userId || undefined,
            activo: item.activo,
            deletedAt: item.deletedAt || null,
            createdAt: item.createdAt,
        });
        const result = await this.itemRepository.update(updatedItem);
        return result;
    }
}
exports.UpdateItem = UpdateItem;
//# sourceMappingURL=UpdateItem.js.map