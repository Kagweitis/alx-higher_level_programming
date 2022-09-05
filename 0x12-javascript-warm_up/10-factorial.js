const args = process.argv.slice(2);

function factorial (a) {
  if (isNaN(args[0]) || args[0] === 1) {
    console.log(1);
  } else {
    for (let i = a - 1; i >= 1; i--) {
      a *= i;
    }
    console.log(a);
  }
}

factorial(args[0]);
