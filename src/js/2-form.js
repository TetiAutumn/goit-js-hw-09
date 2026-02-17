const formData = { email: "", message: "" };

const emailInput = document.querySelector("input");
const messageInput = document.querySelector("textarea");
const form = document.querySelector("form");

const handleInput = (event) =>{
    if (event.target.name === "email") {
        formData.email = event.target.value;
    };
    if (event.target.name === "message") {
        formData.message = event.target.value;
    }
    
    console.log(formData);
    localStorage.setItem("feedback-form-state",JSON.stringify(formData))
};
emailInput.addEventListener("input", handleInput);
messageInput.addEventListener("input", handleInput);

const uploadDataForm = ()=>{
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("feedback-form-state"));
     if (!dataFromLocalStorage) return;

    

    formData.email = dataFromLocalStorage.email || "";
    formData.message = dataFromLocalStorage.message || "";

    emailInput.value = formData.email;
    messageInput.value = formData.message;
};


window.addEventListener("load", uploadDataForm)

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log("FormData:", formData);

   
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    form.reset();
});

