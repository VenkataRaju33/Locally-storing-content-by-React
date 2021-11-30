import React from 'react'
import './App.css';
import { Link } from "react-router-dom"
function FormInput() {
    return (
        <div className='card' >
    
      <form>
      <label>Year</label>
        <input placeholder="Enter year.." type="number"  />
        <label>Month</label>
        <input placeholder="Enter month.." type="text" /><br/>
        <label>Content</label><br/>
        <input placeholder="Enter content.." style={{height:'200px',width:'90%'}} type="text" /><br/>
        
      
      <Link to="/screen">
      <button>Post</button>
      </Link>
      </form>
            
        </div>
    )
}

export default FormInput
