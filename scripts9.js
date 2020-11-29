const slidecont8 = document.querySelector('.slide-cont8');
const slideimages8 = document.querySelectorAll('.slide-cont8 img');


const btnprev8 = document.querySelector('#prevbtn8');
const btnnext8 = document.querySelector('#nextbtn8');

let imgcounter8 = 1;
const size8 = slideimages8[0].clientWidth;

slidecont8.style.transform = 'translateX(' + (-size8 * imgcounter8) + 'px)';

btnnext8.addEventListener('click', ()=>{
	slidecont8.style.transition='transform 0.2s ease-in-out'; 
	imgcounter8 ++;
	slidecont8.style.transform = 'translateX(' + (-size8 * imgcounter8) + 'px)';
});
btnprev8.addEventListener('click', ()=>{
	slidecont8.style.transition='transform 0.2s ease-in-out'; 
	imgcounter8 --;
	slidecont8.style.transform = 'translateX(' + (-size8 * imgcounter8) + 'px)';
});

slidecont8.addEventListener('transitionend', ()=>{
	if (slideimages8[imgcounter8].id === 'viimane7'){
		slidecont8.style.transition = 'none';
		imgcounter8= slideimages8.length - 2;
		slidecont8.style.transform = 'translateX(' + (-size8 * imgcounter8) + 'px)';
	}
	if (slideimages8[imgcounter8].id === 'esimene7'){
		slidecont8.style.transition = 'none';
		imgcounter8= slideimages8.length - imgcounter8;
		slidecont8.style.transform = 'translateX(' + (-size8 * imgcounter8) + 'px)';
	}
});