const array = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let timeout = 100;

array.forEach(element => {
  setTimeout(() => {
    process.stdout.write(`\r${element}   `);
  }, timeout);
  timeout += 200;
});