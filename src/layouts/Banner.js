import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { tech } from '../data/tech';
import { ListItem } from '@mui/material';

import AOS from 'aos';
// import 'aos/dist/aos.css';

const Box = styled('div')({
    // margin: 0,
    backgroundColor: '#DCDCDC',
    // backgroundImage: 'linear-gradient(#4B4453)',
    // height: '100vh',
});

const Item = styled('div')({
    // margin: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#C6C6C6',
    fontFamily: 'Blinker',
    // fontSize: '30px',
    paddingTop: '50px',
    paddingBottom: '50px',
    color: '#5E5E5E',
    letterSpacing: '.5rem'

    // backgroundImage: 'linear-gradient(#4B4453)',
    // height: '100vh',
});

const Banner = () => {

    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <Box
        // sx={{ flexGrow: 1 }}
        >
            <Item>
                <h2>These are some of the techologies I've been working with lately</h2>
            </Item>

            <div data-aos="zoom-in-down">

                <Grid container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 12, md: 20 }}
                    sx={{
                        paddingTop: 6,
                        paddingBottom: 6
                    }}
                >

                    {/* {Array.from(Array(6)).map((_, index) => ( */}
                    {tech.map(item => (
                        // <Grid item xs={2} sm={4} md={4} key={index}>
                        <Grid item xs={2} sm={4} md={4}>
                            <ListItem sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <img src={item.img} style={{ maxHeight: '10vh' }}></img>
                            </ListItem>
                        </Grid>
                    ))}
                    {/* ))} */}
                </Grid>

            </div>
        </Box>
    );
}

export default Banner;