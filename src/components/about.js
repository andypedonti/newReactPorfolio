import React from 'react';
import styled from 'styled-components';
import img from '../components/pics/018.jpg';
import {device} from './device';

const About = styled.div`
display: flex;
flex-direction: row;
border-top: solid #6A3E37;
padding: 15px;
background: #F4F4ED;

@media ${device.tablet} {
    flex-direction: column;
    align-content: center;
}




`;

const Text = styled.div`
color: #3B3C4A;
padding: 15x;
font-size: 20px;
border: solid #031D44;
margin: 22.5px:


`;

const Image = styled.div`
margin: 15px;

@media ${device.tablet} {
    float: center;
}


`;

const AboutMe = () => {
    return(
        <About>
            <Image>
            <img src={img} alt="samspic" height={"200px"} width={"150px"}  />
            </Image>
            <Text>
                <p>
                I am a leader and team builder with 14 years experience in the landscape industry seeking an opportunity to do the same as a full stack developer. I enrich people's lives by teaching the skills and ethics needed to advance in their career. I hope to continue this leadership and enrichment through coding and web development to enhance the life and prosperity of others whether it be through teamwork or thoughtful content delivered through user friendly interfaces. I have a Bachelor's Degree in Landscape Contracting and Management and have recently graduated for Full Stack Bootcamp at UNC Chapel Hill.
                </p>
            </Text>
        </About>
    );
}

export default AboutMe;