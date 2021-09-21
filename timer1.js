//process.stdout.write('\x07');



let buzz = function () {
  let timerValue = process.argv.slice(2);
  let z = timerValue.map(t => t*1000)
    for (let i = 0; i < z.length; i++){
      if(z[i] !== NaN && z[i] > 0){
        setTimeout (() => {
          process.stdout.write('\x07')
        }, z[i]);
      }
    }
  }

return buzz(); // run the code as node timer1.js 5 8 10

// let time = process.argv.slice(2);
// let setTimer = time.map(t =>  t * 1000);

// for (const sec of setTimer) {
//   if (typeof(sec) === "number" && sec > 0) {
//     setTimeout(() => {
//       process.stdout.write('\x07');
//     }, sec);
//   } else {
//     continue;
//   }
// }