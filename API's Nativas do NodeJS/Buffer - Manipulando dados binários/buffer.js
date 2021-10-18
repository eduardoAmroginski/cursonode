const Buffer = require("buffer").Buffer;

const buf = Buffer.from("Curso completo de NodeJS");

console.log(buf); // Mosta o texto em hexadecimal/binário
console.log(buf.toString()); //Mostra o texto normal
console.log(buf.toString("utf16le")); //Mostra o texto em outro decode

const buf_string = Buffer.from("Carregando uma string", "utf-8"); // Buffer passando o decode
console.log(buf_string.toString());

console.log(Buffer.isBuffer(buf_string)); //Verifica se é um buffer

console.log(buf_string.toString("utf-8", 0, 10)); //Conseguimos selecionar quantos Bytes queremos q apareçam
