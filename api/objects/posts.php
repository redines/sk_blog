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
    }
?>