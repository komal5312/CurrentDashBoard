import React from "react";
import Logo from "../../components/images/logo.png";
import "./Sidebar.css";
import {useState} from "react";
// import {UilEstate} from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";

const Sidebar = () => {
 const [selected ,setSelected] = useState(0)

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <span >Agrix-DashBoard</span>
      <div className="menu">
        
        { SidebarData.map((item,index)=>{
          return(
            <div className={selected===index?'menuItem active':'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
            >
                   <item.icon/>
                   <a href={item.key}>
                    <span>
                      {item.heading}
                    </span>
                    </a>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Sidebar;
