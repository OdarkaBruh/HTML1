const jobs = [];
	//Посада - ЗП - Фірма - Місце
	jobs[0] = ["Продавець-стиліст", "30 000 ", "Helen Marlen", "Київ, вулиця Басейна, 4а.", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus\n Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate" ]
	jobs[1] = ["Водій на авто компанії", "45 000", "Нова пошта, ТОВ", "Київ", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui" ]
	jobs[2] = ["Продавець у кав'ярню", "16 200", "Слюсаренко С.А., ФЛП", "Київ", "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.\nPor scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa" ]
	jobs[3] = ["Бармен", "20 000", "Мама Манана", "Київ", "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.\nAenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus." ]
	jobs[4] = ["Вантажник-комплектувальник", "12 000", "Українські свіжо-заморожені продукти, ТОВ", "Київ, вулиця Сім'ї Сосніних, 9.", "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.\nDonec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo." ]


function myFunction() {
	for (let i = 0; i < jobs.length; i++) {
		printJob(jobs[i]);
	}
  	document.getElementById('abc').innerHTML = jobs[0][1];
}

function printJob(theObject){
	const qq = document.getElementById('jobs');
	let img = document.createElement('img');
	img.src = 'images/jobicon.png';

	var divTitle = document.createElement("div");
	divTitle.className = "divTitle";
	divTitle.appendChild(img);
	let h3 = document.createElement("h2");
	h3.append(theObject[0]);
	divTitle.append(h3);

	var divMain = document.createElement("div");
	divMain.className = "divMain";
	for (let j = 1; j < theObject.length-1; j++){
		let h3 = document.createElement("h3");
		h3.append(theObject[j]);
		divMain.append(h3);

	}

	var divDescription = document.createElement("div");
	divDescription.className = "divDescription";
	let p = document.createElement("p");
	p.append(theObject[theObject.length-1]);
	divDescription.append(p);

	divMain.append(divDescription);

	qq.append(divTitle);
	qq.append(divMain);
	}

function searchBar() {
	document.getElementById("jobs").innerHTML = "";
	let q = document.getElementById('query').value;
	for (let i = 0; i < jobs.length; i++) {
		if (jobs[i].indexOf(q) != -1){
			printJob(jobs[i]);
		}
	}

}