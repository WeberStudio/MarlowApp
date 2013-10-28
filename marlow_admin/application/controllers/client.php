<?php
class client extends CI_Controller{
    
    
    function __construct()
    {        
    parent::__construct();

    //remove_ssl();
     $this->load->model('Client_model');
      $this->load->model('Admin_model');    
     $this->load->helper(array('form'));
     $this->load->library('form_validation');
     $this->load->helper('url');
     
      if (isset($_SERVER['HTTP_ORIGIN'])) {
                header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
                header('Access-Control-Allow-Credentials: true');
                header('Access-Control-Max-Age: 86400');    // cache for 1 day
            }

            // Access-Control headers are received during OPTIONS requests
            if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']} ");

                //  exit(0);
            }  
    }
    
    
    function login()
    {   
         //DebugBreak();
         if (isset($_SERVER['HTTP_ORIGIN'])) {
                header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
                header('Access-Control-Allow-Credentials: true');
                header('Access-Control-Max-Age: 86400');    // cache for 1 day
            }

            // Access-Control headers are received during OPTIONS requests
            if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']} ");

                //  exit(0);
            }  
        $data = file_get_contents("php://input");
        if($data == '')
        return false;
                 
        $decode         = json_decode($data, true);
    
        $get            = $this->Client_model->login($decode['email'] , md5($decode['password']));
       // $get[0]->password = '';
        
        $count          = count($get);
        if($count >=1)
        {   
            $get        = json_encode($get);
            echo $get;
        }
        else
        {
            $error      = array(array('user_id'=>'YOU ENTERED INVALID EMAIL OR PASSWORD'));
            $error      = json_encode($error);
            echo $error;
            
        }
    }
    function get_user($id=false)
    {
        if($id != '')
        {
            $get = $this->Client_model->get_shop($id);
        }
        else
        {
            $get = $this->Client_model->get_shop();
        }
        
        $error      = json_encode($get);
        echo $error;
        
        
    }
    
    
    function register()
    {   
        
		 //DebugBreak();
         if (isset($_SERVER['HTTP_ORIGIN'])) {
                header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
                header('Access-Control-Allow-Credentials: true');
                header('Access-Control-Max-Age: 86400');    // cache for 1 day
            }

            // Access-Control headers are received during OPTIONS requests
            if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']} ");

                //  exit(0);
            }  
		
		
		$firstName	= '';
		$lastName	= '';
		$gender		= '';
		$data                   = file_get_contents("php://input");
		if(empty($data))
		{
			return 	;	
		}
        $decode                 = json_decode($data, true);
       // $firstName              = $decode['firstName'];
       // $lastName               = $decode['lastName'];
        $email                  = $decode['emailId'];
        $password               = $decode['password'];
        //$gender                 = $decode['gender'];
        $date                   = date('Y-m-d');
        
		
		       
        $find_email             = $this->Client_model->email_finder($email);
         
        
       if($find_email >0)
        {
            $error              = array(array('MESSAGE'=>''));
            $error              = json_encode($error);
            echo $error;
            
        }        
        else
        {
            $save = array();
            $save['user_id']        = ''; 
            $save['fname']          = $firstName;
            $save['lname']          = $lastName; 
            $save['email']          = $email; 
            $save['password']       = md5($password);
            $save['gender']         = $gender;
            $save['join_date']      = $date;
            $save['status']         = '1';
            
            $this->Client_model->register($save);
            $message                = array(array('MESSAGE'=>'1'));
            $message                = json_encode($message);
            echo $message;
            
        }
    }
    
    function get_product($table)
    {
       
        $all_product                = $this->Client_model->get_records($table);
        $product_encode             = json_encode($all_product);
		/*$count = 0;
        foreach($all_product as $all){       
            $count = $count + 1;
            $img = str_replace('data:image/png;base64,', '', $all->image);
            $img = str_replace(' ', '+', $all->image);
            $data = base64_decode($all->image);
            $file = realpath('./')."/assets/media/".$count.".png";
            $success = file_put_contents($file, $data);  
        }
        exit;*/
		
        echo $product_encode;
         
        
    }
    function get_mylist_record()
    {
      	if (isset($_SERVER['HTTP_ORIGIN'])) {
                header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
                header('Access-Control-Allow-Credentials: true');
                header('Access-Control-Max-Age: 86400');    // cache for 1 day
            }

            // Access-Control headers are received during OPTIONS requests
            if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']} ");

                //  exit(0);
            }     
		
		
		$data                   = file_get_contents("php://input");
		if(empty($data))
		{
			return 	;	
		}
		$decode                 	= json_decode($data, true);
        $finalUserId              	= $decode['finalUserId'];
		$all_product                = $this->Client_model->get_my_listing_record($finalUserId);
		$product_encode             = json_encode($all_product);
		echo $product_encode;  
    }
    
     function add_product()
     {
          if (isset($_SERVER['HTTP_ORIGIN'])) {
                header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
                header('Access-Control-Allow-Credentials: true');
                header('Access-Control-Max-Age: 86400');    // cache for 1 day
            }

            // Access-Control headers are received during OPTIONS requests
            if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']} ");

                //  exit(0);
            }     
        $data                   = file_get_contents("php://input");
        $decode                 = json_decode($data, true);   
		// print_r($data);
		//  exit; 
		if(empty($data))
		{
			return 	;	
		}
		 
        $save                   = array();
		$save['image'] 			= '';
        $save['id']             = '';        
        $save['user_id']        = $decode['user_id'];
        $save['brand_id']       = $decode['brand_id'];
        $save['note']           = $decode['note'];   
        $save['price']          = $decode['price'];          
        $save['image']          = $decode['image'];          
        $save['status']         = '1';
		 
        if(!empty($decode['product_id']))
        {
            $save['id']             = $decode['product_id'];
        }
		
		if(empty($decode['product_id']))   
       	{
			$img 					= str_replace('data:image/png;base64,', '', $decode['image']);
			$img 					= str_replace(' ', '+', $decode['image']);
			$data 					= base64_decode($decode['image']);
			$save['image']          = uniqid().".png";
			$file 					= realpath('./')."/assets/media/".$save['image'];
			$success 				= file_put_contents($file, $data);	
		}
		
		//Insert All Data	
        $insert  	= $this->Admin_model->save_record($save , 'products');
         
		 
        if($insert)
        {
           $message             = array(array('MESSAGE'=>$save['image']));
           $message             = json_encode($message);
           echo $message;  
		   exit;          
        }
        else
        {
            $message             = array(array('MESSAGE'=>'Failed'));
            $message             = json_encode($message);
            echo $message; 
			exit;           
            
        }         
    }
    
    function delete_list_item($id)
    {
       	
		 if (isset($_SERVER['HTTP_ORIGIN'])) {
                header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
                header('Access-Control-Allow-Credentials: true');
                header('Access-Control-Max-Age: 86400');    // cache for 1 day
            }

            // Access-Control headers are received during OPTIONS requests
            if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS')
			 {

                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']} ");

                //  exit(0);
         		}     
		/*$data                   = file_get_contents("php://input");
		if(empty($data))
		{
			return 	;	
		}*/
		
		
	   
	    $this->Admin_model->delete($id , 'products');
        $error      = array(array('MESSAGE'=>'Record has been deleted successfully!'));
        $error      = json_encode($error);
        echo $error;                               
    
    }
    function delete_bulk_item($ids , $user_id)
    {
        if (strpos($ids,'.') !== false) {
        $str = str_replace(".",",",$ids);
        $str = substr($str, 0, -1);
        $arrayid = explode(",",$str);
        }
        else{
           $arrayid  = $ids; 
        }
        $get                = $this->Client_model->delete_bulk_items($arrayid , $user_id);
        $return_msg         = array('MESSAGE'=>'Successfully deleted!');
        $return_msg         = json_encode($return_msg); 
        echo $return_msg;
    }
    
    function send_share_email()
    {
        
        
		 if (isset($_SERVER['HTTP_ORIGIN'])) {
                header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
                header('Access-Control-Allow-Credentials: true');
                header('Access-Control-Max-Age: 86400');    // cache for 1 day
            }

            // Access-Control headers are received during OPTIONS requests
            if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS')
			 {

                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

                if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']} ");

                //  exit(0);
         	}     
		/*$data     = file_get_contents("php://input");
		
		if(empty($data))
		{
			return 	;	
		}
		*/
        $decode   = json_decode($data, true);   
        $this->load->library('email');
        $config['protocol'] = 'sendmail';
        $config['mailtype'] = 'html';
        $config['mailpath'] = '/usr/sbin/sendmail';
       
        $config['wordwrap'] = TRUE;
        $this->email->initialize($config);
        
        $this->email->from($decode['finalEmailFrom'], 'Your Name');
        $this->email->to($decode['emailTo']); 
        $this->email->subject($decode['emailSubject']);
		
		$message = '';
		
		if(!empty($decode['emailMessage']))
		{
			$message  .= $decode['emailMessage']."<br/><br/>";
		}
		
		if(!empty($decode['finalImage']))
		{
			$message  .= '<img src="http://geordie.testbench.co.uk/assets/media/'.$decode['finalImage'].'" alt="embedded folder icon">';
		}
		
		
        $this->email->message();
        $send = $this->email->send();
        //echo $this->email->print_debugger();exit;
        if($send)
        {
            echo 'Email sent seccessfully!';
            
        }
        else
        {
            echo 'Email sent fail!';            
        }
        
        
    }
	
	
	function send_mail()
	{
		$to = "khalil.junaid@gmail.com";
		$subject = "Hi!";
		$body = "Hi,\n\nHow are you?";
		if (mail($to, $subject, $body)) {
		echo("<p>Email successfully sent!</p>");
		} else {
		echo("<p>Email delivery failed…</p>");
		}
		
	}
	
    
}
  
?>
