import { IItemRepository, ItemFilters, PaginatedResult } from '../../../domain/repositories/IItemRepository';
import { Item } from '../../../domain/entities/Item';
export declare class GetUserInventory {
    private itemRepository;
    constructor(itemRepository: IItemRepository);
    execute(userId: string, filters: ItemFilters): Promise<PaginatedResult<Item>>;
}
//# sourceMappingURL=GetUserInventory.d.ts.map