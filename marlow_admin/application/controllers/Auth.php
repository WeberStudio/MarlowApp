<?php
class Auth extends CI_Controller{
    
    
    function __construct()
    {        
    parent::__construct();
     if($this->session->userdata('auth-info')!="")
     {
        redirect('index.php/pages/dashboard');  
     }
    //remove_ssl();
     $this->load->model('Admin_model');
     $this->load->library('form_validation');
    }


    function login()
    {
        $data['title']          = 'Login Page'; // Capitalize the first letter
        $email                  = $this->input->post('email');
        $password               = $this->input->post('password');
        $get_result             = $this->Admin_model->admin_login($email, $password);
        $count                  = count($get_result) ;

        $this->form_validation->set_rules('password', 'Password', 'trim|required');
        $this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email');
         if ($this->form_validation->run() == FALSE)
        {
            $this->load->view('admin/index', $data);
        }
        else{
       if($count>0)
       {
           
            if($get_result['0']->status == '1') {$status = 'Active'; }
            $info_array          = array('email'=> $email, 'password'=>$password, 'name'=>$get_result['0']->name, 'status'=>$status);
            $auth_array          = array('auth-info'=>$info_array);
            $this->session->set_userdata($auth_array);
            redirect('index.php/pages/dashboard');
          
       }
        }
       
    
    }
}


?>
