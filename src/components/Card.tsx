type TypeBeer = {
  first_brewed: string,
  abv: number,
  ibu: number,
  name: string,
  target_og: number,
  image_url: string,
  ingredients: {
    hops: typeIngredient[],  
    malt: typeIngredient[], 
    yeast: string 
  }
}

type typeIngredient = {
  name : string
}

const Card = ({ beer } : {beer: TypeBeer}) => {

  // Removes duplicate hop or malt and from array and lists out as seperate divs
  const ingredientList = (hopOrMalt : typeIngredient[]) => {
    const ingredients = hopOrMalt.map((ingredient) => ingredient.name);
    const filtered = ingredients.filter(
      (ingredient, index) => ingredients.indexOf(ingredient) === index
    );
    return filtered.map((ingredient) => {
      return <div key={ingredient}>{ingredient}</div>;
    });
  };

    // Converts numeric month to string
    const dateStr = () => {
      const brewed = beer.first_brewed.split("/");
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      brewed[0] = months[Number(brewed[0]) - 1];
      return brewed.join(" ");
    };

  return (
    <div className="card">
      <div className="cardContent">


        <div className="cardTop">
            <h3 className="cardTitle">{beer.name}</h3>
            <div className="stats">
              <div className="stat">{beer.abv ? `ABV: ${beer.abv}%` : null}</div>
              <div className="stat">{beer.ibu ? `IBU: ${beer.ibu}` : null}</div>
              <div className="stat">
                {beer.target_og
                  ? `OG: ${(beer.target_og / 1000).toFixed(3)}`
                  : null}
              </div>
            </div>
        </div>

        <div className="cardCenter">
          <div className="cardLeft">
            <div className="imageContainer">
              <img
                src={
                  beer.image_url
                    ? beer.image_url
                    : "https://images.punkapi.com/v2/keg.png"
                }
              />
            </div>
          </div>

          <div className="cardRight">
            <div className="ingredients">
              <div className="cardTitle">Hops:</div>
              {ingredientList(beer.ingredients.hops)}
            </div>

            <div className="ingredients">
              <div className="cardTitle">Malt:</div>
              {ingredientList(beer.ingredients.malt)}
            </div>

            <div className="ingredients">
              <div className="cardTitle">Yeast:</div>
              <div>{beer.ingredients.yeast}</div>
            </div>
          </div>
        </div>

        <div className="cardBottom">
          <div>{`First Brewed: ${dateStr()}`}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
