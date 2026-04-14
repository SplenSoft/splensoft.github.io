<?php
$json = file_get_contents('php://input');
$data = json_decode($json, true);
$id = $data["id"];
$url = $data["url"];

$remote_file = file_get_contents($url);
$filename = __DIR__ . "/" . $id . ".wav";
$handle = fopen($filename, 'w');
chmod($filename, 0660);
fwrite($handle, $remote_file);
fclose($handle);
chmod($filename, 0664);
?>