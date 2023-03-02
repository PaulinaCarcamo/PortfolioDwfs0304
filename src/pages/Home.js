import * as React from 'react';
import TopNav from '../layouts/TopNav';
import { styled } from '@mui/system';
import Hero from '../layouts/Hero';
import Banner from '../layouts/Banner';
import ProfileList from '../layouts/ProfileList';
import SubHeading from '../layouts/SubHeading';
import WebCards from '../layouts/WebCards';
// import Badges from '../layouts/Badges';
import { Box } from '@mui/material';
import Footer from '../layouts/Footer';
import Others from '../layouts/Others';

const HomePage = styled('div')({
    margin: 0,
    // backgroundImage: 'linear-gradient(#000, #4B4453)',
    // height: "100vh",
});

const Home = () => {

    return (

        <HomePage>

            <Box sx={{height: '100vh'}}>
            <TopNav />
            <Hero />
            </Box>

            <Banner />
            <ProfileList />
            {/* <Badges/> */}
            <Others/>
            <WebCards/>


            <SubHeading/>
            <Footer/>
  
        </HomePage>
    )
};

export default Home;