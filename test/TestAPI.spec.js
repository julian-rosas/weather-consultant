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


const Read = require('../model/src/js/Read');

describe('api', () => {
    /**
     * Comprueba que la API
     * responda con un estatus 200.
     */
    test('Debería responder con estatus 200', async () => {

        const read = new Read();

        const key = read.readKey('./model/src/files/key.txt');
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=London,&appid=${key}&units=metric`;
        const reponse = await fetch(URI);
        expect(reponse.status).toBe(200);
    });
});