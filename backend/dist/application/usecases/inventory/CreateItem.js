"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateItem = void 0;
// application/usecases/inventory/CreateItem.ts
const Item_1 = require("../../../domain/entities/Item");
class CreateItem {
    constructor(itemRepository) {
        this.itemRepository = itemRepository;
    }
    async execute(data) {
        // Crear nuevo item sin user_id (es global)
        const item = new Item_1.Item({
            nombre: data.nombre,
            tipo: data.tipo,
            rareza: data.rareza || 'Común',
            imagen: data.imagen,
            descripcion: data.descripcion,
            habilidades: data.habilidades || [],
            efectos: data.efectos || [],
            ataque: data.ataque || 0,
            defensa: data.defensa || 0,
            userId: undefined, // Item global, no pertenece a nadie
            activo: true,
        });
        const savedItem = await this.itemRepository.save(item);
        return savedItem;
    }
}
exports.CreateItem = CreateItem;
//# sourceMappingURL=CreateItem.js.map