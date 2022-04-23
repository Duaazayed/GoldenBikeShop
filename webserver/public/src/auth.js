/*const doReservation= async(e)=>{
  e.preventDefault();
  const username= document.getElementById('username').value;
  const reservation_date= document.getElementById('reservation_date').value;
  const reservation_start_time= document.getElementById('reservation_start_time').value;
  const reservation_end_time= document.getElementById('reservation_end_time').value;
  const res= await reservation({reservation_date,reservation_start_time,reservation_end_time}).catch((err)=>{
    alert('Failed to reserve. Please try again later.');
    });
 
  
      window.location.href = "confirmReservatio.html";

  };
*/
const doLogin = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const res = await login({ username, password }).catch((err) => {
      alert('Failed to login. Please try again later.');
    });
  
    const { auth, access_token, refresh_token } = res;
  
    setStorage('isAuth', auth);
    setStorage('access_token', access_token);
    setStorage('refresh_token', refresh_token);
  
    window.location.href = 'home.html';
  };
  
  const doRegister = (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const res = await register({
      username,
      email,
      password,
    });
  
    if (res) {
      window.location.href = '/';
    }
  };
  const doLogout = (e) => {
    e.preventDefault();
    logout();
    window.location.href = 'index.html';
  };
  
  (() => {
    if (storageHasData()) {
      const isAuth = getStorage('isAuth');
      if (!isAuth) {
        document.getElementById('logout').style.display = 'none';
      } else {
        document.getElementById('logout').style.display = 'block';
      }
    }
  })();

