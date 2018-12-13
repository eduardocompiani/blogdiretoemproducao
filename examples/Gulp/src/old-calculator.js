function sumValues() {
    var value1 = document.getElementById('value1');
    var value2 = document.getElementById('value2');
    var result = document.getElementById('result');

    var newCalculator = new Calculator();
    result.value = newCalculator.sumValues(
        value1.value,
        value2.value
    );
}