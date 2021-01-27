import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.Bg};
  position: relative;

  &:after {
    content: "";
    background-size: auto 500px;
    background-repeat: no-repeat;
    background-position: center 0;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    display: block;
    width: 550px;
    height: 275px;
    border-radius: 275px 275px 0 0;
    position: absolute;
    bottom: 0px;
    left: -250px;
    transform: rotateX('180');
    opacity: 0.2;
    z-index: 1;
  }
  &:before {
    content: "";
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    display: block;
    width: 530px;
    height: 535px;
    position: absolute;
    top: 50%;
    left: 60vw;
    z-index: 1;
    transform: translateY(-50%);
    clip-path: circle(270px);
  }
  *:first-child {
      position: relative;
      z-index: 10;
    }
  @media screen and (max-width: 500px) {
    &:after {
    background-image: none;
    display: none;
    }
    &:before {
      background-size: auto 100%;
      background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.Bg}),
        url(${({ backgroundImage }) => backgroundImage});
      width: 230px;
      height: 210px;
      top: 0;
      right: 0;
      transform: translateY(0%);
      transform: translatex(-50%);
      clip-path: circle(110px);
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
