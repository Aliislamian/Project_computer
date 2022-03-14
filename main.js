function setmassage(formElement , type , massage)
{
    const massageElement = formElement.querySelector(".from__massage")

    massageElement.textContent = massage;
    massageElement.classList.remove("from__massage--success" , "from__massage-error");
    massageElement.classList.add( `from__massage--${type}`);
}

function setInputError(inputerror , massage)
{
    inputerror.classList.add("form__input--error");
    inputerror.parentElement.querySelector(".from__input-error-massage").textContent = massage;
}



document.addEventListener("DOMContentLoaded" , () =>{
    const sign_in = document.querySelector('#singin');
    const singnup = document.querySelector('#Sign_up');

    

    sign_in.addEventListener("submit" , e =>{
        e.preventDefault();
        setmassage(sign_in , "error" , "*Invalid username/password combination*");
    });

    document.querySelectorAll(".from__input").forEach(inputerror =>{
        inputerror.addEventListener("blur" , e =>{
            if(e.target.id === "signupusername" && e.target.value.lenght > 0 && e.target.value.lenght < 10)
            {
                setInputError(inputerror , "*User name must be at least 10 characters in lenght.*")
            }
        });
    });
});


