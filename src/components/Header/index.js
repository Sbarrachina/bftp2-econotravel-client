import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/' activeStyle>
                        <img className="logo_transparente" src="assets/logoecoT.png" />
                    </NavLink>
                    <NavLink to='/experiences' activeStyle>
                        Experiences
                    </NavLink>
                    <NavLink to='/new' activeStyle>
                        New
                    </NavLink>

                    <NavLink to='/sign-up' activeStyle>
                        Sign Up
                    </NavLink>

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;