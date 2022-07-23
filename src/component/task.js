import {memo} from 'react';
import '../Style/task.css';
import TaskList from './TaskList';
function Task({onHandleRemove,value,onHandleEdit}) {
  console.log("4")
    return (
        <>
          <table className="table table-striped table-inverse table-responsive">
            <thead className="thead-inverse">
              <tr>
                <th>STT</th>
                <th>Thời Gian</th>
                <th>Tên</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                  <td></td>
                  <td></td>
                  <td><input type="text"/></td>
                  <td>
                    <select className="form-select" aria-label="Default select example">
                      <option value="1"><label>Đang Thực Hiện</label></option>
                      <option value="2"><label >Đã Hoàn Tất</label></option>
                      <option value="3"><label >Thất Bại</label></option>
                    </select>
                </td>
                  <td></td>
                </tr>
            <TaskList
              value={value}
              onHandleRemove={onHandleRemove}
              onHandleEdit={onHandleEdit}
            />
            </tbody>
          </table>
        </>
         
    );
  }
  export default memo(Task);
  


