# [Template] NFTtown Monorepo Project

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
   <img src="https://img.shields.io/badge/SWC-FFFFFF?style=flat-square&logo=SWC&logoColor=black" alt="SWC">
</p>

`yarn berry` 기반의 monorepo 프로젝트 템플릿 입니다.

yarn workspace는 `portal`및 `admin`이 있으며 각 프로젝트의 구성은 다음과 같습니다.

| workspace | module                                                     |
| :-------: | ---------------------------------------------------------- |
|   공통    | Storybook, Vitest, Tailwind CSS + daisyUI, Emotion, Recoil |
|  portal   | Next.js 13 + Turbopack, React 18                           |
|   admin   | Vite, swc, React18                                         |

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
