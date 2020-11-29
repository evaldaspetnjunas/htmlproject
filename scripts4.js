const slidecont3 = document.querySelector('.slide-cont3');
const slideimages3 = document.querySelectorAll('.slide-cont3 img');


const btnprev3 = document.querySelector('#prevbtn3');
const btnnext3 = document.querySelector('#nextbtn3');

let imgcounter3 = 1;
const size3 = slideimages3[0].clientWidth;

slidecont3.style.transform = 'translateX(' + (-size3 * imgcounter3) + 'px)';

btnnext3.addEventListener('click', ()=>{
	slidecont3.style.transition='transform 0.2s ease-in-out'; 
	imgcounter3 ++;
	slidecont3.style.transform = 'translateX(' + (-size3 * imgcounter3) + 'px)';
});
btnprev3.addEventListener('click', ()=>{
	slidecont3.style.transition='transform 0.2s ease-in-out'; 
	imgcounter3 --;
	slidecont3.style.transform = 'translateX(' + (-size3 * imgcounter3) + 'px)';
});

slidecont3.addEventListener('transitionend', ()=>{
	if (slideimages3[imgcounter3].id === 'viimane2'){
		slidecont3.style.transition = 'none';
		imgcounter3= slideimages3.length - 2;
		slidecont3.style.transform = 'translateX(' + (-size3 * imgcounter3) + 'px)';
	}
	if (slideimages3[imgcounter3].id === 'esimene2'){
		slidecont3.style.transition = 'none';
		imgcounter3= slideimages3.length - imgcounter3;
		slidecont3.style.transform = 'translateX(' + (-size3 * imgcounter3) + 'px)';
	}
});