<?php
class client extends CI_Controller{
    
    
    function __construct()
    {        
         parent::__construct();
        //remove_ssl();
         $this->load->model('Client_model');
         $this->load->helper(array('form'));
         $this->load->library('form_validation');
         $this->load->helper('url');
    }
    
    
    function login()
    {   
           
        $data = file_get_contents("php://input");
        //print_r($data);
        //exit;  
        // $json_e      = json_encode($userinfo);           
        $decode         = json_decode($data, true);
        //print_r($decode); 
        $get            = $this->Client_model->login($decode['email'] , $decode['password']); 
       // print_r($get);      
        echo $count          = count($get);
        if($count >=1)
        {   
            $get        = json_encode($get);
            echo $get; 
            //return $get ;
        }
        else
        {
            $error      = array(array('ERROR'=>'YOU ENTERED INVALID EMAIL OR PASSWORD'));
            $error      = json_encode($error);
            echo $error;
            //return $error;
        }
    }
    
    
    function register()
    {   
        $data                   = file_get_contents("php://input");
        $decode                 = json_decode($data, true);
        $firstName              = $decode['firstName'];
        $lastName               = $decode['lastName'];
        $email                  = $decode['emailId'];
        $password               = $decode['password'];
        $gender                 = $decode['gender'];
        $date                   = date('Y-m-d');               
        $find_email             = $this->Client_model->email_finder($email);
         
       if($find_email >0)
        {
            $error              = array( 'success' => false, 'errors' => true ,'MESSAGE'=>'THIS EMAIL IS ALREADY EXIST');
            $error              = json_encode($error);
            echo $error;
            
        }        
        else
        {
            $save = array();
            $save['fname']          = $firstName;
            $save['lname']          = $lastName; 
            $save['email']          = $email; 
            $save['password']       = $password;
            $save['gender']         = $gender;
            $save['join_date']      = $date;
            $save['status']         = '1';
            
            $this->Client_model->register($save);
            $message                = array('success' => true, 'errors' => false ,'MESSAGE'=>'YOU RERGISTERED SUCCESSFULLY');
            $message                = json_encode($message);
            echo $message;
            
        }
    }
}
?>