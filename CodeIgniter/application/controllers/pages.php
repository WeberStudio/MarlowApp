<?php
class pages extends CI_Controller{
    
    
    function __construct()
    {        
    parent::__construct();

    //remove_ssl();
     $this->load->model('Admin_model');
    }


	function login()
	{
        $page               = 'login page';
	    $data['title']      = ucfirst($page); // Capitalize the first letter
        $email              = $this->input->post('username');
        $password           = $this->input->post('password');
        $get_result         = $this->Admin_model->admin_login($email, $password);
        $count              = count($get_result) ;
         
       if($count>0)
       {
          redirect('index.php/pages/dashboard');
       }
	   $this->load->view('admin/index', $data);
	
	}
    
    function dashboard()
    {
        $data['title'] = "dashboard";
       
       $this->load->view('admin/dashboard', $data);
         
    }
    function all_records()
    {
        $data['title'] = "Listing";
      //echo "i am in the all_records"; exit;
      $this->load->view('admin/all_records', $data);
    }
    
    function register()
    {
        //echo "i am in the register"; exit; 
        $data['title'] = "Registertion"; 
        $this->load->view('admin/register', $data);
    } 

}



?>