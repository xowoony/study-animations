import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

// style
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: linear-gradient(135deg, rgb(252, 191, 248), rgb(21, 151, 203));
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  width: 50px;
  height: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      <Box>
        {!clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 50 }} />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 0, scale:3 }} />
        ) : null}
      </Box>
    </Wrapper>
  );
}
export default App;
