import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #0a192f;
  padding: 1rem 2rem;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #e2e8f0;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #e2e8f0;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #0a192f;
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: #e2e8f0;
  text-decoration: none;
  font-size: 1rem;
  position: relative;
  padding: 0.5rem 0;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background: #60a5fa;
    transition: width 0.3s ease;
  }

  &:hover:after,
  &.active:after {
    width: 100%;
  }

  &.active {
    color: #60a5fa;
  }
`;

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  color: ${props => props.theme === 'dark' ? '#ffffff' : '#0a192f'};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

function Navbar() {
  const location = useLocation();
  const { darkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">AR</Logo>
        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MobileMenuButton>
        <NavLinks $isOpen={isOpen}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
}

export default Navbar;