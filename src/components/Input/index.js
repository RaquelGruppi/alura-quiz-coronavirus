import styled from 'styled-components';

const Input = styled.input`
  width:100%;
  height: 40px;
  background-color: transparent;
  border: 1px solid rgba(250,250,250,0.5);
  padding: 0 20px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin: 32px auto 24px;
  color: ${({ theme }) => theme.colors.contrastText};

`;

export default Input;

