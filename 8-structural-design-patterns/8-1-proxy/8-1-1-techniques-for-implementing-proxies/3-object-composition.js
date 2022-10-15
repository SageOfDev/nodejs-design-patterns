const StackCalculator = require('./1-stack-calculator')

class SafeCalculator {
  constructor(calculator) {
    this.calculator = calculator
  }

  // 프록시 함수
  divide() {
    // 추가적인 검증 로직
    const divisor = this.calculator.peekValue()
    if (divisor === 0) {
      throw Error('Division by 0')
    }
    // Subject에 대한 유효한 위임자(delegate)일 경우
    return this.calculator.divide()
  }

  // 위임된 함수들
  putValue(value) {
    return this.calculator.putValue(value)
  }

  getValue(value) {
    return this.calculator.getValue(value)
  }

  peekValue(value) {
    return this.calculator.peekValue(value)
  }

  clear(value) {
    return this.calculator.clear(value)
  }

  multiply(value) {
    return this.calculator.multiply(value)
  }
}

const calculator = new StackCalculator()
const safeCalculator = new SafeCalculator(calculator)

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


/**
 * 객체 리터럴과 팩토리 함수를 사용한 프록시 패턴
 *
 * @param calculator
 * @returns {{getValue(*): *, clear(*): *, divide(): *, putValue(*): *, peekValue(*): *, multiply(*): *}|void|*|number}
 */
function createSafeCalculator(calculator) {
  return {
    // 프록시 함수
    divide() {
      // 추가적인 검증 로직
      const divisor = calculator.peekValue()
      if (divisor === 0) {
        throw Error('Division by 0')
      }
      // Subject에 대한 유효한 위임자(delegate)일 경우
      return calculator.divide()
    },
    // 위임된 함수들
    putValue(value) {
      return calculator.putValue(value)
    },

    getValue(value) {
      return calculator.getValue(value)
    },

    peekValue(value) {
      return calculator.peekValue(value)
    },

    clear(value) {
      return calculator.clear(value)
    },

    multiply(value) {
      return calculator.multiply(value)
    }
  }
}


const newCalculator = new StackCalculator()
const newSafeCalculator = createSafeCalculator(newCalculator)

newCalculator.putValue(3)
newCalculator.putValue(2)
console.log(newCalculator.multiply())

newSafeCalculator.putValue(2)
console.log(newSafeCalculator.multiply())

newCalculator.putValue(0)
console.log(newCalculator.divide())

newSafeCalculator.clear()
newSafeCalculator.putValue(4)
newSafeCalculator.putValue(0)
console.log(newSafeCalculator.divide())
