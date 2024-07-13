var buttons = document.querySelectorAll("nav button");
var productbtn = document.querySelector(".productDiv");
var solutionbtn = document.querySelector(".solutuonDiv");
var resourcesbtn = document.querySelector(".resourcesDiv");


buttons.forEach((button, index) => {
     let check = 1
    button.addEventListener('click', () => {
        let div;
        if (index === 0) {
            div = productbtn;
        }
        else if (index === 1) {
            div = solutionbtn;
        }
        else{
            div = resourcesbtn;
        }

        if(check==1){
            div.style.display = "flex";
            check=0
            button.innerHTML =`${button.textContent}<i class="ri-arrow-up-s-line"></i>`
        }
        else{
            div.style.display = "none"
            check = 1
            button.innerHTML =`${button.textContent}<i class="ri-arrow-down-s-line">`
        }
    });
});