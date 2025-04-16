import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(99, 102, 241, 0.1);
  padding: 3rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  color: #e2e8f0;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    color: #6366f1;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialIcon = styled.a`
  color: #94a3b8;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #6366f1;
    transform: translateY(-2px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: #94a3b8;
  font-size: 0.9rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(99, 102, 241, 0.1);

  span {
    color: #ef4444;
  }
`;

const FooterText = styled.p`
  color: #94a3b8;
  font-size: 0.9rem;
  line-height: 1.6;
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Arpit Raj</FooterTitle>
          <FooterText>
            A passionate full-stack developer focused on creating beautiful and user-friendly applications.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="mailto:your.email@example.com">
              <FaEnvelope />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/projects">Projects</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Info</FooterTitle>
          <FooterText>
            Email: your.email@example.com<br />
            Location: Your City, Country<br />
            Available for freelance work
          </FooterText>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {currentYear} Arpit Raj. Made with <FaHeart style={{ color: '#ef4444' }} /> in React
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
