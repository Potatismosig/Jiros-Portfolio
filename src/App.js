import Header from "./components/MenuBar";
import FirstPage from "./components/Hello";
import SecondPage from "./components/Projects";
import ThirdPage from "./components/AboutMe";
import "./components/styles.css";
import "./components/responsiv.css"
import './App.css';

function App() {
  return (
      <>
        <header className="page-header">
          <Header></Header>
        </header>
        
      <div className="page-background" id="first-page"></div>
      <main>
        <FirstPage></FirstPage>
        <SecondPage></SecondPage>
        <ThirdPage></ThirdPage>
        </main>
        </>
  );
}

export default App;
