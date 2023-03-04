import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import AOS from 'aos';
import { Link } from 'react-router-dom';

import { linkweb } from '../data/weblinks.js';

const WebCards = () => {

  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Box sx={{
      pt: { xs: 4, md: 10 },
      pb: { xs: 0, md: 5 },
      backgroundImage: 'linear-gradient(#fff, #E1E1E1)',
      fontFamily: 'Blinker'
    }}>

      <Container
        sx={{ fontSize: { xs: '1.2rem', md: '2rem' }, color: '#575757' }}
      >
        <h2>RECENT PROJECTS</h2>
      </Container>

      {linkweb.map((item) => (
        <Container sx={{ py: { xs: 2, md: 5 } }}>
          <div data-aos="fade-down">

            <Paper
              sx={{
                color: '#fff',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${item.img})`,
              }}
            >
              <Grid container>
                <Grid item md={6}>

                  <Box
                    sx={{
                      p: { xs: 3, md: 6 },
                      minHeight: { xs: '25vh', md: '40vh' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'

                    }}
                  >

                    <Box>
                      <Typography color="inherit" gutterBottom
                        sx={{
                          fontSize: { xs: '1.5rem', md: '2.5rem' },
                          fontFamily: 'Blinker'
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography color="inherit" paragraph sx={{ fontFamily: 'Blinker' }}>
                        {item.desc}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.8rem' }}>
                      <Typography>
                        <Link to={item.url} style={{
                          textDecoration: 'none',
                          color: '#fff',
                          fontFamily: 'Blinker',
                          fontWeight: 600
                        }}
                        >
                          WEBSITE
                        </Link>
                      </Typography>

                      <Typography>
                        <Link to={item.repo} style={{
                          textDecoration: 'none',
                          color: '#fff',
                          fontFamily: 'Blinker',
                          fontWeight: 600
                        }}
                        >
                          REPOSITORY
                        </Link>
                      </Typography>
                    </Box>

                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Container>
      ))}
    </Box>
  );
}

export default WebCards;