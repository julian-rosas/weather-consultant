
/**
 * Clase que se encarga de la lectura del .csv.
 */
class Read {
    
    /**
     * Constructor vacío.
     */
    constructor() { }

    /**
     * Método que dada la ruta de un archivo .txt con la llave de la API,
     * retorna un string con dicha llave.
     * @param {string} file - path del archivo .txt con la llave de la API a leer.
     * @returns {string} - llave de la API en forma de string. 
     */
    readKey(file){
        
        // se importa el módulo FileSystem.
        const fs = require('fs');

        // se usa el método readFileSync() del módulo FileSystem 
        // el cual recibe el path del archivo a leer y el encoding a usar,
        // en este caso utf-8, se retorna un string con la llave de la API.
        const content = fs.readFileSync(file, 'utf-8');

        return content;
    }


    /**
     * Método que dado la ruta de un .csv, lo lee y lo convierte a un arreglo 
     * bidimensional.
     * @param {string} file - path del .csv a leer. 
     * @returns {Array<string>} - arreglo bidimensional con la informacion del .csv.
     */
    readFile(file) {
       
        // se importa el módulo FileSystem.
        const fs = require('fs');
        
        // se usa el método readFileSync() del módulo FileSystem 
        // el cual recibe el path del archivo a leer y el encoding a usar,
        // en este caso utf-8, se retorna un string con toda la información del .csv.
        const content = fs.readFileSync(file, 'utf-8');
        
        // se separa en un arreglo unidimensional por renglones el contenido.
        let csvRows = content.split(/\r?\n/);

        let finalData = [];

        // se itera los renglones del arreglo, convirtiendo columnas
        // por renglon y agregandolos a finalData.
        for(let row = 1; row < csvRows.length; row++){
            
            // se separa en columnas cada renglon del .csv.
            let line = csvRows[row].split(',');
            
            let csvColumns = [];
            
            // por cada columna, se agrega a un arreglo de columnas
            for(let column = 0; column < line.length; column++){
                csvColumns.push(line[column]);
            }

            // se agrega al arreglo bidimensional cada arreglo de columnas, 
            // representando un ticket.
            finalData.push(csvColumns);
        }

        return finalData;
    }    

}

module.exports = Read;
