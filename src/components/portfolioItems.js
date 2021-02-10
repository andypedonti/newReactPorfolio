import React from 'react';
import styled from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos/Github';
import {portfolioContent} from './portfolioContent';
import DevIcon from "devicon-react-svg";

const PortfolioContainer = styled.body`
background: #F4F4ED;
`;

const CardWrapper = styled.div`
width: 250px;
height: 250px;
border: solid #031D44;
border-radius: 5px;
;


`;

const Iconheader = styled.header`
background: #72DDF7;
height: 45px;
width: 100%;
color: #3B3C4A

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
                <p>{item.title}</p>
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
                    
                    
                </Iconheader>
            </CardWrapper>
            
            
            )
        }
        </PortfolioContainer>
                
    )
}

export default PortfolioItems;