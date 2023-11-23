import { useState } from "react"

const Filters = () => {
    const [filterMode, setFilterMode] = useState(false)
    const [filters, setFilters] = useState(
        {maxABV : -1}
    )


  if (filterMode) return (
    <div>
        <button onClick={() => setFilterMode(!filterMode)}>Filters</button>
        <div className="filters">
            {/* <input type="number" value={} onChange={ev => setFilters({...filters, maxABV: ev.target.value})}/> */}
        </div>
    </div>
  )

  return (
    <div>
        <button onClick={() => setFilterMode(!filterMode)}>Filters</button>
    </div>
  )
}

export default Filters