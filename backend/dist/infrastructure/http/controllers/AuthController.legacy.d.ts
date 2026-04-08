/**
 * AuthController.legacy.ts — Infrastructure / HTTP / Controllers
 * Controlador de Auth para el flujo de Player (v1).
 * Exporta singleton `authController` usado por authRoutes.ts
 * USA TABLA 'users' (no 'players')
 */
import { Request, Response, NextFunction } from 'express';
declare class AuthControllerLegacy {
    register(req: Request, res: Response, next: NextFunction): Promise<void>;
    login(req: Request, res: Response, next: NextFunction): Promise<void>;
    logout(_req: Request, res: Response): Promise<void>;
    refresh(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const authController: AuthControllerLegacy;
export {};
//# sourceMappingURL=AuthController.legacy.d.ts.map