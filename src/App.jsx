import { BrowserRouter , Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import PageFooter from "./components/PageFooter";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Error from "./components/Error";



function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
       {/* <PageFooter/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
