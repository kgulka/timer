


//session.argv
for (let i = 2; i < process.argv.length; i++) {
  if (process.argv[i] > 0 && !isNaN(process.argv[i])) {
    setTimeout(() => {
      process.stdout.write('.');
      process.stdout.write('\x07');
    }, 1000 * process.argv[i]);
  }
}
