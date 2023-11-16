import * as React from 'react';
import './Home.css';
import Button from '@mui/material/Button';

export default function LandingPage() {
  return (

	<div className="box" style={{ flexDirection:"column"}}>

		<div style={{marginTop:"100px", marginBottom:"25px"}}>
			<p style={{fontSize:"30px"}}> Shubham Garg</p>
			<p style={{fontSize:"20px"}}> Volunteer</p>
          </div>
		<div className="image soccer3"/>
    
		<div container justifyContent="center">
			<Button
				type="logout"
				variant="contained"
				sx={{ mt: 3, mb: 2 }}
				>
			Logout
			</Button>
          </div>
          </div>


  );
}
