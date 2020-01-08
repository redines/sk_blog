<?php
    // show error reporting
    error_reporting(E_ALL);
    
    // set your default time-zone
    date_default_timezone_set('Europe/Stockholm');
    
    // variables used for jwt
    $key = "testing";
    $iss = "http://skblog.se";
    $aud = "http://skblog.se";
    $iat = 1356999524;
    $nbf = 1357000000;
?>