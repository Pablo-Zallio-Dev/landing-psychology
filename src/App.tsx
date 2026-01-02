import Header from './components/common/Header'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import About from './components/pages/About'
import BtnBack from './components/ui/BtnBack'
import Review from './components/pages/Review'
import Quote from './components/pages/Quote'
import Contact from './components/pages/Contact'
import Footer from './components/common/Footer'

function App() {
  return (
    <div className=' font-roboto leading-none '>
      <Header />
      <main>
        <Home />
        <Services />
        <About />
        <Review />
        <BtnBack />
        <Quote />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App