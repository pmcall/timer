let inputTimes = process.argv.splice(2);
let sanitisedArray = [];

const alarmSound = function(time) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 100);
};

if (inputTimes.length === 0) {
  return;
}

for (let item of inputTimes) {
  item = Number(item);
  if (isNaN(item) === false && item > 0) {
    sanitisedArray.push(item);
  }
}

for (let alarmTime of sanitisedArray) {
  alarmSound(alarmTime);
}