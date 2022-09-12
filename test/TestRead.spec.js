/**
 * Pruebas unitarias para
 * comprobar la funcionalidad de
 * la clase de lectura.
 * @module TestRead
 */


const Read = require('../model/src/js/Read');

describe('read', () => {
    /**
     * Comprueba que la clase read
     * realize la lectura del archivo datatset1.csv correctamente.
     */
    test('El primer renglón debería ser [TLC,MTY,19.3371,-99.566,25.7785,-100.107]', () => {
        const read = new Read();

        let arrayAns = ['TLC', 'MTY', '19.3371', '-99.566', '25.7785', '-100.107'];
        let arrayRead = read.readFile('./model/src/files/dataset1.csv');

        let flag = false;

        if(arrayRead[0].length == arrayAns.length){
            for(let i = 0; i < arrayAns.length; i++){
                if(arrayRead[0][i] != arrayAns[i]){
                    flag = false;
                    break;
                }
                
                flag = true;
            
            }
        }
        
        
        expect(flag).toBe(true);
    });
});

