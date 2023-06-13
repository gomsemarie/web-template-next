# [Guide] VSCode로 개발환경 설정

VSCode로 개발환경 설정하는 방법 A to Z 

---

## **Git 설치**

<br>

1. **Git Download 사이트에서 OS에 맞는 git 설치**

    **[Git Download Link](https://git-scm.com/downloads)**

    ![](./images/setting-git-001.png)

    **Windows**

    ![](./images/setting-git-002.png)

    **mac OS (MacBook은 알아서 설치)**

    ![](./images/setting-git-003.png)    

1. **다운받은 git 설치파일 실행**

    ![](./images/setting-git-004.png)

1. **열심히 Next 눌러주세요 :)**

<br>

## **Yarn 설치**

<br>

1. **Node Download 사이트에서 OS에 맞는 nodejs 설치**

    **[NodeJS Download Link](https://nodejs.org/ko/download)**

    ![](./images/setting-nodejs-001.png)

1. **다운받은 node 설치파일 실행**

    ![](./images/setting-nodejs-002.png)

1. **열심히 Next 눌러주세요 :)**

1. **터미널을 열고 yarn 설치 명령어를 입력**

    ```bash
    npm install -g yarn
    ```

    ![](./images/setting-yarn-001.png)

<br>

## **GitLab 계정 신청 및 소스코드 다운로드**

<br>

1. **GitLab 접속**

    **[GitLab Link](https://dev.nfttown.io:9090)**

1. **Register now 클릭**

    ![](./images/setting-gitlab-001.png)

1. **회원정보 입력**

    ![](./images/setting-gitlab-002.png)

1. **승인 대기 :)**

1. **가입한 email 또는 username으로 로그인**

    ![](./images/setting-gitlab-003.png)

1. **nft-portal-dev repository 접속**

1. **Clone 버튼 클릭 → Copy URL 버튼 클릭**

    ![](./images/setting-gitlab-004.png)

1. **터미널을 열고 복사한 Repository git clone**

    ```bash
    # git cloone -b [branch name] [git url]
    git clone -b develop https://dev.nfttown.io:9090/tns_dap/nft-portal-web.git
    ```

    ![](./images/setting-repository-001.png)

<br>

## **VSCode 설정**

<br>

1. **VSCode 설치 후 열기**

    **[VSCode Download Link](https://code.visualstudio.com/download)**

1. **파일 → 파일에서 작업 영역 열기**

    ![](./images/setting-vscode-001.png)

1. **다운받은 프로젝트 폴더의 workspace 선택**

    ![](./images/setting-vscode-002.png)

1. **VSCode Extension 설치**

    **리포지토리에 권장되는 확장 설치 알림이 나오면 설치**

    ![](./images/setting-vscode-003.png)

    **나오지 않는다면 직접 설치**

    **좌측 Extension 메뉴 → @recommended 입력 → 추천 목록 모두 설치**

    ```bash
    @recommended
    ```

    ![](./images/setting-vscode-004.png)

1. **터미널 → 새 터미널 → __root__ 선택**

    ![](./images/setting-vscode-005.png)

    ![](./images/setting-vscode-006.png)

1. **yarn install 명령어 실행, Done 메세지 확인**

    ```bash
    yarn install
    ```

    ![](./images/setting-vscode-007.png)

    ![](./images/setting-vscode-008.png)

1. **PORTAL 폴더 우클릭 → 새 파일**

    ![](./images/setting-vscode-009.png)
    
1. **.env.local 파일 생성 및 필요할 경우 내용 작성**

    ```bash
    .env.local
    ```

<br>

## **Portal web(Next.js) 실행**

<br>

1. **NPM SCRIPT PORTAL start:local 실행**

    ![](./images/setting-vscode-010.png)

1. **서버 로컬주소 접속**

    **[Portal web(Next.js) Link](http://localhost:3000)**

    ![](./images/setting-vscode-011.png)

1. **Portal web 확인**

    ![](./images/setting-vscode-012.png)

<br>

## **Admin web(Vite) 실행**

<br>

1. **NPM SCRIPT ADMIN start 실행**

    ![](./images/setting-vscode-013.png)

1. **서버 로컬주소 접속**

    **[Admin web(Vite) Link](http://localhost:5173)**

    ![](./images/setting-vscode-014.png)

1. **Admin web 확인**

    ![](./images/setting-vscode-015.png)

<br>

## **Storybook web 실행**

<br>

1. **NPM SCRIPT __root__ start:storybook 실행**

    ![](./images/setting-vscode-016.png)

1. **서버 로컬주소 접속**

    **[Storybook web Link](http://localhost:6006)**

    ![](./images/setting-vscode-017.png)

2. **Storybook web 확인**

    ![](./images/setting-vscode-018.png)

<br>

## **Vitest 실행**

<br>

1. **NPM SCRIPT __root__ start:vitest 실행**

    ![](./images/setting-vscode-019.png)

1. **Vitest 결과 확인**

    ![](./images/setting-vscode-020.png)