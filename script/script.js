$(document).ready(function(){
    $('.content__slider').slick({   
      dots: true,           
      autoplay: true,
      autoplaySpeed: 4600
    });
  });

$(document).ready(function(){
  $('.fast__slider').slick({   
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true
  });
});

$(document).ready(function(){
  $('.top__slider').slick({         
  });
});

let question1 = document.querySelector('#question1'),
    question2 = document.querySelector('#question2'),
    question3 = document.querySelector('#question3'),
    question4 = document.querySelector('#question4');
let answer1 = document.querySelector('#answer1'),
    answer2 = document.querySelector('#answer2'),
    answer3 = document.querySelector('#answer3'),
    answer4 = document.querySelector('#answer4');

question1.addEventListener('click', function(event) {
    event.preventDefault();
    if (answer1.style.display == 'none') {
      answer1.style.display = 'block';      
      question1.style.color = '#ff0000';      
      answer2.style.display = 'none';
      answer3.style.display = 'none';
      answer4.style.display = 'none';
    } else {
      answer1.style.display = 'none';
      question1.style.color = '#4d4d4d'; 
    }
});
question2.addEventListener('click', function(event) {
    event.preventDefault();
    if (answer2.style.display == 'none') {
      answer1.style.display = 'none';
      answer2.style.display = 'block';
      question2.style.color = '#ff0000';
      answer3.style.display = 'none';
      answer4.style.display = 'none';
    } else {
      answer2.style.display = 'none';
      question2.style.color = '#4d4d4d';
    }
});
question3.addEventListener('click', function(event) {
    event.preventDefault();
    if (answer3.style.display == 'none') {
      answer1.style.display = 'none';
      answer2.style.display = 'none';
      answer3.style.display = 'block'; 
      question3.style.color = '#ff0000';     
      answer4.style.display = 'none';
    } else {
      answer3.style.display = 'none';
      question3.style.color = '#4d4d4d';
    }
});
question4.addEventListener('click', function(event) {
    event.preventDefault();
    if (answer4.style.display == 'none') {
      answer1.style.display = 'none';
      answer2.style.display = 'none';
      answer3.style.display = 'none';
      answer4.style.display = 'block';
      answer4.style.color = '#ff0000';
      question4.style.color = '#ff0000';
    } else {
      answer4.style.display = 'none';
      question4.style.color = '#4d4d4d';
    }
});