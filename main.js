let myInput = document.getElementById('input');
myInput.value="";
let myLocker=document.getElementById('locker');

let myH2 = document.getElementById('h2');
let myP = document.getElementById('p');

let myNav = document.getElementById('nav');
let myPrivate = document.getElementById('private');
let unLocked = document.getElementById('unlocked');
let search = document.getElementById('search');
let menu = document.getElementById('menu');

let myChat=document.getElementById('chat');
let mySidenav = document.getElementById('side');
let main = document.getElementById('main');
let myCleaner = document.getElementById('clean');

myChat.style.display="none";
main.style.display="none";
unLocked.addEventListener('click',() => {
    myLocker.style.display="block";
    myInput.value = "";
    myNav.style.display='none'
        myPrivate.style.display='none'
        myChat.style.display='none';
        main.style.display='none';
})

menu.addEventListener('click',()=>{
    mySidenav.style.display="block";
    myCleaner.style.display="block";
})


myCleaner.addEventListener('click',()=>{
    mySidenav.style.display="none";
    myCleaner.style.display="none";
})

mySidenav.style.display="none";
myCleaner.style.display="none";

myInput.value = "";
myInput.style.display = "none";
myH2.style.display = "block";
myP.style.display = "block";    
myNav.style.display='none'
myPrivate.style.display='none'
function add(event){
    let clickedButton = event.target;
    let symbol = clickedButton.innerText;
    myInput.value = myInput.value + symbol;
    

    
    if (!(myInput.value=="")) {
        myInput.style.display="block";
        myH2.style.display="none";
        myP.style.display="none";
        
    }
    
    
    if((myInput.value.length==4)&&(myInput.value=="1111")){
        
        myLocker.style.display="none";
        myNav.style.display='flex'
        myPrivate.style.display='flex'
        main.style.display='block';
        myChat.style.display="block";
        
    }else if(myInput.value.length>4){
        myInput.value = ""
        
        
    }else if((myInput.value.length==4)&&!(myInput.value=="1111")){
        alert("Please enter a valid password");
    }
    
    if(myInput.value==""){
        myH2.style.display="block";
        myP.style.display="block";
    }
    

}




function remove(remove) {
    myInput.value = myInput.value.slice(0, -1); // Remove the last character
    if(myInput.value==""){
        myH2.style.display="block";
        myP.style.display="block";
    }
}




