/**
 * MySQLUserRepository.ts
 * Repositorio para tabla 'users' del sistema
 */
export interface User {
    id: string;
    nombres: string;
    apellidos: string;
    email: string;
    password: string;
    apodo: string;
    avatar?: string | null;
    rol: 'PLAYER' | 'ADMIN' | 'MODERATOR';
    email_verified: boolean;
    created_at: Date;
    updated_at: Date;
}
export declare class MySQLUserRepository {
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    findByApodo(apodo: string): Promise<User | null>;
    save(data: Omit<User, 'id' | 'created_at' | 'updated_at'>): Promise<User>;
}
export declare const userRepository: MySQLUserRepository;
//# sourceMappingURL=MySQLUserRepository.d.ts.map