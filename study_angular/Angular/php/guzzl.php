<?php
require('vendor/autoload.php');

use GuzzleHttp\Client;
$url = 'https://maps.googleapis.com/maps/api/geocode/xml?latlng=48.514224,35&sensor=false&language=ru';

$client = new Client();
var_dump($client);