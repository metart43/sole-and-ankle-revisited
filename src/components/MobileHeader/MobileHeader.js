import React from "react";
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import styled from 'styled-components/macro';

const MobileHeader = ({ setShowMobileMenu }) => {
  
  return (
    <Wrapper>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={2} size={24} />
      </UnstyledButton>
      <UnstyledButton>
        <Icon id="search" strokeWidth={2} size={24} />
      </UnstyledButton>
      <UnstyledButton onClick={() => setShowMobileMenu(true)}>
        <Icon id="menu" strokeWidth={2} size={24} />
      </UnstyledButton>
    </Wrapper>
  );

}
  const Wrapper = styled.div`
    display: none;

    @media ${props => props.theme.queries.tabletAndSmaller} {
      gap: 40px;
      display: flex;
    }
    
    @media ${props => props.theme.queries.phoneAndSmaller} {
      gap: 24px;
    }
  `;

export default MobileHeader;
