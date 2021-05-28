# Tic Tac Toe On React
React + TypeScript로 Tic Tac Toe 게임을 만드는 프로젝트입니다.   
[플레이해보기](https://kuman514.github.io/tictactoe-react/)

# 게임 방법
1. 빨강과 파랑이 3*3 보드에서 차례대로 번갈아가며 타일을 놓습니다.
2. 가로, 세로, 대각선 중 한 줄을 먼저 달성하는 쪽이 승리합니다.

# 사용한 요소
- Class Component
- TypeScript Interface
- 타입 단언 (Type Assertion)
- `React.Component.setState()`를 통한 상태 변화, 재렌더링
- React 프로젝트를 Github Pages에 배포하기 [참고](https://velog.io/@byjihye/react-github-pages)

# 업데이트
- 05-14-2021: 기본 기능 구현 및 최초 릴리즈.
- 05-15-2021: 3*3 타일의 가장자리나 틈을 클릭하면 발생하는 문제 해결.
- 05-21-2021: 버튼 사이의 경계가 안 보이는 문제 해결.

# 오류
- ~~3*3 타일의 가장자리나 틈을 클릭하면 에러가 발생~~ (`Tiles` 태그 내에서 클릭한 것은 무조건 적어도 `Element` 이므로, 해당 `Element`의 `className`을 이용하여 `button` 판별 후 후속조치를 실시하는 방식으로 해결)
- ~~배포된 앱에서 버튼 사이의 경계가 안 보이는 문제~~ (`npm run deploy`가 실행되는 중, CSS 스타일에서 `.Tiles`와 `button`의 공통된 속성이 묶여, 해당 속성만 먼저 적용된 이후, `button`만의 속성이 적용되었음을 발견. `.Tiles`와 `button`의 공통되었던 속성에 차이를 두어 해결.)

# 피드백
- 05-28-2021: 빨강/파랑 배경 말고, O/X는 안 되는가? (검토 중)