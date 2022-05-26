import React  from "react";
import '../styles/menu.css';
import {Data} from './Data';
import '../component/Menuitem'
import Menuitem from "../component/Menuitem";
function Menu()
{
    return(
        <div className="menu">
            <div className="menuTitle">
            <div className="menuList">
                {Data.map((menuList,key)=>{
                    return(<Menuitem  
                        key={key} 
                        image={menuList.image} 
                        name={menuList.name} 
                        price={menuList.price} />)
                })}
                </div> 
                </div>
        </div>
    );
}
export default  Menu;