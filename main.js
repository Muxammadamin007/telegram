let myInput = document.getElementById('input');
myInput.value = "";
let myLocker = document.getElementById('locker');
let myH2 = document.getElementById('h2');
let myP = document.getElementById('p');

let myNav = document.getElementById('nav');
let myPrivate = document.getElementById('private');
let unLocked = document.getElementById('unlocked');
let search = document.getElementById('search');
let menu = document.getElementById('menu');

let myChat = document.getElementById('chat');
let mySidenav = document.getElementById('side');
let main = document.getElementById('main');

let img2= document.getElementById('img2');

let myCleaner = document.getElementById('clean');

let mySearcher = document.getElementById('searcher');
let myBack = document.getElementById('back');
let mySearchInput = document.getElementById('searchInput');
let myList = document.getElementById('list');
let mySubmit = document.getElementById('submit');





let settings = document.getElementById('settings');

let password = document.getElementById('password');

let pas1 = document.getElementById('pas1');
let pas2 = document.getElementById('pas2');

let ready = document.getElementById('ready');
let last = document.getElementById('last');


let storedPassword = '1111'

settings.addEventListener('click',()=>{
    password.style.display = 'flex';
    ready.style.display = 'block';
    settings.style.display = 'none';
})


last.addEventListener('click',()=>{
    password.style.display = 'none';
    ready.style.display = 'none';
    settings.style.display = 'block';
});

ready.addEventListener('click',()=>{
    // let pas1Value = pas1.value
    // let pas2Value = pas2.value
    if(pas1.value === pas2.value){
        alert('Passwords are the same')
        storedPassword = pas2.value
        password.style.display = 'none';

    }else{
        alert('Passwords are not the same')
        pas1.value = ''
        pas2.value = ''
    }

})



























mySubmit.addEventListener('click', () => {

    if (mySearchInput.value == '') {
        mySearchInput.style.cssText = `
            border-bottom:2px solid red
        `
    } else {
        mySearchInput.style.cssText = `
            border-bottom:2px solid white
        `
        let searched = mySearchInput.value;  // Get the value on each click
        let myCreatedDiv = document.createElement('div');
        let myCreatedH1 = document.createElement('h1');
        let myBtn = document.createElement('button');
        myBtn.innerText = 'Delete'
        myBtn.style.cssText = `
        background-color: transparent;
        position: absolute;
        color: #fff;
        padding: 10px;
        border: 1px solid white;
        width: 20%;
        height: 6%;
        right:10px;
        cursor: pointer;
        margin-bottom: 10px;
        font-size:15px;
    `
        myCreatedH1.style.cssText = `
        color: #fff;
    `
        myCreatedDiv.appendChild(myBtn);
        myCreatedH1.innerText = searched;
        myCreatedDiv.appendChild(myCreatedH1);
        myList.appendChild(myCreatedDiv);  // Append to the body or any other container
        mySearchInput.value = '';


        myBtn.addEventListener("click", (e) => {
            let clicked = e.target
            clicked.parentElement.remove();
            // myCreatedDiv.remove();
        })
    }
});

// myButton.addEventListener('click',(event) => {
//     let clickedBut = event.target;  
//     clickedBut.parentElement.remove();

// })

mySearcher.style.display = 'none'
myChat.style.display = "none";
main.style.display = "none";
unLocked.addEventListener('click', () => {
    myLocker.style.display = "block";
    myInput.value = "";
    myNav.style.display = 'none'
    myPrivate.style.display = 'none'
    myChat.style.display = 'none';
    main.style.display = 'none';
})
search.addEventListener('click', () => {
    mySearcher.style.display = 'block';
})

myBack.addEventListener('click', () => {
    mySearcher.style.display = 'none';

})
menu.addEventListener('click', () => {
    mySidenav.style.display = "block";
    myCleaner.style.display = "block";
})


myCleaner.addEventListener('click', () => {
    mySidenav.style.display = "none";
    myCleaner.style.display = "none";
})

mySidenav.style.display = "none";
myCleaner.style.display = "none";

myInput.value = "";
myInput.style.display = "none";
myH2.style.display = "block";
myP.style.display = "block";
myNav.style.display = 'none'
myPrivate.style.display = 'none'



function add(event) {
    let clickedButton = event.target;
    let symbol = clickedButton.innerText;
    myInput.value = myInput.value + symbol;



    if (!(myInput.value == "")) {
        myInput.style.display = "block";
        myH2.style.display = "none";
        myP.style.display = "none";

    }

    if (myInput.value.length === 4) {
        if (myInput.value === storedPassword) {
            myLocker.style.display = "none";
            myNav.style.display = 'flex';
            myPrivate.style.display = 'flex';
            main.style.display = 'block';
            myChat.style.display = "block";
        } else {
            alert("Please enter a valid password");
            myInput.value = "";  // Clear after invalid password
        }
    } else if (myInput.value.length > 4) {
        myInput.value = "";  // Reset after too many characters
    }


}




function remove(remove) {
    myInput.value = myInput.value.slice(0, -1); // Remove the last character
    if (myInput.value == "") {
        myH2.style.display = "block";
        myP.style.display = "block";
    }
}




