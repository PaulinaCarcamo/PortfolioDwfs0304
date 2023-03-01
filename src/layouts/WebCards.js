import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import styled from '@emotion/styled';
import AOS from 'aos';

import { linkweb } from '../data/linkweb';
import { Link } from 'react-router-dom';

const Wrapper = styled('div')({
  backgroundColor: 'white'
})
const WebCards = () => {

  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Wrapper>

      {linkweb.map((item) => (
        <Container sx={{ py: 5 }}>
          <div data-aos="fade-down">

            <Paper
              sx={{
                color: '#fff',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${item.img})`,
              }}
            >
              {/* {<img style={{ display: 'none' }}
          // src={post.image} alt={post.imageText} 
          />} */}
              <Grid container >
                <Grid item md={6}  >
                  <Box
                    sx={{
                      p: { xs: 3, md: 6 },
                      pr: { md: 0 },

                      minHeight: '40vh',
                    }}
                  >
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                      {item.desc}
                    </Typography>
                    <Link to={item.url}>
                      VISIT SITE
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Container>
      ))}
    </Wrapper>
  );
}

export default WebCards;