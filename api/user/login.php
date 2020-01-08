<?php
    // required headers
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    // files needed to connect to database
    include_once '../conf/connect.php';
    include_once '../objects/user.php';

    // generate json web token
    include_once '../conf/core.php';
    include_once '../../vendor/firebase/php-jwt/src/BeforeValidException.php';
    include_once '../../vendor/firebase/php-jwt/src/ExpiredException.php';
    include_once '../../vendor/firebase/php-jwt/src/SignatureInvalidException.php';
    include_once '../../vendor/firebase/php-jwt/src/JWT.php';
    use \Firebase\JWT\JWT;
    
    // get database connection
    $database = new Database();
    $db = $database->getConnection();
    
    // instantiate user object
    $user = new User($db);
    
    // get posted data
    $data = json_decode(file_get_contents("php://input"));
    
    // set product property values
    $user->username = $data->userName;
    $user_exists = $user->emailExists();
    
    // check if email exists and if password is correct
    if($user_exists && password_verify($data->password, $user->password)){
    
        $token = array(
        "iss" => $iss,
        "aud" => $aud,
        "iat" => $iat,
        "nbf" => $nbf,
        "data" => array(
            "id" => $user->id,
            "username" => $user->username,
        )
        );
    
        // set response code
        http_response_code(200);
    
        // generate jwt
        $jwt = JWT::encode($token, $key);
        echo json_encode(
                array(
                    "message" => "Successful login.",
                    "jwt" => $jwt
                )
            );
    }
    
    // login failed
    else{
    
        // set response code
        http_response_code(401);
    
        // tell the user login failed
        echo json_encode(array("message" => "Login failed."));
    }
?>