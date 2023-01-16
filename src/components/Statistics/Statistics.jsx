import React from "react";
import PropTypes from "prop-types";
import { Box } from "components/Box";
import { TableTd } from "./Statistics.styled";

export const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
    const statisticsResults = [
        { lable: 'Good:', number: good },
        { lable: 'Neutral:', number: neutral },
        { lable: 'Bad:', number: bad },
        { lable: 'Total:', number: total },
        { lable: 'Positive feedback:', number: positivePercentage },
    ];

    return (
        <Box
            as="table"
            width="100%">
            <tbody>
                {statisticsResults.map(({ lable, number }) => (
                    <tr
                        key={lable}>
                        <TableTd>{lable}</TableTd>
                        <TableTd>{number}</TableTd>
                    </tr>
                ))}
            </tbody>
        </Box>
    );
};

Statistics.propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
};