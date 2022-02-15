import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
return (
    <Box>

        <Container>
            <Row>
                <Column>

                    <FooterLink href="#">About Us</FooterLink>

                </Column>

                <Column>

                    <FooterLink href="#">Contact Us</FooterLink>

                </Column>
                <Column>
                    <FooterLink href="#">Social media</FooterLink>
                    <img className="logo_twitter" src="assets/twitter_logo.png" />



                </Column>
            </Row>
        </Container>
    </Box>
);
};
export default Footer;



