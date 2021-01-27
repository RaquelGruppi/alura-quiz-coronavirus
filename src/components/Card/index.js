import styled from 'styled-components';

const Card = styled.div`
  width:100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.secondBg};
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.colors.contrastText};
  margin-top: 8px;

  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 20px;
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 14px;
    font-weight: 400;
    border-radius: 4px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.Text};
        color: ${({ theme }) => theme.colors.mainBg};
    }
  }
`;

export default Card;

