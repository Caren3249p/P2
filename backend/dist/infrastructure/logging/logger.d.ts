/**
 * logger.ts — Infrastructure / Logging
 * FIX: agregados exports logSecurityEvent y logInventoryEvent que usaban
 *      auth.middleware.ts e InventoryController.ts pero no existían aquí.
 */
import winston from 'winston';
export declare const logger: winston.Logger;
export declare const audit: {
    login: (userId: string, ip: string, success: boolean) => winston.Logger;
    securityHmacFail: (ip: string, route: string) => winston.Logger;
    rateLimitHit: (ip: string, route: string) => winston.Logger;
};
export declare function logSecurityEvent(event: string, meta: Record<string, unknown>): void;
export declare function logInventoryEvent(event: string, meta: Record<string, unknown>): void;
//# sourceMappingURL=logger.d.ts.map