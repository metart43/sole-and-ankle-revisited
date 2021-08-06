import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import MobileHeader from '../MobileHeader';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileHeader setShowMobileMenu={setShowMobileMenu} />
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};


const MainHeader = styled.div`

  overflow: auto;
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--gray-300);;

  @media ${props => props.theme.queries.phoneAndSmaller} {
    padding: 18px 16px;
  }

  @media ${props => props.theme.queries.tabletAndSmaller} {
    border-top: 4px solid var(--gray-900);;
  }
`;

const Nav = styled.nav`

  display: flex;
  gap: clamp(
    1rem,
    7.9vw - 3.75rem,
    3.5rem
  );
  margin: 0px 48px;

@media ${props => props.theme.queries.tabletAndSmaller} {
  display: none;
}
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);;
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--secondary-color);
  }
`;

export default Header;
