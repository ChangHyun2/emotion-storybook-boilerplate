### 

### package.json

```js
"devDependencies": {
  // 웹팩, 툴
  "webpack": "4.44.2",
  "webpack-cli": "^4.4.0",
  "webpack-merge": "^5.7.3"
  "webpack-bundle-analyzer": ">=4.4.0",
  "webpack-dev-server": "3.11.0",

  // 웹팩 로더
  "babel-loader": "8.1.0",
  "css-loader": "4.3.0",
  "file-loader": "6.1.1",
  "sass-loader": "^10.0.5",
  "style-loader": "1.3.0",
  "url-loader": "4.1.1",
  
  // 웹팩 플러그인
  "html-webpack-plugin": "4.5.0", 
  "webpack-manifest-plugin": "2.2.0", // lazy loading시, 참고할 모듈 매핑 정보
  "case-sensitive-paths-webpack-plugin": "2.3.0", // OS별 path 네이밍 해결
  "mini-css-extract-plugin": "0.11.3",// js파일별로 css 파일을 쪼개 필요 시 css 파일 로딩
  "optimize-css-assets-webpack-plugin": "5.0.4", // css minimizer webpack5 부터 css-minimizer 플러그인 사용
  "terser-webpack-plugin": "4.2.3", // js minimizer
  // "@svgr/webpack": "5.5.0", // svg 지원
  
  // babel-preset-react-app
  "@babel/core": "7.12.3", // 파싱(code), 트랜스파일링(parsedAst, code) 메소드 지원 => 
  "@babel/plugin-proposal-class-properties": "7.12.1", 
  "@babel/plugin-proposal-decorators": "7.12.1",
  "@babel/plugin-proposal-nullish-coalescing-operator": "7.12.1",
  "@babel/plugin-proposal-numeric-separator": "7.12.1",
  "@babel/plugin-proposal-optional-chaining": "7.12.1",
  "@babel/plugin-transform-react-display-name": "7.12.1", // displayName 속성 자동화
  "@babel/plugin-transform-runtime": "7.12.1", // babel runtime에서 재사용되는 helper 캐싱, 재사용 ex) 클래스 => 함수
  "@babel/runtime": "7.12.1", // runtime helpers를(polyfill) 제공하며 전역 공간을 더럽히지 않는다.
  "@babel/preset-env": "7.12.1",
  "@babel/preset-react": "7.12.1", // react syntax 관련 plugins
  // "babel-plugin-macros": "2.8.0",
  // "babel-plugin-transform-react-remove-prop-types": "0.4.24"
  // "@babel/plugin-transform-flow-strip-types": "7.12.1",
  // "@babel/preset-typescript": "7.12.1",

  // 컴포넌트 fast refresth
  // "@pmmmwh/react-refresh-webpack-plugin": "0.4.3",
  // "react-refresh": "^0.8.3",

  // svg import
  // "babel-plugin-named-asset-import": "^0.3.7",

  // 환경 변수
  "dotenv": "8.2.0",
  
  // 브라우저 지원
  "react-app-polyfill": "^2.0.0", // babel로 해결되지 않는 폴리필 (index.js에서 import해서 사용)
}
```

- [./ vs __dirname](https://www.geeksforgeeks.org/difference-between-__dirname-and-in-node-js/)
```
__dirname : 실행 파일의 절대 경로
./ : node 명령이 실행되는 곳 (node 명령을 실행할 때의 terminal 위치) => require 명령어를 사용할 경우 상대 경로가 적용됨 
```

- [path.resolve vs path.join](https://stackoverflow.com/questions/39110801/path-join-vs-path-resolve-with-dirname)
```
path.join => 모든 "/" 반영
path.resolve => root(/)가 아닐 때까지 "/" 반영

path.resolve('a/b/c', '/d') => /d
path.join('a/b/c', '/d') => a/b/c/d

path.resolve('a/b/c', '../d') => a/b/d
path.resolve('a', 'b', '../c') => a/c
```

- plugin-named-asset-import 플러그인
https://stackoverflow.com/questions/63531768/what-does-babel-plugin-named-asset-import-do/63531847

- babel-polyfill react-app-polyfill 
babel-polyfill deprecated : https://medium.com/@karen.kua/the-end-of-babel-polyfill-the-more-efficient-alternative-95f959fef9c2
https://github.com/facebook/create-react-app/issues/5675
https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill
https://create-react-app.dev/docs/supported-browsers-features/

- manifest 
https://webpack.js.org/concepts/manifest/

- babel runtime
트랜스파일링 과정에서 재사용되는 
https://babeljs.io/docs/en/babel-runtime 


### issues

**after commit : 웹팩 환경 설정 , 리엑트**
storybook webpack 5 미지원
- https://github.com/storybookjs/storybook/issues/13332
- `npm i --save-dev html-webpack-plugin@next`