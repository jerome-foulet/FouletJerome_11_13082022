import datas from "../../data/logements.json";
import Thumb from "../../components/thumb";

function Home() {
  return (
    <div className="home">
      <div className="home__illustration">
        <span>Chez vous, partout et ailleurs</span>
      </div>
      <div>
        <ul>
          {datas.map((loc) => (
            <Thumb key={loc.id} id={loc.id} label={loc.title} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
