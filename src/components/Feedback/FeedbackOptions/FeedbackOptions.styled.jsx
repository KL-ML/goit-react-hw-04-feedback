import styled from "@emotion/styled";

export const Button = styled.button`
    background-image: linear-gradient(
        100deg, ${p => p.theme.colors.gradientFrom} 50%, ${p => p.theme.colors.gradientTo}
    );
    border-radius: ${p => p.theme.radii.round};
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[6]}px;
    font-family: ${p => p.theme.fonts.body};
    font-size: ${p => p.theme.fontSizes[1]}px;
    color: ${p => p.theme.colors.light};
    box-shadow: ${p => p.theme.shadows.buttonShadow};
    cursor: pointer;
    transition: scale cubic-bezier(0.01, 0.1, 0.1, 1) 250ms;
    &:hover,
    &:focus {
        scale: 1.03;
    }
`;