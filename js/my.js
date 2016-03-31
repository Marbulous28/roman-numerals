$(document).ready(function(){
  $("form#inception").submit(function(event){
    event.preventDefault();
    var number = $("#number").val();
    romanNumeralConversion(number);
  });
});

var romanNumeralConversion = function(enteredNumber){
  //SPLIT NUMBER INTO AN ARRAY OF DIGITS
  var splitNumber = [];
  var splitNumber  = enteredNumber.split("");
  var numeralArray = [];

  //ARRAYS OF ROMAN NUMERAL DIGITS
  var thousandsArray = ["M", "MM", "MMM"];
  var hundredsArray = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var tensArray =["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var onesArray = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  //REVERSE THE ARRAY SO THAT THE FIRST ITEM IS THE ONES PLACE, SECOND IS TENS ETC.
  reversedSplitNumber = splitNumber.reverse();
  var parsedReversedSplitNumber = [];
  //PARSE EACH DIGIT INTO A NUMBER
  for (var i = 0; i < reversedSplitNumber.length; i += 1){
    parsedReversedSplitNumber.push(parseInt(reversedSplitNumber[i]));
  }
  //STORE EACH PARSED DIGIT INTO A VARIABLE
  var onesPlace = parsedReversedSplitNumber[0];
  var tensPlace = parsedReversedSplitNumber[1];
  var hundredsPlace = parsedReversedSplitNumber[2];
  var thousandsPlace = parsedReversedSplitNumber[3];

  for (var i = 0; i <= thousandsPlace; i += 1){
    if (i === thousandsPlace) {
      numeralArray.push(thousandsArray[(i-1)]);
      alert(numeralArray);
    }
  }

  for (var i = 0; i <= hundredsPlace; i += 1){
    if (i === hundredsPlace) {
      numeralArray.push(hundredsArray[(i-1)]);
      alert(numeralArray);
    }
  }

  for (var i = 0; i <= tensPlace; i += 1){
    if (i === tensPlace) {
      numeralArray.push(tensArray[(i-1)]);
      alert(numeralArray);
    }
  }

  for (var i = 0; i <= onesPlace; i += 1){
    if (i === onesPlace) {
      numeralArray.push(onesArray[(i-1)]);
      alert(numeralArray);
    }
  }

  var joinedNumerals = numeralArray.join("");
  alert(joinedNumerals);
}
/*
    if(hundredsPlace === 9){
      numeralArray.push(hundredsArray[8]);
      alert(numeralArray)
    } else if (hundredsPlace === 8){
      nummberArray.push("")
    }
}
*/
