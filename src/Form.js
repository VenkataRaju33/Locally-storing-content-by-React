import React,{useState} from 'react'
import { useNavigate } from "react-router-dom"

function Form() {
    const history=useNavigate()
    const [year,setYear]=useState('');
  const [month,setMonth]=useState('');
  const [content,setContent]=useState('');
  
  const submitHandler=(e)=>{
    e.preventDefault();
    
    let user_records=[];
    user_records=JSON.parse(localStorage.getItem("users"))?
JSON.parse(localStorage.getItem("users")):[]
    user_records.push({
        "year":year,
        "month":month,
        "content":content,
        })
        
        localStorage.setItem("users",JSON.stringify(user_records));
    setYear('');
    setMonth('');
    setContent('');
    history("/screen")
  
  }
    return (
        <div className='card'>
    
    
      <form onSubmit={submitHandler} >
      <div style={{display:'flex'}} >
      <div style={{display:'flex',flexDirection:'column'}} >
        <label>Year</label>
        <input placeholder="Enter year.." type="number" value={year} onChange={(e)=>setYear(e.target.value)} />
        </div >
        <div style={{display:'flex',flexDirection:'column'}}>
        <label>Month</label>
        <input placeholder="Enter month.." type="text" value={month} onChange={(e)=>setMonth(e.target.value)} /><br/>
        </div>
        </div>
        <label>Content</label><br/>
        <textarea placeholder="Enter content.."  type="text" value={content} onChange={(e)=>setContent(e.target.value)} /><br/>
        
      
      <button>Post</button>
      </form>
      
      
      
    </div>
    )
}

export default Form
