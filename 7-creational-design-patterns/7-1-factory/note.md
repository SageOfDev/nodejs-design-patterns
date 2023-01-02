## 7-1 팩토리

- 팩토리 패턴의 장점
  - 특정 구현으로부터 객체의 생성을 분리할 수 있음
    - 객체 생성시 더 많은 유연성과 제어를 제공할 수 있음
    - `new Class()` 문법은 그저 특정 객체를 생성할 뿐
    - 예시
      - ```javascript
        function createImage(name) {
          if (name.match(/\.jpe?g$/)) {
            return new ImageJpeg(name)
          } else if (name.match(/\.gif$/)) {
            return new ImageGif(name)
          } ...
        }
        ```
  - 클래스를 노출시키지 않을 수 있음
    - 사용자가 멋대로 클래스를 확장하거나 수정하는 것을 막아줌
    - 사용자가 이해하기도 쉬움
  - JS에선 클로저를 활용하여 캡슐화를 강제하는데 사용될 수 있음
