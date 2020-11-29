const slidecont1 = document.querySelector('.slide-cont1');
const slideimages1 = document.querySelectorAll('.slide-cont1 img');


const btnprev1 = document.querySelector('#prevbtn1');
const btnnext1 = document.querySelector('#nextbtn1');

let imgcounter1 = 1;
const size1 = slideimages1[0].clientWidth;

slidecont1.style.transform = 'translateX(' + (-size1 * imgcounter1) + 'px)';

btnnext1.addEventListener('click', ()=>{
	slidecont1.style.transition='transform 0.2s ease-in-out'; 
	imgcounter1 ++;
	slidecont1.style.transform = 'translateX(' + (-size1 * imgcounter1) + 'px)';
});
btnprev1.addEventListener('click', ()=>{
	slidecont1.style.transition='transform 0.2s ease-in-out'; 
	imgcounter1 --;
	slidecont1.style.transform = 'translateX(' + (-size1 * imgcounter1) + 'px)';
});

slidecont1.addEventListener('transitionend', ()=>{
	if (slideimages1[imgcounter1].id === 'viimane'){
		slidecont1.style.transition = 'none';
		imgcounter1= slideimages1.length - 2;
		slidecont1.style.transform = 'translateX(' + (-size1 * imgcounter1) + 'px)';
	}
	if (slideimages1[imgcounter1].id === 'esimene'){
		slidecont1.style.transition = 'none';
		imgcounter1= slideimages1.length - imgcounter1;
		slidecont1.style.transform = 'translateX(' + (-size1 * imgcounter1) + 'px)';
	}
});