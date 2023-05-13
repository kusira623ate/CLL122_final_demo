function calculate()
{
  var k, X, v, V , τ;
//   n = parseFloat(document.getElementById("fourth").value);
//   if (document.getElementById("fifthhelp").value=="s^-1") {
//     k = parseFloat(document.getElementById("fifth").value);
// }
// else if (document.getElementById("fifthhelp").value=="min^-1") {
//     k = parseFloat(document.getElementById("fifth").value)/60;
// }
// else {
//     k = parseFloat(document.getElementById("fifth").value)/3600;
// }  
                                                                
//   X = parseFloat(document.getElementById("sixth").value)/100;

//   if (document.getElementById("seventhhelp").value== "m^3/s") {
//       v = parseFloat(document.getElementById("seventh").value);
//   }
//   else if (document.getElementById("seventhhelp").value=="m^3/h") {
//     v = (parseFloat(document.getElementById("seventh").value))/parseFloat(3600);
//   }
//   else if (document.getElementById("seventhhelp").value=="L/h") {
//     v = ((parseFloat(document.getElementById("seventh").value))*5)/18;
//   }
//   if (document.getElementById("first").value=="CSTR") {
//     V=(v*X)/(k*(1-X));
//   }
//   else {
//     V=-((v*Math.log1p(-X))/k);
//   }

//   if (document.getElementById("answerhelp").value=="L") {
//       document.getElementById("answer").value = (V.toFixed(2))*1000;
//   }
//   else {
//     document.getElementById("answer").value = V.toFixed(2);
//   }


  k = parseFloat(document.getElementById("fifth").value);
  X = (parseFloat(document.getElementById("sixth").value))/100;
  v = parseFloat(document.getElementById("seventh").value);
  if (document.getElementById("first").value=="CSTR") {
    V=(v*X)/(k*(1-X));
  }
  else {
    V=-((v*Math.log1p(-X))/k);
  }
  τ=V/v;
  document.getElementById("answer").value = V;
  document.getElementById("result").value = τ;
}