<?php
    namespace index;

    use Predis\Response\ServerException;

    require "vendor/autoload.php";

    class Index
    {
        public function add($a, $b){

            if(!is_numeric($a)){
                throw new ServerException();
            }

            return $a+$b;
        }
    }




