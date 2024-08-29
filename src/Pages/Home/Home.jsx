import HomeTop from "./Components/HomeTop/HomeTop";
import AboutCasino from "../../Components/AboutCasino/AboutCasino";
import HomeGames from "./Components/HomeGames/HomeGames";

const Home = () => {
  return (
    <div style={{overflowX: 'hidden'}}>
      <HomeTop/>
      <AboutCasino section='home'/>
      <HomeGames/>
    </div>
  )
}

export default Home