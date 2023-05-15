import { styled } from "styled-components";
import { motion } from "framer-motion";

// style
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  // styled-component에서 path의 stroke, stroke-width를 줘도 상관없음.
  path {
    stroke: rgb(134, 73, 255); // stroke를 작성하면 선이 생김
    stroke-width: 2; // 선굵기
  }
`;

// variants
const svg = {
  start: { pathLength: 0, fill: "rgba(134, 73, 255, 0)" },
  end: {
    fill: "rgba(134, 73, 255, 1)",
    pathLength: 1,
  },
};

function App() {
  return (
    <Wrapper>
      <Svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <motion.path
          variants={svg}
          //처음상태
          initial="start"
          // 최종상태
          animate="end"
          // property의 transition 시간 정하기
          transition={{
            default: { duration: 5 }, // 모든 트랜지션의 default duration을 5로 설정
            fill: { duration: 2, delay: 4 }, // fill만 duration을 2, delay를 5로 설정
          }}
          d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"
        />
      </Svg>
    </Wrapper>
  );
}
export default App;
