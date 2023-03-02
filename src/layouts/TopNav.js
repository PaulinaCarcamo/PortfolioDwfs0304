import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

// justifyContent: 'center',
// justifyItems: 'center',
// alignContent: 'center',
// alignItems: 'center',

const pages = ['Profile', 'Projects', 'Connect'];

const Wrapper = styled('div')({
    backgroundColor: '#000',
});

const TopNav = () => {
    return (
        <Wrapper>
            <Container sx={{
                display: { xs: 'block', md: 'flex' },
                justifyContent: 'space-between',
                height: { xs: '5vh', md: '10vh' }
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                        href='/'
                        sx={{
                            marginLeft: { xs: 1, md: 2 },
                            fontFamily: 'Mali',
                            color: 'inherit',
                            textDecoration: 'none',
                            backgroundImage: 'linear-gradient(45deg, #9D88B2, #af4261)',
                            backgroundSize: '100%',
                            WebkitTextFillColor: 'transparent',
                            WebkitBackgroundClip: 'text',
                        }}>
                        <h2>Paulina</h2>
                    </Typography>
                </Box>

                <Box sx={{
                    display: { xs: 'flex', md: 'flex' }
                }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{
                                my: 2, color: 'white', display: 'block',
                                fontFamily: 'Blinker', fontSize: '1.2rem',
                            }}>
                            <h5>{page}</h5>
                        </Button>
                    ))}
                </Box>
            </Container>
        </Wrapper>
    );
}

export default TopNav;
