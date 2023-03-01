import * as React from 'react';
import TopNav from "../layouts/TopNav";
import { styled } from '@mui/system';
import Hero from '../layouts/Hero';


const HomePage = styled('div')({
    margin: 0,
    backgroundColor: '#000',
    height: '100vh',
});

const Home = () => {
    return (

        <HomePage>
            <TopNav />
            <Hero />
        </HomePage>
    )
};

export default Home;