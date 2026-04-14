<?php

$appPassword = $_POST["app_password"];

if ($appPassword != "mwsdofinapwoi432380jfskd") {
    exit("Fuck off");
}

$api_key = file_get_contents("uex-api-code");
echo $api_key;

?>