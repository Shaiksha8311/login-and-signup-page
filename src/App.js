
import './App.css';

function App() {
  return (
    <div>
    <div className='mainpage'>
     <div className="loginform">
     <h1>Login</h1>
     <input type="text" placeholder='Email'/>
     <input type="text" placeholder='Password'/>
     <a href="">forgot Password</a>
     <button>Login</button>
     <h6>If you don't have account please <a href="">Signup</a></h6>
     <h3>Or</h3>
     <div className='loginwithfacebook'>
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEU7V53///8nSpc1U5vR1uRsfrAcQ5TFy90vT5mhq8ohRpX09fg4VZwnSZc0UpuUoMXL0eLn6vJNZqVCXaGps9BfdK3Z3eq9xdt4ibhWbKhEX6KGlL73+fzv8fff4uzU2eeyu9Wbpsekr86Pm8F+jrsAM44SPpK1vtZbcKpoeq9KGgsGAAAECElEQVR4nO3d627bOBCGYYpqYtYhqYMlx3bkpE26zfb+b7A+rIsuCqi0ldHMEN+LAEF/1NADSWZESrYp/quu+p3JpVVf1ReYOf/qYnDec2/Yh+VLF2L3m7BpLfc2EWTb5iJc25J7a0gq7fosbGw+h+f/87Y5Cds89+Cxsj0KuxzPwUu2Owgd91aQFgtT57wLDzuxNlXm+7Ayfb7vM8d8b1a5DhXn/Ip7CxBCCCGEEEIIIYSQjvzh59TpHxktAB4qo7PBRm9W546rgtE5a0Ow1jkXo2KvL23w26du8dw8DMWvhuFhv2+a55f68Uv39WnTt0al0Ucb77r1b7KRvuqbsffObRZpumOftQnL0Hb7ZJ4+oQ/bxTU8dUJnHq/06RL6ZXW1T5XQ7dY3ABUJw+YWnyLh/efbgGqE9+83ArUI768dI7QJl9cPErqEobsdqELoniYANQjL7RSgAqG3z5kL7ZSTUIPQTztGFQjDS+bCeDcRKF448W1GvnD6LpQuDJ8yF/rdZKBwoXvNXWibzIUT/yJVIPyIg1S20N40uaZI6OMHAEULy2uH++HhzwbJa0/XnIYvr5utcWH5Z4KBxtZ/l53aVya4WOpbDA2Jo+Grdeps52wa8E7t45++TQJuJJ9o46VdOXWBeztvz70lAIfIvZkTcimrTV80P/2ZNI3Ya32XOWYTlmMeFJ+FB2HCipruR5RT/qRRfRoamzALpfsh7BThN82DRZJwk73wTvWD9BBCKD8IIZQfhBDKD0II5QchhPKDEEL5QQihjO5H+idhzrv/PvYKh7jXNRLXsSe0Z572pxdyL93QC9+ZFzbohdx3RNELuRc26IX/Mg8n9MId8zo/uXDPfT8YufA5+xF/wb3OTy5kv5OBXPjGfScDuZD92oNcuM1dODD76IV77sGCXPiSvfCRe7AgF75yDxbkwif2m8KohT+4BwtyYct+jzSxcOC+diIXNktuILWQeyqRXvievZB7KpFeuGEfLKiFAh6oIRYK+LIxWuHAfmVBLWSfSiQXChgOjasXIyV8XPCnkf9ev7FfWRyyI31PWMfvlyMvIAE4Wh53KowFIYTygxBC+UEIofwghFB+EEIoPwghlB+EEMoPQgjlByGE8oMQQvlBCKH8IIRQfhBCKD8IIZQfhBDKD0II5QchhPKDEEL5QQih/CCEUH4QQig/CCGUH4QQyg9CCOU3o5DpY17mEvqV6XkOhdmEvWH6WuG5hLEyTJ/zMpfQ1qbg+RiU2fZhYYqOZSfOJLTdQVi0HO818wjLtjgKG8swYMwi9LY5CYu1nX8vziEs7bo4C4umnf1cnEFo26a4CIuii8H5OQ9WWqEvXYjd+VXM5eXqqt99JOEv0QpXffXrG7N+Aom8SuhnyY2rAAAAAElFTkSuQmCC" />
     <h4>Login with Facebook</h4>
     </div>
     <div className='loginwith'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZEZ6fa7bPwCI4HE5583rhd3qiFNmf6kiPg&s"/>
      <h4>Login with Google</h4>
      </div>
     </div>

    <img src="pass-hide.png" alt="" />


     <div className="signupform">
     <h1>Signup</h1>
     <input type="text" placeholder='Email'/>
     <input type="text" placeholder='Create new password'/>
     <input type="text" placeholder='Create new password'/>
     
     <button>Signup</button>
     <h6>If you have already account please <a href="">Login</a></h6>
     <h3>Or</h3>
     <div className='loginwithfacebook'>
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEU7V53///8nSpc1U5vR1uRsfrAcQ5TFy90vT5mhq8ohRpX09fg4VZwnSZc0UpuUoMXL0eLn6vJNZqVCXaGps9BfdK3Z3eq9xdt4ibhWbKhEX6KGlL73+fzv8fff4uzU2eeyu9Wbpsekr86Pm8F+jrsAM44SPpK1vtZbcKpoeq9KGgsGAAAECElEQVR4nO3d627bOBCGYYpqYtYhqYMlx3bkpE26zfb+b7A+rIsuCqi0ldHMEN+LAEF/1NADSWZESrYp/quu+p3JpVVf1ReYOf/qYnDec2/Yh+VLF2L3m7BpLfc2EWTb5iJc25J7a0gq7fosbGw+h+f/87Y5Cds89+Cxsj0KuxzPwUu2Owgd91aQFgtT57wLDzuxNlXm+7Ayfb7vM8d8b1a5DhXn/Ip7CxBCCCGEEEIIIYSQjvzh59TpHxktAB4qo7PBRm9W546rgtE5a0Ow1jkXo2KvL23w26du8dw8DMWvhuFhv2+a55f68Uv39WnTt0al0Ucb77r1b7KRvuqbsffObRZpumOftQnL0Hb7ZJ4+oQ/bxTU8dUJnHq/06RL6ZXW1T5XQ7dY3ABUJw+YWnyLh/efbgGqE9+83ArUI768dI7QJl9cPErqEobsdqELoniYANQjL7RSgAqG3z5kL7ZSTUIPQTztGFQjDS+bCeDcRKF448W1GvnD6LpQuDJ8yF/rdZKBwoXvNXWibzIUT/yJVIPyIg1S20N40uaZI6OMHAEULy2uH++HhzwbJa0/XnIYvr5utcWH5Z4KBxtZ/l53aVya4WOpbDA2Jo+Grdeps52wa8E7t45++TQJuJJ9o46VdOXWBeztvz70lAIfIvZkTcimrTV80P/2ZNI3Ya32XOWYTlmMeFJ+FB2HCipruR5RT/qRRfRoamzALpfsh7BThN82DRZJwk73wTvWD9BBCKD8IIZQfhBDKD0II5QchhPKDEEL5QQihjO5H+idhzrv/PvYKh7jXNRLXsSe0Z572pxdyL93QC9+ZFzbohdx3RNELuRc26IX/Mg8n9MId8zo/uXDPfT8YufA5+xF/wb3OTy5kv5OBXPjGfScDuZD92oNcuM1dODD76IV77sGCXPiSvfCRe7AgF75yDxbkwif2m8KohT+4BwtyYct+jzSxcOC+diIXNktuILWQeyqRXvievZB7KpFeuGEfLKiFAh6oIRYK+LIxWuHAfmVBLWSfSiQXChgOjasXIyV8XPCnkf9ev7FfWRyyI31PWMfvlyMvIAE4Wh53KowFIYTygxBC+UEIofwghFB+EEIoPwghlB+EEMoPQgjlByGE8oMQQvlBCKH8IIRQfhBCKD8IIZQfhBDKD0II5QchhPKDEEL5QQih/CCEUH4QQig/CCGUH4QQyg9CCOU3o5DpY17mEvqV6XkOhdmEvWH6WuG5hLEyTJ/zMpfQ1qbg+RiU2fZhYYqOZSfOJLTdQVi0HO818wjLtjgKG8swYMwi9LY5CYu1nX8vziEs7bo4C4umnf1cnEFo26a4CIuii8H5OQ9WWqEvXYjd+VXM5eXqqt99JOEv0QpXffXrG7N+Aom8SuhnyY2rAAAAAElFTkSuQmCC" />
     <h4>Login with Facebook</h4>
     </div>
     <div className='loginwith'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZEZ6fa7bPwCI4HE5583rhd3qiFNmf6kiPg&s"/>
      <h4>Login with Google</h4>
      </div>
     </div>
     <div>
     </div>
    </div>
    </div>


  );
}

export default App;
