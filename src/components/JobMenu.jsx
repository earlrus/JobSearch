import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import classes from './navbar.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { filterJob } from '../redux/jobSlice';



const JobMenu = () => {
  const [value,setValue]=useState({
location:'',
level:'',
contract:''
  });

  const { jobList } = useSelector((store) => store.JobReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    for(var key in value){
      if(value[key]===""){
        delete value[key];
      }
    }
    console.log(value);
    dispatch(filterJob(value));
  }, [dispatch,value]);
 
  


function getLocation(){
  let Options=[];
  for(let i=0;i<jobList.length;i++){
    if(jobList[i].location!==undefined){
Options.push(jobList[i].location);
    }
  }
  Options=new Set(Options);
  Options=[...Options];
  Options=Options.map((op)=>{
    return {label:op,value:op}
  })
  return Options;
}
function getLevel(){
   let Options = [];
   for (let i = 0; i < jobList.length; i++) {
     if (jobList[i].level !== undefined) {
       Options.push(jobList[i].level);
     }
   }
   Options = new Set(Options);
   Options = [...Options];
   Options = Options.map((op) => {
     return { label: op, value: op };
   });
   return Options;
}

function getContract(){
 let Options = [];
 for (let i = 0; i < jobList.length; i++) {
   if (jobList[i].contract !== undefined) {
     Options.push(jobList[i].contract);
   }
 }
 Options = new Set(Options);
 Options = [...Options];
 Options = Options.map((op) => {
   return { label: op, value: op };
 });
 return Options;  
}
 
 
  return (
    <div className={classes.options}>
      <Select
        placeholder="Location"
        options={getLocation()}
        onChange={(e) => {
          setValue({ ...value, location: e.value });
          }}
      />
      <Select
        placeholder="level"
        options={getLevel()}
        onChange={(e) => setValue({ ...value, level: e.value })}
      />

      <Select
        placeholder="Contract"
        options={getContract()}
        onChange={(e) => setValue({ ...value, contract: e.value })}
      />
    </div>
  );
}

export default JobMenu