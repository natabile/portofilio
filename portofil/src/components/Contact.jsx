import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import {
  Email,
  Phone,
  GitHub,
} from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const contactInfo = [
    {
      icon: <Email />,
      primary: 'Email',
      secondary: 'codernathailu@gmail.com',
      link: 'mailto:codernathailu@gmail.com',
    },
    {
      icon: <Phone />,
      primary: 'Phone',
      secondary: '+251 961 163 093',
      link: 'tel:+251961163093',
    },
    {
      icon: <GitHub />,
      primary: 'GitHub',
      secondary: 'github.com/natabile',
      link: 'https://github.com/natabile',
    },
  ];

  return (
    <Box
      id="contact"
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
            Get In Touch
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
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to work together!
          </Typography>
        </Box>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={8} lg={6}>
            <Paper
              elevation={isDark ? 1 : 3}
              sx={{
                p: 4,
                height: 'fit-content',
                backgroundColor: 'primary.main',
                color: 'white',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                Contact Information
              </Typography>
              
              <List sx={{ pt: 0 }}>
                {contactInfo.map((info, index) => (
                  <ListItem
                    key={index}
                    component="a"
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    sx={{
                      textDecoration: 'none',
                      color: 'white',
                      mb: 2,
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transition: 'all 0.3s ease-in-out',
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        transform: 'translateX(8px)',
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                      {info.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={info.primary}
                      secondary={info.secondary}
                      primaryTypographyProps={{
                        fontWeight: 600,
                        fontSize: '1.1rem',
                      }}
                      secondaryTypographyProps={{
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '1rem',
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              <Box sx={{ mt: 4, p: 3, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  Let's Work Together
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: 1.6,
                    textAlign: 'center',
                  }}
                >
                  I'm available for freelance work, full-time positions, and exciting collaborations. 
                  Don't hesitate to reach out!
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 