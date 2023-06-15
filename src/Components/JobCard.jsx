import React, { useContext } from 'react'
import { MyContext } from '../Context'

const JobCard = ({ job : { id, company, logo, isNew, featured, position, role, level, postedAt, contract, location, languages, tools } }) => {


  const { setFilterKeys } = useContext(MyContext)

  const handleTagClick = (tag) => {
    setFilterKeys(prevList => [...prevList, tag])
  }

  return (
    <div className={`card ${featured ? "border-l-4" : null}`}>
      <div className="me-9">
        <img className='brand-img' src={logo} alt="photoshop" />
      </div>
      <div className="flex flex-col justify-between me-auto space-y-2">
        <div className='space-x-5'>
          <span className='brand-title'>{company}</span>
          {isNew && <span className='tag new-tag'>New</span>}
          {featured && <span className='tag featured-tag'>featured</span>}
        </div>
        <h2 className='job-title'>{position}</h2>
        <div className="flex space-x-4">
            <span className='text-base text-slate-400'>{postedAt}</span>
            <span className='text-base text-slate-400'>{contract}</span>
            <span className='text-base text-slate-400'>{location}</span>
        </div>
      </div>
      <div className="tags">
          <span onClick={() => handleTagClick(role)} className='category'>{role}</span>
          <span onClick={() => handleTagClick(level)}  className='category'>{level}</span>
          {languages?.map(((lang) => (
            <span onClick={() => handleTagClick(lang)} className='category' key={lang}>{lang}</span>
          )))}
          {tools?.map((tool => (
            <span onClick={() => handleTagClick(tool)} className='category' key={tool}>{tool}</span>
          )))}
      </div>
    </div>
  )
}

export default JobCard