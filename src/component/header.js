import {memo} from 'react';
import '../Style/header.css';
function Header() {
  console.log("3")
  return (
    <div className="heading">
      <h1>Quản Lý Công Việc:</h1>
    </div> 
  );
}
export default memo(Header);