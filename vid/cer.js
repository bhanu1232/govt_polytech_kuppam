


let http = new XMLHttpRequest();

http.open('get', '/data/event.json', true);


http.send();

http.onload = function(){
	if(this.readyState == 4 && this.status == 200){

		let products = JSON.parse(this.responseText);

		let output = "";


		for(let item of products){
			output += `
				<div class="eventbox">
                    <div class="evm">
                    <img src="${item.image}"class="evenimg">
					<p class="eventitle">${item.title}</p>
                    </div>
                    <b>Description :</b>
					<p class="description">${item.description}</p>
				</div>
			`;
		}

		document.querySelector(".container12").innerHTML = output;
	}
} 


