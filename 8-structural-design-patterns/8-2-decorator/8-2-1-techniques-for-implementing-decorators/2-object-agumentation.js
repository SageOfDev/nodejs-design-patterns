const StackCalculator = require('../../8-1-proxy/8-1-1-techniques-for-implementing-proxies/1-stack-calculator')

function patchCalculator(calculator) {
  // 새로운 함수
  calculator.add = function () {
    const addend2 = calculator.getValue()
    const addend1 = calculator.getValue()
    const result = addend1 + addend2
    calculator.putValue(result)
    return result
  }

  // 수정된 함수
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

  return calculator
}

const calculator = new StackCalculator()
const enhancedCalculator = new patchCalculator(calculator)

enhancedCalculator.putValue(4)
enhancedCalculator.putValue(3)
console.log(enhancedCalculator.add())
enhancedCalculator.putValue(2)
console.log(enhancedCalculator.multiply())
