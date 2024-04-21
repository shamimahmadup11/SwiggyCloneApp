import React from 'react';
import Restrountcart from './Restrountcart';
import '../body.css';
import { useState } from 'react';
export default function Body({ data }) {

  const [searchText, setsearchText] = useState("");
  const [restraunt, setrestraunt] = useState(data)


  function filterData(searchText, restraunt) {
    return restraunt.filter((data) => {
      return data.name.includes(searchText);
    });
  }


  return (
    <div className="Body">
      <div className="searchContainer">
        <input type="text" className='inputText' value={searchText} placeholder='Search' onChange={(e) => {
          setsearchText(e.target.value);
        }} />
        <button className='SearchBtn' onClick={() => {
          const data = filterData(searchText, restraunt)
          setrestraunt(data)
        }} >Search</button>
      </div>
      <div className="restrountList">
        {restraunt.map((restrorent) => (
          <Restrountcart key={restrorent.name} {...restrorent} />
        ))}
      </div>
    </div>
  );
}
