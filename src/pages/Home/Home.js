import CurrentNews from "../../components/CurrentNews/CurrentNews";
import Search from "../../components/Search/Search";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Search />
      <CurrentNews />
    </div>
  );
};

export default Home;
