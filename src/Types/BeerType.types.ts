type BeerType = {
    id: number,
    srm: number,
    ph: number,
    attenuation_level: number,
    tagline: string,
    description: string,
    brewers_tips: string,
    first_brewed: string,
    abv: number,
    ibu: number,
    name: string,
    target_fg: number,
    target_og: number,
    image_url: string,
    food_pairing: string[],
    ingredients: {
      malt: {
        name: string,
        amount: {
          value: number,
          unit: string
        }
      }[],
      hops: {
        name: string,
        amount: {
          value: number,
          unit: string
        },
        add: string,
        attribute: string
      }[],
      yeast: string
    },
    method: {
      twist: string,
      fermentation: {
        temp: {
          value: number,
          unit: string
        }
      },
      mash_temp: {
        duration: number,
        temp: {
          value: number,
          unit: string
        }
      }[],
    },
    volume: {
      value: number,
      unit: string
    },
    boil_volume: {
      value: number,
      unit: string
    },
  }
  
export default BeerType