import { useState } from "react";
import { ImageSlider } from "./ImageSlider";

const AkshaySainiProject = ({ countryName }) => {
  const [name, setName] = useState("Deepika");
  //let name1 = "Tony Stark"; // Not rendered on change
  return (
    <div>
      <h1>
        Hello, {name} from {countryName}
      </h1>
      <button onClick={() => setName("Simran")}>Change Name</button>
      <ImageSlider />
    </div>
  );
};

export default AkshaySainiProject;
