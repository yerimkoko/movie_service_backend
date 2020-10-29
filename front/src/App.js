import React, {useState, useEffect } from "react";
import axios from 'axios';

function App() {
    const [movies, setMovies] = useState([]);
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

    // 서버에다가 만든 영화 등록 api를 호출해야됨

    axios.post('http://localhost:8000/movie', {
      name: name,
      price: price
    }).then ((response) => {
      console.log(response);
    }).catch((error) => {
      window.alert("에러가 발생")
    })
    
    setMovies(
      movies.concat({
        name: name,
        price: price,
      })
    );
  };
  
  const searchOnClick = () => {
    axios.get('http://localhost:8000/movie')
    .then((response) => {
      setMovies(response.data)
      console.log(response);
    })
  }
  
  useEffect(() => {
    axios.get('http://localhost:8000/movie')
    .then((response) => {
      setMovies(response.data)
      console.log(response);
  })
},[])
    return (
      <div>
        <h2>등록된 영화 리스트!</h2>
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <ul>
                <li>영화 제목 : {movie.name}</li>
                <li>영화 가격 : {movie.price}</li>
                <button>삭제</button>
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
      <button onClick={searchOnClick}>조회하기</button>
    </div>
  );
}
  
        

export default App;
