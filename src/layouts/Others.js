import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { others } from '../data/others';

// import { badges } from '../data/badges';

const Box = styled('div')({
    // backgroundImage: 'linear-gradient(#DCDCDC, #EDEDED)',
    borderTop: '2px solid #DCDCDC',
    borderBottom: '2px solid #DCDCDC',
backgroundColor: '#fff'

})

const Item = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    // paddingTop: '50px',
    // paddingBottom: '50px',


})

const Others = () => {
    return (
        <div>
            <Box>



                <Grid container
                    spacing={{ xs: 1, md: 2 }}
                    columns={{ xs: 6, sm: 12, md: 20 }}
                >
                    {others.map((item) =>
                        <Grid item xs={2} sm={4} md={4} >
                            <Item sx={{py: {xs: 2, md: 5}}}>
                                <img src={item.img} style={{ maxHeight: '4vh' }}></img>
                           {/* <img src={item.img} style={{height: '10vh', width: '10vh', borderRadius: '50%'}}></img> */}
                            </Item>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </div>
    )
};

export default Others;