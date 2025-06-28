import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Paper,
  useTheme,
} from '@mui/material';
import {
  Code,
  Storage,
  Api,
  Web,
  DataObject,
  Schema,
} from '@mui/icons-material';

const Skills = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const skills = [
    {
      name: 'React.js',
      icon: <Web />,
      color: '#61DAFB',
      description: 'Frontend development with React hooks and components',
    },
    {
      name: 'Redux',
      icon: <DataObject />,
      color: '#764ABC',
      description: 'State management and predictable state container',
    },
    {
      name: 'Node.js',
      icon: <Code />,
      color: '#339933',
      description: 'Server-side JavaScript runtime environment',
    },
    {
      name: 'Express.js',
      icon: <Api />,
      color: '#000000',
      description: 'Web application framework for Node.js',
    },
    {
      name: 'MongoDB',
      icon: <Storage />,
      color: '#47A248',
      description: 'NoSQL database for scalable applications',
    },
    {
      name: 'Mongoose',
      icon: <Schema />,
      color: '#880000',
      description: 'MongoDB object modeling for Node.js',
    },
  ];

  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        backgroundColor: isDark ? '#0a0a0a' : '#f8f9fa',
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
            Skills & Technologies
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
            I work with modern technologies to build robust and scalable web applications
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={isDark ? 1 : 2}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: isDark ? 4 : 4,
                    '& .skill-icon': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <Box
                  className="skill-icon"
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: skill.color,
                    color: 'white',
                    mb: 2,
                    transition: 'transform 0.3s ease-in-out',
                    fontSize: '2rem',
                  }}
                >
                  {skill.icon}
                </Box>
                
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    color: 'text.primary',
                  }}
                >
                  {skill.name}
                </Typography>
                
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.5,
                  }}
                >
                  {skill.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Additional Skills Section */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              mb: 3,
              color: 'text.primary',
            }}
          >
            Additional Skills
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            {[
              'JavaScript (ES6+)',
              'TypeScript',
              'HTML5 & CSS3',
              'Git & GitHub',
              'RESTful APIs',
              'JWT Authentication',
              'Responsive Design',
              'Agile Methodology',
              'Postman',
              'VS Code',
            ].map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                variant="outlined"
                sx={{
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  backgroundColor: isDark ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills; 