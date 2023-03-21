import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

var images;
var time = 3000;

// Change image
window.onload = function changeImg(){
    var randomNumber = Math.floor(Math.random()*3);

    switch(randomNumber){
        case 0:
            document.getElementById("kutterkonfekt").setAttribute('src', './img/historia1.png');
        break;
        case 1:
            document.getElementById("kutterkonfekt").setAttribute('src', './img/historia2.png');
        break;
        case 2:
            document.getElementById("kutterkonfekt").setAttribute('src', './img/historia3.png');
        break;
    }

    setTimeout(changeImg, time);
}

// Rotate checkout img
function rotateImg(x) {
    x.style.transform= "rotate(8deg)";

}

function normalImg(x) {
    x.style.transform= "rotate(0deg)";
}

// Scale up Gallery 
function scaleUp(x){
    x.style.transform= "scale(1.1)";
}

function scaleDown(x){
    x.style.transform= "scale(1)";
}


// Interaction with img in portfolio
const animateLogo = [   
    {transform: "scale(1.1)"},
    {transform: "translateY(-3px)"},
];

const animateTiming ={
    duration: 1000,
    easing: 'ease-in-out',
    iterations: 1,
};

const pic1 = document.querySelector("#pic1");

pic1.addEventListener("mouseover", () =>{
    pic1.animate(animateLogo, animateTiming);
});

const pic2 = document.querySelector("#pic2");

pic2.addEventListener("mouseover", () =>{
    pic2.animate(animateLogo, animateTiming);
});

const pic3 = document.querySelector("#pic3");

pic3.addEventListener("mouseover", () =>{
    pic3.animate(animateLogo, animateTiming);
});
