import { IItemRepository } from '../../../domain/repositories/IItemRepository';
export declare class SoftDeleteItem {
    private itemRepository;
    constructor(itemRepository: IItemRepository);
    execute(id: string): Promise<{
        success: boolean;
        deletedAt: Date;
    }>;
}
//# sourceMappingURL=SoftDeleteItem.d.ts.map