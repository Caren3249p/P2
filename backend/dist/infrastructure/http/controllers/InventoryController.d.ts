import { Request, Response, NextFunction } from 'express';
import { SearchItems } from '../../../application/usecases/inventory/SearchItem';
import { GetItems } from '../../../application/usecases/inventory/GetItem';
import { GetItemById } from '../../../application/usecases/inventory/GetItemById';
import { DeleteItem } from '../../../application/usecases/inventory/DeleteItem';
import { CreateItem } from '../../../application/usecases/inventory/CreateItem';
import { UpdateItem } from '../../../application/usecases/inventory/UpdateItem';
import { SoftDeleteItem } from '../../../application/usecases/inventory/SoftDeleteItem';
import { ReactivateItem } from '../../../application/usecases/inventory/ReactivateItem';
import { GetUserInventory } from '../../../application/usecases/inventory/GetUserInventory';
import { AuthRequest } from '../middlewares/auth.middleware';
export declare class InventoryController {
    private readonly searchItems;
    private readonly getItems;
    private readonly getItemById;
    private readonly deleteItem;
    private readonly createItem;
    private readonly updateItem;
    private readonly softDeleteItem;
    private readonly reactivateItem;
    private readonly getUserInventoryUseCase;
    constructor(searchItems: SearchItems, getItems: GetItems, getItemById: GetItemById, deleteItem: DeleteItem, createItem: CreateItem, updateItem: UpdateItem, softDeleteItem: SoftDeleteItem, reactivateItem: ReactivateItem, getUserInventoryUseCase: GetUserInventory);
    search: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    list: (req: Request, res: Response) => Promise<void>;
    getGlobalInventory: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getUserInventory: (req: AuthRequest & Request, res: Response, next: NextFunction) => Promise<void>;
    getById: (req: Request<{
        id: string;
    }>, res: Response, next: NextFunction) => Promise<void>;
    create: (req: AuthRequest & Request, res: Response, next: NextFunction) => Promise<void>;
    update: (req: AuthRequest & Request<{
        id: string;
    }>, res: Response, next: NextFunction) => Promise<void>;
    softDelete: (req: AuthRequest & Request<{
        id: string;
    }>, res: Response, next: NextFunction) => Promise<void>;
    reactivate: (req: AuthRequest & Request<{
        id: string;
    }>, res: Response, next: NextFunction) => Promise<void>;
    delete: (req: AuthRequest & Request<{
        id: string;
    }>, res: Response, next: NextFunction) => Promise<void>;
}
//# sourceMappingURL=InventoryController.d.ts.map