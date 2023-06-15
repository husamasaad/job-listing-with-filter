import React, { useEffect, useState, useContext } from 'react'
import JobCard from './JobCard'
import { MyContext } from '../Context'



const JobLists = () => {

  const { jobList } = useContext(MyContext)

  return (
    <div className='py-10 space-y-20'>
      {
      jobList.length === 0 ? 
        <div className='text-xl text-red-500 text-center font-bold'>No Jobs were Found</div>
      : jobList.map(job => <JobCard job={job} key={job.id}/>)
      }
    </div>
  )
}

export default JobLists