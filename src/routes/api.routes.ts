import { Router } from 'express';
import { register } from '../app/controllers/auth.controller';

const router = Router();

router.post('/auth/register', register);

export const appRouter: Router = router;