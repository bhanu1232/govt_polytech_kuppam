<?php


    $conn =new mysqli('sql305.epizy.com','epiz_31926538','m4uJ5Vo3y3Oo','epiz_31926538_regform');
    if($conn->connection_error){
        die('connection failed :');
    }else{
        
        $name = $_REQUEST["studentName"];
        $mobile = $_REQUEST['studentMobile'];
        $concern=$_REQUEST['concern'];
        $message=$_REQUEST['datatext'];


      

        $stmt = $conn->prepare("INSERT INTO tdata(name,mobile,concern,message) VALUES(?,?,?,?)");
        $stmt->bind_param("ssss",$name,$mobile,$concern,$message);


        $stmt->execute();
        echo "<h1>concern sent to the developer thank you</h1>";
        $stmt->close();
        $conn->close();
    }
?>