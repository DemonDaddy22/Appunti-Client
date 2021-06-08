import styled from 'styled-components';

export const StyledInput = styled.input`
    background: transparent;
    border: 1px solid ${(props: IColors) => props.borderColor};
    border-radius: 4px;
    font-size: 1rem;
    margin: 0.25rem 0;
    outline: none;
    padding: 0.5rem;
    width: 100%;
    transition: border 0.25s;

    &:hover {
        border-color: rgba(${(props: IColors) => props.borderColor}, 0.4);
    }
`;
