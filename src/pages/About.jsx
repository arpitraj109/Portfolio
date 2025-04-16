import { motion } from 'framer-motion';
import styled from 'styled-components';
import bolt from "../assets/images/bolt.jpeg";
import chatgpt from "../assets/images/chatgpt.png";
import cursor from "../assets/images/cursor.jpeg";
import gemini from "../assets/images/gemini.png";
import Skills from '../components/Skills';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #0a192f;
  padding-top: 80px;
`;

const AboutContainer = styled.main`
  min-height: 100vh;
  padding: 2rem;
  background: #0a192f;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const Timeline = styled.div`
  position: relative;
  margin: 2rem 0;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #7c3aed;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: -2.4rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #7c3aed;
    border: 2px solid #0a192f;
  }
`;

const TimelineDate = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #7c3aed;
  color: white;
  border-radius: 1rem;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: #1a2942;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const AiSection = styled.section`
  margin-top: 2rem;
  padding: 2rem;
  background: #112240;
  border-radius: 12px;
`;

const AiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const AiCard = styled(motion.div)`
  background: #1a2942;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const AiIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.bgColor || '#2563eb'};

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
`;

const AiInfo = styled.div`
  flex: 1;
`;

const AiName = styled.h3`
  color: #e2e8f0;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const AiDescription = styled.p`
  color: #94a3b8;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const timelineEvents = [
  {
    date: "2021 - Present",
    title: "B.Tech Student",
    company: "Lovely Professional University",
    description: "Pursuing Computer Science Engineering with a focus on full-stack development and modern web technologies."
  },
  {
    date: "2023",
    title: "Full Stack Developer",
    company: "Personal Projects",
    description: "Developed multiple full-stack applications including Imagify (AI image generator) and Cinephile (movie discovery app)."
  }
];

const skills = [
  {
    name: "Programming Languages",
    technologies: [
      { name: "C++", icon: "🔧" },
      { name: "Java", icon: "☕" },
      { name: "Python", icon: "🐍" },
      { name: "C", icon: "⚙️" },
      { name: "JavaScript", icon: "📜" }
    ]
  },
  {
    name: "Frontend",
    technologies: [
      { name: "React", icon: "⚛️" },
      { name: "Vite", icon: "⚡" },
      { name: "JavaScript", icon: "📜" },
      { name: "Styled Components", icon: "💅" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Framer Motion", icon: "🎭" }
    ]
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚂" },
      { name: "Python", icon: "🐍" }
    ]
  },
  {
    name: "APIs & Tools",
    technologies: [
      { name: "REST APIs", icon: "🔌" },
      { name: "TMDB API", icon: "🎬" },
      { name: "Razorpay", icon: "💳" },
      { name: "Git", icon: "📚" }
    ]
  }
];

const About = () => {
  const aiTools = [
    {
      name: "ChatGPT",
      description: "Advanced language model by OpenAI for natural conversations and content generation.",
      icon: chatgpt,
      bgColor: "#10a37f"
    },
    {
      name: "Cursor.ai",
      description: "AI-powered code editor enhancing development workflow with intelligent suggestions.",
      icon: cursor,
      bgColor: "#3b82f6"
    },
    {
      name: "Bolt AI",
      description: "Fast and efficient AI assistant for streamlined development and problem-solving.",
      icon: bolt,
      bgColor: "#8b5cf6"
    },
    {
      name: "Gemini",
      description: "Google's multimodal AI model for versatile tasks and creative solutions.",
      icon: gemini,
      bgColor: "#ef4444"
    }
  ];

  return (
    <PageContainer>
      <AboutContainer>
        <ContentWrapper>
          <Section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-4"
            >
              Programming Background
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg mb-4 text-gray-300"
            >
              I have a strong foundation in multiple programming languages, with expertise in both object-oriented and procedural programming paradigms. My experience spans from low-level programming in C to high-level application development in Python and Java, complemented by modern web development using JavaScript and its frameworks.
            </motion.p>
          </Section>

          <Section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-6"
            >
              Technical Skills
            </motion.h2>

            {skills.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4 text-purple-300">
                  {category.name}
                </h3>
                <SkillsGrid>
                  {category.technologies.map((tech, techIndex) => (
                    <SkillCard
                      key={techIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 4px 15px rgba(124, 58, 237, 0.2)"
                      }}
                    >
                      <SkillIcon>{tech.icon}</SkillIcon>
                      <h4 className="font-bold text-white">{tech.name}</h4>
                    </SkillCard>
                  ))}
                </SkillsGrid>
              </motion.div>
            ))}
          </Section>

          <Skills />

          <AiSection>
            <h2 className="text-2xl text-white mb-4">AI Tools I Work With</h2>
            <p className="text-gray-400 mb-6">
              I leverage various AI tools to enhance productivity and deliver innovative solutions.
            </p>

            <AiGrid>
              {aiTools.map((tool, index) => (
                <AiCard
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AiIcon bgColor={tool.bgColor}>
                    <img
                      src={tool.icon}
                      alt={`${tool.name} icon`}
                      width="32"
                      height="32"
                      loading="lazy"
                    />
                  </AiIcon>
                  <AiInfo>
                    <AiName>{tool.name}</AiName>
                    <AiDescription>{tool.description}</AiDescription>
                  </AiInfo>
                </AiCard>
              ))}
            </AiGrid>
          </AiSection>
        </ContentWrapper>
      </AboutContainer>
    </PageContainer>
  );
};

export default About;
