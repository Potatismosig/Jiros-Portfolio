import Header from "./components/MenuBar";
import FirstPage from "./components/Hello";
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
        </main>
        </>
  );
}

export default App;
