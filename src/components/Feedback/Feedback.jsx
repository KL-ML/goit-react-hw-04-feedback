import React from 'react';
import PropTypes from "prop-types";
import { Box } from "components/Box";
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export const Feedback = ({
    good,
    bad,
    neutral,
    total,
    positivePercentage,
    options,
    countFeedback
}) => {
    return (
        <Box
            bg="background"
            boxShadow="boxShadowSection"
            borderRadius="normal"
            overflow="hidden"
            p={4}
        >
            <Section title="Please leave feedback">
                <FeedbackOptions
                    options={options}
                    onLeaveFeedback={countFeedback} />
            </Section>
            
            <Section title="Statistics">
                {total === 0
                    ? (<Notification message="There is no feedback" />)
                    : (<Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage} />)}
            </Section>
        </Box>
    );
};

Feedback.propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
    options: PropTypes.array,
    countFeedback: PropTypes.func,
};