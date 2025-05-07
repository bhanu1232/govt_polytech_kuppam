

function tgenerate(){

        var a14 = document.getElementById("fee").value;

        if(a14=="yes"){
                var st = document.getElementById("main");
                var te = document.getElementById("temp");
                 
                st.style.display="none";
                te.style.display="block";
                
                
                var currentdate = new Date();
                var day = currentdate.getDate();
                var month = currentdate.getMonth() + 1;
                var year = currentdate.getFullYear();
                var datetime = `${day}/${month}/${year}`;
                
                document.getElementById("getda").innerHTML = datetime;
                    
                let http = new XMLHttpRequest();
                
                http.open('get', '/data/data.json', true);
                http.send();
                http.onload = function(){
                        if(this.readyState == 4 && this.status == 200){
                                let products = JSON.parse(this.responseText);
                
                        var ch = document.getElementById("pinnum1").value;
                
                        
                var a1 = products[ch].adno;
                var a2 = products[ch].tcnum;
                var a3 =  products[ch].pupilname;
                var a4 =  products[ch].fathername;
                var a5 =  products[ch].pinnumber;
                var a6 =  products[ch].nationality;
                var a7 = products[ch].caste;
                var a8 = products[ch].dob;
                var a9 = products[ch].pupilleave;
                var a10 = products[ch].dateofad;
                var a11 = document.getElementById("doi").value;
                var a12 = products[ch].qual;
                var a13 = products[ch].conduct;
                
                
                
                        document.getElementById("addnum").innerHTML=`Admn No ${a1}`;;
                        document.getElementById("tccnum").innerHTML=`T.C No: ${a2} <br> Date : ${datetime}`;
                        document.getElementById("getname").innerHTML=`${a3}                                              `;
                        document.getElementById("getf").innerHTML=`${a4}                                              `;
                        document.getElementById("getp").innerHTML=`${a5}                                               `;
                        document.getElementById("getr").innerHTML=`${a6}                                               `;
                        document.getElementById("getc").innerHTML=`${a7}                                               `;
                        document.getElementById("getd").innerHTML=`${a8}                                               `;
                        document.getElementById("getl").innerHTML=`${a9}                                               `;
                        document.getElementById("geta").innerHTML=`${a10}                                               `;
                        document.getElementById("geti").innerHTML=`${a11}                                               `;
                        document.getElementById("getq").innerHTML=`${a12}                                               `;
                        document.getElementById("gets").innerHTML=`${a13}                                               `;
                        document.getElementById("getw").innerHTML=`${a14}                                               `;
                                
                
                        }
                } 
                
        }
        else{
                alert("Tc will not generate");
        }



}


