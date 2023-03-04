import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import { icons } from '../data/iconsimg.js';

const Box = styled('div')({
    borderTop: '2px solid #DCDCDC',
    borderBottom: '2px solid #DCDCDC',
    backgroundColor: '#fff'
});

const Item = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
});

const IconsList = () => {
    return (
        <div>
            <Box>
                <Grid container
                    spacing={{ xs: 1, md: 2 }}
                    columns={{ xs: 6, sm: 12, md: 20 }}
                >
                    {icons.map((item) =>
                        <Grid item xs={2} sm={4} md={4} >
                            <Item sx={{ py: { xs: 2, md: 5 } }}>
                                <img src={item.img} style={{ maxHeight: '4vh' }}></img>
                            </Item>
                        </Grid>
                    )}
                </Grid>
            </Box>
        </div>
    );
}

export default IconsList;