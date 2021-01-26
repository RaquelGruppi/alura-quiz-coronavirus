import styled from 'styled-components'
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import db from '../db.json';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    margin-top: 100px;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg} >
      <QuizContainer>
      <Widget>
        <Widget.Header>
          <h1>Coviv-19</h1>
        </Widget.Header>
        <Widget.Content>
          <p>Teste seus conhecimento sobre o coronavírus</p>
        </Widget.Content>
      </Widget>
      <Widget>
        <Widget.Content>
          <h1>Quizes da galera</h1>
          <p>Texto</p>
        </Widget.Content>
      </Widget>
      <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="http://github.com/r-gruppi"/>
    </QuizBackground>)
}
