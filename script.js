// строка загрузки
document.getElementById( 'demo-progress-bar' ).value = 45;
var counter = 0;
function progressDemo() {
  counter++;
  document.getElementById( 'demo-progress-bar' ).value = counter;
  if( counter == 100 ) {
    clearInterval( timer );
  }
}
var timer = setInterval( progressDemo, 100 );