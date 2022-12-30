 import "./Sidebar.css";
import {Link} from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className="zoho">
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Zen Class</h3>
          <ul className="sidebarList">
            
          <li className="sidebarListItem active"><Link to ="/">Class</Link></li>
            <li className="sidebarListItem"><Link to ='/dashboard'>Dashboard</Link></li> 
            <Link to ="/task"><li className="sidebarListItem"> Task</li></Link>
            <Link to ="/webcode"><li className="sidebarListItem">Webcode</li></Link>
           
          </ul>
        </div>
        </div>
      </div>
      </div>
  );
}