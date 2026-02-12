import './App.css'
import Header from './components/Header.jsx'
import LandingPage from './components/LandingPage.jsx'
import FooterPage from './components/FooterPage.jsx'

function App() {

  return (
    <div className='bg-black px-25'>
      <Header />
      <LandingPage />
      <FooterPage />
    </div>
  )
}

export default App