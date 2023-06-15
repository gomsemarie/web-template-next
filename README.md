# [Template] Web Monorepo Project

<p align="left">
   <img src="https://img.shields.io/github/license/themeselection/materio-mui-react-nextjs-admin-template-free" alt="license">
   <img src="https://img.shields.io/github/v/release/themeselection/materio-mui-react-nextjs-admin-template-free" alt="Git release (latest by date)">
</p>
<p align="left">
   <img src="https://img.shields.io/badge/Next.js 13-black?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js 13">
   <img src="https://img.shields.io/badge/React 18-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 18">
   <img src="https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white" alt="Storybook">
   <img src="https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white" alt="Vitest">
   <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white" alt="Tailwind CSS">
   <img src="https://img.shields.io/badge/daisyUI-5A0EF8?style=flat-square&logo=DaisyUI&logoColor=white" alt="daisyUI">
   <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white" alt="Vite">
   <img src="https://img.shields.io/badge/SWC-gray?style=flat-square&logo=SWC&logoColor=white" alt="SWC">
</p>

`yarn berry` 기반의 monorepo 프로젝트 템플릿 입니다.

yarn workspace는 `portal`및 `admin`이 있으며 각 프로젝트의 구성은 다음과 같습니다.

<br>

## 프로젝트 구성

| workspace | module                                                     |
| :-------: | ---------------------------------------------------------- |
|   공통    | Storybook, Vitest, Tailwind CSS + daisyUI, Emotion, Recoil |
|  portal   | Next.js 13 + Turbopack, React 18                           |
|   admin   | Vite, swc, React18                                         |

<br>

## Dependency 소개

- ### Next.js 13 (ver 13.4.5)

  React 프레임워크로 SSR, CSR 및 Routing등의 기능을 제공합니다.

  [Next.js Link](https://nextjs.org/)

- ### Storybook 7 (ver 7.0.20)

  React Component, Container, Layout 등을 문서화 및 테스트하기 위한 워크샵 입니다.

  [Storybook Link](https://storybook.js.org/)

- ### Vitest (ver 0.32.0)

  UI 및 Component를 단위테스트 하기 위한 테스트툴 입니다.

  [Vitest Link](https://vitest.dev/)

- ### Tailwind CSS, daisyUI (ver 3.3.2, ver 3.1.0)

  Tailwind CSS는 CSS 프레임워크로 인라인 스타일을 사용하여 빠르게 스타일링을 할 수 있도록 도와줍니다.

  daisyUI는 Tailwind CSS 기반으로 만들어진 html 기반 컴포넌트 라이브러리 입니다. 지정된 html 구조로 작성하면 컴포넌트가 동작하며 모든 디자인은 Tailwind CSS로 제어할 수 있습니다.

  [Tailwind CSS Link](https://tailwindcss.com/) / [daisyUI Link](https://daisyui.com/)

- ### Emotion (ver 11.11.0)

  Emotion은 JavaScript로 css 스타일을 작성하도록 설계된 라이브러리입니다. 소스 맵, 레이블 및 테스트 유틸리티와 같은 기능을 통해 훌륭한 개발자 경험 외에도 강력하고 예측 가능한 스타일 구성을 제공합니다.

  [Storybook Link](https://emotion.sh/docs/introduction)

- ### Recoil (ver 0.7.7)

  React 상태관리 라이브러리로 props state를 통해 데이터를 전달해야만 했던 방식에서 reducer, dispatch등을 이용해 전역 또는 특정 스코프 어디에서도 접근 가능하게 도와줍니다.

  [Recoil Link](https://recoiljs.org/ko/)

---

<br>

## NPM SCRIPTS 가이드

- ### **root workspace**

  | name              | description                                   |
  | ----------------- | --------------------------------------------- |
  | `start:storybook` | storybook 서버 실행                           |
  | `start:vitest`    | vitest를 사용해 모든 테스트 실행 및 결과 출력 |
  | build:storybook   | storybook 빌드                                |
  | coverage:vitest   | vitest를 사용해 테스트 커버리지 출력          |

- ### **portal workspace**

  | name          | description                                  |
  | ------------- | -------------------------------------------- |
  | `start:local` | .env.local을 적용한 Portal Next.js 서버 실행 |
  | start:built   | build 된 Portal Next.js 서버 실행            |
  | build:dev     | .env.development를 적용해 build 실행         |
  | build:prod    | .env.production을 적용해 build 실행          |

- ### **admin workspace**

  | name    | description               |
  | ------- | ------------------------- |
  | `start` | Admin Web 서버 실행       |
  | build   | Admin Web 서버 build 실행 |

<br>

## Guide Link

- [Template 바닥부터 구축하기](./.doc/create-template-guide.md)

- [VSCode로 개발환경 설정](./.doc/setting-vscode-guide.md)
