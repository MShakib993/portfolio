const product = document.querySelectorAll('.product');

const circle = document.querySelector('.scroll-progress');

window.onscroll = function() {
    const element = document.querySelector('.header');

    let progress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    circle.innerText = Math.round(progress) + "%";

    if (window.scrollY > 10) {
        element.classList.add('posColor');
    }
    else {
        element.classList.remove('posColor');
    }
};

window.addEventListener('scroll', scroller);

function scroller() {
    const size = window.innerHeight / 5 * 4;
    product.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < size) {
            box.classList.add("scroll");
        }
        else {
            box.classList.remove("scroll");
        }
    })
}

let nextButton = document.getElementById('next')
let prevButton = document.getElementById('prev')
let list = [].slice.call(document.querySelector('.container').children)

function findActiveList() {
  let activeList = list.findIndex((e) => {
    return e.classList.contains('active')
  })
  
  list[activeList].classList.remove('active', 'fadeInRight', 'fadeInLext', 'animated')
  
  return activeList
}

function slideShow() {
  let activeList = findActiveList()
  
  activeList++
  activeList = activeList === list.length ? 0 : activeList
  
  list[activeList].classList.add('active', 'fadeInRight', 'animated')
}

setInterval(slideShow, 5000)

nextButton.addEventListener('click', slideShow)

prevButton.addEventListener('click', () => {
  let activeList = findActiveList()
  
  activeList--
  activeList = activeList === -1 ? list.length - 1 : activeList
  
  list[activeList].classList.add('active', 'fadeInLeft', 'animated')
})