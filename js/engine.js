// var i = 0;
var lines = "i must remember to sign in.";
var message = '';
whileloop();
forloop();

function whileloop(){
  i = 0;
  while (i < 101) {
    message += i + '. ' + lines + '<br />';
    i++;
}
document.getElementById('whilelines').innerHTML = message;
}

function forloop(){
  for (var i = 0; i < 101; i++) {
    message += i + '. ' + lines + '<br />';
}
document.getElementById('forlines').innerHTML = message;
}
