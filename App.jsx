function App() {
  const {useState, useEffect} = React;
  const [image, setImage] = useState(() => localStorage.getItem("image"));
  const [name, setName] = useState(() => localStorage.getItem("name"));
  const [habitat, setHabitat] = useState(() => localStorage.getItem("habitat"));
  const [diet, setDiet] = useState(() => localStorage.getItem("diet"));

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

  useEffect(()=> {
    localStorage.setItem("image", image)
  }, [image]);

  useEffect(()=> {
    localStorage.setItem("name", name)
  }, [name]);

  useEffect(()=> {
    localStorage.setItem("habitat", habitat)
  }, [habitat]);

  useEffect(()=> {
    localStorage.setItem("diet", diet)
  }, [diet]);

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
