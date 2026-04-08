"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserInventory = void 0;
class GetUserInventory {
    constructor(itemRepository) {
        this.itemRepository = itemRepository;
    }
    async execute(userId, filters) {
        const result = await this.itemRepository.findByUser(userId, filters);
        return result;
    }
}
exports.GetUserInventory = GetUserInventory;
//# sourceMappingURL=GetUserInventory.js.map