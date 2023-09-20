import '../src/index.css'
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import Ticker from './components/Ticker';

// import Marquee from './components/Marquee';

// const raleway = Raleway({ subsets: ['latin'], variable: '--font-inter',
// display: 'swap',})

// const roboto = Roboto_Mono({
//   subsets: ['latin'],
//   variable: '--font-roboto-mono',
//   display: 'swap',
// })

function App() {
  return (
    <div className="w-full"> 
        <Navbar />
        {/* <Marquee /> */}
          <Routes>
            <Route path="/" element={ <Home />}/> {/* 👈 Renders at /app/ */}
            <Route path="/about" element={ <About />}/>
            <Route path="/about" element={ <About />}/>
            <Route path="/about" element={ <About />}/>
            <Route path="/about" element={ <About />}/>
            <Route path="/contact" element={ <Contact />}/>
          </Routes>
        <Ticker />
        <Footer />
    </div>
  )
}
export default App;
