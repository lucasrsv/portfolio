import React from 'react'
import './styles/App.scss'
import Header from './scripts/components/header'
import Footer from './scripts/components/footer'
import Routes from './scripts/routes'

function App() {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  )
}

export default App;
