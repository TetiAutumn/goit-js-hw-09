const formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;


const handleInput = (event) =>{
    formData[event.target.name] = event.target.value.trim();
    console.log(formData);
    localStorage.setItem("feedback-form-state",JSON.stringify(formData))
};
form.addEventListener("input", handleInput);

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

