const doLogin= function(e){
    e.preventDefault();
    const username= document.getElementById('username').value;
    const password= document.getElementById('password').value;
    Login({
        username: username,
        password: password
    }).then(function(res){
        window.location.href = ".public/src/home.html";

    });
};

const doRegister= function(e){
    e.preventDefault();
    const username= document.getElementById('username').value;
    const email= document.getElementById('email').value;
    const password= document.getElementById('password').value;
    Register({
        username: username,
        email: email,
        password: password,
    }).then(function(res){
        window.location.href = './home.html';

    });
};
// this is what the user enter to his/her reservation I want to check if thats right and will save in the database or not?
const doReservation= function(e){
    e.preventDefault();
    const username= document.getElementById('username').value;
    const date= document.getElementById('date').value;
    const starttime= document.getElementById('starttime').value;
    const endtime= document.getElementById('endtime').value;
    Reservation({
        username: username,
        date: date,
        starttime: starttime,
        endtime: endtime
    }).then(function(res){
        window.location.href = "confirmReservatio.html";

    });
};