import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
function Screen() {
    const[filterItem,setFilterItem]=useState([])
    const [record,setRecord]=useState([])
    const [checkedState, setCheckedState] = useState([])
        
    
    useEffect(()=>{const fame=JSON.parse(localStorage.getItem("users"))?
    JSON.parse(localStorage.getItem("users")):[]
    setRecord(fame);
    setCheckedState(new Array(record.length).fill(false));
        },[record.length])
    


const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
}
  const deleteHandler=()=>{
      const newRecords=[...record]
      const removeValues=checkedState.map((item,index)=>item?index:null).filter(item=>item!=null)
      for (var i = removeValues.length -1; i >= 0; i--)
      newRecords.splice(removeValues[i],1);
      
      localStorage.setItem("users",JSON.stringify(newRecords));
    setRecord(newRecords)
  }
    const changeHandler=(e)=>{

        const filterData= record.filter((item)=>item.content.toLowerCase().includes(e.target.value))
		setFilterItem(filterData)

    }
    const finalData=filterItem.length===0?record:filterItem;
    
    return (
        <div className='card' >
            <div  >
                <input placeholder="Enter search words" type="text" onChange={changeHandler} />
                <button style={{float:'none'}} >Search</button>
            </div>
            <div style={{height:'250px',width:'100%',textAlign:'center'}} >
            
    
            <div className='flow' >
                <table>
                    <tr>
                        <th>Select</th>
                        <th>Index</th>
                        <th>Year</th>
                        <th>Month</th>
                        <th>Content</th>
                        </tr>
                        {finalData.map((item,index)=>(
                    
                    <tr>
                    <td><input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    
                    
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  /></td>
                    <td>{(index)+1}</td>
                    <td>{item.year}</td>
                    <td>{item.month}</td>
                    <td>{item.content}</td>
                    </tr>))}
                </table>
                
            </div>
            
            </div>
            
<div>
   <Link to="/"> <button style={{float:'left'}} >Post new</button></Link>
    <button onClick={deleteHandler} style={{width:'150px'}} >Delete Selected</button>
</div>
        </div>
    )
}

export default Screen
