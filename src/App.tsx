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

// 박스
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

// 원
const Circle = styled(motion.div)`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  place-self: center; // 원들이 박스에서 center로 위치하게 됨
`;

// Variants
const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 2, // box가 마무리 될때까지 2초 걸림
      bounce: 0.5,
      // delayChildren: 0.5, // 모든 자식 통째로 0.5초의 delay주기
      staggerChildren: 0.2, // 자식1, 자식2, 자식3, 자식4가 차례로 0.2초 간격으로 나옴
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
    y: 10, 
  },
  end: {
    opacity: 1,
    y: 0, // 밑에서부터 위로 올라옴
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}
export default App;
