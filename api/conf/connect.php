<?php
    class Database{
        //variables for logging in to database
        private $hostName = 'localhost:3308';
        private $db = 'skblog';
        private $userName = 'root';
        private $pw = '';
        public $conn;
    
        // get the database connection
        public function getConnection(){
    
            $this->conn = null;
    
            try{
                $this->conn = new PDO("mysql:host=" . $this->hostName . ";dbname=" . $this->db, $this->userName, $this->pw);
                $this->conn->exec("set names utf8");
            }catch(PDOException $exception){
                echo "Connection error: " . $exception->getMessage();
            }
    
            return $this->conn;
        }
    }
?>