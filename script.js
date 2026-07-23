alert("Javascript Connected");
alert(document.getElementById("typing"));

function speak(text){

    const speech = new SpeechSynthesisUtterance();

    speech.text = text;

    speech.lang = "en-US";

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;

    window.speechSynthesis.speak(speech);

}

// ==========================
// Typing Animation
// ==========================

const text = "Welcome To Harsh AI";
let index = 0;

function typeWriter() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 100);

    }

}

// ==========================
// Live Clock
// ==========================

function updateClock() {

    const now = new Date();

    document.getElementById("clock").innerHTML = now.toLocaleTimeString();

}

// ==========================
// Current Date
// ==========================

function updateDate() {

    const today = new Date();

    document.getElementById("date").innerHTML = today.toDateString();

}

// ==========================
// Theme Toggle
// ==========================

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const btn = document.getElementById("themeButton");

    if (document.body.classList.contains("light-mode")) {
        btn.innerHTML = "☀️ Light Mode";
    } else {
        btn.innerHTML = "🌙 Dark Mode";
    }

}

// ==========================
// Buttons
// ==========================

function showExploreMessage() {

    const msg =
    "Welcome to Harsh AI Website! Thank you for visiting my website.";

    document.getElementById("message").innerHTML =
    "🚀 " + msg;

    speak(msg);

}


function showSubscribeMessage(){

    const msg =
    "Thank you for subscribing.";

    document.getElementById("message").innerHTML =
    "❤️ " + msg;

    speak(msg);

}

function showHome() {

    document.getElementById("message").innerHTML =
    "🏠 Home Page";

}

function showAbout() {

    document.getElementById("message").innerHTML =
    "👨‍💻 About Harsh AI";

}

function showProjects() {

    document.getElementById("message").innerHTML =
    "💻 Projects Coming Soon";

}

function showContact() {

    document.getElementById("message").innerHTML =
    "📧 Contact Page";

}

// ==========================
// Start Website
// ==========================

window.onload = function () {

    typeWriter();

    updateClock();
    setInterval(updateClock, 1000);

    updateDate();

    const notification = document.getElementById("notification");

    notification.classList.add("show");

    setTimeout(function () {

        notification.classList.remove("show");

    }, 3000);

};

function contactMessage(){

    const msg =
    "Hello! Thank you for visiting my website.";

    document.getElementById("message").innerHTML =
    "👋 " + msg;

    speak(msg);

}

// ==========================
// Scroll Progress Bar
// ==========================

window.addEventListener("scroll", function(){

    let scrollTop =
        document.documentElement.scrollTop;

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});

// ==========================
// Loading Screen
// ==========================

window.addEventListener("load", function(){

    setTimeout(function(){

        document.getElementById("loader").style.opacity = "0";

        setTimeout(function(){

            document.getElementById("loader").style.display = "none";

        },800);

    },2500);

});

// ===== Secret Developer Mode =====

let secret = "";

document.addEventListener("keydown", function(e){

    secret += e.key.toUpperCase();

    if(secret.length > 5){
        secret = secret.slice(-5);
    }

    if(secret === "HARSH"){

        document.body.classList.toggle("developer");

        document.getElementById("secretMode").style.display = "block";

        if(document.body.classList.contains("developer")){

    speak("Developer Mode Activated");

}else{

    speak("Developer Mode Disabled");

}

        setTimeout(function(){

            document.getElementById("secretMode").style.display = "none";

        },3000);

    }

});


secret= "";

// ==========================
// AI Assistant
// ==========================

function toggleAI(){

    document.getElementById("aiChat").style.display = "block";

    speak("Hello, how can I help you today?");

}

function closeAI(){

    document.getElementById("aiChat").style.display = "none";

}

