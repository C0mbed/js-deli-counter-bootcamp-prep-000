function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  var next = '';
  if (line.length > 0){
    next = line[0];
    line.shift();
    return `Currently serving ${next}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if (line.length > 0) {
    let count = 1;
    for (var i = 0; i <= line.length; i++) {
      let count = 1;
      let result = `${count}. ${i}`;
      line.push(result);
      count++''
    }
    let update = line.join(", ");
    return update;
  } else {
    return "The line is currently empty.";
  }
}
