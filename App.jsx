function App() {
  const {useState, useEffect} = React;
  const [image, setImage] = useState([]);
  const [name, setName] = useState("");
  const [habitat, setHabitat] = useState("");
  const [diet, setDiet] = useState("");

  const fetchData = () => {
      fetch ("https://zoo-animal-api.herokuapp.com/animals/rand")
      .then(response => response.json())
      .then(data => {
        setImage(data.image_link),
        setName(data.name),
        setHabitat(data.habitat),
        setDiet(data.diet)
      })
  };
  useEffect(fetchData, []);

  return (
    <div> 
      <img src={image} />
      <h2>Name: {name}</h2>
      <p>Habitat: {habitat}</p>
      <p>Diet: {diet}</p>
      <button onClick={fetchData}>New Animal</button>
    </div>
  );
}

// ========================================
ReactDOM.render(<App />, document.getElementById("root"));
