// O NodeJS é Single Thread, mas em ocasiões de necessidade de processamento maior,
// o código a ser processado é enviado ao Thread Pool e assim é processado por MultiThreads, até 4 threads por padrão.
// O EventLoop aciona a LIBUV para alocar mais recursos do processador.

const crypto = require("crypto");
const start = Date.now();

function logHashTime() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log(`Hash: ${Date.now() - start}`);
  });
}

logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
