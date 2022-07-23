import {memo} from 'react';
import '../Style/form.css'
function Form({onChangeToDo, onChangeStatus, onChangeTime, onChangeTimeDay, handleSubmit, handleCancel, show,  toDo ,status
    ,time ,timeDay, editingRow, handleUpdate}) {
    const onToDo =(e)=>{onChangeToDo(e)}
    const onStatus =(e)=>{onChangeStatus(e)}
    const onTime =(e)=>{onChangeTime(e)}
    const onTimeDay =(e)=>{onChangeTimeDay(e)}
  return (
 
    <div className="panel-body">
        <form className={show} type="submit">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Tên Công Việc:</label>
                <input  
                    type="text" 
                    value={toDo}
                    className="form-control" 
                    placeholder="Nhập Công Việc" 
                    onChange={onToDo}
                />
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Trạng Thái:</label>
                <select 
                    value={status}
                    className="form-select" 
                    aria-label="Default select example" 
                    onChange={onStatus}>
                    <option value="Đang Thực Hiện"><label>Đang Thực Hiện</label></option>
                    <option value="Đã Hoàn Tất"><label >Đã Hoàn Tất</label></option>
                    <option value="Đã Thất Bại"><label >Đã Thất Bại</label></option>
                </select>
                <div className='time'>
                   <label 
                        htmlFor="exampleFormControlTextarea1" 
                        className="form-label">Thời Gian:
                    </label>
                        <div className='select-time'>
                            <select 
                                value={time} 
                                className="form-select" 
                                aria-label="Default select example" 
                                onChange={onTime}>
                                    <option value="01:00">01:00</option>
                                    <option value="02:00">02:00</option>
                                    <option value="03:00">03:00</option>
                                    <option value="04:00">04:00</option>
                                    <option value="05:00">05:00</option>
                                    <option value="06:00">06:00</option>
                                    <option value="07:00">07:00</option>
                                    <option value="08:00">08:00</option>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                            </select>
                            <select 
                                value={timeDay}
                                className="form-select" 
                                aria-label="Default select example" 
                                onChange={onTimeDay}>
                                    <option value="am">Am</option>
                                    <option value="pm">Pm</option>
                            </select>
                        </div>    
            </div>
            <div className="body-button">
                {
                    editingRow
                    ?
                        <button 
                                type="submit"
                                className="btn btn-style center"
                                onClick={handleUpdate}>            
                                    <i className='bx bx-plus'></i>
                                    <label>Cập Nhật</label>
                        </button>
                       
                    :
                    <button 
                        type="submit"
                        className="btn btn-style center"
                        onClick={handleSubmit}>            
                            <i className='bx bx-plus'></i>
                            <label>Lưu Lại</label>
                        </button>
                }
                
                <button
                    type="submit"
                    className="btn btn-style center" 
                    onClick={handleCancel}>           
                        <i className='bx bxs-message-square-x'></i>
                        <label>Hủy Bỏ</label>
                </button>
            </div>
        </form>
    </div>
  );
}
export default memo(Form);
