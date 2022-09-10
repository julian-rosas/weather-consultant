const fetch = require('node-fetch');
/**
 * Pruebas unitarias para 
 * cpmprobar el funcionamineto de 
 * la api.
 * @module TestAPI
 */

describe('api', () => {
    /**
     * Comprueba que se puede 
     * acceder correctamente
     * a la api.
     */
    test('Debería responder con estátus 200', async () => {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=London,&appid=5a1b08c966f8f65b94268d9a7e5f714d&units=metric`;
        const reponse = await fetch(URI);
        expect(reponse.status).toBe(200);
    });
});