import headerPng from "../../assets/home.png";
import datas from "../../data/logements.json";
import Thumb from "../../components/thumb";

function Home() {
  return (
    <main className="page component home">
      <article>
        <div className="home__illustration">
          <img src={headerPng} alt="" />
          <h1>
            Chez vous,
            <br className="mobile-break" /> partout et ailleurs
          </h1>
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
      </article>
    </main>
  );
}

export default Home;
