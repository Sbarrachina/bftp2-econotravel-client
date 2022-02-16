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
                    <NavLink to='/about' activeStyle>
                        <img className="logo_transparente" src="#" />
                    </NavLink>
                    <NavLink to='/experiences' activeStyle>
                        Anucios
                    </NavLink>
                    <NavLink to='/new' activeStyle>
                        New
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