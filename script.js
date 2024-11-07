const TCField = document.querySelector(".TCNo");
const passwordField = document.querySelector(".password");
const errorMessage = document.querySelector(".error");


const getloggedInUser = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        window.location.href = "/layout.html";
    }
};

getloggedInUser();


const account1 = {
    TC: 12345678901,
    transactions: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2,
    pin: 'aaaa',
    movementsDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-12-23T07:42:02.383Z",
        "2024-01-28T09:15:04.904Z",
        "2024-04-01T10:17:24.185Z",
        "2024-05-08T14:11:59.604Z",
        "2024-05-27T17:01:17.194Z",
        "2024-07-11T23:36:17.929Z",
        "2024-07-12T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "pt-PT",
};

const account2 = {
    TC: 44444444444,
    transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 'bbb',
    movementsDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-12-23T07:42:02.383Z",
        "2024-01-28T09:15:04.904Z",
        "2024-04-01T10:17:24.185Z",
        "2024-05-08T14:11:59.604Z",
        "2024-05-27T17:01:17.194Z",
        "2024-07-11T23:36:17.929Z",
        "2024-07-12T10:51:36.790Z",
    ],
    currency: "USD",
    locale: "en-US",
};

const account3 = {
    TC: 22222222222,
    transactions: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 'ccc',
    movementsDates: [
        "2023-11-18T21:31:17.178Z",
        "2023-12-23T07:42:02.383Z",
        "2024-01-28T09:15:04.904Z",
        "2024-04-01T10:17:24.185Z",
        "2024-05-08T14:11:59.604Z",
        "2024-05-27T17:01:17.194Z",
        "2024-07-11T23:36:17.929Z",
        "2024-07-12T10:51:36.790Z",
    ],
    currency: "USD",
    locale: "en-US",
};

const accounts = JSON.parse(localStorage.getItem("accounts")) || [
    account1,
    account2,
    account3,
];


const displayError = (message) => {
    errorMessage.textContent = message;
    setTimeout(() => (errorMessage.textContent = ""), 1000);
};

const userLogin = (TC, password) => {
    const userFound = accounts.find((account) => account.TC === TC);
    if (userFound) {
        if (password !== userFound.pin) {
            displayError("Invalid Username or Password");
        } else {
            localStorage.setItem("loggedInUser", JSON.stringify(userFound));
            localStorage.setItem("accounts", JSON.stringify(accounts));
            window.location.href = "/layout.html";
        }
    } else {
        displayError("Invalid Username or Password");
    }
};

document.querySelector(".login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    userLogin(Number(TCField.value), passwordField.value);
});


