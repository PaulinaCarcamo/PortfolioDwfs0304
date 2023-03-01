import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { tech } from '../data/tech';
import { ListItem } from '@mui/material';

const Box = styled('div')({
    // margin: 0,
    backgroundColor: '#DFE0DF',
    // backgroundImage: 'linear-gradient(#000, #4B4453)',
    // height: '100vh',
});

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const Banner = () => {
    return (
        <Box
        // sx={{ flexGrow: 1 }}
        >
            <Grid container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 12, md: 20 }}
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
                            {/* <img src='https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png'></img> */}
                        </ListItem>
                    </Grid>
                ))}
                {/* ))} */}
            </Grid>
        </Box>
    );
}

export default Banner;