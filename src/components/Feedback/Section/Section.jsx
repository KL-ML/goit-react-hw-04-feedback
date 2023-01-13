import React from "react";
import PropTypes from "prop-types";
import { Box } from "components/Box";
import { Header } from "./Section.styled";

export const Section = ({ title, children }) => (
    <Box as="section" >
        <Header>{title}</Header>
        {children}
    </Box>
);

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
};