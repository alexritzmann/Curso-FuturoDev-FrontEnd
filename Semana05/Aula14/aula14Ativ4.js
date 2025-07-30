document.addEventListener('DOMContentLoaded', () =>
{
    const display = document.querySelector('.input');
    const buttonsGrid = document.querySelector('.buttons-grid');
    
    let currentInput = '0';
    let previousInput = '';
    let operation = null;
    let shouldResetDisplay = false;

    function updateDisplay() {
        display.value = currentInput;
    }

    function inputDigit(digit) {
        if (currentInput === '0' || shouldResetDisplay) {
            currentInput = digit;
            shouldResetDisplay = false;
        } else {
            currentInput += digit;
        }
    }

    function inputDecimal() {
        if (shouldResetDisplay) {
            currentInput = '0,';
            shouldResetDisplay = false;
            return;
        }
        
        if (!currentInput.includes(',')) {
            currentInput += ',';
        }
    }

    function handleOperation(op) {
        const inputValue = parseFloat(currentInput.replace(',', '.'));
        
        if (operation && !shouldResetDisplay) {
            performCalculation();
        }

        operation = op;
        previousInput = currentInput;
        shouldResetDisplay = true;
    }

    function performCalculation() {
        const prev = parseFloat(previousInput.replace(',', '.'));
        const current = parseFloat(currentInput.replace(',', '.'));
        
        if (isNaN(prev) || isNaN(current)) return;

        let result;
        switch (operation) {
            case '+': result = prev + current; break;
            case '-': result = prev - current; break;
            case '*': result = prev * current; break;
            case '/': result = prev / current; break;
            default: return;
        }

        currentInput = result.toString().replace('.', ',');
        operation = null;
        previousInput = '';
    }

    function resetCalculator() {
        currentInput = '0';
        previousInput = '';
        operation = null;
        shouldResetDisplay = false;
    }

    buttonsGrid.addEventListener('click', (e) => {
        if (!e.target.matches('button')) return;

        const button = e.target;
        
        if (button.classList.contains('number')) {
            if (button.textContent === ',') {
                inputDecimal();
            } else {
                inputDigit(button.textContent);
            }
            updateDisplay();
        }
        else if (button.classList.contains('operator')) {
            handleOperation(button.textContent);
            updateDisplay();
        }
        else if (button.classList.contains('result')) {
            performCalculation();
            updateDisplay();
        }
        else if (button.classList.contains('reset')) {
            resetCalculator();
            updateDisplay();
        }
    });

    updateDisplay();
});
