import './App.css';
import Form from './component/form';
import Task from './component/task';
import Header from './component/header';
import Control from './component/Control';
import { useState} from 'react';
function App() {
  const [value, setValue] = useState(
    // [
    //   {
    //     id: 1,
    //     toDo: "học lập trình",
    //     status: "Đang Thực Hiện",
    //     time: "10:00",
    //     timeDay: "am"
    //   },
    //   {
    //     id: 2,
    //     toDo: "nấu ăn",
    //     status: "Đã Hoàn Tất",
    //     time: "12:00",
    //     timeDay: "pm"
    //   },
    //   {
    //     id: 3,
    //     toDo: "Chạy Bộ",
    //     status: "Đã Thất Bại",
    //     time: "06:00",
    //     timeDay: "pm"
    //   }
    // ]
    ()=>{
      const taskList = JSON.parse(localStorage.getItem('newList'))
      return taskList
    }
    )
  const [editingRow, setEditingRow] = useState('')
  const [toDo, setToDo] = useState('')
  const [status, setStatus] = useState('Đang Thực Hiện')
  const [time, setTime] = useState('01:00')
  const [timeDay, setTimeDay] = useState('Am')
  const [inputSearch, setInputSearch] = useState('')
  const [show, setShow] = useState('hidden')
  const [width, setWidth] = useState('col-ms-12 col-md-12 col-sx-12 col-lg-12')
  
  const defaults = ()=>{
    setToDo('')
    setStatus('Đang Thực Hiện')
    setTime('01:00')
    setTimeDay('Am')
  }
  const handleCancel = ()=>{
    setShow('hidden');
    setWidth('col-ms-12 col-md-12 col-sx-12 col-lg-12')
    defaults()
  }
  const handelAdd=()=>{
    setShow('show');
    setWidth('col-ms-8 col-md-8 col-sx-8 col-lg-8')
  }
  const handleSubmit = ()=>{
      setValue(prev=>{
        const taskList =  [...prev,{
          id: Math.floor(Math.random()*1000),
          toDo: toDo,
          status: status,
          time: time,
          timeDay: timeDay,}]
          localStorage.setItem('newList',JSON.stringify(taskList)) 
          return taskList;
        })
        defaults()
  }
  const onHandleEdit=(item)=>{
    setShow('show');
    setWidth('col-ms-8 col-md-8 col-sx-8 col-lg-8')
    setEditingRow(item.id)
    setToDo(item.toDo)
    setStatus(item.status)
    setTime(item.time)
    setTimeDay(item.timeDay)
  }
  const handleUpdate =()=>{
    const taskList = [...value]
    let i = taskList.findIndex(item=>item.id===editingRow)
    taskList[i] ={
      toDo: toDo,
      status: status,
      time: time,
      timeDay: timeDay,
    }
    localStorage.setItem('newList',JSON.stringify(taskList)) 
    setValue(taskList)
    defaults()
  }
  const onHandleRemove = (index)=>{
    const taskList = [...value]
    taskList.splice(index, 1)
    setValue(taskList)
    localStorage.setItem('newList',JSON.stringify(taskList)) 
  }  
  const handleSearch=()=>{
    console.log("cbjh")

  }
  const handleSort=()=>{
    console.log("sort")
  }
  const onChangeToDo =(e)=>{setToDo(e.target.value)}
  const onChangeStatus =(e)=>{setStatus(e.target.value)}
  const onChangeTime =(e)=>{setTime(e.target.value)}
  const onChangeTimeDay =(e)=>{setTimeDay(e.target.value)}
  const onChangeInputSearch =(e)=>{setInputSearch(e.target.value)}
  return (
    <div className='App'>
      <div className='container'>
        <Header/>
        <div className='row'>
            <div className='col-ms-4 col-md-4 col-sx-4 col-lg-4'>
                <Form 
                  editingRow={editingRow}
                  toDo={toDo}
                  status={status}
                  time={time}
                  timeDay={timeDay}
                  show={show}
                  handleUpdate={handleUpdate}
                  handleCancel={handleCancel}
                  handleSubmit={handleSubmit}
                  onChangeToDo={onChangeToDo}
                  onChangeTime={onChangeTime}
                  onChangeStatus={onChangeStatus}
                  onChangeTimeDay={onChangeTimeDay}
                />
            </div>
            <div className={width}>
              <Control
                handleSearch={handleSearch}
                handelAdd={handelAdd}
                onChangeInputSearch={onChangeInputSearch}
                handleSort={handleSort}
              />
              <Task
                value={value}
                onHandleRemove={onHandleRemove}
                onHandleEdit={onHandleEdit}
              />

            </div>
        </div>
      </div>
      
    </div>
    
);
}
export default App;
