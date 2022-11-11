import React, { useState } from 'react';
/*Has the initial site layout with search bar.*/
const Search = function(){

  const [value, empty] = useState("Search for Town, or City");
  
  const handleChange = event => {
    empty(event.target.value);
  };
  const handleEmpty = function(){
    empty("");
  }

    return(
        <div>
            <div className="page-title-div"><h1 className="page-title">❄️ Intrepid Weather ❄️</h1>
            <p className="description">Adventurous Weather Fun Every Day.</p>
            </div>
            <form>
                <input type="text" value={value} onClick={handleEmpty} onChange={handleChange} className="search-text-box" title="Search for Town, City, or Airport."
                />
                <input type="submit" value="Search" className="search-btn" title="Search" />
            </form>
      </div>
    );
}



export {Search};