const stdin = process.stdin;
// don’t worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");
// stdin.on("data’, (key) => {
//   if (key === "\u0003’) {
//     process.exit();
//   }
//   process.stdout.write(".’);
// });
stdin.on("data", (key) => {
// ctr + c to exit
if (key === "\u0003") {
  console.log("Thanks for using me, ciao!");
  process.exit();
};
// b to beep
if (key === "\u0062") {
  process.stdout.write("\x07");
};
if (key === "\u0031","\u0032","\u0033", "\u0034", "\u0035", "\u0036", "\u0037", "\u0038", "\u0039") {
  key *= 1000;
 setTimeout(() => {
   process.stdout.write("\x07");
 }, key);
}
});