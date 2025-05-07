<?php

$jsonString = file_get_contents('/data/paym1.json');
$data = json_decode($jsonString, true);
$pin = $_REQUEST["need"];

$first = $_REQUEST['first'];
$second=$_REQUEST['second'];
$third=$_REQUEST['third'];

$data[$pin]['firstpayment'] = $first;
$data[$pin]['secondpayment'] = $second;
$data[$pin]['thirdpayment'] = $third;

$newJsonString = json_encode($data);
file_put_contents('/data/paym1.json', $newJsonString);

?>