import { Response, NextFunction } from 'express';
import { AuthRequest } from './auth.middleware';
export declare const requireRole: (allowedRoles: string[]) => (req: AuthRequest, res: Response, next: NextFunction) => void;
//# sourceMappingURL=roleMiddleware.d.ts.map