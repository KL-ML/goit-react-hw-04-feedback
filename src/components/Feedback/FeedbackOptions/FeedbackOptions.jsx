import { Box } from "components/Box";
import PropTypes from "prop-types";
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
    return (
        <Box
            display="flex"
            justifyContent="space-around"
            mb={5}
        >
            {options.map((option) => (
                
                <Button
                    key={option}
                    type="button"
                    onClick={onLeaveFeedback}
                >
                    {option}
                </Button>
            ))}
        </Box>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};