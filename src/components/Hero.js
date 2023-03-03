import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Grid, ImageListItem, ListItem } from '@mui/material';
import { Container } from '@mui/system';
import { WhatsApp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import { contact } from '../data/contact.js';
import { images } from '../data/siteimages.js'

const Wrapper = styled('div')({
    backgroundImage: 'linear-gradient(#000, #4B4453)',
})

const BtnItem = styled('div')({
    display: 'flex',
    gap: '.5rem',
    fontFamily: 'Blinker',
    color: '#009688',
})

const Hero = () => {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <Wrapper>
            <Container sx={{ py: 10, height: { md: '100vh' } }} >
                <Grid container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    columns={{ xs: 1, sm: 1, md: 12 }}
                >
                    <Grid item xs={6} sx={{ color: '#fff' }}>

                        <ListItem sx={{ color: '#F3BAFF', fontFamily: 'Blinker' }}>
                            <h2>WEB DEV STUDENT</h2>
                        </ListItem>

                        <ListItem sx={{ fontFamily: 'Lato', fontSize: { xs: '1.2rem', md: '2rem' } }}>
                            <h1> HI, I AM A FULLSTACK WEB DEVELOPER IN TRAINING </h1>
                        </ListItem>

                        <ListItem sx={{ fontFamily: 'Lato', fontSize: { xs: '.8rem', md: '1rem' }, letterSpacing: '.1rem', color: '#FCEAFF' }}>
                            <h2>
                                I am currently exploring work-related opportunities to begin my new adventure in this fascinating world of web development.
                            </h2>
                        </ListItem>

                        {contact.map((item) => (
                            <ListItem sx={{ display: { xs: 'block', md: 'flex' }, gap: '1rem', my: 2 }}>

                                <Link to={(`https://wa.me/${item.numb}?text=${item.msg}`)}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button variant='outlined' sx={{ border: '1px solid #009688' }}>
                                        <BtnItem>
                                            <WhatsApp />
                                            <h4>SEND ME A MESSAGE</h4>
                                        </BtnItem>
                                    </Button>
                                </Link>

                                <Link to={(`mailto:${item.mail}?subject=${item.msg}&body=${item.desc}`)}
                                    style={{ textDecoration: 'none' }}>
                                    <Button color='secondary' sx={{ fontFamily: 'Blinker' }}>
                                        <h3>SEND ME AN EMAIL</h3>
                                    </Button>
                                </Link>
                            </ListItem>
                        ))}

                    </Grid>
                    <Grid item xs={6}>
                        <div data-aos='zoom-in'>

                            {images.map((item) => (
                                <ImageListItem sx={{ display: { xs: 'none', md: 'flex' } }}>
                                    <img
                                        src={item.img}
                                        style={{ opacity: '50%', filter: 'brightness(0.5)' }}>
                                    </img>
                                </ImageListItem>
                            ))}

                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    );
}

export default Hero;