function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  var next = '';
  if (line.length > 0){
    next = line[0];
    line.unshift();
    return `Currently serving ${next}`;
  } else {
    return "There is nobody waiting to be served!";
  }

}
