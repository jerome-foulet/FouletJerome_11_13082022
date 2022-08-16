import { useParams } from "react-router-dom";
import datas from "../../data/logements.json";
import Gallery from "../../components/gallery";
import TagList from "../../components/tagList";
import Stars from "../../components/stars";
import Collapse from "../../components/collapse";

function Accommodation() {
  let { id } = useParams();
  const accommodation = datas.filter((elt) => elt.id === id)[0];
  return (
    <div className="page accommodation">
      <Gallery arrayOfImg={accommodation.pictures} />
      <div className="accommodation__informations">
        <div className="accommodation__infos">
          <p>{accommodation.title}</p>
          <p>{accommodation.location}</p>
          <TagList
            listOfTags={accommodation.tags}
            accommodationId={accommodation.id}
          />
        </div>
        <div className="accommodation__infosPlus">
          <Stars rating={parseInt(accommodation.rating)} />
          <div className="accommodation__infosPlus--host">
            <p>{accommodation.host.name}</p>
            <img
              src={accommodation.host.picture}
              alt={accommodation.host.name}
            />
          </div>
        </div>
      </div>
      <div className="accommodation__collapse">
        <Collapse title="Description">{accommodation.description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {accommodation.equipments.map((item) => (
              <li key={accommodation.id + "_" + item}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Accommodation;
