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
            <div className="options">
              <button className="btn" title="Units: Imperial" > Units: Imperial</button>
              <button className="btn" title="Units: Metric" > Units: Metric</button>
            </div>
            <form>
                <input type="submit" value="🔍 Search" id="search-btn" title="Search" />
                <input type="text" value={value} onClick={handleEmpty} onChange={handleChange} className="search-text-box" title="Search for Town, City, or Airport."
                />
                
            </form>
            <div className="options">
              <button type="button" className="btn" title="Current Conditions">Current Conditions</button> 
              <button type="button" className="btn" title="3 Day Forecast">3 Day Forecast</button>
            </div>
            
      </div>
    );
}



export {Search};