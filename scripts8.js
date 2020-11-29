const slidecont7 = document.querySelector('.slide-cont7');
const slideimages7 = document.querySelectorAll('.slide-cont7 img');


const btnprev7 = document.querySelector('#prevbtn7');
const btnnext7 = document.querySelector('#nextbtn7');

let imgcounter7 = 1;
const size7 = slideimages7[0].clientWidth;

slidecont7.style.transform = 'translateX(' + (-size7 * imgcounter7) + 'px)';

btnnext7.addEventListener('click', ()=>{
	slidecont7.style.transition='transform 0.2s ease-in-out'; 
	imgcounter7 ++;
	slidecont7.style.transform = 'translateX(' + (-size7 * imgcounter7) + 'px)';
});
btnprev7.addEventListener('click', ()=>{
	slidecont7.style.transition='transform 0.2s ease-in-out'; 
	imgcounter7 --;
	slidecont7.style.transform = 'translateX(' + (-size7 * imgcounter7) + 'px)';
});

slidecont7.addEventListener('transitionend', ()=>{
	if (slideimages7[imgcounter7].id === 'viimane6'){
		slidecont7.style.transition = 'none';
		imgcounter7= slideimages7.length - 2;
		slidecont7.style.transform = 'translateX(' + (-size7 * imgcounter7) + 'px)';
	}
	if (slideimages7[imgcounter7].id === 'esimene6'){
		slidecont7.style.transition = 'none';
		imgcounter7= slideimages7.length - imgcounter7;
		slidecont7.style.transform = 'translateX(' + (-size7 * imgcounter7) + 'px)';
	}
});