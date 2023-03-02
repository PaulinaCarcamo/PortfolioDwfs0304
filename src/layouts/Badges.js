import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import { badges } from '../data/badges';

const Box = styled('div')({
    // backgroundImage: 'linear-gradient(#DCDCDC, #EDEDED)',
    borderTop: '2px solid #DCDCDC',
    backgroundColor: '#EDEDED',

})

const Item = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    paddingTop: '50px',
    paddingBottom: '50px',

    
})

const Badges = () => {
    return (
        <div>
            <Box>

                

                <Grid container
                    spacing={{ xs: 2, md: 2 }}
                    columns={{ xs: 4, sm: 12, md: 20 }}
                >
                    {badges.map((item) =>
                        <Grid item xs={2} sm={4} md={4} >
                            <Item>
                                <img src={item.img} style={{ maxHeight: '15vh' }}></img>
                            </Item>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </div>
    )
};

export default Badges;