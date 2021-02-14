import React from 'react';
import styled from 'styled-components';

import {portfolioContent} from './portfolioContent';
import DevIcon from "devicon-react-svg";
import {device} from './device';

const PortfolioContainer = styled.body`
background: #F4F4ED;
display: flex;
flex-flow: row wrap;
align-content: flex-start;
position: relative;
justify-content: center;
aling-items: center;
width: 100%;
margin-left:  auto;
margin-right: auto;

`;

const CardWrapper = styled.div`
width: 250px;
height: 250px;
border: solid #124E78;
border-radius: 5px;
margin: 15px;
color: #404E5C;
position: relative;
display: block;
justify-content: center;
aling-items: center;
margin-left:  auto;
margin-right: auto;
;


`;

const Iconheader = styled.header`
background: #F4F4ED;
height: 45px;
width: 100%;
color: #FE4A49;

`;


const CardBody = styled.div`

`;

const StyledIcon = styled(DevIcon)`
height: 20px;
width: 20px;
color: #3B3C4A
`;

const PortfolioItems = () => {
    return(
        
        
        <PortfolioContainer>
        {
            portfolioContent.map((item) =>       
            <CardWrapper>
                <Iconheader>
                    <StyledIcon icon={item.css} />
                    <StyledIcon icon={item.javascript}/>
                    <StyledIcon icon={item.html} />
                    <StyledIcon icon={item.node} />
                    <StyledIcon icon={item.react} />
                    <StyledIcon icon={item.jquery} />
                    <StyledIcon icon={item.mongo} />
                    <StyledIcon icon={item.mysql} />
                    <StyledIcon icon={item.bootstrap}/>
                    <StyledIcon icon={item.npm} />
                    <a style={{color: '#FE4A49'}}href={item.url} target="_blank" rel="noopener noreferrer">
                    <h3>{item.title}</h3>
                    </a>
                    
                </Iconheader>
                <p>{item.description}</p>
                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                        <StyledIcon icon="github_badge" />
                    </a>
            </CardWrapper>
            
            
            )
        }
        </PortfolioContainer>
                
    )
}

export default PortfolioItems;