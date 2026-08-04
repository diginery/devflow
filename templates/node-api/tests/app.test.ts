import { describe, it, expect } from 'vitest';
import app from '../src/app.ts';
import request from 'supertest';

describe('GET /', () => {
  it('should return a 200 status code and the correct response', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('DevEx service running');
  });
});

describe('GET /health', () => {
  it('should return a 200 status code and the correct JSON response', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
