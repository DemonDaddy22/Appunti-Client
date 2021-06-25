import styled from 'styled-components';

export const StyledLabel = styled.div`
    color: ${(props: IColor) => props.color};
    font-size: 0.8rem;
    letter-spacing: -0.25px;
    text-align: initial;
    transition: color 0.25s;

    @media (min-width: 900px) {
        font-size: 0.85rem;
    }

    @media (min-width: 1500px) {
        font-size: 0.9rem;
    }
`;
