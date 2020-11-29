const slidecont6 = document.querySelector('.slide-cont6');
const slideimages6 = document.querySelectorAll('.slide-cont6 img');


const btnprev6 = document.querySelector('#prevbtn6');
const btnnext6 = document.querySelector('#nextbtn6');

let imgcounter6 = 1;
const size6 = slideimages6[0].clientWidth;

slidecont6.style.transform = 'translateX(' + (-size6 * imgcounter6) + 'px)';

btnnext6.addEventListener('click', ()=>{
	slidecont6.style.transition='transform 0.2s ease-in-out'; 
	imgcounter6 ++;
	slidecont6.style.transform = 'translateX(' + (-size6 * imgcounter6) + 'px)';
});
btnprev6.addEventListener('click', ()=>{
	slidecont6.style.transition='transform 0.2s ease-in-out'; 
	imgcounter6 --;
	slidecont6.style.transform = 'translateX(' + (-size6 * imgcounter6) + 'px)';
});

slidecont6.addEventListener('transitionend', ()=>{
	if (slideimages6[imgcounter6].id === 'viimane5'){
		slidecont6.style.transition = 'none';
		imgcounter6= slideimages6.length - 2;
		slidecont6.style.transform = 'translateX(' + (-size6 * imgcounter6) + 'px)';
	}
	if (slideimages6[imgcounter6].id === 'esimene5'){
		slidecont6.style.transition = 'none';
		imgcounter6= slideimages6.length - imgcounter6;
		slidecont6.style.transform = 'translateX(' + (-size6 * imgcounter6) + 'px)';
	}
});