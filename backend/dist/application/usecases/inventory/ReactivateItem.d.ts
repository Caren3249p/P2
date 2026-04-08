import { IItemRepository } from '../../../domain/repositories/IItemRepository';
export declare class ReactivateItem {
    private itemRepository;
    constructor(itemRepository: IItemRepository);
    execute(id: string): Promise<{
        success: boolean;
        reactivatedAt: Date;
    }>;
}
//# sourceMappingURL=ReactivateItem.d.ts.map