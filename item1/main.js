var data = document.getElementById("tst").innerHTML;



let http1 = new XMLHttpRequest();

        http1.open('get', '/data/paym1.json', true);

        http1.send();


        http1.onload = function(){
            if(this.readyState == 4 && this.status == 200){
                let jsonObject = JSON.parse(this.responseText);
                var print = jsonObject.map(obj=> {
                    return `<tr>
                                <td>${obj.name}</td>
                                <td class="pins">${obj.pinnumber}</td>
                                <td class="checher">${obj.secondpayment}</td>
                            </tr>`;
                });

                document.getElementById("tbs").innerHTML=print;
	}
}


function search(){
    let http = new XMLHttpRequest();

        http.open('get', '/data/paym1.json', true);

        http.send();


        http.onload = function(){
            if(this.readyState == 4 && this.status == 200){
                let jsonObject = JSON.parse(this.responseText);
                var print = jsonObject.map(obj=> {
                    var key =document.getElementById("getdata").value;
                    var checker = obj.pinnumber;
                    if(key===checker){
                        return `<tr>
                                <td style="background:rgb(47, 255, 61);">${obj.name}</td>
                                <td class="pins" style="background:rgb(47, 255, 61);">${obj.pinnumber}</td>
                                <td class="checher" style="background:rgb(47, 255, 61);">${obj.secondpayment}</td>
                            </tr>`;
                    }

                });

                document.getElementById("tbs").innerHTML=print;
	}
} 

}
