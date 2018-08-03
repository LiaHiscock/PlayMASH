<?php
$baseURL = "https://www.googleapis.com/customsearch/v1";
$cx = "005943818516878401081:c8b26df--ss";
$key = getenv('APIKey');
$excludedSites = "-site:facebook.com -site:pinterest.com";
$searchTerm = (array) json_decode(file_get_contents('php://input'));
$url= $baseURL . "?cx=" . $cx . "&key=" . $key . "&searchType=image&q=" . $searchTerm['q'] . " " . $excludedSites;
$handle = curl_init();
curl_setopt($handle, CURLOPT_URL, $url);
$data = curl_exec($handle);
error_log(curl_error($handle));
curl_close($handle);
echo $data;
?>