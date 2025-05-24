// Показати дані з базової форми
function showFormData() {
    const form = document.querySelector('form');
    const formData = new FormData(form);
    let result = '<h4>Дані з форми:</h4>';

    for (let [key, value] of formData.entries()) {
        result += `<strong>${key}:</strong> ${value}<br>`;
    }

    document.getElementById('formResult').innerHTML = result;
}

// Калькулятор
function calculate() {
    const num1 = parseFloat(document.getElementById('calc1').value);
    const num2 = parseFloat(document.getElementById('calc2').value);
    const operation = document.getElementById('operation').value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('calcResult').innerHTML = '<span class="error">Помилка: Введіть коректні числа</span>';
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('calcResult').innerHTML = '<span class="error">Помилка: Ділення на нуль!</span>';
                return;
            }
            result = num1 / num2;
            break;
        case '^':
            result = Math.pow(num1, num2);
            break;
    }

    document.getElementById('calcResult').innerHTML = `<span class="success">Результат: ${num1} ${operation} ${num2} = ${result}</span>`;
}

// Конвертер валют
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('currencyResult').innerHTML = '<span class="error">Введіть коректну суму</span>';
        return;
    }

    // Курси від гривні
    const rates = {
        'USD': 0.024,
        'EUR': 0.021,
        'PLN': 0.09
    };

    const result = amount * rates[toCurrency];

    document.getElementById('currencyResult').innerHTML =
    `<span class="success">${amount} UAH = ${result.toFixed(2)} ${toCurrency}</span>`;
}

// Показати поля для фігури
function showShapeInputs() {
    const shapeType = document.getElementById('shapeType').value;
    const inputsDiv = document.getElementById('shapeInputs');

    let html = '';
    if (shapeType === 'rectangle') {
        html = `
        <label>Довжина: <input type="number" id="length" step="any" min="0"></label><br>
        <label>Ширина: <input type="number" id="width" step="any" min="0"></label><br>
        `;
    } else if (shapeType === 'circle') {
        html = `<label>Радіус: <input type="number" id="radius" step="any" min="0"></label><br>`;
    }

    inputsDiv.innerHTML = html;
}

// Обчислення площі
function calculateArea() {
    const shapeType = document.getElementById('shapeType').value;

    if (!shapeType) {
        document.getElementById('areaResult').innerHTML = '<span class="error">Оберіть фігуру</span>';
        return;
    }

    let area;
    if (shapeType === 'rectangle') {
        const length = parseFloat(document.getElementById('length').value);
        const width = parseFloat(document.getElementById('width').value);
        if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
            document.getElementById('areaResult').innerHTML = '<span class="error">Введіть розміри</span>';
            return;
        }
        area = length * width;
    } else if (shapeType === 'circle') {
        const radius = parseFloat(document.getElementById('radius').value);
        if (isNaN(radius) || radius <= 0) {
            document.getElementById('areaResult').innerHTML = '<span class="error">Введіть радіус</span>';
            return;
        }
        area = Math.PI * radius * radius;
    }

    document.getElementById('areaResult').innerHTML =
    `<span class="success">Площа: ${area.toFixed(2)}</span>`;
}

// 5. Генератор паролів
function generatePassword() {
    const length = parseInt(document.getElementById('passwordLength').value);
    const includeNumbers = document.getElementById('includeNumbers').checked;

    if (length < 4 || length > 20) {
        document.getElementById('passwordResult').innerHTML = '<span class="error">Довжина від 4 до 20</span>';
        return;
    }

    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) {
        characters += '0123456789';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('passwordResult').innerHTML =
    `<span class="success">Пароль: <strong>${password}</strong></span>`;
}

// 6. Перевірка числа
function checkNumberProperties() {
    const number = parseInt(document.getElementById('checkNumber').value);

    if (isNaN(number)) {
        document.getElementById('numberResult').innerHTML = '<span class="error">Введіть число</span>';
        return;
    }

    let results = [`<h4>Число ${number}:</h4>`];
    results.push(`Парне: ${number % 2 === 0 ? 'так' : 'ні'}`);
    results.push(`Просте: ${isPrime(number) ? 'так' : 'ні'}`);

    document.getElementById('numberResult').innerHTML = results.join('<br>');
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 7. Таблиця множення
function generateMultiplicationTable() {
    const number = parseInt(document.getElementById('multiplyNumber').value);

    if (isNaN(number)) {
        document.getElementById('tableResult').innerHTML = '<span class="error">Введіть число</span>';
        return;
    }

    let table = `<h4>Таблиця для ${number}:</h4><table>`;
    for (let i = 1; i <= 10; i++) {
        table += `<tr><td>${number} × ${i}</td><td>=</td><td>${number * i}</td></tr>`;
    }
    table += '</table>';

    document.getElementById('tableResult').innerHTML = table;
}

// 8. Валідація реєстрації
function validateAndSubmit() {
    const firstName = document.getElementById('firstName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const age = document.getElementById('userAge').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;

    let errors = [];

    if (firstName === '') errors.push('Введіть ім\'я');
    if (email === '' || !email.includes('@')) errors.push('Введіть email');
    if (age === '' || age < 16) errors.push('Вік від 16 років');
    if (!agreeTerms) errors.push('Погодьтеся з умовами');

    if (errors.length > 0) {
        document.getElementById('registrationResult').innerHTML =
        '<span class="error">' + errors.join('<br>') + '</span>';
    } else {
        document.getElementById('registrationResult').innerHTML = `
        <span class="success">
        <h4>Реєстрація успішна!</h4>
        <strong>Ім'я:</strong> ${firstName}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Вік:</strong> ${age} років
        </span>
        `;
    }
}
