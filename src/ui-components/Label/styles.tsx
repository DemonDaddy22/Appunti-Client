import styled from 'styled-components';

export const StyledLabel = styled.div`
    color: ${(props: IColor) => props.color};
    font-size: 0.8rem;
    letter-spacing: -0.25px;
    transition: color 0.25s;
`;
