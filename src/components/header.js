import React from 'react';
import styled from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos/Github';
import { EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline';
import {LinkedinWithCircle} from '@styled-icons/entypo-social/LinkedinWithCircle';
import {device} from './device';

const Title = styled.h1`
font-size: 45px;

color: #3B3C4A;
float: left;
margin: 5px 5px 5px 5px;
padding: 5px 5px 5px 5px;
padding: 5px;
display: flex;
justify-content: center;


`;

const Head = styled.header`
margin: auto;
background: #F4F4ED;
padding: 2px;
height: 75px;
border-bottom: solid #3A7D44;
border-bottom-width: 15px;
flex-direction: column;

@media ${device.mobileL} {
    flex direction: row;
    height: 125px;
};
`;



const Wrapper = styled.section`
padding: 5px;
float: right;
justify-content: center;


`;



const BluGithub = styled(Github)`
color: #72DDF7;
cursor: pointer;
&:hover {
    color: white;
    
}
`;

const CharcoalEmail = styled(EmailOutline)`
color: #3B3C4A;
cursor: pointer;
&:hover {
    color: white;
    
}
`;

const TartLinkedin = styled(LinkedinWithCircle)`
color: #FE4A49;
cursor: pointer;
&:hover {
    color: white;
    
}
`;

const Skill = styled.p`
color: #3B3C4A;
font-size: 25px;
margin: 15px;



`;

const Header = () => {
    return (
        <Head>
            <Title>
                Andy Pedonti
           
            </Title>
           
            
        <Wrapper>
            <BluGithub 
            size="40"
            onClick={event => window.location.href="https://github.com/andypedonti"}
           />
          
            <CharcoalEmail
            size="40" 
            onClick={event => window.location.href="mailto:andy.pedonti@gmail.com"}
            />
            <TartLinkedin
            size="35" 
            onClick={event => window.location.href="https://www.linkedin.com/in/andy-pedonti/"}
            />
           
        </Wrapper>
        </Head>
    );
}

export default Header;