// get all times in an array
// loop through array
// apply a function that calculates the running total
  // * you could also just add them all up as is and apply a function afterwards

const videos = Array.from(document.querySelectorAll('.videos li'));

function getTotalTime(time) {
  time = Number(time);
  
}

videos.forEach(video => getTotalTime(video.dataset.time));
