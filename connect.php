<?php
    //variables for logging in to database
    $hostName = 'mysql';
    $db = 'skblog';
    $userName = 'pontus';
    $pw = '1qaz"WSX';
    $dbh = new PDO('mysql:$hostName;dbname=$db', $userName, $pw);
?>