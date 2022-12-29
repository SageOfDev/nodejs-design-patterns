## 2-7 ESM과 CommonJS의 차이점과 상호 운용
### 2-7-1 strict 모드에서의 ESM
- ES 모듈들은 암시적으로 strict mode 에서 실행됨
### 2-7-2 ESM에서의 참조 유실
- ES 모듈은 strict mode 에서 실행되므로 아래의 CommonJS의 global-like 변수를 사용할 수 없다.
```javascript
require
module
exports
__filename
__dirname
```
- 대신 ESM의 특별한 객체인 `import.meta` 를 사용하여 대체할 수 있다.
  - `__filename`, `__dirname`
    - `import.meta.url`은 `file:///path/to/current_module.js`와 같은 형식으로 생겼다. 이를 이용하면 다음과 같이 코딩할 수 있다.
    ```javascript
    import {fileURLToPath} from 'url'
    import {dirname} from 'path'
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(__filename)
    ```
  - `require`
    ```javascript
    import {createRequire} from 'module'
    const require = createRequire(import.meta.url)
    ```
