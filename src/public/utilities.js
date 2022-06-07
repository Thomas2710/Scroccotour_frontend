var f_path = 'https://scroccotour-frontend.herokuapp.com'
var b_path = 'https://scroccotour-backend.herokuapp.com'
//var path = 'https://scroccotour-backend.herokuapp.com'


//Funzione per convertire il tempo da secondi passati dal 1970 a timestamp
function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp*1);
    var months = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + ' ' + month + ' ' + year;
    return time;
    }

    
function parseJwt (token) {
var base64Url = token.split('.')[1];
var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
}).join(''));

return JSON.parse(jsonPayload);
};

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    if(res==undefined){
        window.location.replace("https://scroccotour-frontend.herokuapp.com/login")
    }
   
    return res
    }