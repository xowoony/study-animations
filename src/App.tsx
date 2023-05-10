import { styled } from "styled-components";
import { motion } from "framer-motion";

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

function App() {
  return (
    <Wrapper>
      <Box
        // initial = 애니메이션의 초기 스타일
        initial={{ scale: 0 }}
        // 트랜지션
        transition={{ type: "spring", delay:0.5 }}
        // animate = 애니메이션의 최종 스타일
        animate={{ scale: 1, rotateZ: 360 }}
      />
    </Wrapper>
  );
}
export default App;
