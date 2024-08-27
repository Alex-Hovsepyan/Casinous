import HomeTop from "./Components/HomeTop/HomeTop";
import AboutCasino from "../../Components/AboutCasino/AboutCasino";
import img from '../../assets/images/AboutCasinoImg.png';

const Home = () => {
  return (
    <div style={{overflowX: 'hidden'}}>
      <HomeTop />
      <AboutCasino text='A casino is a facility for certain types of gambling. Casinos are often built near or combined
       with hotels, resorts, restaurants, retail shopping, cruise ships, and other tourist attractions.
       Some casinos are also known for hosting live entertainment, such as stand-up comedy, concerts, and sports.' btn='know more' img={img} />
    </div>
  )
}

export default Home