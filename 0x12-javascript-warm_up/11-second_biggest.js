const args = process.argv.slice(2);
const list = [];
let i = 0;
let j = 0;
let max = 0;
let second = 0;
if (args.length === 0 || args.length === 1) {
  console.log(0);
} else {
  for (i = 0; i < args.length; i++) {
    list[i] = parseInt(args[i]);
  }
  for (j = 0; j < list.length; j++) {
    if (list[j] > max) {
      max = list[j];
    }
  }
  for (j = 0; j < list.length; j++) {
    if (list[j] > second && list[j] < max) {
      second = list[j];
    }
  }
  console.log(second);
}
