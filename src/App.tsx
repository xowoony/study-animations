import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

// style
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 큰 박스
const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

// 박스
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// Variants
const boxVariants = {
  hover: { scale: 1.2, rotateZ: 90 },
  tap: { borderRadius: "100px" },
};

function App() {
  // useRef 작성, 기본값 null, 타입스크립트 HTMLDIVELEMENT 적용
  // 작성 후 BiggerBox 컴포넌트에 전달
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragConstraints={biggerBoxRef} // (300 - 중앙박스의 절반)
          variants={boxVariants}
          whileHover="hover" // hover시 90도 z축 회전, 1.2배 커짐
          whileTap="tap" // 클릭했을 경우 scale1로 돌리고 원이 됨
        ></Box>
      </BiggerBox>
    </Wrapper>
  );
}
export default App;
