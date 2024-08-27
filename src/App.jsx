import './App.css';
import Header from "./Components/Header/Header";
import MyThemeProvider from "./providers/ThemeProvider";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <MyThemeProvider>
      <Header />
      <Home />
    </MyThemeProvider>
  );
}

export default App;
