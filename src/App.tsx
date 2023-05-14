import { styled } from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

// style
const Wrapper = styled(motion.div)`
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
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(22, 103, 135))",
      "linear-gradient(135deg, rgb(52, 178, 145), rgb(212, 212, 107))",
    ]
  );
  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ: rotateZ }} drag="x" dragSnapToOrigin></Box>
    </Wrapper>
  );
}
export default App;
