import { Item } from '../../../domain/entities/Item';
import { IItemRepository } from '../../../domain/repositories/IItemRepository';
interface CreateItemDTO {
    nombre: string;
    tipo: 'Héroe' | 'Arma' | 'Armadura' | 'Habilidad' | 'Ítem' | 'Épica';
    rareza?: 'Común' | 'Rara' | 'Épica' | 'Legendaria';
    imagen?: string;
    descripcion?: string;
    habilidades?: string[];
    efectos?: string[];
    ataque?: number;
    defensa?: number;
}
export declare class CreateItem {
    readonly itemRepository: IItemRepository;
    constructor(itemRepository: IItemRepository);
    execute(data: CreateItemDTO): Promise<Item>;
}
export {};
//# sourceMappingURL=CreateItem.d.ts.map