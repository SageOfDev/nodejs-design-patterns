const StackCalculator = require('./1-stack-calculator')

function patchToSafeCalculator(calculator) {
  const divideOrig = calculator.divide
  calculator.divide = () => {
    // 추가적인 검증 로직
    const divisor = calculator.peekValue()
    if (divisor === 0) {
      throw Error('Division by 0')
    }
    // Subject에 대한 유효한 위임자(delegate)일 경우
    return divideOrig.apply(calculator)
  }
}

const calculator = new StackCalculator()
const safeCalculator = patchToSafeCalculator(calculator)

calculator.putValue(3)
calculator.putValue(2)
console.log(calculator.multiply())

safeCalculator.putValue(2)
console.log(safeCalculator.multiply())

calculator.putValue(0)
console.log(calculator.divide())

safeCalculator.clear()
safeCalculator.putValue(4)
safeCalculator.putValue(0)
console.log(safeCalculator.divide())
