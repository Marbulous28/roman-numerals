//UI LOGIC

$(document).ready(function(){
  $("form#inception").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#number").val());
    var validation = validate(number)
    if (validation === true) {
      number = String(number);
      var result = romanNumeralConversion(number);
      $("#romanNumeralResult").text(result);
    } else {
      $("#romanNumeralResult").text("do you even though?");
    }


  });
});

//BUSINESS LOGIC

var numberPlaceFunction = function(numberPlace, numberArray, repository){
  for (var i = 0; i <= numberPlace; i += 1){
    if (i === numberPlace) {
      repository.push(numberArray[(i-1)]);
    }
  }
}

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

  numberPlaceFunction(thousandsPlace, thousandsArray, numeralArray);
  numberPlaceFunction(hundredsPlace, hundredsArray, numeralArray);
  numberPlaceFunction(tensPlace, tensArray, numeralArray);
  numberPlaceFunction(onesPlace, onesArray, numeralArray);

  var joinedNumerals = numeralArray.join("");
  return joinedNumerals;
}

var validate = function(numToBeValidated){
  if (numToBeValidated / numToBeValidated === 1 && numToBeValidated !== null && numToBeValidated < 4000) {
    return true;
  } else {
    return false;
  }
}
