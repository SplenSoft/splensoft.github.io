<?php

$appPassword = $_POST["app_password"];

// if ($appPassword != "mwsdofinapwoi432380jfskd") {
//     exit("Fuck off");
// }

$url = "https://portal.uexcorp.space/api/all_prices/pretty_mode/1/";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$headers = array(
   "api_key: 65223ee6c1971cbad891f21c6c4d063016b10ea6",
);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$resp = curl_exec($curl);
curl_close($curl);
//var_dump($resp);
echo ($resp);
?>