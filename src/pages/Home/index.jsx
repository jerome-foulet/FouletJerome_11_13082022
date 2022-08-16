import headerPng from "../../assets/home.png";
import datas from "../../data/logements.json";
import Thumb from "../../components/thumb";

function Home() {
  return (
    <div className="page home">
      <div className="home__illustration">
        <img src={headerPng} alt="" />
        <p>
          Chez vous,
          <br className="mobile-break" /> partout et ailleurs
        </p>
      </div>
      <div className="home__thumbs">
        <ul>
          {datas.map((loc) => (
            <Thumb
              key={loc.id}
              id={loc.id}
              label={loc.title}
              cover={loc.cover}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
