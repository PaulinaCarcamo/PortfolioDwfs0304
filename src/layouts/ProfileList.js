import * as React from 'react';
import { Grid, ListItem } from '@mui/material';
import { Check } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import AOS from 'aos';

import { exp } from '../data/exp.js';

const Box = styled('div')({
    backgroundColor: '#fff'
});

const List = styled('div')({
    display: 'flex',
    justifyContent: 'right',
    alignContent: 'right',
    alignItems: 'right',
    justifyItems: 'right',
    gap: '1rem'
});

const Item = styled('div')({
    fontFamily: 'Lato',
});

const ProfileList = () => {

    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <Box sx={{
            px: { xs: 0, md: 16 },
            pt: { xs: 0, md: 2 },
            pb: { xs: 4, md: 8 }
        }}>

            <Item sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}>
                <h1>STUDYING TO BECOME A  </h1>
                <h1>FULLSTACK WEB DEVELOPER</h1>
            </Item>

            <Grid container rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                columns={{ xs: 4, sm: 6, md: 12 }}
                sx={{ pt: { xs: 2, md: 6 } }}
            >
                {exp.map((item) =>
                    <Grid item xs={6}  >
                        <List>
                            <div data-aos="flip-left">
                                <Check color='secondary' />
                            </div>
                            <ListItem sx={{
                                padding: 0,
                                fontFamily: 'Lato',
                                fontSize: { xs: '1rem', md: '1.4rem' },
                            }}>
                                {item.desc}</ListItem>
                        </List>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}

export default ProfileList;