import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

const Login = ({ setAuthenticate }) => {
   const [id, setId] = useState('')
   const [password,setPassword] = useState('')
   const navigate = useNavigate();
   const dispatch = useDispatch()

   const loginUser = event => {
      event.preventDefault();
      dispatch(authenticateAction.login(id,password))
      navigate('/');
   };

   return (
      <div className='login_form1'>
         <div className='login_form2'>
            <h2>로그인 LOGIN</h2>
            <form onSubmit={event => loginUser(event)}>
               <div className='id'>
                  <label>아이디</label>
                  <input type='text' name='name' placeholder='아이디를 입력해주세요.' onChange={(event)=>setId(event.target.valueAsDate)}></input>
               </div>
               <div className='password'>
                  <label>비밀번호</label>
                  <input type='password' name='password' placeholder='비밀번호를 입력해주세요.' onChange={(event)=>setPassword(event.target.value)}></input>
               </div>
               <div className='find_idpassword'>
                  <Link to='/' className='find_id'>
                     아이디 찾기
                  </Link>
                  <label>|</label>
                  <Link to='/' className='find_password'>
                     비밀번호 찾기
                  </Link>
               </div>
               <div className='loginBtn'>
                  <Button variant='secondary' size='lg' className='btn' type='submit'>
                     로그인
                  </Button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
