// get all times in an array
// loop through array
// apply a function that calculates the running total
  // * you could also just add them all up as is and apply a function afterwards

const timeNodes = Array.from(document.querySelectorAll('.videos [data-time]'));
// let test = timeNodes.map(node => node.dataset.time);
// console.log(test);

const seconds = getSeconds(timeNodes);

getTotalTime(seconds);

function getSeconds(nodes) {
  return nodes
    .map(node => node.dataset.time)
    .map(time => {
      const [mins, secs] = time.split(':').map(parseFloat);
      return (mins * 60) + secs;
    })
    .reduce((acc, curr) => acc + curr);
}

function getTotalTime(seconds) {
  let secondsLeft = seconds;
  let hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  let minutes = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  console.log(`${hours}:${minutes}:${secondsLeft}`);
}
