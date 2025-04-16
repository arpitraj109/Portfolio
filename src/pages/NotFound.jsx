import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Create motion component using motion.create()
const MotionDiv = motion.create('div');

const NotFoundContainer = styled(MotionDiv)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #0a192f;
  color: #e2e8f0;
  padding: 2rem;
  text-align: center;
`;

const Stars = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(2px 2px at ${props => props.x}px ${props => props.y}px, white, rgba(0,0,0,0));
  background-size: 200px 200px;
  opacity: ${props => props.opacity};
`;

const Content = styled(motion.div)`
  text-align: center;
  z-index: 1;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const HomeButton = styled(motion(Link))`
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(to right, #60a5fa, #a78bfa);
  color: white;
  text-decoration: none;
  border-radius: 9999px;
  font-weight: 500;
  
  &:hover {
    opacity: 0.9;
  }
`;

const Astronaut = styled(motion.div)`
  font-size: 5rem;
  margin-bottom: 2rem;
`;

function NotFound() {
  // Create multiple star layers for parallax effect
  const starLayers = Array.from({ length: 3 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: 0.5 - i * 0.1
  }));

  return (
    <NotFoundContainer>
      {starLayers.map((layer, i) => (
        <Stars
          key={i}
          x={layer.x}
          y={layer.y}
          opacity={layer.opacity}
          animate={{
            backgroundPosition: ['0px 0px', '200px 200px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}

      <Content>
        <Astronaut
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          👨‍🚀
        </Astronaut>

        <Title
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </Title>

        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Houston, we have a problem! Page not found.
        </Subtitle>

        <HomeButton
          to="/"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Return to Earth
        </HomeButton>
      </Content>
    </NotFoundContainer>
  );
}

export default NotFound;