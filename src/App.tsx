import { styled } from "styled-components";
import { motion, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";

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

// x값을 가지고 transform => useTransform 훅을 사용
// -800일 때 : scale이 2가 되도록 하고,
// 0일 때 : scale이 1이 되도록 하고,
// 800일 때 : scale이 0이 되도록
function App() {
  const x = useMotionValue(0); // x값은 드래그할 때마다 새로 값이 설정됨
  // useTransform : 값 3개를 적어주어야 함.
  // 1.  값 : x
  // 2.  x가 ___일 때 라는 의미 : 배열 [-800, 0, 800]
  // 3.  출력 : 배열을 적어줌 [2, 1, 0.1]
  const scaleValue = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  // useEffect 대신 useMotionValueEvent 사용
  useMotionValueEvent(scaleValue, "change", (el) => console.log(el));
  return (
    <Wrapper>
      <Box style={{ x, scale:scaleValue }} drag="x" dragSnapToOrigin></Box>
    </Wrapper>
  );
}
export default App;
