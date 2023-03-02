import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Check } from '@mui/icons-material';
import { footer } from '../data/footer.js'
import { Grid } from '@mui/material';

import AOS from 'aos';

const Box = styled('div')({
    backgroundImage: 'linear-gradient(#4B4453, #000)',
})

const ItemBox = styled('div')({
    display: 'flex',
    justifyContent: 'right',
    alignContent: 'right',
    alignItems: 'right',
    justifyItems: 'right',
    gap: '1rem',
    color: '#fff'
})

const Item = styled('div')({
    fontFamily: 'Lato',
    fontSize: '22px',
    color: '#fff',
    marginBottom: '2rem'
})

const Footer = () => {

    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <Box
            sx={{
                px: { xs: 0, md: 16 },
                pt: { xs: 0, md: 16 },
                pb: { xs: 4, md: 20 }
            }}
        >
            <Item>
                <h2>FOR FURTHER INFORMATION  </h2>
                <h2>SEND ME A MESSAGE</h2>
            </Item>

            <Grid container rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                columns={{ xs: 4, sm: 6, md: 12 }}
            >
                {footer.map((item) =>
                    <Grid item xs={4} md={4} >
                        <ItemBox>
                            <div data-aos="flip-left">
                                <Check color='secondary' />
                            </div>
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