import express from 'express';
import type { Request, Response } from 'express';

const app = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('DevEx service running');
});

app.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
  });
});

export default app;
