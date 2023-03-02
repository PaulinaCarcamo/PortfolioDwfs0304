import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Check } from '@mui/icons-material';
import { footer } from '../data/footer.js'

const Box = styled('div')({
    backgroundImage: 'linear-gradient(#4B4453, #000)',
    // backgroundColor: '#070707'
})

const ItemBox = styled('div')({
    display: 'flex',
    justifyContent: 'right',
    alignContent: 'right',
    alignItems: 'right',
    justifyItems: 'right',
    gap: '20px',
    color: '#fff'
})

const Item = styled('div')({
    fontFamily: 'Lato',
    fontSize: '22px',
})

const Footer = () => {
    return (
        <Box
            // sx={{ width: '100%' }}
            sx={{ padding: 15 }}
        >

            <Item sx={{ my: 5, color: '#fff' }}>
                <h1>FOR FURTHER INFORMATION  </h1>
                <h1>SEND ME A MESSAGE</h1>
            </Item>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                columns={{ xs: 4, sm: 6, md: 12 }}
            >

                {footer.map((item) =>
                    <Grid item xs={4} md={4} >
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

export default Footer;