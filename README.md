# Tic Tac Toe On React
React + TypeScript로 Tic Tac Toe 게임을 만드는 프로젝트입니다.

# 게임 방법
1. 빨강과 파랑이 3*3 보드에서 차례대로 번갈아가며 타일을 놓습니다.
2. 가로, 세로, 대각선 중 한 줄을 먼저 달성하는 쪽이 승리합니다.

# 사용한 요소
- Class Component
- TypeScript Interface
- 타입 단언 (Type Assertion)
- `React.Component.setState()`를 통한 상태 변화, 재렌더링

# 오류 (Issues)
- ~~3*3 타일의 가장자리나 틈을 클릭하면 에러가 발생~~ (`Tiles` 태그 내에서 클릭한 것은 무조건 적어도 `Element` 이므로, 해당 `Element`의 `className`을 이용하여 `button` 판별 후 후속조치를 실시하는 방식으로 해결)