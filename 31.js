function bmi(weight, height) {

    const bmi = weight / Math.pow(height, 2);

    let str = 'Obese';

    if (bmi <= 30.0) {
        str = 'Overweight';
    }
    if (bmi <= 25.0) {
        str = 'Normal';
    }

    if (bmi <= 18.5) {
        str = 'Underweight';
    }
    return str;
}