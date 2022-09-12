/**
 * Pruebas unitarias para 
 * comprobar el funcionamineto de 
 * la api OPENWEATHER.
 * @module TestAPI
 */

/**
 * Módulo fetch para consumir 
 * una API.
 */
const fetch = require('node-fetch');

describe('api', () => {
    /**
     * Comprueba que la API
     * responda con un estatus 200.
     */
    test('Debería responder con estatus 200', async () => {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=London,&appid=5a1b08c966f8f65b94268d9a7e5f714d&units=metric`;
        const reponse = await fetch(URI);
        expect(reponse.status).toBe(200);
    });
});