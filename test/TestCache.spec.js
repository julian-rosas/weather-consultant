/**
 * Pruebas unitarias para 
 * comprobar la funcionalidad 
 * del caché.
 * 
 * @module TestCache
 */

const Cache = require('../model/src/js/Cache');

describe('caché', () => {
    /**
     * Comprueba que el caché no sea 
     * vacío y que almacene la información de manera
     * correcta.
     */
    test('El caché debería retornar 19.78 y null', () => {
        const cache = new Cache();
        
        let cacheTest = {"MEX" : "19.78"};

        cache.addWeather("MEX","19.78");

        let validWeather = cache.getWeather("MEX");

        let invalidWeather = cache.getWeather("XOCH");

        expect(validWeather == cacheTest["MEX"]).toBe(true);
        expect(invalidWeather == null).toBe(true);
    });
});
