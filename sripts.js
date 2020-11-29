const slidecont = document.querySelector('.slide-cont');
const slideimages = document.querySelectorAll('.slide-cont img');


const btnprev = document.querySelector('#prevbtn');
const btnnext = document.querySelector('#nextbtn');

let imgcounter = 1;
const size = slideimages[0].clientWidth;

slidecont.style.transform = 'translateX(' + (-size * imgcounter) + 'px)';

btnnext.addEventListener('click', ()=>{
	slidecont.style.transition='transform 0.2s ease-in-out'; 
	imgcounter ++;
	slidecont.style.transform = 'translateX(' + (-size * imgcounter) + 'px)';
});
btnprev.addEventListener('click', ()=>{
	slidecont.style.transition='transform 0.2s ease-in-out'; 
	imgcounter --;
	slidecont.style.transform = 'translateX(' + (-size * imgcounter) + 'px)';
});

slidecont.addEventListener('transitionend', ()=>{
	if (slideimages[imgcounter].id === 'viimanekloon'){
		slidecont.style.transition = 'none';
		imgcounter= slideimages.length - 2;
		slidecont.style.transform = 'translateX(' + (-size * imgcounter) + 'px)';
	}
});