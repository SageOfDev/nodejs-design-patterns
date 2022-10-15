const calculator = new (require('./1-stack-calculator'))()

calculator.putValue(3)
calculator.putValue(2)
console.log(calculator.multiply())

calculator.putValue(2)
console.log(calculator.multiply())