import { styled } from "styled-components";
import { motion } from "framer-motion";
import { start } from "repl";

// style
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// Variants 사용하기
// 1. 코드가 깔끔해짐 2. 많은 애니메이션들을 하나로 연결시켜줌
const myVars = {
  // 초기상태 - start라고 이름 지어 주겠음
  // 이전의 코드에서 initial 부분을 이쪽으로 옮겨주겠음.
  start: { scale: 0 },
  // 최종 상태 - end라고 이름 지어 주겠음
  // 이전의 코드에서 animate,  transition부분을 이쪽으로 옮겨주겠음.
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 0.5 } },
};

function App() {
  return (
    <Wrapper>
      <Box variants={myVars} initial={myVars.start} animate={myVars.end}/>
    </Wrapper>
  );
}
export default App;
