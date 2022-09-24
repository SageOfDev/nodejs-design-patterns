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
