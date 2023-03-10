import * as React from 'react';
import { styled } from '@mui/material/styles';
import { MailOutline, WhatsApp } from '@mui/icons-material';
import { Button, Grid, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';

import { contact } from '../data/contact.js';
import { badges } from '../data/badges.js'

const Box = styled('div')({
    backgroundImage: 'linear-gradient(#4B4453, #000)',
    fontFamily: 'Blinker',
});

const ItemBox = styled('div')({
    display: 'flex',
    justifyContent: 'right',
    alignContent: 'right',
    alignItems: 'right',
    justifyItems: 'right',
    gap: '1rem',
    color: '#fff'
});

const Item = styled('div')({
    fontSize: '1.5rem',
    color: '#B0B0B0',
    marginBottom: '2rem',
    letterSpacing: '.1rem'
});

const BtnItem = styled('div')({
    display: 'flex',
    gap: '.5rem',
    fontFamily: 'Blinker',
});

const Badges = () => {

    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <Box
            sx={{
                px: { xs: 1, md: 16 },
                pt: { xs: 4, md: 16 },
                pb: { xs: 8, sm: 12, md: 20 }
            }}
        >
            <Item><h2>CONNECT WITH ME</h2></Item>

            {contact.map((item) => (
                <ListItem sx={{ display: { xs: 'block', md: 'flex' }, gap: '1rem', my: 4 }}>

                    <Link to={(`https://wa.me/${item.numb}?text=${item.msg}`)}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button variant='outlined' sx={{ border: '1px solid #009688', color: '#009688', }}>
                            <BtnItem>
                                <WhatsApp />
                                <h4>SEND ME A MESSAGE</h4>
                            </BtnItem>
                        </Button>
                    </Link>

                    <Link to={(`mailto:${item.mail}?subject=${item.msg}&body=${item.desc}`)}
                        style={{ textDecoration: 'none' }}
                    >
                        <Button variant='outlined' sx={{
                            border: '1px solid #9D88B2',
                            color: '#9D88B2',
                            mt: { xs: 1, sm: 0, md: 0 },
                            mx: { xs: 0, sm: 2, md: 0 }
                        }}>
                            <BtnItem>
                                <MailOutline />
                                <h4>SEND ME AN EMAIL</h4>
                            </BtnItem>
                        </Button>
                    </Link>
                </ListItem>
            ))}

            <Grid container rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                columns={{ xs: 4, sm: 6, md: 12 }}
            >
                {badges.map((item) =>
                    <Grid item xs={4} md={4} >
                        <ItemBox>
                            <div data-aos="zoom-in-up">
                                <img src={item.img} style={{ maxHeight: '8vh' }} alt="img"></img>
                            </div>
                            <Item sx={{ fontSize: { xs: '.8rem', md: '1.2rem' } }}>
                                <p>{item.desc}</p>
                            </Item>
                        </ItemBox>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}

export default Badges;