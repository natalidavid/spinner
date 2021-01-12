const spinner = ['|  ', '/  ', '—  ', '\\  ', '|  ', '/  ', '—  ', '\\  ', '|  '];

let i = 0; // start at 0;
for (let char of spinner) {
  setTimeout(() => {
    process.stdout.write("\r" + char);
  }, i);
  i += 300;
}