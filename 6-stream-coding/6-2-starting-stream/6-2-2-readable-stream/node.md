### 6-2-2 Readable 스트림
- Readable 스트림은 데이터 소스를 나타낸다.
- Readable 스트림이 데이터를 수신하는 방법은 다음 두 가지이다.
    - non-flowing
    - flowing

#### non-flowing 모드(or pause 모드)
- 'readable' 이벤트를 리스터에 연결하고, 루프에서 내부 버퍼가 비워질 때까지 데이터를 계속 읽음.
    - readable 이벤트: 스트림에 읽을 수 있는 새로운 데이터가 있다는 것을 나타냄
- read() 함수를 사용하여 수행
    - read() 함수: 내부 버퍼에서 동기적으로 데이터를 읽어 Buffer 객체 반환. 읽을 데이터가 없다면 null 반환
    - Buffer 객체: 데이터 청크를 나타내는 객체
      ```javascript
      readable.read([size])
      ```
- 스트림에서 읽기를 위한 기본 패턴

#### flowing 모드
- 'data' 이벤트를 리스터에 연결하는 방식
- read() 함수를 사용하지 않음
- non-flowing 모드에 비해 데이터 흐름 제어 유연성이 떨어짐
- 기본이 non-flowing 모드이므로 활성화하려면 data 이벤트를 리스너에 연결하거나, resume() 함수를 명시적으로 호출. pause() 함수를 호출하면 스트림이 다시 non-flowing으로 전환.

#### 반복가능자(iterables)에서 Readable 스트림 얻기
> ___메모리에서 큰 배열을 인스턴화하지 말 것.___ 이와 관련되어 [9장. 행위 설계 패턴](9장 공부 후 해당 링크 추가할 것)에서 살펴볼 것
