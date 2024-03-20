//  Text --------

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "WELCOME TO", "SERIN's", "PORTFOLIO!"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists. start typewriter animation
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }

  StartTextAnimation(0);
});


var swiper = new Swiper('.project-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: false,
  mousewheel: {
    invert: true,
  },
  pagination: {
    el: '.project-slider_pagination',
    clickable: true,
  }
});

document.querySelector('.project-slider').addEventListener('wheel', function (event) {
  event.stopPropagation();

  // mousewheel event 
  if (event.deltaY < 0) {
    swiper.slidePrev();
  } else {
    swiper.slideNext();
  }

});

// scroll up pages -----
let mult = true;
const arrSection = document.querySelectorAll('.section').length
const nav = document.querySelector('header')
document.body.addEventListener('wheel', function (e) {
  console.log(e.deltaY)

  if (mult) {
    mult = false
    const section = document.querySelector('.active')
    if (e.deltaY > 0) {
      window.deltaY = 100
      console.log(section)
      let id = +section.getAttribute('id').slice(1) + 1
      console.log(id)
      let elemNext = document.getElementById('s' + id) || false

      if (elemNext) {
        section.classList.remove('active')
        section.setAttribute('style', '')
        elemNext.classList.add('active')
        elemNext.style.transform = `translate3d(0, ${-100 * id}%, 0)`

      }
    }
    if (e.deltaY < 0) {
      let id = +section.getAttribute('id').slice(1) - 1
      console.log(id)
      let elemNext = document.getElementById('s' + id) || false

      if (elemNext) {
        section.classList.remove('active')
        section.setAttribute('style', '')
        elemNext.classList.add('active')
        elemNext.style.transform = `translate3d(0, ${-100 * id}%, 0)`

      }
    }


    setTimeout(() => { mult = true }, 1300)
  }
})

// email ----
const nodemailer = require('nodemailer');

let mailOptions = {
  from: 'your_email@gmail.com',
  to: 'recipient@example.com',
  subject: '테스트 이메일',
  text: '이것은 테스트 이메일입니다.'
};


transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

