import { Item } from '../../../domain/entities/Item';
import { IItemRepository } from '../../../domain/repositories/IItemRepository';
interface UpdateItemDTO {
    nombre?: string;
    tipo?: 'Héroe' | 'Arma' | 'Armadura' | 'Habilidad' | 'Ítem' | 'Épica';
    rareza?: 'Común' | 'Rara' | 'Épica' | 'Legendaria';
    imagen?: string;
    descripcion?: string;
    habilidades?: string[];
    efectos?: string[];
    ataque?: number;
    defensa?: number;
}
export declare class UpdateItem {
    private itemRepository;
    constructor(itemRepository: IItemRepository);
    execute(id: string, data: UpdateItemDTO): Promise<Item>;
}
export {};
//# sourceMappingURL=UpdateItem.d.ts.map