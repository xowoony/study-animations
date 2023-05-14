import { styled } from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

// style
const Wrapper = styled(motion.div)`
  height: 200vh;
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
      "linear-gradient(135deg, rgb(255, 255, 255), rgb(1, 10, 29))",
      "linear-gradient(135deg, rgb(201, 207, 21), #060c47",
    ]
  );

  // useScroll
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x, rotateZ: rotateZ, scale: scale }}
        drag="x"
        dragSnapToOrigin
      ></Box>
    </Wrapper>
  );
}
export default App;
