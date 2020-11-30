const slidecont = document.querySelector('.slide-cont');//see jupp valib terve slide-cont div-i
const slideimages = document.querySelectorAll('.slide-cont img');//see võtab kõik pildid alamdiv-ist


const btnprev = document.querySelector('#prevbtn');//see funktsioon võtab nupud html-ist
const btnnext = document.querySelector('#nextbtn');

let imgcounter = 1;// selleks et programm teaks millist pildi võtta lisasin counteri
const size = slideimages[0].clientWidth;//size määrab esimese pildi laiust(client Width võtab pildi laisut ilma margin-ita,border-ita ja padding-uta)

slidecont.style.transform = 'translateX(' + (-size * imgcounter) + 'px)';//see funktsioon määrab piltide liikumist suurendades negatiivse pildi laiust imgcounteriga, seepärast liikubki pilt paremale,see jupp oli võetud internetist, see on viidatud koodi lõppus

btnnext.addEventListener('click', ()=>{//arvasin, et on parem kasutada es-6 funktsiooni (()=>) sest et see ei kasuta argumente
	slidecont.style.transition='transform 0.2s ease-in-out';//transitioni võiks teha ka css-is, aga arvasin et nii saan kiiremini hakkama
	imgcounter ++;//see rida liidab counterile 1 iga kord kui nupp on klikitud, suht sama on tehtud ka reas 20, kuid seal lahutatakse 
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
	if (slideimages[imgcounter].id === 'esimenekloon'){
		slidecont.style.transition = 'none';
		imgcounter= slideimages.length - imgcounter;
		slidecont.style.transform = 'translateX(' + (-size * imgcounter) + 'px)';
	}
});
//ridade 24-33 funktsioon on selles et nad vaatavad momentidel, kui transition lõpeb, et kas nende pildide, millel praegu counter on,
//id on viimanekloon või kas see on esimenekloon, kui nii ongi, esimesel juhul see võtab counterist maha 2, selleks,
//et on olemas 5 pilti: viimanekloon ja pilt 4 on samad, seepärast lahutatakse 2, selleks et see hüpaks pildile 4.
// sama toimub ka esimenekloon-iga kuid seal lahutatakse pitide arvust counteri väärtust, selleks et see hüpaks esimesele pildile

//mõned jupid olid võetud sellest videost, kuid aga koodi kirjutasin ise(https://youtu.be/KcdBOoK3Pfw)

