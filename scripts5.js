const slidecont4 = document.querySelector('.slide-cont4');
const slideimages4 = document.querySelectorAll('.slide-cont4 img');


const btnprev4 = document.querySelector('#prevbtn4');
const btnnext4 = document.querySelector('#nextbtn4');

let imgcounter4 = 1;
const size4 = slideimages4[0].clientWidth;

slidecont4.style.transform = 'translateX(' + (-size4 * imgcounter4) + 'px)';

btnnext4.addEventListener('click', ()=>{
	slidecont4.style.transition='transform 0.2s ease-in-out'; 
	imgcounter4 ++;
	slidecont4.style.transform = 'translateX(' + (-size4 * imgcounter4) + 'px)';
});
btnprev4.addEventListener('click', ()=>{
	slidecont4.style.transition='transform 0.2s ease-in-out'; 
	imgcounter4 --;
	slidecont4.style.transform = 'translateX(' + (-size4 * imgcounter4) + 'px)';
});

slidecont4.addEventListener('transitionend', ()=>{
	if (slideimages4[imgcounter4].id === 'viimane3'){
		slidecont4.style.transition = 'none';
		imgcounter4= slideimages4.length - 2;
		slidecont4.style.transform = 'translateX(' + (-size4 * imgcounter4) + 'px)';
	}
	if (slideimages4[imgcounter4].id === 'esimene3'){
		slidecont4.style.transition = 'none';
		imgcounter4= slideimages4.length - imgcounter4;
		slidecont4.style.transform = 'translateX(' + (-size4 * imgcounter4) + 'px)';
	}
});