
import React from 'react';
import './App.css';
import Row from './Rows';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';
//b176014bf098b4f20048de6e5f9f6ff7
function App() {
  return (
    <div className="App">
    <Nav />
     <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals}
      islargeRow
      />
      <Row title="TRENDING" fetchUrl = {requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl = {requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl = {requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl = {requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl = {requests.fetchHorroMovies} />
      <Row title="ROMANTIC MOVIES" fetchUrl = {requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl = {requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
