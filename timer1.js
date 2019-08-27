const args = process.argv.slice(2);
const timer1 = (time) => {
 for (let i = 0; i < args.length; i++) {
   time = Number(args[i]) * 1000;
   if(time >= 0) {
     setTimeout(() => {
       console.log("yeeee", args[i] * 1000);
       process.stdout.write("\x07");
     }, time);
   } else {
     continue;
   }
 }
};
timer1();