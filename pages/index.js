import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
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
export default function Home() {
  const router = useRouter();

  const [name, setName] = useState('');

  const handleSubmit = (event)=>{
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  const handleInput = (event)=>{
    setName(event.target.value);
  }

  return (

    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Coronavírus quiz</title>
        <meta property="og:type"  content="website" />
        <meta property="og:url"   content="https://alura-quiz-coronavirus.r-gruppi.vercel.app/" />
        <meta property="og:title" content="Coronavírus quiz" />
        <meta property="og:image" content={db.bg} />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Covid-19</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Teste seus conhecimento sobre o coronavírus</p>
            <form onSubmit={handleSubmit}>
              <input onChange={handleInput} placeholder ="Digite seu nome para jogar"/>
              <button type="submit" disabled={name.length === 0}>
                Jogar
              </button>
            </form>
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
      <GitHubCorner projectUrl="https://github.com/r-gruppi/alura-quiz-coronavirus" />
    </QuizBackground>
  );
}
