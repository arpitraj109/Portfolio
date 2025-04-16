import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(99, 102, 241, 0.1);
  max-width: 1200px;
  margin: 2rem auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: #e2e8f0;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #6366f1;
  }
`;

const SkillItem = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  color: #e2e8f0;
  font-weight: 500;
`;

const SkillLevel = styled.span`
  color: #6366f1;
  font-weight: 500;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  background: ${props => `linear-gradient(90deg, #6366f1 ${props.$progress}%, #4f46e5)`};
  border-radius: 4px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #e2e8f0;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #94a3b8;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const skillsData = {
  "Frontend Development": [
    { name: "React.js", level: 90 },
    { name: "JavaScript/ES6+", level: 85 },
    { name: "HTML5/CSS3", level: 90 },
    { name: "Tailwind CSS", level: 85 }
  ],
  "Backend Development": [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "RESTful APIs", level: 85 }
  ],
  "Tools & Technologies": [
    { name: "Git/GitHub", level: 85 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
    { name: "CI/CD", level: 75 }
  ]
};

function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <SkillsSection ref={ref}>
      <SectionTitle>Technical Skills</SectionTitle>
      <SectionSubtitle>
        A comprehensive overview of my technical expertise and proficiency levels
      </SectionSubtitle>

      <SkillsGrid>
        {Object.entries(skillsData).map(([category, skills]) => (
          <SkillCategory key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            {skills.map((skill, index) => (
              <SkillItem key={skill.name}>
                <SkillInfo>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel>{skill.level}%</SkillLevel>
                </SkillInfo>
                <ProgressBarContainer>
                  <ProgressBar
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    $progress={skill.level}
                  />
                </ProgressBarContainer>
              </SkillItem>
            ))}
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;
