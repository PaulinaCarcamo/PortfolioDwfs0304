import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Grid, ImageListItem, ListItem } from '@mui/material';
import { Container } from '@mui/system';
import { MailOutline, WhatsApp } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import { contact } from '../data/contact.js';
import { images } from '../data/siteimages.js'

const Wrapper = styled('div')({
    backgroundImage: 'linear-gradient(#000, #4B4453)',
    fontFamily: 'Blinker',
})

const BtnItem = styled('div')({
    display: 'flex',
    gap: '.5rem',
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

                        <ListItem sx={{ color: '#F3BAFF' }}>
                            <h2>WEB DEV STUDENT</h2>
                        </ListItem>

                        <ListItem sx={{ fontSize: { xs: '1.2rem', md: '2rem' } }}>
                            <h1>HI, I AM A FULLSTACK WEB DEVELOPER IN TRAINING</h1>
                        </ListItem>

                        <ListItem sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, letterSpacing: '.1rem', color: '#FCEAFF' }}>
                            <p> I am currently exploring work-related opportunities to begin my new adventure in this fascinating world of web development.</p>
                        </ListItem>

                        {contact.map((item) => (
                            <ListItem sx={{
                                display: { xs: 'block', sm: 'flex', md: 'flex' },
                                flexDirection: { xs: 'none', sm: 'row', md: 'row' },
                                gap: '1rem',
                                my: { xs: 1, md: 2 },
                            }}>

                                <Link to={(`https://wa.me/${item.numb}?text=${item.msg}`)}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button variant='outlined' sx={{
                                        border: '1px solid #009688', color: '#009688',
                                        fontSize: { xs: '.8rem', md: '1rem' }
                                    }}>
                                        <BtnItem>
                                            <WhatsApp />
                                            <p>SEND ME A MESSAGE</p>
                                        </BtnItem>
                                    </Button>
                                </Link>

                                <Link to={(`mailto:${item.mail}?subject=${item.msg}&body=${item.desc}`)}
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Button variant='outlined' sx={{
                                        border: '1px solid #9D88B2', color: '#9D88B2',
                                        fontSize: { xs: '.8rem', md: '1rem' },
                                        my: { xs: '1rem', md: 0 }
                                    }}>
                                        <BtnItem >
                                            <MailOutline />
                                            <p>SEND ME AN EMAIL</p>
                                        </BtnItem>
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
                                        style={{ opacity: '50%', filter: 'brightness(0.5)' }}
                                        alt="img">        
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