import React, { useEffect, useState } from 'react'
import axios from 'axios'

const MovieList = () => {
    const [ records, setRecords] = useState([])

    useEffect(() => {
        axios.get('')
    }, [])

  return (
    <div>MovieList</div>
  )
}

export default MovieList