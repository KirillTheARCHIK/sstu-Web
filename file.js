function quad(a, b, c) {
  let D = b * b - 4 * a * c;
  if (D < 0) {
    return {};
  } else if (D == 0) {
    return { x: -b / (2 * a) };
  } else {
    return {
      x1: (-b - Math.sqrt(D)) / (2 * a),
      x2: (-b + Math.sqrt(D)) / (2 * a),
    };
  }
}

function maxAbsEl(arr) {
  let max = 0;
  arr.forEach((value) => {
    if (Math.abs(+value) > Math.abs(max)) {
      max = +value;
    }
  });
  return max;
}

function sumEl(arr) {
  let sum = 0;
  arr.forEach((value) => {
    sum += +value;
  });
  return sum;
}

function build(cycleType) {
  document.getElementById("tableBody").innerHTML = "";
  switch (cycleType) {
    case "for": {
      for (let i = +start.value; i <= +end.value; i += +step.value) {
        var C = ((i - 32) * 5) / 9;
        document.getElementById("tableBody").innerHTML += `
              <tr>
                  <td>${i}</td><td>${C.toFixed(0)}</td>
              </tr>
          `;
      }
      break;
    }
    case "while": {
      let i = +start.value;
      while (i <= +end.value) {
        var C = ((i - 32) * 5) / 9;
        document.getElementById("tableBody").innerHTML += `
                  <tr>
                      <td>${i}</td><td>${C.toFixed(0)}</td>
                  </tr>
              `;
        i += +step.value;
      }
      break;
    }
    case "do while": {
      let i = +start.value;
      do {
        var C = ((i - 32) * 5) / 9;
        document.getElementById("tableBody").innerHTML += `
                  <tr>
                      <td>${i}</td><td>${C.toFixed(0)}</td>
                  </tr>
              `;
        i += +step.value;
      } while (i <= +end.value);
      break;
    }

    default:
      break;
  }
}

function starSquare(count) {
  let str = "";
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      str += "*";
    }
    str += "\n";
  }
  document.getElementById("p1").textContent = str;
}

function starLadder(count) {
  let str = "";
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < i + 1; j++) {
      str += "*";
    }
    str += "\n";
  }
  document.getElementById("p2").textContent = str;
}

function starLadderReversed(count) {
  let str = "";
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count - i -1; j++) {
      str += " ";
    }
    for (let j = 0; j < i * 2 + 1; j++) {
      str += "*";
    }
    str += "\n";
  }
  document.getElementById("p3").textContent = str;
}

function starTree(count) {
  let str = "";
  for (let i = 0; i < count; i++) {
    for (let k = 0; k < i + 1; k++) {
      for (let j = 0; j < count - k - 1; j++) {
        str += " ";
      }
      for (let j = 0; j < k * 2 + 1; j++) {
        str += "*";
      }
      str += "\n";
    }
  }
  document.getElementById("p4").textContent = str;
}
