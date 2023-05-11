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
`;

// Variants
const boxVariants = {
  hover: { scale: 1.2, rotateZ: 90 },
  tap: { borderRadius: "100px", scale: 1 },
  drag: { backgroundColor: "rgb(46, 204, 113)" , transition:{duration: 5}},
};

function App() {
  return (
    <Wrapper>
      <Box
        drag
        whileDrag="drag" // drag 하는 도중 - background-color 작성시 문자열로 적어주면 안되고 rgb 로 적어줘야 함.
        variants={boxVariants}
        whileHover="hover" // hover시 90도 z축 회전, 1.2배 커짐
        whileTap="tap" // 클릭했을 경우 scale1로 돌리고 원이 됨
      ></Box>
    </Wrapper>
  );
}
export default App;
