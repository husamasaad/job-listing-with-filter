import React, { useContext, useState, useEffect, useRef } from 'react'
import { MyContext } from '../Context'
import removeIcon from '../assets/images/icon-remove.svg'



const FilterSearch = () => {

  const [searchList, setSearchList] = useState([])

  const [focus, setFocus] = useState(false)

  const hideTimeoutRef = useRef(null)

  const { searchInput, setSearchInput, filterKeys, setFilterKeys, suggestions } = useContext(MyContext)

  const removeHandler = (keyword) => {
    setFilterKeys(prevKeys => {
      return prevKeys.filter(key => key !== keyword)
    })
  }

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchInput(value)
    if (value) {
      const reg = new RegExp(`^${value}`, 'i')
      setSearchList(Array.from(suggestions).filter(item => reg.test(item)))
    } else {
      setSearchList([])
    }
  }

  const handleBlur = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setFocus(false)
    }, 100)
  }


  return (
    <>
    <div className='filter-search px-4 space-x-3'>
      {filterKeys?.map(keyword => (
        <div key={keyword} className='flex items-center my-2'>
          <span className='bg-altBg text-mainClr py-1.5 px-3 font-bold text-xl'>{keyword}</span>
          <span onClick={() => removeHandler(keyword)} className='bg-mainClr hover:bg-slate-700 m-0 py-2.5 p-2 cursor-pointer'>
            <img src={removeIcon} alt="remove" />
          </span>
        </div>
      ))}
      <input onFocus={() => setFocus(true)} onBlur={handleBlur} onChange={handleSearch} value={searchInput} type='text' className='filter-search__input' placeholder='Search jobs'/>
      <span className='fixed right-3 text-sm text-slate-500 cursor-pointer' onClick={() => setFilterKeys([])}>CLEAR</span>
    </div>
    
    {focus && <div className='bg-white -translate-y-10 p-4'>
        {searchInput === "" ? <span className='px-4'>start typing...</span> :
        searchList.length === 0 ?  <span className='px-4 text-red-500'>No Jobs Found!</span> : ""
        }

        <ul>
          {searchList.map((item => (
            <li key={item} onClick={e => {
              setFilterKeys(prevState => [...prevState, item])
              setFocus(false)
            }}>{item}</li>
          )))}
        </ul>
    </div>}
    </>
  )
}

export default FilterSearch