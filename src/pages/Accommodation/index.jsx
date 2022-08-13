import { useParams } from "react-router-dom";

function Accommodation() {
  let { id } = useParams();
  return <div>Accommodation page for id : {id}</div>;
}

export default Accommodation;
