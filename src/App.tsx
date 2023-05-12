import { styled } from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

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
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  
// useEffect 사용으로 x값 추적하기
// x값이 바뀔때마다 x값이 콘솔에 찍혀나옴.
  // useEffect(() => {
  //   x.on("change", () => console.log(x.get()));
  // }, [x]);
  return (
    <Wrapper>
      <button onClick={() => x.set(200)}>click me</button>
      <Box style={{ x }} drag="x" dragSnapToOrigin></Box>
    </Wrapper>
  );
}
export default App;
