import './App.css';
import Navbar from './components/Navbar'
import Landing from './components/Landing';
import Article from './components/Article';
import Footer from './components/Footer';
import Middle from './components/Middle';
function App() {
  return (
    <>
   <Navbar />
   <Landing/>
   <Middle/>
   <Article/>
   <Footer/>
   </>
  );
}

export default App;
