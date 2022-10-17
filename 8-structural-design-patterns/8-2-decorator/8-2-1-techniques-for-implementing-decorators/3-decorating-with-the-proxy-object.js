const StackCalculator = require("../../8-1-proxy/8-1-1-techniques-for-implementing-proxies/1-stack-calculator");
const enhancedCalculatorHandler = {
  get(target, property) {
    if (property === 'add') {
      // 새로운 함수
      return function add() {
        const addend2 = target.getValue()
        const addend1 = target.getValue()

        const result = addend1 + addend2
        this.putValue(result)
        return result
      }
    } else if (property ==='divide') {
      // 수정된 함수
      return function () {
        // 추가적인 검증 로직
        const divisor = target.peekValue()
        if (divisor === 0) {
          throw Error('Division by 0')
        }
        // Subject에 대한 유효한 위임지(delegates)일 경우
        return target.divide()
      }
    }

    // 위임된 함수들과 속성들
    return target[property]
  }
}

const calculator = new StackCalculator()
const enhancedCalculator = new Proxy(
  calculator,
  enhancedCalculatorHandler)

enhancedCalculator.putValue(4)
enhancedCalculator.putValue(3)
console.log(enhancedCalculator.add())
enhancedCalculator.putValue(2)
console.log(enhancedCalculator.multiply())
