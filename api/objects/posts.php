<?php
    class Posts{
        // database connection and table name
        private $conn;
        private $table_name = "posts";
    
        // object properties
        public $id;
        public $date;
        public $text;
    
        // constructor with $db as database connection
        public function __construct($db){
            $this->conn = $db;
        }

        // read products
        function read(){
        
            // select all query
            $query = "SELECT * FROM posts";
            // prepare query statement
            $stmt = $this->conn->prepare($query);
        
            // execute query
            $stmt->execute();
        
            return $stmt;
        }

        // create product
        function create(){
        
            // query to insert record
            $query = "INSERT INTO
                     " . $this->table_name . "
                     SET post=:post";
        
            // prepare query
            $stmt = $this->conn->prepare($query);
        
            // sanitize
            $this->post=htmlspecialchars(strip_tags($this->post));
        
            // bind values
            $stmt->bindParam(":post", $this->post);
        
            // execute query
            if($stmt->execute()){
                return true;
            }

            return false;
        }
    }
?>