import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;

// import React from 'react'

// const NavBar = ({filterItem}, menuList) => {
//   return (
//     <>
//          <nav className='navbar'>
//         <div className='btn-group'>

//             {
//                 menuList.map((curr)=>{
//                     return(
//                         <button className='btn-group__item' onClick={()=>filterItem(curr)}>{curr}</button>
//                     )
//                 })
//             }
//             {/* <button className='btn-group__item' onClick={()=>filterItem("breakfast")}>Breakfast</button> */}
//             {/* <button className='btn-group__item' onClick={()=>filterItem("lunch")}>Lunch</button>
//             <button className='btn-group__item' onClick={()=>filterItem("evening")}>Snacks</button>
//             <button className='btn-group__item' onClick={()=>filterItem("dinner")}>Dinner</button>
//             <button className='btn-group__item' onClick={()=>setMenuData(Menu)}>All</button> */}
            
//         </div>
//     </nav>
//     </>
//   )
// }

// export default NavBar