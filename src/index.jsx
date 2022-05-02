import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Freelances from './pages/Freelances'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
      margin: 0;
    }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route path="/" element={<Freelances />}/>
        </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)