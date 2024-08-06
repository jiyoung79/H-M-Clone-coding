import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
   const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
   return (
      <div>
         <div>
            <div className='loginBtn'>
               <FontAwesomeIcon icon={faUser} />
               <div>로그인</div>
            </div>
         </div>
         <div className='nav_section'>
            <img
               width={100}
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSWOhkrtrLKgKz35SOCEsZV-v2q_yeKpMgw&s'
            />
         </div>
         <div className='menu_area'>
            <ul className='menu_list'>
               {menuList.map(menu => (
                  <li>{menu}</li>
               ))}
            </ul>
         </div>
         <div className='nav_search'>
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' />
         </div>
      </div>
   );
};

export default Navbar;
