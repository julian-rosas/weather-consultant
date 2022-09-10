class Read {
    constructor() { }

    
    readFile(file) {
       
        const fs = require('fs');
        
        const contents = fs.readFileSync(file, 'utf-8');
        
        let renglones = contents.split(/\r?\n/);

        let data = [];

        for(let i = 1; i < renglones.length; i++){
            let linea = renglones[i].split(',');
            
            let campos = [];

            for(let j = 0; j < linea.length; j++){
                campos.push(linea[j]);
            }

            data.push(campos);
        }
        return data;
    }    

}

module.exports = Read;
