import styled from 'styled-components';

const Button = styled.button`
  width:100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.colors.contrastText};
  font-size: 14px;
  font-weight: 400;

  &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.secondaryOn};
    }
    &:disabled{
        cursor: not-allowed;
        opacity: 0.4;
    }
`;

export default Button;

