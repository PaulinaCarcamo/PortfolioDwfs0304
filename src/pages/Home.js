import * as React from 'react';
import { styled } from '@mui/system';
import { HashLink } from 'react-router-hash-link';

import Header from '../layouts/Header.js';
import Profile from '../layouts/Profile.js';
import Projects from '../layouts/Projects.js';
import Footer from '../layouts/Footer.js';

const HomePage = styled('div')({
    margin: 0,
});

{/* <HashLink to="/some/path#with-hash-fragment">Link to Hash Fragment</HashLink> */}

const Home = () => {
    return (
        <HomePage>
            <Header />
            <Profile id='/#profile' />
            <Projects />
            <Footer />
        </HomePage>
    );
}

export default Home;