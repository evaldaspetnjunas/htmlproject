const slidecont5 = document.querySelector('.slide-cont5');
const slideimages5 = document.querySelectorAll('.slide-cont5 img');


const btnprev5 = document.querySelector('#prevbtn5');
const btnnext5 = document.querySelector('#nextbtn5');

let imgcounter5 = 1;
const size5 = slideimages5[0].clientWidth;

slidecont5.style.transform = 'translateX(' + (-size5 * imgcounter5) + 'px)';

btnnext5.addEventListener('click', ()=>{
	slidecont5.style.transition='transform 0.2s ease-in-out'; 
	imgcounter5 ++;
	slidecont5.style.transform = 'translateX(' + (-size5 * imgcounter5) + 'px)';
});
btnprev5.addEventListener('click', ()=>{
	slidecont5.style.transition='transform 0.2s ease-in-out'; 
	imgcounter5 --;
	slidecont5.style.transform = 'translateX(' + (-size5 * imgcounter5) + 'px)';
});

slidecont5.addEventListener('transitionend', ()=>{
	if (slideimages5[imgcounter5].id === 'viimane4'){
		slidecont5.style.transition = 'none';
		imgcounter5= slideimages5.length - 2;
		slidecont5.style.transform = 'translateX(' + (-size5 * imgcounter5) + 'px)';
	}
	if (slideimages5[imgcounter5].id === 'esimene4'){
		slidecont5.style.transition = 'none';
		imgcounter5= slideimages5.length - imgcounter5;
		slidecont5.style.transform = 'translateX(' + (-size5 * imgcounter5) + 'px)';
	}
});