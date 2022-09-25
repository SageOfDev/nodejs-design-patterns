### 6-2-5 Transform 스트림
- *데이터 변환을 처리*하도록 설계된 특수한 종류의 Duplex 스트림
  - ex) zlib.createGzip(), crypto.createCipheriv() 함수는 각각 압축 및 암호화를 위한 Transform 스트림을 생성 
  - 