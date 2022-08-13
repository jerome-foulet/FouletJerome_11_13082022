import { useParams } from "react-router-dom";
import datas from "../../data/logements.json";
import Gallery from "../../components/gallery";
import Tag from "../../components/tag";
import Stars from "../../components/stars";
import Collapse from "../../components/collapse";

function Accommodation() {
  let { id } = useParams();
  const accommodation = datas.filter((elt) => elt.id === id)[0];
  return (
    <div className="page accommodation">
      <Gallery arrayOfImg={accommodation.pictures} />
      <p>{accommodation.title}</p>
      <p>{accommodation.location}</p>
      <div>
        {accommodation.tags.map((tag) => (
          <Tag key={accommodation.id + tag} label={tag} />
        ))}
      </div>
      <Stars rating={parseInt(accommodation.rating)} />
      <div>
        <p>{accommodation.host.name}</p>
        <img src={accommodation.host.picture} alt={accommodation.host.name} />
      </div>
      <Collapse title="Description" content={accommodation.description} />
      <Collapse
        title="Équipements"
        content={accommodation.equipments.join(" / ")}
      />
    </div>
  );
}

export default Accommodation;
