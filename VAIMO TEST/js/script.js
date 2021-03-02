const cl = document.querySelector(".main__menu--logIn-sign")
const delet = document.querySelector('.main__menu--logIn-register')

function click(event) {
    event.preventDefault();

    cl.innerHTML = "Hi, Angels!"
    delet.innerHTML = ""
    
    const headerTop = document.querySelector('header')
    const mainPic = document.querySelector('.main__top')
    const header = document.querySelector('.main__menu')
    const gradient = document.querySelector('.main__menu--gradient')
    const options = Array.from(document.querySelectorAll('.change'))
    const search = document.querySelector('.search')
    const bag = document.querySelector('.bag')
    const submit = document.querySelector('.submit')
    const input = document.querySelector('.input')

    submit.className = "submit2"
    input.className = "input2"
    headerTop.style.background = "#F7F7F7"
    mainPic.style.background = 'url(../../images/hp-oh-hi.png) no-repeat'
    header.style.background = "white"
    gradient.className = ""
    search.style.background = "#F7F7F7"
    bag.src = "./images/bagblack.png"
    

    console.log(options)
    
for (var i = 0; i < options.length; i++) {
    options[i].style.color = "black";
}
    


   
};

cl.addEventListener('click', click)



