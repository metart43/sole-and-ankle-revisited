/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="menu">
        <ButtonWrapper>
          <DismissButton onClick={onDismiss}>
            <VisuallyHidden>Dismiss Menu</VisuallyHidden>
            <Icon id="close" />
          </DismissButton>
        </ButtonWrapper>
        <Nav>
          <NavItem active href="/sale">Sale</NavItem>
          <NavItem href="/new">New&nbsp;Releases</NavItem>
          <NavItem href="/men">Men</NavItem>
          <NavItem href="/women">Women</NavItem>
          <NavItem href="/kids">Kids</NavItem>
          <NavItem href="/collections">Collections</NavItem>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const ButtonWrapper = styled.div`
  position: relative;
`;

const DismissButton = styled(UnstyledButton)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 32px 22px;
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
`;

const Content = styled(DialogContent)`
  background-color: white;
  width: 300px;
  position: fixed;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-left: 32px;
`;

const Footer = styled.footer`
  margin: 0 0 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const NavItem = styled.a`
  text-transform: uppercase;
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: ${props => props.theme.wieght.medium};
  color: ${props => props.active ? props.theme.colors.secondary : props.theme.colors.gray[900]};
`;

const FooterLink = styled.a`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.gray[700]};
  text-decoration: none;
`;
export default MobileMenu;
