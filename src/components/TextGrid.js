import * as React from 'react';
import { Grid, ListItem } from '@mui/material';
import { Check } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import AOS from 'aos';

import { paragraph } from '../data/paragraph.js';

const Box = styled('div')({
    backgroundColor: '#fff',
    fontFamily: 'Blinker'
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
    color: '#575757',
});

const TextGrid = () => {

    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <Box sx={{
            px: { xs: 0, md: 16 },
            pt: { xs: 0, md: 2 },
            pb: { xs: 4, md: 8 }
        }}>

            <Item sx={{
                fontSize: { xs: '1rem', md: '1.5rem' },
                mx: { xs: 2, md: 0 }
            }}>
                <h1>MY ROAD TO BECOMING A  </h1>
                <h1>FULLSTACK WEB DEVELOPER</h1>
            </Item>

            <Grid container rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                columns={{ xs: 4, sm: 6, md: 12 }}
                sx={{
                    pt: { xs: 2, md: 6 },
                    pr: { xs: 4, md: 0 }
                }}
            >
                {paragraph.map((item) =>
                    <Grid item xs={6}  >
                        <List>
                            <div data-aos="flip-left">
                                <Check color='secondary' />
                            </div>
                            <ListItem sx={{
                                padding: 0,
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

export default TextGrid;