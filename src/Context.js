import React from 'react'
import { useState } from 'react';
import data from './assets/data'
import { useEffect } from 'react';


const MyContext = React.createContext();



function Context({ children }) {


  const [filterKeys, setFilterKeys] = useState([])

  const [suggestions, setSuggestions] = useState(new Set())

  const [jobList, setJobList] = useState(data)

  const [searchInput, setSearchInput] = useState("")

  useEffect(() => {

    const possibleKeywords = new Set(suggestions)

    jobList.forEach((obj) => {

      let keywords = [obj.role, obj.position, obj.level, ...obj.languages, ...obj.tools]

      keywords.forEach(key => {
        possibleKeywords.add(key)
      })
    })

    setSuggestions(possibleKeywords)

  }, [jobList])

  useEffect(() => {
    if (filterKeys.length === 0) {
      setJobList(data)
    } else {
      const newData = []

      data.forEach(obj => {

        let keywords = [obj.role, obj.position, obj.level, ...obj.languages, ...obj.tools]

        let valid = true

        filterKeys.forEach(key => {
          if (!keywords.includes(key)) {
            valid = false
          }
        })

        if (valid) {
          newData.push(obj)
        }

      })

      setJobList(newData)
    }
  }, [filterKeys])






  return (
    <MyContext.Provider value={
      {
        filterKeys,
        setFilterKeys, 
        jobList, 
        setJobList,
        searchInput,
        setSearchInput,
        suggestions
      }
    }>
      {children}
    </MyContext.Provider>
  )
}

export default Context

export { MyContext }