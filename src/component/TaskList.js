import {memo} from 'react';
import '../Style/task.css';
function TaskList(props) {
    const handleRemove = index => props.onHandleRemove(index)
    const handleEdit =(item) => props.onHandleEdit(item)
    console.log("props",props)
    return (
        <>
        {props.value.map((item,index) => (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{item.time}{item.timeDay}</td>
                <td>{item.toDo}</td>
                <td>
                  <label className=
                  {
                    (item.status)==='Đang Thực Hiện' ? "status-processing":
                    (item.status)==='Đã Hoàn Tất' ? "status-success": "status-failure"
                  }
                  >{item.status}</label>
                </td>
                <td className='icon-action center'>
                  <button 
                    className='icon-action-edit'
                    onClick={(e)=>handleEdit(item)}> 
                     <i className="fa-solid fa-pen"></i>
                  </button>
                 <button  
                    className='icon-action-remove'
                    onClick={(e)=>handleRemove(index)}>
                   <i className="fa-solid fa-xmark"></i>
                 </button>
                  
                </td>
              </tr>
          ))}        
        </>
    );
  }
export default memo(TaskList);
  


