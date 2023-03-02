import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import { learn } from '../data/learn';

const Box = styled('div')({
    backgroundImage: 'linear-gradient(#DCDCDC, #C6C6C6 )'
})

const Item = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    paddingTop: '50px',
    paddingBottom: '50px',
    fontFamily: 'Blinker',
    color: '#5E5E5E',
    letterSpacing: '.5rem',




})

const SubHeading = () => {
    return (
        <div>
            <Box>

                <Item sx={{ backgroundColor: '#DCDCDC', height: '2vh' }}>
                    <h2>These are some of the techologies I'd like to learn</h2>
                </Item>

                <Grid container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 12, md: 20 }}
                >
                    {learn.map((item) =>
                        <Grid item xs={2} sm={4} md={4} >
                            <Item>
                                <img src={item.img} style={{ maxHeight: '6vh' }}></img>
                            </Item>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </div>
    )
};

export default SubHeading;