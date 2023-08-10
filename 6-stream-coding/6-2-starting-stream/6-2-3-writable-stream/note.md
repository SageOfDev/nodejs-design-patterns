### 6-2-3 Writable 스트림
- Writable 스트림: 대상 데이터의 목적지를 나타냄
  - ex) 파일시스템의 파일, 데이터베이스 테이블, 소켓, stderr, stdout ...

#### 스트림에 쓰기
- `write()` 함수를 사용하여 Writable 스트림으로 데이터를 밀어 넣는다.
    ```javascript
    wirtiable.write(chunk, [encoding], [callback])
    ```
  - `[encoding]`
    - chunk가 문자열인 경우: 지정할 수 있음. default=utf8.
    - chunk가 버퍼인 경우: 무시됨
  - `[callback]`
    - chunk가 기본 리소스로 flush될 때 호출되는 옵션.

- `end()`함수를 사용하여 더이상 기록할 데이터가 없다는 신호를 보냄.
    ```javascript
    writable.end([chunk], [encoding], [callback])
    ```
#### 배압(Backpressure)
- `Backpressure`

  버퍼의 크기 제한을 넘어서는 경우, 'drain' 이벤트가 발생할 때까지 쓰기를 중단하는 메커니즘.
  - `drain` 이벤트: 버퍼가 비워지면 다시 쓰기를 시작해도 안전함을 알리는 이벤트  
- `highWaterMark`

  `writable.write()` 함수가 false를 반환하기 시작하는 내부 버퍼 크기의 제한
    
- 배압이 필요한 이유

  스트림에서 데이터를 소비하는 것보다 더 빨리 유입되어 병목현상을 겪을 수 있음.

  이 경우 버퍼링이 해결책.(내 생각: 버퍼링이란 것이 스트리밍보다 읽기 연산 1회당 매칭되는 쓰기 연산 횟수를 늘리는 것이므로.)

  그러나 버퍼링은 메모리 과다사용 위험 존재.

  그래서 `writable.write()`는 내부 버퍼가 `highWaterMark` 제한을 초과하면 `false` 반환
  
- 배압은 권고 메커니즘이다. 자동으로 쓰기가 차단되진 않는다.

#### Writable 스트림 구현
1. Writable 클래스를 상속한다.
2. `_write()`함수를 구현한다.
