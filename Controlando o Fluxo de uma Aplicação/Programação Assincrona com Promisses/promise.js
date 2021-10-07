function soma(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x + 5000);
    }, 3000);
  });
}

soma(230).then((result) => {
  console.log(`Resolvido, Resultado: ${result}`);
});
