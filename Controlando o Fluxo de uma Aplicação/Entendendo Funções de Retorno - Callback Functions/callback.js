function soma(x, callback) {
  return setTimeout(() => {
    return callback(null, x + 5000);
  }, 3000);
}

//Callback Function
function resolveSoma(error, result) {
  if (error) throw error;
  console.log(result);
  return result;
}

soma(200, resolveSoma);
