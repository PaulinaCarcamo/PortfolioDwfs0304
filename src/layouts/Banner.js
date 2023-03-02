import * as React from 'react';
import { tech } from '../data/tech';
import { Grid, ListItem } from '@mui/material';
import styled from '@emotion/styled';
import AOS from 'aos';

const Box = styled('div')({
    backgroundImage: 'linear-gradient(#E1E1E1, #fff)',
});

const Item = styled('div')({
    display: 'flex',
    paddingTop: '3rem',
    paddingBottom: '3rem',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
    fontFamily: 'Blinker',
    color: '#5E5E5E',
    letterSpacing: '.5rem',
    // textAlign: 'center'
});

const Banner = () => {

    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <Box>
            <Item>
                <h2>These are some of the techologies I've been working with</h2>
            </Item>

            <Grid container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 12, md: 20 }}
                sx={{
                    paddingTop: 6,
                    paddingBottom: 6
                }}
            >
                {tech.map(item => (
                    <Grid item xs={2} sm={4} md={4}>
                        <ListItem sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <div data-aos="zoom-in">
                                <img src={item.img} style={{ maxHeight: '10vh' }}></img>
                            </div>
                        </ListItem>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Banner;