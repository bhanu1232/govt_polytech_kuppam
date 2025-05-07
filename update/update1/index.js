function get(){
        
let http = new XMLHttpRequest();

http.open('get', '/data/paym1.json', true);
http.send();
http.onload = function(){
	if(this.readyState == 4 && this.status == 200){
		let products = JSON.parse(this.responseText);

        var key = document.getElementById("key").value;

        var obj = products.find( nv => nv.pinnumber === key);

        var ind = products.indexOf(obj);
        console.log(ind);
        document.getElementById("need").innerHTML=ind;
        document.getElementById("first").innerHTML=obj.firstpayment; 
        document.getElementById("second").innerHTML=obj.secondpayment;
        document.getElementById("third").innerHTML=obj.thirdpayment;
        document.getElementById("getname").innerHTML=obj.name;
        console.log(obj.firstpayment,obj.secondpayment,obj.thirdpayment);

        
	}
}


}

