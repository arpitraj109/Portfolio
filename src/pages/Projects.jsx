import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import portfolio from "../assets/images/portfolio.png";
import imagify from "../assets/images/Imagify.png";
import cinephile from "../assets/images/cinephile.png";
import crypto from"../assets/images/cryptoplace.png";
import pokemon from "../assets/images/pokemon.png";
import weather from "../assets/images/weather.png";
import todo from "../assets/images/Todo.png";
import BookB from "../assets/images/BookB.png";


const MotionDiv = motion.create('div');

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #0a192f;
  padding-top: 80px; // Account for fixed navbar
`;

const ProjectsContainer = styled.main`
  min-height: 100vh;
  padding: 2rem;
  background: #0a192f;
`;

const ProjectsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(MotionDiv)`
  background: #112240;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #1e3a8a;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h2`
  color: #e2e8f0;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0;
  min-height: 32px;
`;

const Tag = styled.span`
  background: #1e3a8a;
  color: #60a5fa;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  white-space: nowrap;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  background: ${props => props.active ? '#2563eb' : '#1e3a8a'};
  color: ${props => props.active ? 'white' : '#60a5fa'};
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: #2563eb;
    color: white;
  }
`;

const SectionTitle = styled.h1`
  color: #e2e8f0;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const SectionSubtitle = styled.p`
  color: #94a3b8;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 2rem auto;
  line-height: 1.6;
`;

const LinksContainer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-start;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #1e3a8a;
  color: #60a5fa;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s ease;

  &:hover {
    background: #2563eb;
    color: white;
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const projectData = [
  {
    id: 1,
    title: "Imagify",
    description: "A powerful image processing application built with React and Node.js. Features include image compression, format conversion, and AI-powered image enhancement.",
    image: imagify,
    tags: ["React", "Node.js", "Express", "MongoDB", "AI Image Processing","Razorpay-API"],
    githubLink: "https://github.com/yourusername/imagify",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Vite, featuring smooth animations and responsive design.",
    image: portfolio,
    tags: ["React", "Vite", "Styled Components", "Framer Motion"],
    githubLink: "https://github.com/yourusername/portfolio",
    category: "web"
  },
  
  {
    id: 3,
    title: "Cinephile",
    description: "Cinephile is a movie discovery app that lets users explore films, view detailed information, and stay updated with trending releases. It offers an intuitive interface and smooth browsing experience powered by real-time movie APIs.",
    image: cinephile,
    tags: ["React", "Vite", "Tailwind CSS", "TMDB API"],
    githubLink: "https://github.com/arpitraj109/Cinephile",
    category: "web"
  },
  {
    id:4,
    title: "CryptoPlace",
    description: "CryptoPlace is a real-time cryptocurrency tracker and marketplace that allows users to explore top coins, monitor live prices, and search for specific cryptocurrencies. It delivers a clean UI and up-to-date data.",
    image: crypto,
    tags: ["React", "Node.js", "Cryptocurrency API"],
    githubLink: "https://github.com/yourusername/cryptoplace",
    category: "web"
  },
  {
    id: 5,
    title: "Pokemon Browser",
    description: "Pokemon is an interactive Pokémon browser app where users can explore, search, and view detailed info about various Pokemon. It includes a clean UI, responsive design, and a dark/light mode toggle.",
    image: pokemon,
    tags: ["React", "PokeAPI", "Styled Components"],
    githubLink: "https://github.com/arpitraj109/Pokemon_2024",
    category: "web"
  },
  {
    id:6,
    title:"The Book Beacon",
    description:"The project allows users to browse, search, and review a wide variety of books, as well as contribute their own recommendations to the community.",
    image: BookB,
    tags: ["Python", "Requests", "OpenWeatherMap API"],
    githubLink: "https://github.com/arpitraj109/Weather_App",
    category: "web"
  },
  {
    id:7,
    title:"Weather App",
    description:"Weather App is a simple command-line/weather-based Python application that fetches real-time weather data for any city using an external API. It provides a quick and easy way to check current weather conditions directly from your terminal.",
    image: weather,
    tags: [
      "Python",
      "Django",
      "Books",
      "REST API",
      "User Auth"
    ],
    githubLink: "https://github.com/arpitraj109/The-Book-Beacan",
    category: "web"
  },
  {
    id:8,
    title:"Todo App",
    description:"Todo App is a simple and clean task management tool that helps users add, track, and manage their daily tasks efficiently. It features an interactive UI, task completion toggles, and a responsive layout for easy usage.",
    image: todo,
    tags: ["React", "Create React App", "React Scripts", "Particles.js"],
    githubLink: "https://github.com/arpitraj109/Todo-App",
    category: "web"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projectData
    : projectData.filter(project => project.category === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  return (
    <PageContainer>
      <ProjectsContainer>
        <SectionTitle>My Projects</SectionTitle>
        <SectionSubtitle>
          Here are some of my recent projects. Each one is crafted with attention to detail and modern technologies.
        </SectionSubtitle>

        <FilterContainer>
          {categories.map(category => (
            <FilterButton
              key={category.id}
              active={filter === category.id}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectImage 
                src={project.image} 
                alt={`Screenshot of ${project.title} project`}
                loading="lazy"
              />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                <TagsContainer>
                  {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagsContainer>

                <LinksContainer>
                  <LinkButton href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </LinkButton>
                </LinksContainer>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </PageContainer>
  );
};

export default Projects;