const StackCalculator = require('../../8-1-proxy/8-1-1-proxy-composition/1-stack-calculator')

class EnhancedCalculator {
  constructor(calculator) {
    this.calculator = calculator
  }

  // 새로운 함수
  add() {
    const addend2 = this.getValue()
    const addend1 = this.getValue()

    const result = addend1 + addend2
    this.putValue(result)
    return result
  }

  // 수정된 함수
  divide() {
    // 추가적인 검증 로직
    const divisor = this.calculator.peekValue()
    if (divisor === 0) {
      throw Error('Division by 0')
    }
    // Subject에 대한 유효한 위임지(delegates)일 경우
    return this.calculator.divide()
  }

  // 위임된 함수들
  putValue(value) {
    return this.calculator.putValue(value)
  }

  getValue() {
    return this.calculator.getValue()
  }

  peekValue() {
    return this.calculator.peekValue()
  }

  clear() {
    return this.calculator.clear()
  }

  multiply() {
    return this.calculator.multiply()
  }
}

const calculator = new StackCalculator()
const enhancedCalculator = new EnhancedCalculator(calculator)

enhancedCalculator.putValue(4)
enhancedCalculator.putValue(3)
console.log(enhancedCalculator.add())
enhancedCalculator.putValue(2)
console.log(enhancedCalculator.multiply())
