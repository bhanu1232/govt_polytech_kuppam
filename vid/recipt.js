

let http = new XMLHttpRequest();
    
    http.open('get', '/data/paym1.json', true);

    http.send();

    http.onload = function(){


        if(this.readyState == 4 && this.status == 200){
 
            let jsonObject = JSON.parse(this.responseText);
            var key = window.prompt("Enter pin number");
                let obj =jsonObject.find(pin =>pin.pinnumber === key)

                    var pin = document.getElementById("pinnum");
                    var name = document.getElementById("name");
                    var branch = document.getElementById("branch");
                    var mobile = document.getElementById("mobile");
        
                    document.getElementById("ima").src=obj.photo;
                    pin.innerHTML= "Pin Number :"+obj.pinnumber;
                    name.innerHTML= "Name :"+obj.name;
                    branch.innerHTML= "Branch :"+obj.branch;
                    mobile.innerHTML= "Phone Number :"+obj.phonenumber;
        
                    document.getElementById("first").innerHTML=obj.firstpayment;
                    document.getElementById("second").innerHTML=obj.secondpayment;
                    document.getElementById("third").innerHTML=obj.thirdpayment;

            

        }
    } 
    
    