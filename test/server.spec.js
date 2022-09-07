const app = require('../server/index');
/**
 * Esto es un ejemplo.
 */
const request = require('supertest');


describe('get', () => {
    test('Deberia responder con estatus 200', async ()=> {
        const response = await request(app).get("/").send();
        expect(response.statusCode).toBe(200);
    });
});