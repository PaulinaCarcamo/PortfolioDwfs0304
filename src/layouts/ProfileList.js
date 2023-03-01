import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ListItem } from '@mui/material';
import { Check } from '@mui/icons-material';
import { exp } from '../data/exp';
// import Box from '@mui/material/Box';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const Box = styled('div')({
    backgroundImage: 'linear-gradient(#DCDCDC, #EDEDED)',
})

const ItemBox = styled('div')({
    display: 'flex',
    justifyContent: 'right',
    alignContent: 'right',
    alignItems: 'right',
    justifyItems: 'right',
    gap: '20px'
})

const Item = styled('div')({
    fontFamily: 'Lato',
    fontSize: '22px',
})

const ProfileList = () => {
    return (
        <Box
            // sx={{ width: '100%' }}
            sx={{ padding: 15 }}
        >

            <Item sx={{ my: 5 }}>
                <h1>STUDYING TO BECOME A  </h1>
                <h1>FULLSTACK WEB DEVELOPER</h1>
            </Item>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                columns={{ xs: 4, sm: 6, md: 12 }}
            >

                {exp.map((item) =>
                    <Grid item xs={6} >
                        <ItemBox>
                            <Check color='secondary' />
                            <Item>{item.desc}
                            </Item>
                        </ItemBox>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}

export default ProfileList;