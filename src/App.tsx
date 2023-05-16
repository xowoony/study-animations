import { styled } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// style
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, rgb(252, 191, 248), rgb(21, 151, 203));
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 180px;

  width: 21rem;
  height: 10rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 2px 3px gray, 0 10px 20px gray;

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-size: 28px;
`;

const BoxVariants = {
  // entry를 function으로 만들어준다.
  // 밑에 Box 컴포넌트 안 custom={back}과 (back: boolean) 이 둘의 이름이 달라도 상관은 없다.
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7 },
  },

  // exit을 function으로 만들어준다.
  // 밑에 Box 컴포넌트 안 custom={back}과 (back: boolean) 이 둘의 이름이 달라도 상관은 없다.
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.7 },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const nextToggle = () => {
    setBack(false); // next버튼을 눌렀을 때에는 setBack을 fasle로
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevToggle = () => {
    setBack(true); // prev버튼을 눌렀을 때에는 setBack을 true로
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <Box
          custom={back} // custom에 back을 넣어준다. 여기는 true 또는 false가 될 것이다.
          variants={BoxVariants}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextToggle}>next</button>
      <button onClick={prevToggle}>prev</button>
    </Wrapper>
  );
}
export default App;
