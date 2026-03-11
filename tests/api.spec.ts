import { test, expect, request } from '@playwright/test';

const BASE_URL = 'http://127.0.0.1:5000';

test.describe('Flask API tests', () => {

  test('GET / should return Hello world', async () => {
    const api = await request.newContext({ baseURL: BASE_URL });

    const response = await api.get('/');
    expect(response.status()).toBe(200);

    const text = await response.text();
    expect(text).toContain('Hello');
  });

  test('GET /games returns list of games', async () => {
    const api = await request.newContext({ baseURL: BASE_URL });

    const response = await api.get('/games');
    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.status).toBe('success');
    expect(Array.isArray(body.games)).toBeTruthy();
    expect(body.games.length).toBeGreaterThan(0);
  });

  test('POST /games adds a new game', async () => {
    const api = await request.newContext({ baseURL: BASE_URL });

    const newGame = {
      title: 'Playwright Test Game',
      genre: 'automation',
      played: false
    };

    const response = await api.post('/games', {
      data: newGame
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.status).toBe('success');
    expect(body.message).toBe('Game Added!');
  });

});
