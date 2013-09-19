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
	    $data['title']          = 'Login Page'; // Capitalize the first letter
        $email                  = $this->input->post('username');
        $password               = $this->input->post('password');
        $get_result             = $this->Admin_model->admin_login($email, $password);
        $count                  = count($get_result) ;
         
       if($count>0)
       {
          redirect('index.php/pages/dashboard');
       }
	   $this->load->view('admin/index', $data);
	
	}
    
    
    function dashboard()
    {
        $data['title']              = "Dashboard";
        $data['left_bar']           = 'dashboard';
       
       $this->load->view('admin/dashboard', $data);
         
    }
    
    
    function all_records()
    {
        
        $data['title']              = "Products";
        $data['left_bar']           = 'product';
        $data['listings']           = $this->Admin_model->get_records('products');
        $this->load->view('admin/all_records', $data);
    }
    
    
    function all_user()
    {
        $data['title']              = "Users";
        $data['left_bar']           = 'user';
        $data['listings']           = $this->Admin_model->get_records('user_info');
        $this->load->view('admin/all_users', $data); 
    }
        function all_shops()
    {
        $data['title']              = "Shops";
        $data['left_bar']           = 'shop';
        $data['listings']           = $this->Admin_model->get_records('shops');
        $this->load->view('admin/all_shops', $data); 
    }
    
    
    
    function status_up($id=false , $status = false , $table =false)
    {
        $save = array();
        
        $save['id']                 = $id;
        
        if($status == '1')
        {
            $save['status']         = '0';
        }
        
        else
        {
            $save['status']         = '1';
        }
        
        $this->Admin_model->save_status($save , $table);
        
        if( end($this->uri->segments) == "products")
        { 
             redirect('index.php/pages/all_records');
        }
        
        if( end($this->uri->segments) == "shops")
        {
             redirect('index.php/pages/all_shops');
        }
        
        if( end($this->uri->segments) == "user_info")
        {
             redirect('index.php/pages/all_user');
        }
        
    }
    
    function add_shop($id=false)
    {
        $data['title']              = 'Add Shop';
        $data['left_bar']           = 'shop';
        $data['shop']               = '';
        $data['name']               = '';
        $data['address']            = '';
        $data['email']              = '';
        $data['des']                = '';
        if($id!='')
        {
           $data['shop']            = $this->Admin_model->get_records('shops',$id);
           $data['name']            = $data['shop']['0']->name;
           $data['address']         = $data['shop']['0']->address;
           $data['email']           = $data['shop']['0']->email;
           $data['des']             = $data['shop']['0']->des; 
        }
        
        $data['id']                 = $id;
        
               
        if($this->input->post('submit'))
        {
            $save                   = array();
            $save['id']             = $id;
            $save['name']           = $this->input->post('name');
            $save['address']        = $this->input->post('address');
            $save['email']          = $this->input->post('email');
            $save['des']            = $this->input->post('des');
            $save['status']         = '1';
            $insert                 = $this->Admin_model->save_shop($save);
           redirect('index.php/pages/all_shops'); 
        }
        
        
        $this->load->view('admin/add_shop' , $data); 
    }
    
    
    function add_user($id=false)
    {
        $data['title']              = 'Add User';
        $data['left_bar']           = 'user';
        $data['shop']               = '';
        $data['name']               = '';
        $data['address']            = '';
        $data['email']              = '';
        $data['des']                = '';
        if($id!='')
        {
           $data['user']            = $this->Admin_model->get_records('user_info',$id); 
           $data['name']            = $data['user']['0']->fname;
           $data['date_db']         = $data['user']['0']->join_date;
           $data['email']           = $data['user']['0']->email; 
           $data['password']        = $data['user']['0']->password; 
 
        }
        
        $data['id']                 = $id;
        
               
        if($this->input->post('submit'))
        {
            $save                       = array();
            $save['id']                 = $id;
            $save['fname']              = $this->input->post('name');
            $save['gender']             = $this->input->post('gender');
            $save['join_date']          = $this->input->post('date'); 
            $save['email']              = $this->input->post('email');
            $save['password']           = $this->input->post('password');
            $save['status']             = '1';
            $insert                     = $this->Admin_model->add_user($save);
       //print_r( $save); exit;
           redirect('index.php/pages/all_user'); 
        }
        
        
        $this->load->view('admin/add_user' , $data); 
    }
    
    
    function add_product($id=false)
    {
        $data['title']              = 'Add Shop';
        $data['left_bar']           = 'product';
        $data['shop']               = '';
        $data['name']               = '';
        $data['address']            = '';
        $data['email']              = '';
        $data['des']                = '';
        if($id!='')
        {
           $data['shop']            = $this->Admin_model->get_records('shops',$id);
           $data['name']            = $data['shop']['0']->name;
           $data['address']         = $data['shop']['0']->address;
           $data['email']           = $data['shop']['0']->email;
           $data['des']             = $data['shop']['0']->des; 
        }
        
        $data['id']                 = $id;
        
               
        if($this->input->post('submit'))
        {
            $save                   = array();
            $save['id']             = $id;
            $save['name']           = $this->input->post('name');
            $save['address']        = $this->input->post('address');
            $save['email']          = $this->input->post('email');
            $save['des']            = $this->input->post('des');
            $save['status']         = '1';
            $insert                 = $this->Admin_model->save_shop($save);
           redirect('index.php/pages/all_shops'); 
        }
        
        
        $this->load->view('admin/add_product' , $data); 
    }
    
    function delete($id=false , $table=false)
    {
        $this->Admin_model->delete($id , $table);
        if( end($this->uri->segments) == "products")
        { 
             redirect('index.php/pages/all_records');
        }
        
        if( end($this->uri->segments) == "shops")
        {
             redirect('index.php/pages/all_shops');
        }
        
        if( end($this->uri->segments) == "user_info")
        {
             redirect('index.php/pages/all_user');
        }
        
        
    
    }
    
    
    
    /*function register()
    {
        //echo "i am in the register"; exit; 
        $data['title']          = "Registertion"; 
        $this->load->view('admin/register', $data);
    } */

}



?>