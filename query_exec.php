<?php
    require_once 'connect.php';

    $stmt = $conn->prepare('INSERT INTO post (post) VALUES(?)');
    $stmt->bind_param('b', $post);

    /*
    if(isset($_POST['post'])){
        $post = $_POST['post'];
    }else {
        $post = "(Not entered)";
    }*/

    print_r("executing");
    $post = "John";

    $stmt->execute();
    $stmt->close();
    $conn->close();
?>