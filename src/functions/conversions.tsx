import BeerType from "../Types/BeerType.types"

type conversionType = {
    value: number,
    unit: string
}

const litresToGallons = (object : conversionType) => {
    if (object.unit === 'gallons') return {
      value : Math.round(object.value * 3.78541),
      unit : 'litres'
    }
    return ({
      value : object.value * 0.264172,
      unit : 'gallons'
    } )
  }

  const gramsToOunces = (object : conversionType) => {
    if (object.unit === 'ounces') return {
      value: parseFloat((object.value * 28.3495).toFixed(1)),
      unit: 'grams'
    }
    return {
      value: object.value * 0.035274,
      unit: 'ounces'
    }
  }

  const kgToPounds = (object : conversionType) => {
    if (object.unit === 'pounds') return {
      value: parseFloat((object.value * 0.453592).toFixed(1)),
      unit: 'kilograms'
    }
    return {
      value: object.value * 2.2046,
      unit: 'pounds'
    }
  }

  const celsiusToF = (temp : conversionType) => {
    if (temp.unit === 'fahrenheit') return {
      value: Math.round((temp.value - 32) * 5 / 9),
      unit: 'celsius'
    }
    return {
      value: temp.value * 9 / 5 + 32,
      unit: 'fahrenheit'
    }
  }

  const conversions = (beer : BeerType) => {
    beer.boil_volume = litresToGallons(beer.boil_volume);
      beer.volume = litresToGallons(beer.volume);
      beer.ingredients.hops.map(hop => {
        hop.amount = gramsToOunces(hop.amount)
        return hop
      })

      beer.ingredients.malt.map(_malt => {
        _malt.amount = kgToPounds(_malt.amount)
        return _malt
      })

      beer.method.fermentation.temp = celsiusToF(beer.method.fermentation.temp)
      beer.method.mash_temp.map(mash => {
        mash.temp = celsiusToF(mash.temp)
        return mash
      })
    return beer;
  }

  export default conversions