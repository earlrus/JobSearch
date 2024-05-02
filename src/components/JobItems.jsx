import { Box, Button, Card, CardContent } from '@mui/material';
import React from 'react'
import classes from './navbar.module.css';
import { Work } from '@mui/icons-material';




const JobItems = ({jobList}) => {
   
    const JobCard = (job) => (
      <>
        <CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: ".6em",
              padding: "2px 4px",
            }}
          >
            <div style={{ display: "flex", gap: "1em" }}>
              <Work />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h2>{job.company}</h2>
                <h4 style={{ color: "gray" }}>{job.location}</h4>
              </div>
            </div>
            <div style={{ display: "flex",gap:'.2em',color:'gray',marginTop:'10px' }}>
              <h3>Contract:</h3>
              <p>{job.contract}</p>
            </div>
            <div style={{ display: "flex",gap:'.2em',color:'gray' }}>
              <h3>Role:</h3>
              <p>{job.role}</p>
            </div>

            <h3 style={{ marginTop: "10px" }}>About Company:</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has ...
            </p>
            <Button variant="contained">Easy Apply</Button>
          </div>
        </CardContent>
      </>
    );

  return (
    <div className={classes.job_items}>
    {jobList.map((job)=>{
        return (<Box  sx={{ maxWidth: 300}} key={job.id}>
            <Card>{JobCard(job)}</Card>
        </Box>);
    })}
     
    </div>
  );
}

export default JobItems