import * as React from 'react';
import TopNav from '../layouts/TopNav';
import { styled } from '@mui/system';
import Hero from '../layouts/Hero';
import Banner from '../layouts/Banner';
import ProfileList from '../layouts/ProfileList';
import SubHeading from '../layouts/SubHeading';
import WebCards from '../layouts/WebCards';

const HomePage = styled('div')({
    margin: 0,
    backgroundColor: '#100',
    backgroundImage: 'linear-gradient(#000, #4B4453)',
    // height: "100vh",
});

const Home = () => {

    return (

        <HomePage>
            <TopNav />
            <Hero />

            <Banner />
            <ProfileList />
            <SubHeading/>
            <WebCards/>
        </HomePage>
    )
};

export default Home;