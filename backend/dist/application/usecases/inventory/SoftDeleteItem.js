"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftDeleteItem = void 0;
class SoftDeleteItem {
    constructor(itemRepository) {
        this.itemRepository = itemRepository;
    }
    async execute(id) {
        const item = await this.itemRepository.findById(id);
        if (!item) {
            throw new Error('Ítem no encontrado');
        }
        // Verificar si puede ser eliminado
        item.canBeDeleted();
        // Realizar soft delete
        const success = await this.itemRepository.delete(id);
        if (!success) {
            throw new Error('No se pudo eliminar el ítem');
        }
        return { success: true, deletedAt: new Date() };
    }
}
exports.SoftDeleteItem = SoftDeleteItem;
//# sourceMappingURL=SoftDeleteItem.js.map