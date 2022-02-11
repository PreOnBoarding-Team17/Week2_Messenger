# Week2_Assignment\_\_Messenger 📱

1. [프로젝트 소개 🚀](#1-프로젝트-소개-)
2. [구현 목록 📍](#2-구현-목록-)
3. [프로젝트 구조 🌲](#3-프로젝트-구조-)
4. [역할 👋🏻](#4-역할-)
5. [프로젝트 제작 과정 ✍🏻](#5-프로젝트-제작-과정-)
6. [프로젝트 설치 및 실행 ✨](#6-프로젝트-설치-및-실행-)

<br/>

[🌍 배포 링크]()
<br />

[🎉 피그마](https://www.figma.com/file/gUCGSoZAZ9aqhr0Z7CYqGu/Untitled?node-id=0%3A1)

<br />

## 1. 프로젝트 소개 🚀

- 개요 : 원티드 프론트엔드 프리온보딩 2기 2주차 4번째 기업 과제
- 주제 : 답장, 삭제, 로그인, 로그아웃, 메세지 기능을 갖춘 메신저 제작
- 기간 : 2022.02.10 ~ 2022.02.12

<br />

## 2. 구현 목록 📍

### 🖼 레이아웃

- [x] 대화목록은 상단에, 입력창은 하단에 위치
- [x] 대화목록 스크롤 기능
- [x] 입력창
  - [x] 왼쪽에는 입력란, 오른쪽에는 보내기 버튼
- [x] 메세지
  - [x] 프로필 이미지는 원형으로 왼쪽에 위치
  - [x] 오른쪽 컨텐츠 영역 상단에는 이름, 보낸 날짜, 하단에는 메세지 출력
  - [x] 메세지 오른쪽 하단에 삭제, 답장 버튼

### 🔥 기능

#### 입력창

- [x] 엔터키로 전송 가능 / 입력시 전송버튼 활성화
- [x] 컨텐츠를 입력하지 않으면 전송할 수 없는 기능
- [x] 입력란은 멀티라인 / 출력도 그대로 출력

#### 대화 목록

- [x] 메세지 정렬은 과거 -> 최신순
- [x] 메세지를 보낼 때 대화목록이 가장 아래로 스크롤
- [x] 대화 목록은 미리 생성된 데이터로 3명이 5건의 메세지를 주고 받는 내용 출력

#### 메세지

- [x] 내가 전송한 메세지에는 이름 옆에 * 문자 출력
- [x] 보낸 날짜는 yyyy-mm-dd hh:MM:ss 포맷으로 출력
- [x] 답장 클릭 시 "사용자 이름\n" + "메시지 내용\n" + "(회신)\n" 문자가 입력창에 자동으로 삽입
- [x] 삭제 버튼 클릭 시  "** 메시지를 삭제하시겠습니까?" 라는 메시지가 출력되며 응답시 삭제 (**은 메시지 내용중 최대 10자 까지 보여주며 뒤에는 ... 처리)

<br />

## 3. 프로젝트 구조 🌲

```bash
src
├── Assets
├── Components
│   ├── Common
│   │    ├── Button
│   │    └── Modal
│   ├── MessengerHeader
│   ├── MessageInput
│   │    ├── MessageTextArea
│   │    └── index.tsx
│   ├── MessageList
│   │    ├── Message
│   │    └── index.tsx
│   └── MessengerLogin
├── Pages
├── Store
│   ├── Actions
│   │    ├── message
│   │    ├── modal
│   │    └── types.ts
│   ├── Reducers
│   │    ├── index.ts
│   │    ├── message
│   │    └── modals
│   └── index.ts
├── Utils
│   ├── Constant
│   ├── Interface
│   └── Styles
│        ├── _mixins.scss
│        ├── _reset.scss
│        └── _variables.scss
├── App.scss
├── App.tsx
└── index.tsx
```

[자세한 설명 보기](https://github.com/PreOnBoarding-Team17/Week2_Messenger/issues/1)

<br/>

## 4. 역할 👋🏻

| 이름                                       | 담당 역할                                                     |
| ------------------------------------------ | ------------------------------------------------------------- |
| 🥇 공동 작업 | 리덕스 action, reducer, store 구성 시 협업 |
| [황상섭](https://github.com/sangseophwang) | 버튼, 모달, 컨테이너, 로그인 구현 |
| [정인권](https://github.com/developjik)    | 메세지 리스트 구현, 리덕스 초기 세팅 |
| [현다솜](https://github.com/som-syom)      | 피그마 제작, 로그아웃, 헤더, 글 작성, 삭제 기능 구현 |

<br/>

## 5. 프로젝트 제작 과정 ✍🏻

#### [1] 컨벤션은 다음과 같이 정했습니다 ✨

| 커밋명 | 내용 |
| --- | --- |
| ✨ feat | 파일, 폴더, 새로운 기능 추가 |
| 🐛 fix | 버그 수정 |
| 💄 style | 코드 스타일 변경 |
| 📝 docs | 문서 생성, 추가, 수정(README.md) |
| ♻️ refactor | 코드 리팩토링 |
| 🚑️ chore | 코드 수정 (JSON 데이터 포맷 변경 / scss 변경 등) |

자세한 내용은 [여기](https://github.com/PreOnBoarding-Team17/Week2_Messenger/issues/2)서 확인해보실 수 있습니다!

#### [2] 풀 리퀘스트 시 팀원들과 코드 리뷰를 진행했습니다 🔥

[풀리퀘스트 링크](https://github.com/PreOnBoarding-Team17/Week2_Dashboard/pulls?q=is%3Apr+is%3Aclosed)

#### [3] 이슈를 작성해 서로의 진행상황을 공유했습니다 👀

[이슈 링크](https://github.com/PreOnBoarding-Team17/Week2_Dashboard/issues)

<br/>

## 6. 프로젝트 설치 및 실행 ✨

<br/>

1. Git Clone

```plaintext
git clone https://github.com/PreOnBoarding-Team17/Week2_Messenger.git
```

2. 프로젝트 패키지 설치

```plaintext
yarn install
```

3. 프로젝트 실행

```plaintext
yarn start
```
