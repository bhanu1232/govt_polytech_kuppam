

/*=================== active hover ===========*/


var btnContainer = document.getElementById("sidebar");
var btns = btnContainer.getElementsByClassName("list");

for(var i =0; i<btns.length; i++){
    btns[i].addEventListener('click' ,function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active");
        this.className += " active"
    })
}




var pop = document.getElementById("onbtn");
var attendence = document.getElementById("attendence");
var attext = document.getElementById("attper");
var percent = document.getElementById("percent");
var pertext = document.getElementById("tmarks");

var getname = document.getElementById("getname");
var getpin = document.getElementById("getpin");
var getbranch = document.getElementById("getbranch");
var getphone = document.getElementById("getphone");
var percent = document.getElementById("percent");
var pertext = document.getElementById("tmarks");

pop.onclick = function(){
    var pinnum = document.getElementById("pinnumber").value;



    //=================================data sending to the table =====================================================================//




    var I1 = document.getElementById("i1");
    var I2 = document.getElementById("i2");
    var I3 = document.getElementById("i3");
    var I4 = document.getElementById("i4");
    var I5 = document.getElementById("i5");
    var I6 = document.getElementById("i6");
    var I7 = document.getElementById("i7");
    var I8 = document.getElementById("i8");
    var I9 = document.getElementById("i9");
    
    
    var E1 = document.getElementById("e1");
    var E2 = document.getElementById("e2");
    var E3 = document.getElementById("e3");
    var E4 = document.getElementById("e4");
    var E5 = document.getElementById("e5");
    var E6 = document.getElementById("e6");
    var E7 = document.getElementById("e7");
    var E8 = document.getElementById("e8");
    var E9 = document.getElementById("e9");
    
    
    
    var T1 = document.getElementById("t1");
    var T2 = document.getElementById("t2");
    var T3 = document.getElementById("t3");
    var T4 = document.getElementById("t4");
    var T5 = document.getElementById("t5");
    var T6 = document.getElementById("t6");
    var T7 = document.getElementById("t7");
    var T8 = document.getElementById("t8");
    var T9 = document.getElementById("t9");
    
    
    
    var S1 = document.getElementById("s1");
    var S2 = document.getElementById("s2");
    var S3 = document.getElementById("s3");
    var S4 = document.getElementById("s4");
    var S5 = document.getElementById("s5");
    var S6 = document.getElementById("s6");
    var S7 = document.getElementById("s7");
    var S8 = document.getElementById("s8");
    var S9 = document.getElementById("s9");
    

//=============================================3rd sem====================================//

    var sI1 = document.getElementById("si1");
    var sI2 = document.getElementById("si2");
    var sI3 = document.getElementById("si3");
    var sI4 = document.getElementById("si4");
    var sI5 = document.getElementById("si5");
    var sI6 = document.getElementById("si6");
    var sI7 = document.getElementById("si7");
    var sI8 = document.getElementById("si8");
    var sI9 = document.getElementById("si9");
    
    
    var sE1 = document.getElementById("se1");
    var sE2 = document.getElementById("se2");
    var sE3 = document.getElementById("se3");
    var sE4 = document.getElementById("se4");
    var sE5 = document.getElementById("se5");
    var sE6 = document.getElementById("se6");
    var sE7 = document.getElementById("se7");
    var sE8 = document.getElementById("se8");
    var sE9 = document.getElementById("se9");
    
    
    
    var sT1 = document.getElementById("st1");
    var sT2 = document.getElementById("st2");
    var sT3 = document.getElementById("st3");
    var sT4 = document.getElementById("st4");
    var sT5 = document.getElementById("st5");
    var sT6 = document.getElementById("st6");
    var sT7 = document.getElementById("st7");
    var sT8 = document.getElementById("st8");
    var sT9 = document.getElementById("st9");
    
    
    
    var sS1 = document.getElementById("ss1");
    var sS2 = document.getElementById("ss2");
    var sS3 = document.getElementById("ss3");
    var sS4 = document.getElementById("ss4");
    var sS5 = document.getElementById("ss5");
    var sS6 = document.getElementById("ss6");
    var sS7 = document.getElementById("ss7");
    var sS8 = document.getElementById("ss8");
    var sS9 = document.getElementById("ss9");
    





    //==========================================4th sem==================================//



    var fI1 = document.getElementById("fi1");
    var fI2 = document.getElementById("fi2");
    var fI3 = document.getElementById("fi3");
    var fI4 = document.getElementById("fi4");
    var fI5 = document.getElementById("fi5");
    var fI6 = document.getElementById("fi6");
    var fI7 = document.getElementById("fi7");
    var fI8 = document.getElementById("fi8");
    var fI9 = document.getElementById("fi9");
    
    
    var fE1 = document.getElementById("fe1");
    var fE2 = document.getElementById("fe2");
    var fE3 = document.getElementById("fe3");
    var fE4 = document.getElementById("fe4");
    var fE5 = document.getElementById("fe5");
    var fE6 = document.getElementById("fe6");
    var fE7 = document.getElementById("fe7");
    var fE8 = document.getElementById("fe8");
    var fE9 = document.getElementById("fe9");
    
    
    
    var fT1 = document.getElementById("ft1");
    var fT2 = document.getElementById("ft2");
    var fT3 = document.getElementById("ft3");
    var fT4 = document.getElementById("ft4");
    var fT5 = document.getElementById("ft5");
    var fT6 = document.getElementById("ft6");
    var fT7 = document.getElementById("ft7");
    var fT8 = document.getElementById("ft8");
    var fT9 = document.getElementById("ft9");
    
    
    
    var fS1 = document.getElementById("fs1");
    var fS2 = document.getElementById("fs2");
    var fS3 = document.getElementById("fs3");
    var fS4 = document.getElementById("fs4");
    var fS5 = document.getElementById("fs5");
    var fS6 = document.getElementById("fs6");
    var fS7 = document.getElementById("fs7");
    var fS8 = document.getElementById("fs8");
    var fS9 = document.getElementById("fs9");
    





    //====================================final one ==========================================//





    var vI1 = document.getElementById("vi1");
    var vI2 = document.getElementById("vi2");
    var vI3 = document.getElementById("vi3");
    var vI4 = document.getElementById("vi4");
    var vI5 = document.getElementById("vi5");
    var vI6 = document.getElementById("vi6");
    var vI7 = document.getElementById("vi7");
    var vI8 = document.getElementById("vi8");
    var vI9 = document.getElementById("vi9");
    
    
    var vE1 = document.getElementById("ve1");
    var vE2 = document.getElementById("ve2");
    var vE3 = document.getElementById("ve3");
    var vE4 = document.getElementById("ve4");
    var vE5 = document.getElementById("ve5");
    var vE6 = document.getElementById("ve6");
    var vE7 = document.getElementById("ve7");
    var vE8 = document.getElementById("ve8");
    var vE9 = document.getElementById("ve9");
    
    
    
    var vT1 = document.getElementById("vt1");
    var vT2 = document.getElementById("vt2");
    var vT3 = document.getElementById("vt3");
    var vT4 = document.getElementById("vt4");
    var vT5 = document.getElementById("vt5");
    var vT6 = document.getElementById("vt6");
    var vT7 = document.getElementById("vt7");
    var vT8 = document.getElementById("vt8");
    var vT9 = document.getElementById("vt9");
    
    
    
    var vS1 = document.getElementById("vs1");
    var vS2 = document.getElementById("vs2");
    var vS3 = document.getElementById("vs3");
    var vS4 = document.getElementById("vs4");
    var vS5 = document.getElementById("vs5");
    var vS6 = document.getElementById("vs6");
    var vS7 = document.getElementById("vs7");
    var vS8 = document.getElementById("vs8");
    var vS9 = document.getElementById("vs9");
    






let http = new XMLHttpRequest();

        http.open('get', '/data/info.json', true);

        http.send();


        http.onload = function(){
            if(this.readyState == 4 && this.status == 200){

                let jsonObject = JSON.parse(this.responseText);
                I1.innerHTML = jsonObject[pinnum].I1;
                I2.innerHTML = jsonObject[pinnum].I2;
                I3.innerHTML = jsonObject[pinnum].I3;
                I4.innerHTML = jsonObject[pinnum].I4;
                I5.innerHTML = jsonObject[pinnum].I5;
                I6.innerHTML = jsonObject[pinnum].I6;
                I7.innerHTML = jsonObject[pinnum].I7;
                I8.innerHTML = jsonObject[pinnum].I8;
                I9.innerHTML = jsonObject[pinnum].I9;
        
                E1.innerHTML = jsonObject[pinnum].E1;
                E2.innerHTML = jsonObject[pinnum].E2;
                E3.innerHTML = jsonObject[pinnum].E3;
                E4.innerHTML = jsonObject[pinnum].E4;
                E5.innerHTML = jsonObject[pinnum].E5;
                E6.innerHTML = jsonObject[pinnum].E6;
                E7.innerHTML = jsonObject[pinnum].E7;
                E8.innerHTML = jsonObject[pinnum].E8;
                E9.innerHTML = jsonObject[pinnum].E9;
        
                T1.innerHTML = jsonObject[pinnum].T1;
                T2.innerHTML = jsonObject[pinnum].T2;
                T3.innerHTML = jsonObject[pinnum].T3;
                T4.innerHTML = jsonObject[pinnum].T4;
                T5.innerHTML = jsonObject[pinnum].T5;
                T6.innerHTML = jsonObject[pinnum].T6;
                T7.innerHTML = jsonObject[pinnum].T7;
                T8.innerHTML = jsonObject[pinnum].T8;
                T9.innerHTML = jsonObject[pinnum].T9;
        
                S1.innerHTML = jsonObject[pinnum].S1;
                S2.innerHTML = jsonObject[pinnum].S2;
                S3.innerHTML = jsonObject[pinnum].S3;
                S4.innerHTML = jsonObject[pinnum].S4;
                S5.innerHTML = jsonObject[pinnum].S5;
                S6.innerHTML = jsonObject[pinnum].S6;
                S7.innerHTML = jsonObject[pinnum].S7;
                S8.innerHTML = jsonObject[pinnum].S8;
                S9.innerHTML = jsonObject[pinnum].S9;
        
        
                attendence.value = jsonObject[pinnum].att;
                attext.innerHTML= jsonObject[pinnum].att+"%";
        
                percent.value = jsonObject[pinnum].total;
                pertext.innerHTML = jsonObject[pinnum].total;
        
        
                getname.innerHTML="NAME :"+jsonObject[pinnum].name;
                getpin.innerHTML ="PIN number :"+jsonObject[pinnum].pin;
                getbranch.innerHTML = "BRANCH :"+"CME";
                getphone.innerHTML = "PHONE NO :"+jsonObject[pinnum].phone;
        
        
                var photo = jsonObject[pinnum].photo;
                var pele = document.getElementById('stphoto');
                pele.setAttribute("src",photo);

    

	}
} 

let http1 = new XMLHttpRequest();

        http1.open('get', '/data/info1.json', true);

        http1.send();


        http1.onload = function(){
            if(this.readyState == 4 && this.status == 200){

                let jsonObject = JSON.parse(this.responseText);
                sI1.innerHTML = jsonObject[pinnum].I1;
                sI2.innerHTML = jsonObject[pinnum].I2;
                sI3.innerHTML = jsonObject[pinnum].I3;
                sI4.innerHTML = jsonObject[pinnum].I4;
                sI5.innerHTML = jsonObject[pinnum].I5;
                sI6.innerHTML = jsonObject[pinnum].I6;
                sI7.innerHTML = jsonObject[pinnum].I7;
                sI8.innerHTML = jsonObject[pinnum].I8;
                sI9.innerHTML = jsonObject[pinnum].I9;
        
                sE1.innerHTML = jsonObject[pinnum].E1;
                sE2.innerHTML = jsonObject[pinnum].E2;
                sE3.innerHTML = jsonObject[pinnum].E3;
                sE4.innerHTML = jsonObject[pinnum].E4;
                sE5.innerHTML = jsonObject[pinnum].E5;
                sE6.innerHTML = jsonObject[pinnum].E6;
                sE7.innerHTML = jsonObject[pinnum].E7;
                sE8.innerHTML = jsonObject[pinnum].E8;
                sE9.innerHTML = jsonObject[pinnum].E9;
        
                sT1.innerHTML = jsonObject[pinnum].T1;
                sT2.innerHTML = jsonObject[pinnum].T2;
                sT3.innerHTML = jsonObject[pinnum].T3;
                sT4.innerHTML = jsonObject[pinnum].T4;
                sT5.innerHTML = jsonObject[pinnum].T5;
                sT6.innerHTML = jsonObject[pinnum].T6;
                sT7.innerHTML = jsonObject[pinnum].T7;
                sT8.innerHTML = jsonObject[pinnum].T8;
                sT9.innerHTML = jsonObject[pinnum].T9;
        
                sS1.innerHTML = jsonObject[pinnum].S1;
                sS2.innerHTML = jsonObject[pinnum].S2;
                sS3.innerHTML = jsonObject[pinnum].S3;
                sS4.innerHTML = jsonObject[pinnum].S4;
                sS5.innerHTML = jsonObject[pinnum].S5;
                sS6.innerHTML = jsonObject[pinnum].S6;
                sS7.innerHTML = jsonObject[pinnum].S7;
                sS8.innerHTML = jsonObject[pinnum].S8;
                sS9.innerHTML = jsonObject[pinnum].S9;
        

	}
} 





let http2 = new XMLHttpRequest();

        http2.open('get', '/data/info2.json', true);

        http2.send();


        http2.onload = function(){
            if(this.readyState == 4 && this.status == 200){

                let jsonObject = JSON.parse(this.responseText);
                fI1.innerHTML = jsonObject[pinnum].I1;
                fI2.innerHTML = jsonObject[pinnum].I2;
                fI3.innerHTML = jsonObject[pinnum].I3;
                fI4.innerHTML = jsonObject[pinnum].I4;
                fI5.innerHTML = jsonObject[pinnum].I5;
                fI6.innerHTML = jsonObject[pinnum].I6;
                fI7.innerHTML = jsonObject[pinnum].I7;
                fI8.innerHTML = jsonObject[pinnum].I8;
                fI9.innerHTML = jsonObject[pinnum].I9;
        
                fE1.innerHTML = jsonObject[pinnum].E1;
                fE2.innerHTML = jsonObject[pinnum].E2;
                fE3.innerHTML = jsonObject[pinnum].E3;
                fE4.innerHTML = jsonObject[pinnum].E4;
                fE5.innerHTML = jsonObject[pinnum].E5;
                fE6.innerHTML = jsonObject[pinnum].E6;
                fE7.innerHTML = jsonObject[pinnum].E7;
                fE8.innerHTML = jsonObject[pinnum].E8;
                fE9.innerHTML = jsonObject[pinnum].E9;
        
                fT1.innerHTML = jsonObject[pinnum].T1;
                fT2.innerHTML = jsonObject[pinnum].T2;
                fT3.innerHTML = jsonObject[pinnum].T3;
                fT4.innerHTML = jsonObject[pinnum].T4;
                fT5.innerHTML = jsonObject[pinnum].T5;
                fT6.innerHTML = jsonObject[pinnum].T6;
                fT7.innerHTML = jsonObject[pinnum].T7;
                fT8.innerHTML = jsonObject[pinnum].T8;
                fT9.innerHTML = jsonObject[pinnum].T9;
        
                fS1.innerHTML = jsonObject[pinnum].S1;
                fS2.innerHTML = jsonObject[pinnum].S2;
                fS3.innerHTML = jsonObject[pinnum].S3;
                fS4.innerHTML = jsonObject[pinnum].S4;
                fS5.innerHTML = jsonObject[pinnum].S5;
                fS6.innerHTML = jsonObject[pinnum].S6;
                fS7.innerHTML = jsonObject[pinnum].S7;
                fS8.innerHTML = jsonObject[pinnum].S8;
                fS9.innerHTML = jsonObject[pinnum].S9;
        
    
    

	}
} 





let http3 = new XMLHttpRequest();

        http3.open('get', '/data/info.json', true);

        http3.send();


        http3.onload = function(){
            if(this.readyState == 4 && this.status == 200){

                let jsonObject = JSON.parse(this.responseText);
                vI1.innerHTML = jsonObject[pinnum].I1;
                vI2.innerHTML = jsonObject[pinnum].I2;
                vI3.innerHTML = jsonObject[pinnum].I3;
                vI4.innerHTML = jsonObject[pinnum].I4;
                vI5.innerHTML = jsonObject[pinnum].I5;
                vI6.innerHTML = jsonObject[pinnum].I6;
                vI7.innerHTML = jsonObject[pinnum].I7;
                vI8.innerHTML = jsonObject[pinnum].I8;
                vI9.innerHTML = jsonObject[pinnum].I9;
        
                vE1.innerHTML = jsonObject[pinnum].E1;
                vE2.innerHTML = jsonObject[pinnum].E2;
                vE3.innerHTML = jsonObject[pinnum].E3;
                vE4.innerHTML = jsonObject[pinnum].E4;
                vE5.innerHTML = jsonObject[pinnum].E5;
                vE6.innerHTML = jsonObject[pinnum].E6;
                vE7.innerHTML = jsonObject[pinnum].E7;
                vE8.innerHTML = jsonObject[pinnum].E8;
                vE9.innerHTML = jsonObject[pinnum].E9;
        
                vT1.innerHTML = jsonObject[pinnum].T1;
                vT2.innerHTML = jsonObject[pinnum].T2;
                vT3.innerHTML = jsonObject[pinnum].T3;
                vT4.innerHTML = jsonObject[pinnum].T4;
                vT5.innerHTML = jsonObject[pinnum].T5;
                vT6.innerHTML = jsonObject[pinnum].T6;
                vT7.innerHTML = jsonObject[pinnum].T7;
                vT8.innerHTML = jsonObject[pinnum].T8;
                vT9.innerHTML = jsonObject[pinnum].T9;
        
                vS1.innerHTML = jsonObject[pinnum].S1;
                vS2.innerHTML = jsonObject[pinnum].S2;
                vS3.innerHTML = jsonObject[pinnum].S3;
                vS4.innerHTML = jsonObject[pinnum].S4;
                vS5.innerHTML = jsonObject[pinnum].S5;
                vS6.innerHTML = jsonObject[pinnum].S6;
                vS7.innerHTML = jsonObject[pinnum].S7;
                vS8.innerHTML = jsonObject[pinnum].S8;
                vS9.innerHTML = jsonObject[pinnum].S9;
        
        
    

	}
} 

}