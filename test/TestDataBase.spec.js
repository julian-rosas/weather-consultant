/**
 * Pruebas unitarias para 
 * comprobar la funcionalidad 
 * de la base de datos.
 * 
 * @module TestDataBase
 */

const DataBase = require('../model/src/js/DataBase');

describe('base de datos', () => {
    /**
     * Comprueba que la base de datos no sea 
     * vacía y que almacene la información de manera
     * correcta.
     */
    test('La base de datos debería retornar un ticket distinto de null y uno igual a null', () => {
        const db = new DataBase();

        let validTicket = db.query("MEX_SCL");

        let invalidTicket = db.query("MEX_CUB");

        expect(validTicket != null).toBe(true);

        expect(invalidTicket == null).toBe(true);
    });
});
