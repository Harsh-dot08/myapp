import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';

function App() {
  return (
    <>
    {/*<Navbar name="Textutils" home="Home" about="About Textutils"/>*/}
    <Navbar name="Textutils" home="Home" about="About Textutils"/>
    <div className="container my-3">
    <Textform heading="Enter Text to analyze"></Textform>
    </div>
    <About></About>
    
    </>
  );
}

export default App;
