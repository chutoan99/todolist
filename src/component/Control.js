import {memo} from 'react';
import '../Style/Control.css';
function Control({handelAdd, handleSearch, handleSort, onChangeInputSearch}) {
    console.log("1")
    const onInputSearch =(e)=>{onChangeInputSearch(e)}
    return (
        <>
            <button 
                type="button" 
                className="btn btn-primary btn-add center"
                onClick={handelAdd}
            >
                <i className='bx bx-plus'/>
                Thêm Công Việc:
            </button>
            <div className="row">
                <div className="col-sm-6 col-md-6 col-sx-6 col-lg-6">
                    <div className='content'>
                        <input 
                            onChange={onInputSearch}
                            type="text" 
                            placeholder="Nhập Từ Tìm Kiếm"
                        />
                        <button 
                            onClick={handleSearch}
                            type="button" 
                            className="btn btn-primary btn-search center">
                            <i className='bx bx-search'></i>
                            Tìm Kiếm
                        </button>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-sx-6 col-lg-6">
                    <button 
                        type="button" 
                        onClick={handleSort}
                        className="btn btn-primary center">
                            <i className='bx bxs-sort-alt'></i>
                            Sắp Xếp
    
                    </button>
                </div>
            </div>
        </>
        
    );
  }
  export default memo(Control);