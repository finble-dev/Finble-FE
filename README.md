# Finble-FE

### 배포링크
http://finble.s3-website.ap-northeast-2.amazonaws.com/

### 실행 및 빌드
```
# 실행
yarn start

# 빌드
yarn build

# 빌드 후 배포
aws s3 sync ./build s3://finble --profile=[IAM 유저명]
```
[배포 참고링크](https://velog.io/@krkorklo58/AWS-S3%EB%A1%9C-React-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0)

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

### 머지 규칙
1. 기능 단위 pr
2. 코드리뷰 필요없는 간단한 pr || 긴급한 pr은 즉시 머지 가능
   - 예외 제외하고는 리뷰어 코드리뷰후 머지

### 파일구조


