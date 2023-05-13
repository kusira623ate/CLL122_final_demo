function calculate()
{
  var k, X, v, V , τ;
//   n = parseFloat(document.getElementById("fourth").value);
  if (document.getElementById("fifthhelp").value=="s^-1") {
    k = parseFloat(document.getElementById("fifth").value);
  }
  else if (document.getElementById("fifthhelp").value=="min^-1") {
    k = (parseFloat(document.getElementById("fifth").value))/60;
  }
  else if (document.getElementById("fifthhelp").value=="h^-1") {
    k = (parseFloat(document.getElementById("fifth").value))/3600;
  }
  
  X = (parseFloat(document.getElementById("sixth").value))/100;

  if (document.getElementById("seventhhelp").value== "m^3/s") {
      v = parseFloat(document.getElementById("seventh").value);
  }
  if (document.getElementById("seventhhelp").value=="m^3/h") {
    v = parseFloat(document.getElementById("seventh").value)/3600;
  }
  if (document.getElementById("seventhhelp").value=="L/h") {
    v = ((parseFloat(document.getElementById("seventh").value))*5)/18;
  }
  if (document.getElementById("first").value=="CSTR") {
    V=(v*X)/(k*(1-X));
  }
  if (document.getElementById("first").value=="PFR") {
    V=-((v*Math.log1p(-X))/k);
  }

  if (document.getElementById("answerhelp").value=="L") {
      document.getElementById("answer").value = (V.toFixed(3))*1000;
  }
  if (document.getElementById("answerhelp").value="m^3") {
    document.getElementById("answer").value = V.toFixed(3);
  }
  τ=V/v;
  if (document.getElementById("resulthelp").value=="s") {
    document.getElementById("result").value = τ.toFixed(3);
  }
  if (document.getElementById("resulthelp").value=="min") {
    document.getElementById("result").value = (τ/60).toFixed(3);
  }
  if (document.getElementById("resulthelp").value=="h") {
    document.getElementById("result").value = (τ/3600).toFixed(3);
  }



  // k = parseFloat(document.getElementById("fifth").value);
  // X = (parseFloat(document.getElementById("sixth").value))/100;
  // v = parseFloat(document.getElementById("seventh").value);
  // if (document.getElementById("first").value=="CSTR") {
  //   V=(v*X)/(k*(1-X));
  // }
  // if (document.getElementById("first").value=="PFR") {
  //   V=-((v*Math.log1p(-X))/k);
  // }
  // document.getElementById("answer").value = V;

  // τ=V/v;
  // document.getElementById("result").value = τ;
}
