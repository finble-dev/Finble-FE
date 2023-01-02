# Finble-FE

### 빌드방법
```
yarn build
```
후 나온 build 파일 확인 후

terminal에서 aws s3 sync ./build s3://finble --profile=JeeeunOh

[참고링크](https://velog.io/@krkorklo58/AWS-S3%EB%A1%9C-React-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0)

### 배포링크
http://finble.s3-website.ap-northeast-2.amazonaws.com/

### 개발 툴
React + TypeScript + Redux

### 환경설정 with yarn

npm install -g yarn  <br/> 
yarn create react-app client --template typescript  <br/> 
yarn add styled-components @types/styled-components  <br/> 
yarn add react-router-dom @types/react-router-dom  <br/> 
yarn install  <br/> 

### 커밋 규칙 
1. sparkles ( :sparkles: ) : add new features <br/> 
1. art ( :art: ) : improve structure / format of the code <br/> 
1. bug ( :bug: ) : fix a bug <br/> 

### 파일구조


