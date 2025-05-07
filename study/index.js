





    var ad5 = window.prompt("enter pin number");
    var dat = window.prompt("Enter educational year");

    var em = document.getElementById("getem");
    var em1 = document.getElementById("getem1");
    var em2 = document.getElementById("getem2");
    var em3 = document.getElementById("getem3");
    var em4 = document.getElementById("getem4");
    var em5 = document.getElementById("getem5");
    
    
    em4.innerHTML= dat;


    
let http = new XMLHttpRequest();

http.open('get', '/data/data.json', true);
http.send();
http.onload = function(){
	if(this.readyState == 4 && this.status == 200){
		let products = JSON.parse(this.responseText);

        em.innerHTML="Admission No:"+products[ad5].adno;
        em1.innerHTML=products[ad5].pupilname;
        em2.innerHTML=products[ad5].fathername;
        em3.innerHTML="20101-cm-"+ad5;
        em5.innerHTML=products[ad5].nativeplace;
		

	}
} 


