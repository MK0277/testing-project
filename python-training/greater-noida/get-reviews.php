<?php
$apiKey = "AIzaSyBS1qPKpPwdN2zQq-9Ph-XbB_GFEmNTO1E"; 
$placeId = "ChIJHQLQ4azBDDkR4k3txCF1gUo";

$url = "https://maps.googleapis.com/maps/api/place/details/json?place_id=$placeId&fields=name,rating,user_ratings_total,reviews&key=$apiKey";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($ch);
curl_close($ch);

header('Content-Type: application/json');
echo $response;
?>
