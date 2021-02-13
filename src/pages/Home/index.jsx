import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

function Home() {

  const state = useSelector(state => state)

  return <h1> Home </h1>
}

export default Home;