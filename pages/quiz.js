import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Button from '../src/components/Button';
import Card from '../src/components/Card';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import db from '../db.json';

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

export const Image = styled.div`
  width: 100%;
  height:170px;
  padding-top: 45px;
  background-image: url("https://images.unsplash.com/photo-1584744648070-9a8566795411?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80");
  background-position: center;
  background-size: cover;
`;


export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Coronavírus quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Pergunta 1 de 5</h1>
          </Widget.Header>
          <Image />
          <Widget.Content>
            <h1>Por quanto tempo você deve lavar as suas mãos?</h1>
            <Card>
              2 minutos
            </Card>
            <Card>
              20 segundos
            </Card>
            <Card>
              Até ter removido todo o sabão
            </Card>
            <Button>Confirmar</Button>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/r-gruppi/alura-quiz-coronavirus" />
    </QuizBackground>
    );
}
