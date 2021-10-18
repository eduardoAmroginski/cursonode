// Métodos de importação de módulos

/*
    Método 1:
    Fazendo a exportação desta maneira, trazemos o arquivo todo para dentro deste arquivo, assim sendo, conseguimos executar a função oculta mesmo ela não sendo exportada no arquivo module-01.js
*/
// require("./module-01.js");
// executa();

/*
    Método 2:
    Fazendo a exportação desta maneira, trazemos apenas as funções e variaveis que foram exportadas
*/
// const module01 = require("./module-01.js");
// module01.executa();

/*
    Método 3:
    Fazendo a exportação desta maneira, trazemos apenas a função ou variavel que desejamos usar. Isso se chama, atribuição por desestruturação.
*/
const { executa } = require("./module-01.js");
executa();
