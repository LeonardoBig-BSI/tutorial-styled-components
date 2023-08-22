
import styled from 'styled-components';
import ButtonComponent from './ButtonComponent';

export const Button = styled.button`

    background-color: ${(prop) => prop.backgroundColor};
    width: 180px;
    height: ${({ theme }) => theme.size.xxl};

    &:hover {
        background-color: green;
    }
`;

// Estilizando um componente já existente -> ButtonComponent.jsx
export const Button2 = styled(ButtonComponent)`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 180px;
    height: 60px;
`;