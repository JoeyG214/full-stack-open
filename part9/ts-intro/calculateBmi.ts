const calculateBmi = (height: number, weight: number): string => {
  const BMI:number = weight / (height / 100) ** 2;
  if (BMI < 16) {
    return 'Underweight (Server thinness)';
  }
  else if (BMI < 17 && BMI >= 16) {
    return 'Underweight (Moderate thinness)';
  }
  else if (BMI < 18.5 && BMI >= 17) {
    return 'Underweight (Mild thinness)';
  }
  else if (BMI < 25 && BMI >= 18.5) {
    return 'Normal Range';
  }
  else if (BMI < 30 && BMI >= 25) {
    return 'Overweight (Pre-obese)';
  }
  else if (BMI < 35 && BMI >= 30) {
    return 'Obese (Class I)';
  }
  else if (BMI < 40 && BMI >= 35) {
    return 'Obese (Class II)';
  }
  else if (BMI >= 40) {
    return 'Obese (Class III)';
  }
}

console.log(calculateBmi(180,74));