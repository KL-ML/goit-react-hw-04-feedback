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
            {options.map(({id, title}) => (
                
                <Button
                    key={id}
                    type="button"
                    name={id}
                    onClick={onLeaveFeedback}
                >
                    {title}
                </Button>
            ))}
        </Box>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};