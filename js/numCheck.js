function createNumber(jsonData) {

  var arr = new Array();

  const fmt = (v, min, max) => {
    const diff = max - min;
    return diff / 200 * v + min;
  }

  //  frequency Color
  const frequency = jsonData["color"];
  let frequencySound = 0;
  if (frequency < 20) {
    frequencySound = frequency % 3;
    arr.push(0);
  } else if (frequency < 30) {
    frequencySound = frequency % 3;
    arr.push(1);
  } else if (frequency < 40) {
    frequencySound = frequency % 3;
    arr.push(2);
  } else if (frequency < 50) {
    frequencySound = frequency % 3;
    arr.push(3);
  } else if (frequency < 60) {
    frequencySound = frequency % 3;
    arr.push(4);
  } else { // purple
    arr.push(5);
  }

  //star
  arr.push(Math.floor(fmt(jsonData["star-value"], 100, 500)));
  arr.push(fmt(jsonData["star-size"], 3, 8));
  arr.push(fmt(jsonData["star-opacity"], 0.1, 1));

  // shooting
  arr.push(Math.floor(fmt(jsonData["shooting-speed"], 5, 15)));
  arr.push(Math.floor(fmt(jsonData["shooting-rotate"], 10, 120)));

  //milkyway
  arr.push(Math.floor(fmt(jsonData["milkyway-value"], 100, 400)));
  arr.push(fmt(jsonData["milkyway-size"], 3, 8));
  arr.push(fmt(jsonData["milkyway-opacity"], 0.3, 1));
  arr.push(Math.floor(fmt(jsonData["milkyway-left"], 0, 60)));
  arr.push(Math.floor(fmt(jsonData["milkyway-rotate"], 0, 180)));

  arr.push(Math.floor(fmt(jsonData["visualizer-size"], 90, 120)));
  arr.push(Math.floor(fmt(jsonData["visualizer-line_width"], 1, 2)));

  // 0-3
  arr.push( Math.floor(frequencySound) );

  return arr;
}