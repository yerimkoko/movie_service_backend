import React, {useState} from "react";

function App() {
    const [movies, setMovies] = useState([
      {name : "영화1", price: 5000},
      {name : "영화2", price: 3000},
    ]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

  // Event
  const nameOnChange = (event) => {
    setName(event.target.value);
  };
  const priceOnChange = (event) => {
    setPrice(event.target.value);
  };


  const buttonOnClick = () => {
    console.log("name", name);
    console.log("price",price);
    
    setMovies(
      movies.concat({
        name: name,
        price: price,
      })
    );
  };
    
  
    return (
      <div>
        <h2>등록된 영화 리스트!</h2>
        {movies.map((movie) => {
          return (
            <div>
              <ul>
                <li>영화 제목 : {movie.name}</li>
                <li>영화 가격 : {movie.price}</li>
              </ul>

            </div>
          );
        })}
        <h2>등록된 영화 리스트!</h2>
      <div>
        <span>이름 : </span>
        <input type="text" value={name} onChange={nameOnChange}></input>
      </div>
      <div>
        <span>가격 : </span>
        <input type="number" value={price} onChange={priceOnChange}></input>
      </div>
      <button onClick={buttonOnClick}>등록하기</button>
    </div>
  );
}
  
        

export default App;
