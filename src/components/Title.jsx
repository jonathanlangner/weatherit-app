import data from '../quotes/quotes.json';

const Title = function(){
    const arrOb = Object.values(data);
    const quote = arrOb[Math.round(Math.random()*4)];

    return(
        <div className="page-title-div"><h1 className="page-title">❄️ Intrepid Weather ❄️</h1>
        <p className="description">Adventurous Weather Fun Every Day.</p>
        <p>Daily Encouragement: <br></br> {quote}</p>
        </div>
    );
}

export {Title};