import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  CardMedia,
  useTheme,
} from '@mui/material';
import {
  GitHub,
  Launch,
  AttachMoney,
  Home,
  Article,
} from '@mui/icons-material';

const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const projects = [
    {
      title: 'FMS – Personal Finance Management',
      description: 'Track personal finances, view budgets with attractive UI, and follow crypto prices.',
      github: 'https://github.com/natabile/FMs',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: <AttachMoney />,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      color: '#4CAF50',
    },
    {
      title: 'Endebet – Home Rental Platform',
      description: 'A full-featured rental platform with post listing, map-based search, real-time chat, and gallery view.',
      github: 'https://github.com/natabile/home',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: <Home />,
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      color: '#2196F3',
    },
    {
      title: 'Tech News App',
      description: 'A modern tech news aggregator with responsive layout and filter functionality.',
      github: 'https://github.com/natabile/news',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      icon: <Article />,
      technologies: ['React', 'API Integration', 'Responsive Design'],
      color: '#FF9800',
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        backgroundColor: isDark ? '#121212' : 'white',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'primary.main',
            }}
          >
            Featured Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Here are some of my recent projects that showcase my skills and passion for web development
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                elevation={isDark ? 1 : 3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: isDark ? 8 : 8,
                    '& .project-image': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    className="project-image"
                    sx={{
                      transition: 'transform 0.3s ease-in-out',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      backgroundColor: project.color,
                      color: 'white',
                      borderRadius: '50%',
                      width: 48,
                      height: 48,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 2,
                    }}
                  >
                    {project.icon}
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: 'text.primary',
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          fontSize: '0.75rem',
                          backgroundColor: isDark ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    size="small"
                    startIcon={<GitHub />}
                    href={project.github}
                    target="_blank"
                    sx={{
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'primary.light',
                        color: 'white',
                      },
                    }}
                  >
                    View Code
                  </Button>
                  
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 3,
              color: 'text.primary',
            }}
          >
            Want to see more?
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<GitHub />}
            href="https://github.com/natabile"
            target="_blank"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Visit My GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects; 