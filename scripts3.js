const slidecont2 = document.querySelector('.slide-cont2');
const slideimages2 = document.querySelectorAll('.slide-cont2 img');


const btnprev2 = document.querySelector('#prevbtn2');
const btnnext2 = document.querySelector('#nextbtn2');

let imgcounter2 = 1;
const size2 = slideimages2[0].clientWidth;

slidecont2.style.transform = 'translateX(' + (-size2 * imgcounter2) + 'px)';

btnnext2.addEventListener('click', ()=>{
	slidecont2.style.transition='transform 0.2s ease-in-out'; 
	imgcounter2 ++;
	slidecont2.style.transform = 'translateX(' + (-size2 * imgcounter2) + 'px)';
});
btnprev2.addEventListener('click', ()=>{
	slidecont2.style.transition='transform 0.2s ease-in-out'; 
	imgcounter2 --;
	slidecont2.style.transform = 'translateX(' + (-size2 * imgcounter2) + 'px)';
});

slidecont2.addEventListener('transitionend', ()=>{
	if (slideimages2[imgcounter2].id === 'viimane1'){
		slidecont2.style.transition = 'none';
		imgcounter2= slideimages2.length - 2;
		slidecont2.style.transform = 'translateX(' + (-size2 * imgcounter2) + 'px)';
	}
	if (slideimages2[imgcounter2].id === 'esimene1'){
		slidecont2.style.transition = 'none';
		imgcounter2= slideimages2.length - imgcounter2;
		slidecont2.style.transform = 'translateX(' + (-size2 * imgcounter2) + 'px)';
	}
});
