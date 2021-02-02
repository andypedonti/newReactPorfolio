import React from 'react';
import styled from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos/Github';
import { EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline';
import {LinkedinWithCircle} from '@styled-icons/entypo-social/LinkedinWithCircle';

const Title = styled.h1`
font-size: 45px;

color: #3B3C4A;
float: left;
margin: 5px;
padding: 5px;

`;

const Head = styled.header`
background: #F4F4ED;
height: 75px;
`;



const Wrapper = styled.section`
padding: 5px;
float: right;

`;



const BluGithub = styled(Github)`
color: #72DDF7;
`;

const CharcoalEmail = styled(EmailOutline)`
color: #3B3C4A;
hover: {
    color: white;
}
`;

const TartLinkedin = styled(LinkedinWithCircle)`
color: #FE4A49;
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