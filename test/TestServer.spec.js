/**
 * Pruebas unitarias para 
 * el servidor.
 * @module TestServer
 */

/**
 * Servidor.
 */
const app = require('../server/index');

/**
 * Moduló request para testiar.
 */
const request = require('supertest');

describe('get', () => {
    /**
     * Comprueba que el servidor
     * responda con estátus 200,
     * y que el cliente se conecte de forma
     * correcta.
     */
    test('Debería responder con estátus 200', async ()=> {
        const response = await request(app).get("/").send();
        expect(response.statusCode).toBe(200);
    });
});