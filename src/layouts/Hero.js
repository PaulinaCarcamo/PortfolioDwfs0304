import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, ImageListItem, ListItem } from '@mui/material';
import { Container } from '@mui/system';
import { Image } from '@mui/icons-material';
import AOS from 'aos';

const Hero = () => {

    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (


        
        <Container sx={{ my: 10, height: '100vh' }} >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={6} sx={{

                    color: '#fff'
                }}>

                    <ListItem sx={{ color: '#F3BAFF', fontFamily: 'Blinker' }}>
                        <h2>WEB DEV STUDENT</h2>
                    </ListItem>

                    <ListItem sx={{ fontFamily: 'Lato', fontSize: '30px' }}>
                        <h1> HI, I AM A FULLSTACK WEB DEVELOPER IN TRAINING </h1>
                    </ListItem>

                    <ListItem sx={{ fontFamily: 'Lato', fontSize: '30px', letterSpacing: '.1rem', color: '#FCEAFF' }}>
                        <h6>
                            I am currently exploring work-related opportunities to begin my new adventure in this fascinating world of web development.
                        </h6>
                    </ListItem>

                    <ListItem sx={{ display: 'flex', gap: '1rem', my: 2 }}>
                        <Button variant='outlined' sx={{ fontFamily: 'Blinker', border: 1, color: '#009688' }}>
                            <h3>SEND ME A MESSAGE</h3>
                        </Button>
                        <Button color='secondary' sx={{ fontFamily: 'Blinker' }}>
                            <h3>SEND ME AN EMAIL</h3>
                        </Button>
                    </ListItem>
                </Grid>
                <Grid item xs={6}>
                <div data-aos='zoom-in'>
                    <ImageListItem>

              

                        <img

                            src='https://images.squarespace-cdn.com/content/v1/5c94e7fed86cc97d788ffb2d/1559129534390-NQQ73MXGVRWJXHOB3G0Y/Laptop-PNG-Image-Transparent.png?format=1500w'
                            // style={{ opacity: '60%', filter: 'contrast(120%)', height: '55vh' }}
                            style={{ opacity: '50%', filter: 'brightness(0.5)' }}
                        ></img>

                     
                    </ImageListItem>
                    </div>

                </Grid>
            </Grid>
        </Container>
    )
};

export default Hero;