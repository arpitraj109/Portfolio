import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaGithub, FaFileAlt, FaArrowRight } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;
  background: #0f172a;
  color: white;
  overflow: hidden;
`;

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(600px circle at 0% 0%, rgba(99, 102, 241, 0.07) 0%, transparent 50%),
    radial-gradient(800px circle at 100% 100%, rgba(79, 70, 229, 0.05) 0%, transparent 50%);
  opacity: 0.8;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
  text-align: center;
  padding: 3rem;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  border: 1px solid rgba(99, 102, 241, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #6366f1, #4f46e5);
    border-radius: 2px;
  }
`;

const TypingContainer = styled(motion.div)`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  margin: 2rem auto;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  max-width: 800px;
  position: relative;
  padding: 1rem;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 12px;

  span.highlight {
    color: #a78bfa;
    font-weight: 600;
  }

  span.cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background-color: #a78bfa;
    margin-left: 4px;
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    from, to { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Button = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;

  svg {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
`;

const SecondaryButton = styled(Button)`
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
`;

const TertiaryButton = styled(Button)`
  background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
`;

// Create a motion component for Link
const MotionLink = motion(Link);

function Home() {
  const [text, setText] = useState('');
  const fullText = `My name is |Arpit Raj|. I am a Software Engineer and Full Stack Developer.`;
  const typingSpeed = 50;

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    const textParts = fullText.split('|');
    
    const typeText = () => {
      if (currentIndex < fullText.length) {
        if (fullText[currentIndex] === '|') {
          currentIndex++;
        } else {
          currentText += fullText[currentIndex];
          setText(currentText.replace(/\|/g, ''));
          currentIndex++;
        }
        setTimeout(typeText, typingSpeed);
      }
    };

    typeText();
    return () => {
      currentIndex = fullText.length;
    };
  }, []);

  const renderTextWithHighlight = () => {
    const parts = text.split('Arpit Raj');
    if (parts.length === 1) return text;

    return (
      <>
        {parts[0]}
        <span className="highlight">Arpit Raj</span>
        {parts[1]}
      </>
    );
  };

  return (
    <HeroSection>
      <GradientBackground />
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to My Portfolio
        </Title>
        
        <TypingContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {renderTextWithHighlight()}
          <span className="cursor" />
        </TypingContainer>
        
        <ButtonContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <PrimaryButton
            as={MotionLink}
            to="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work <FaArrowRight />
          </PrimaryButton>
          
          <SecondaryButton
            as={motion.a}
            href="https://drive.google.com/file/d/1DLVf5_upAziUSPwXeIQnXp23VH_-XdCb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileAlt /> View Resume
          </SecondaryButton>
          
          <TertiaryButton
            as={motion.a}
            href="https://github.com/arpitraj109"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> GitHub Profile
          </TertiaryButton>
        </ButtonContainer>
      </ContentWrapper>
    </HeroSection>
  );
}

export default Home;