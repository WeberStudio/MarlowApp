<?php
class Auth extends CI_Controller{
    
    
    function __construct()
    {        
    parent::__construct();

    //remove_ssl();
     $this->load->model('Admin_model');
    }


    function login()
    {
        $data['title']          = 'Login Page'; // Capitalize the first letter
        $email                  = $this->input->post('username');
        $password               = $this->input->post('password');
        $get_result             = $this->Admin_model->admin_login($email, $password);
        $count                  = count($get_result) ;
         
       if($count>0)
       {
           //echo '<pre>'; print_r($this->session->all_userdata()); exit;
           
           $info_array          = array('email'=> $email, 'password'=>$password);
           $auth_array          = array('auth-info'=>$info_array);
           $this->session->set_userdata($auth_array);
          redirect('index.php/pages/dashboard');
          
       }
       $this->load->view('admin/index', $data);
    
    }
}


?>