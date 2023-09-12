# User-Information-Card-using-js

Creating a user information card using JavaScript and storing the data in local storage is a common task in web development. 
Below is an example of how you can create a simple user information card, 
store the data in local storage, and later display it on the card when the page is loaded.

## HTML Code :-
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Card</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container">   
          <button id="theme">Change Mode</button>
        
        <div id="info-card">
         

                <h1>User Information Card</h1>
            <div id="user-info">
                <div class="field">
                    <span class="label">First Name:</span>
                    <span id="fname"></span>
                </div>
                <div class="field">
                    <span class="label">Last Name:</span>
                    <span id="lname"></span>
                </div>
                <div class="field">
                    <span class="label">Country:</span>
                    <span id="country"></span>
                </div>
                <div class="field">
                    <span class="label">Phone Number:</span>
                    <span id="ph-no"></span>
                </div>
                <div class="field">
                    <span class="label">State:</span>
                    <span id="state"></span>
                </div>
                <div class="field">
                    <span class="label">City:</span>
                    <span id="city"></span>
                </div>
                <div class="field">
                    <span class="label">Village:</span>
                    <span id="village"></span>
                </div>
                
            </div>
        </div>
    </div>

    <script src="./index.js"></script>
</body>
</html>
```
Styling for above code is as below,
## CSS Code :-
```

body {
    font-family: cursive;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #ff5733, #fbd037);

}
.container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    padding: 20px;
    max-width: 400px;
    width: 100%;
}   

h1 {
    font-size: 24px;
    /* color: #333; */
    margin-bottom: 20px;
    text-align: center;
    border: 3px solid #3498db;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

}
#info-card {
    text-align: center;
}
.field {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
.label {
    font-weight: bold;
    /* color: #555; */
    flex: 1;
}
#user-info span {
    flex: 2;
    /* color: #444; */
    text-align: left;
    padding-left: 10px;
}


 button{
    padding: 4px 8px;
    background-color: #fbd037;
    color: white;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    font-family: cursive;
 }
 button:hover{
    background-color: white;
    color: black;
 }
```

In this example, we have an HTML form for users to input their name, email, and phone number. 
When the form is submitted, the data is stored in local storage using localStorage.setItem, and the user card is updated with the newly entered information. 
When the page is reloaded, the data is retrieved from local storage and displayed on the user card.
We start by checking if there is any user data stored in the local storage. 
We use localStorage.getItem('userData') to retrieve the data and then parse it from JSON format into a JavaScript object using JSON.parse. 
If user data exists, it will be stored in the userData variable.
If user data exists in local storage, we update the user card's HTML elements with the stored data. 
The textContent property of each element is set to the corresponding user data field (name, email, phone).
We add an event listener to the form's submit event. When the form is submitted, the function inside the event listener is executed. e.preventDefault() prevents the default form submission behavior (which would cause a page refresh).

We then retrieve the user's input values from the form fields (name, email, phone) and store them in separate variables.

Next, we create a JavaScript object called user to store this user input. 
This object includes properties for name, email, and phone, with values coming from the form inputs.

## JAVASCRIPT Code :-
```
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
```





