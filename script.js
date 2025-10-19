const convert = () => {
  let convertedText = (userText.value).toLowerCase();
  console.log(convertedText);
  lowerCase.innerHTML = "Your address is saved as:" + convertedText;

}

const removeExtraSpaces = () => { 
  const formattedEssay = essay.value.trim().replace(/\s+/g, " ");
  formattedText.innerHTML = formattedEssay;
}

const discounted = () => {
  const quantityCalc = Number(discount.value)
  console.log(quantityCalc);
  if (quantityCalc % 2 === 0) {
    showDiscount.innerHTML = "You are eligible for a discount of 20%";
  } else {
    showDiscount.innerHTML = "You are not eligible for the discount";
  }

}

const temp = () => {
  if (Degree.value == '') {
    alert("Fill in the empty space")
  } else {
    const inputtedTemp = Number(Degree.value);
    console.log(inputtedTemp);
    if (inputtedTemp < 19) {
      weather.innerHTML = "The weather is cold";
    } else if (inputtedTemp >= 19 && inputtedTemp <= 28) {
      weather.innerHTML = "The weather is warm";
    } else if (inputtedTemp > 28) {
      weather.innerHTML = "The weather is hot";
    }


  }

}


const checkBMI = () => {
  const formula = (Number(weight.value) / (Number(height.value) ** 2)).toFixed(2);
  if (height.value == '' || weight.value == '') {
    alert('Fill in the empty space(s)')
  } else if (formula < 18.5) {
    showStatus.innerHTML = "You are underweight, you need to eat more";
  } else if (formula >= 18.5 && formula <= 24.9) {
    showStatus.innerHTML = "You are healthy, keep it up";
  } else if (formula >= 25 && formula <= 29.9) {
    showStatus.innerHTML = "You are overweight, keep it down";
  } else if (formula >= 30) {
    showStatus.innerHTML = "You are obese, visit an hospital ASAP";
  }
  BMIvalue.textContent = formula;
}

const crossCheckUsernames = () => {
  if (/[^a-zA-Z0-9_ ]/.test(username.value)) {
    usernameStatus.innerHTML = "Invalid username, only letters, numbers and underscores are allowed"
  } else {
    usernameStatus.innerHTML = "Valid username"
  }
}



const checkWeight = () => {
  if (luggage.value == '') {
    alert('Fill in th empty space')
    
  } else {
    console.log(luggage.value);
    if (luggage.value <= 20) {
      luggageSize.innerHTML = "Underweight"
    } else if (luggage.value > 20 && luggage.value <= 29) {
      luggageSize.innerHTML = "Allowed"
    } else if (luggage.value >= 30) {
      luggageSize.innerHTML = "Overweight"
    }
  }
}



