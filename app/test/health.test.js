const request = require('supertest');

describe('Health endpoint', () => {
  it('returns ok', async () => {
    const res = await request('http://localhost:3000').get('/health');
    expect(res.statusCode).toBe(200);
  });
});
