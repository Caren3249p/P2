import { z } from 'zod';
export declare const SearchQuerySchema: z.ZodObject<{
    q: z.ZodString;
}, "strip", z.ZodTypeAny, {
    q: string;
}, {
    q: string;
}>;
export declare const GetItemsQuerySchema: z.ZodObject<{
    tipo: z.ZodOptional<z.ZodEnum<["Héroe", "Arma", "Armadura", "Habilidad", "Ítem", "Épica"]>>;
    rareza: z.ZodOptional<z.ZodEnum<["Común", "Rara", "Épica", "Legendaria"]>>;
    page: z.ZodPipeline<z.ZodEffects<z.ZodDefault<z.ZodString>, number, string | undefined>, z.ZodNumber>;
    limit: z.ZodPipeline<z.ZodEffects<z.ZodDefault<z.ZodString>, number, string | undefined>, z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    tipo?: "Héroe" | "Arma" | "Armadura" | "Habilidad" | "Ítem" | "Épica" | undefined;
    rareza?: "Épica" | "Común" | "Rara" | "Legendaria" | undefined;
}, {
    tipo?: "Héroe" | "Arma" | "Armadura" | "Habilidad" | "Ítem" | "Épica" | undefined;
    rareza?: "Épica" | "Común" | "Rara" | "Legendaria" | undefined;
    page?: string | undefined;
    limit?: string | undefined;
}>;
export declare const CreateItemSchema: z.ZodObject<{
    nombre: z.ZodString;
    tipo: z.ZodEnum<["Héroe", "Arma", "Armadura", "Habilidad", "Ítem", "Épica"]>;
    rareza: z.ZodOptional<z.ZodEnum<["Común", "Rara", "Épica", "Legendaria"]>>;
    imagen: z.ZodOptional<z.ZodString>;
    descripcion: z.ZodOptional<z.ZodString>;
    habilidades: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    efectos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    ataque: z.ZodOptional<z.ZodNumber>;
    defensa: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    tipo: "Héroe" | "Arma" | "Armadura" | "Habilidad" | "Ítem" | "Épica";
    nombre: string;
    rareza?: "Épica" | "Común" | "Rara" | "Legendaria" | undefined;
    imagen?: string | undefined;
    descripcion?: string | undefined;
    habilidades?: string[] | undefined;
    efectos?: string[] | undefined;
    ataque?: number | undefined;
    defensa?: number | undefined;
}, {
    tipo: "Héroe" | "Arma" | "Armadura" | "Habilidad" | "Ítem" | "Épica";
    nombre: string;
    rareza?: "Épica" | "Común" | "Rara" | "Legendaria" | undefined;
    imagen?: string | undefined;
    descripcion?: string | undefined;
    habilidades?: string[] | undefined;
    efectos?: string[] | undefined;
    ataque?: number | undefined;
    defensa?: number | undefined;
}>;
export declare const UpdateItemSchema: z.ZodObject<{
    nombre: z.ZodOptional<z.ZodString>;
    tipo: z.ZodOptional<z.ZodEnum<["Héroe", "Arma", "Armadura", "Habilidad", "Ítem", "Épica"]>>;
    rareza: z.ZodOptional<z.ZodEnum<["Común", "Rara", "Épica", "Legendaria"]>>;
    imagen: z.ZodOptional<z.ZodString>;
    descripcion: z.ZodOptional<z.ZodString>;
    habilidades: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    efectos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    ataque: z.ZodOptional<z.ZodNumber>;
    defensa: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    tipo?: "Héroe" | "Arma" | "Armadura" | "Habilidad" | "Ítem" | "Épica" | undefined;
    rareza?: "Épica" | "Común" | "Rara" | "Legendaria" | undefined;
    nombre?: string | undefined;
    imagen?: string | undefined;
    descripcion?: string | undefined;
    habilidades?: string[] | undefined;
    efectos?: string[] | undefined;
    ataque?: number | undefined;
    defensa?: number | undefined;
}, {
    tipo?: "Héroe" | "Arma" | "Armadura" | "Habilidad" | "Ítem" | "Épica" | undefined;
    rareza?: "Épica" | "Común" | "Rara" | "Legendaria" | undefined;
    nombre?: string | undefined;
    imagen?: string | undefined;
    descripcion?: string | undefined;
    habilidades?: string[] | undefined;
    efectos?: string[] | undefined;
    ataque?: number | undefined;
    defensa?: number | undefined;
}>;
//# sourceMappingURL=inventory.schemas.d.ts.map