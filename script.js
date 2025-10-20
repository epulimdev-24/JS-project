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

const checkMail = () => {
  if (mail.value == '') {
    alert('Fill in the empty space')
  } else if ((mail.value.endsWith('@oauife.edu.ng'))) mailStatus.textContent = 'Valid Username';
  else mailStatus.textContent = 'Invalid Username. Use only emails assigned by the school and ends with @oauife.edu.ng'
}

const checkGrade = () => {
  if (grade.value == '') {
    alert('Fill in the empty space')
  } else if (grade.value <= 39) {
    gradeStatus.textContent = 'Grade F(Fail)';
  } else if (grade.value > 39 && grade.value <= 49) {
    gradeStatus.textContent = 'Grade D(pass)';
  } else if (grade.value > 49 && grade.value <= 59) {
    gradeStatus.textContent = 'Grade C(good)';
  } else if (grade.value > 59 && grade.value <= 69) {
    gradeStatus.textContent = 'Grade B(very good)';
  } else if (grade.value > 69 && grade.value <= 100) {
    gradeStatus.textContent = 'Grade A(Excellent)';
  } else {
    gradeStatus.textContent = "Wrong Input"
  }

}

const checkPrice = () => {
  if (price.value == '') {
    alert('Fill in the empty space')
  } else if (price.value < 5000) {
    finalPrice.textContent = "No Discount"
  } else if (price.value >= 5000 && price
    .value <= 10000
  ) {
    let discountedPrice = price.value - (price.value * 0.05)
    finalPrice.textContent = discountedPrice

  } else if (price.value > 10000 && price
    .value <= 20000
  ) {
    let discountedPrice = price.value - (price.value * 0.1)
    finalPrice.textContent = discountedPrice

  } else if (price
    .value > 20000
  ) {
    let discountedPrice = price.value - (price.value * 0.15)
    finalPrice.textContent = discountedPrice

  }
}

const checkEligibility = () => {
  const marks = jambScore.value;
  const course = courseSelect.value;
  console.log(course);

  if (marks == '' && course == '') {
    alert('Fill in the empty spaces')
  } else if (courseSelect.value = "Medicine") cutoff = 200;
  else if (courseSelect.value = "Engineering") cutoff = 250;
  else if (courseSelect.value = "Sciences") cutoff = 220;
  else if (courseSelect.value = "Arts") cutoff = 280;

  if (marks >= cutoff) {
    eligibilityResult.textContent = `Your score is ${marks}.You are eligible for ${course}`
  } else {
    eligibilityResult.textContent = `Your score is ${marks}.You are not eligible for ${course}`
  }
}



