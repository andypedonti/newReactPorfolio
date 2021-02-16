import React from 'react';
import styled from 'styled-components';

const Projects = styled.div`
background: #F4F4ED;
justify-content: center;
align-items: center;
`;

const Words = styled.h1`
color: #124E78;
font-size: 35px; 
margin: auto;
justify-content: center;
align-items: center;
text-align: center;
`;

const Project = () => {
    return (
        <Projects>
            <Words>Projects</Words>
        </Projects>
    );
}

export default Project; 