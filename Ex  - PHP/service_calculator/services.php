<?php
 
class Data_Holder{
   protected $num1;
   protected $num2;
   protected $num3;
   protected $num4;
   protected $req_calc;
   protected $arr;


   public function __construct(){
        //echo "Constractor is Called(Data Model)";
        $this->num1 = 0;
        $this->num2 = 0;
        $this->num3 = 0;
        $this->num4 = 0;

        $this->arr = array('num1' =>$this->num1 ,'num2' =>$this->num2 ,'num3' =>$this->num3 ,'num4' => $this->num4);
        $arrlength = count($this->arr);

         for($x = 1; $x < $arrlength+1; $x++) {
            if(isset($_GET['num' . $x])){
                $this->arr['num' . $x] = (int)$_GET['num' . $x];
            }
            else if(isset($_POST['num' . $x])){
                $this->arr['num' . $x] = (int)$_POST['num' . $x];

            }
            else if($_SERVER['REQUEST_METHOD'] === 'PUT'){
                $this->arr['num' . $x] = (int)$_PUT['num' . $x];
            }
            else{
                 $this->arr['num' . $x]  = 0;
            }
             
        }


        if(isset($_GET['calc'])){
            $this->req_calc = (string)$_GET['calc'];
        }
        else if(isset($_POST['calc'])){
            $this->req_calc = (string)$_POST['calc'];
        }
        else if($_SERVER['REQUEST_METHOD'] === 'PUT'){
            $this->req_calc = (string)$_PUT['calc'];
        }
        else{
            $this->req_calc = "null";
        }

       

        //header('Content-Type: application/json');
        //echo json_encode( $this->arr);
        //echo $this->req_calc . '<br>';

   }

  

    public function getReq_calc(){
        return $this->req_calc;
   }

    public function getReq_array(){
        return $this->arr;
   }


   public function __destruct(){
       // echo "Destructor is Called(Data Model)" . '<br>';
   }
}


class Multiply{

    private $mult;


    public function __construct(){
        //echo "Constractor is Called(Multiply)";
        $mult = 0;
    }

    public function multiply($array){
        $mult = 1;
        $arrlength = count($array);

        foreach ($array as $value) {
             $mult *= $value;
         }
        echo $mult;
    }


    public function __destruct(){
       // echo "Destructor is Called(Multiply)";
   }
}

class Average{

    private $avg;

    public function __construct(){
       // echo "Constractor is Called(Average)";
        $avg  = 0;

    }

    public function average($array){  
        $avg = 0;
        $arrlength = count($array);

        foreach ($array as $value) {
             $avg += $value;
         }
        $avg = $avg / $arrlength;
        echo $avg;
    }

    public function __destruct(){
       // echo "Destructor is Called(Average)";
   }
}


class Sum{

    private $sum;

    public function __construct(){
       // echo "Constractor is Called(Sum)";
        $sum  = 0;
    }

    public function sum($array){
        $sum = 0;
        $arrlength = count($array);

        foreach ($array as $value) {
             $sum += $value;
         }
        echo $sum;
    }

    public function __destruct(){
       // echo "Destructor is Called(Sum)";
   }
}

class Error_Handler{

    public function __construct(){
       //  echo "Constractor is Called(Error_Handler)";
    }

    public function __destruct(){
      //  echo "Destructor is Called(Error_Handler)";
   }
}



$db = new Data_Holder;


if(strcmp($db->getReq_calc() , "mult") == 0){
    $mult = new Multiply;
    $mult->multiply($db->getReq_array());
}else if(strcmp($db->getReq_calc(), "sum") == 0){
    $sum = new Sum;
    $sum->sum($db->getReq_array());
}else if(strcmp($db->getReq_calc(), "avg") == 0){
    $avg = new Average;
    $avg->average($db->getReq_array());
}else{

}    



?>