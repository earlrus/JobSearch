import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    jobList:[],
    filteredJob:[],
    isLoading:true,
   
}

export const getJobs=createAsyncThunk('job/getJobs',()=>{
  return  fetch("https://mocki.io/v1/019a0d47-b081-4ede-b470-031180be3ace")
    .then((res)=>res.json())
    .catch((e)=>console.log(e));
})

export const job=createSlice({
    name:'job',
    initialState,
    reducers:{
        filterJob:(state,action)=>{
let filter=action.payload
        
           state.filteredJob= state.jobList.filter((job)=>{
               for(var key in filter){
                if(job[key]===undefined || job[key]!==filter[key]){
                    return false;
                }
                return true;
               }
               return job;
            })
            
        },
        searchJob:(state,action)=>{
            console.log(action.payload);
            state.jobList=state.jobList.filter((job)=>job.role?.toLowerCase()===action.payload.role?.toLowerCase());
        }
    },
    extraReducers:{
        [getJobs.pending]:(state)=>{
state.isLoading=true;
        },
        [getJobs.fulfilled]:(state,action)=>{
            console.log(action);
state.isLoading=false;
state.jobList=action.payload
        },
        [getJobs.rejected]:(state)=>{
state.isLoading=false
        }
    }
})



export const {filterJob,searchJob}=job.actions;
export default job.reducer;
