import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ authenticate, setAuthenticate }) => {
   const navigate = useNavigate();
   const [menuActive, setMenuActive] = useState(false);
   const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

   const gotoLogin = () => {
      navigate('/login');
   };

   const gotoMainPage = () => {
      navigate('/');
   };

   const handleLogout = () => {
      setAuthenticate(false);
      navigate('/');
   };

   const search = event => {
      if (event.key === 'Enter') {
         let keyword = event.target.value;
         navigate(`/?q=${keyword}`);
      }
   };

   const toggleMenu = () => {
      setMenuActive(!menuActive);
   };

   return (
      <div>
         <div className='navbar_container'>
            {/* 메뉴 토글 버튼 (모바일용) */}
            <div className='menu_toggle' onClick={toggleMenu}>
               <FontAwesomeIcon icon={faBars} size='2x' />
            </div>

            {/* 로고 섹션 */}
            <div className='nav_section' onClick={gotoMainPage}>
               <img
                  width={100}
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSWOhkrtrLKgKz35SOCEsZV-v2q_yeKpMgw&s'
               />
            </div>

            {/* 로그인/로그아웃 버튼 */}
            <div className='side_menu'>
               <FontAwesomeIcon icon={faUser} />
               {authenticate ? (
                  <button className='logout_btn' onClick={handleLogout}>
                     로그아웃
                  </button>
               ) : (
                  <Link to={'/login'} className='login_btn' onClick={gotoLogin}>
                     로그인
                  </Link>
               )}
            </div>
         </div>

         {/* 사이드 메뉴 */}
         <div className={`menu_area ${menuActive ? 'active' : ''}`}>
            <ul className='menu_list'>
               {menuList.map(menu => (
                  <li key={menu}>{menu}</li>
               ))}
            </ul>
         </div>

         <div className='nav_search'>
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' className='search_input' onKeyDown={event => search(event)} />
         </div>
      </div>
   );
};

export default Navbar;
