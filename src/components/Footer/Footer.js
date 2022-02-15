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
                    <FooterLink href="https://linkedin.com/" target="blank"><i className="fab fa-linkedin"></i> </FooterLink>

                    <FooterLink href="https://instagram.com/" target="blank"><i className="fab fa-instagram"></i> </FooterLink>

                    <FooterLink href="https://facebook.com/" target="blank"><i className="fab fa-faceboock"></i> </FooterLink>

                </Column>
            </Row>
        </Container>
    </Box>
);
};
export default Footer;



