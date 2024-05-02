import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getJobs } from '../redux/jobSlice';
import JobItems from './JobItems';


 
function JobList() {
    const dispatch=useDispatch();
    const {jobList,isLoading,filteredJob}=useSelector((store)=>store.JobReducer);


console.log(filteredJob);

useEffect(() => {
 dispatch(getJobs());
},[dispatch]);

    if(isLoading){
        return <p>Loading....</p>
    }
  else{
    return <>
<JobItems jobList={filteredJob.length>0?filteredJob:jobList} />
    </>
  }

}

export default JobList