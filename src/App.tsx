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
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7 },
  },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 0.7 },
  },
};

function App() {
  const [visible, setVisible] = useState(1);
  const nextToggle = () => setVisible((prev) => (prev === 10 ? 10 : prev + 1));

  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) =>
          i === visible ? (
            <Box
              variants={BoxVariants}
              initial="invisible"
              animate="visible"
              exit="exit"
              key={i}
            >
              {i}
            </Box>
          ) : null
        )}
        s
      </AnimatePresence>
      <button onClick={nextToggle}>next</button>
    </Wrapper>
  );
}
export default App;
