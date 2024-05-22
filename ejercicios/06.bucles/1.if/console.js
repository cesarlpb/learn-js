function myPrint(mensaje, color){
  if (color == 'r'){
    console.log(`%c ${mensaje} `, 'background: #000; color: #ff0000');
  } else if (color == 'g') {
    console.log(`%c ${mensaje} `, 'background: #000; color: #00ff00');
  } else {
    console.log(`%c ${mensaje} `, 'background: #000; color: #aaa');
  }
}