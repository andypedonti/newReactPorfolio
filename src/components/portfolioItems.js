import React from 'react';
import styled from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos/Github';
import {portfolioContent} from './portfolioContent';

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
width: 100%

`;

const IconGithub = styled(Github)`
color: #FE4A49;
`;

const CardBody = styled.div`

`;

const PortfolioItems = () => {
    return(
        
        <div>
        {
            portfolioContent.map((item) =>       
        <PortfolioContainer>
            <CardWrapper>
                <Iconheader>
                <p>{item.title}</p>
                    <IconGithub
                    size="20" />
                </Iconheader>
            </CardWrapper>
            
        </PortfolioContainer>
                
                )
        }
                </div>
    )
}

export default PortfolioItems;