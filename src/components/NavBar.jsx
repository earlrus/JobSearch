import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import {  Input } from "@mui/material";
import { Search } from "@mui/icons-material";
import JobMenu from "./JobMenu";
import { useDispatch } from "react-redux";
import { searchJob,getJobs } from "../redux/jobSlice";



function NavBar() {

  const [search,setSearch]=useState('');
  const dispatch=useDispatch();
let exp = search === "" ? true : false;
useEffect(()=>{
dispatch(getJobs());

},[exp,dispatch])

  function searchResult(){
dispatch(searchJob({role:search}))
  }
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <label className={classes.job_label} htmlFor="Jobs">
          Jobs
        </label>
         <Input type="search" placeholder="frontend or backend or fullstack" style={{ width: "300px" }} onChange={(e)=>setSearch(e.target.value)} />
        <Search color="primary"  className={classes.search} onClick={searchResult}/>
      </div>

    <JobMenu/>

    </div>
  );
}

export default NavBar;
