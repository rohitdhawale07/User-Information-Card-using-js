const storedUserInfo = localStorage.getItem("userInformation");

if (storedUserInfo) {
    const userInfo = JSON.parse(storedUserInfo);

    document.getElementById("fname").textContent = userInfo.firstName;
    document.getElementById("lname").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("ph-no").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
    document.getElementById("village").textContent = userInfo.village;
}

// Function to store user information in local storage
function storeUserInfo() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const village = prompt("Enter your village:");

    const userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
    };

    // Store user information in local storage as a JSON string
    localStorage.setItem("userInformation", JSON.stringify(userInfo));

    // Display user information in the card
    document.getElementById("fname").textContent = userInfo.firstName;
    document.getElementById("lname").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("ph-no").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
    document.getElementById("village").textContent = userInfo.village;
    }

// Call the function to store user information
storeUserInfo();

var container = document.querySelector(".container");
const button = document.getElementById("theme");
var themeChanged = false;

button.addEventListener("click",()=>{
   themeChanged=!themeChanged;
   themeToBeChanged();
})

function themeToBeChanged(){
    if(themeChanged){
        container.style.color = "white";
        container.style.backgroundColor = "black";

    }else{
        container.style.color = "";
        container.style.backgroundColor = "white";
    }
}