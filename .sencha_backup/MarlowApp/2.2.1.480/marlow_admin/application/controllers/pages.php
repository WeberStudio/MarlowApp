<?php
class pages extends CI_Controller{
    
    
    function __construct()
    {        
    parent::__construct();
    
     if($this->session->userdata('auth-info')=="")
     {
        redirect('index.php/Auth/login');  
     }
     $data = array('title'=>'MarlowApp');
     $this->session->set_userdata($data);
    //remove_ssl();
     $this->load->model('Admin_model');
    }
    function logout()
    {
        $this->session->unset_userdata('auth-info');
        redirect('index.php/Auth/login'); 
    }
    
    
    function dashboard()
    {
        $data['left_bar']           = 'dashboard';
        $this->load->view('admin/dashboard', $data);
    }
    
    
    function all_records()
    {
        $data['left_bar']           = 'product';
        $data['listings']           = $this->Admin_model->get_records('products');
        $this->load->view('admin/all_records', $data);
    }
    
    
    function all_user()
    {
        $data['left_bar']           = 'user';
        $data['listings']           = $this->Admin_model->get_records('user_info');
        $this->load->view('admin/all_users', $data); 
    }
    
    function all_shops()
    {
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
            $insert                 = $this->Admin_model->save_record($save,'shops');
           redirect('index.php/pages/all_shops'); 
        }
        
        
        $this->load->view('admin/add_shop' , $data); 
    }
    
    
    function add_user($id=false)
    {
        $data['left_bar']           = 'user';
        $data['user']               = '';
        $data['gender']             = '';
        $data['firstname']          = '';
        $data['lastname']           = '';
        $data['password']           = '';
        $data['email']              = '';
        $data['date_db']            = '';
        if($id!='')
        {
           $data['user']            = $this->Admin_model->get_records('user_info',$id);
           $data['gender']          = $data['user']['0']->gender;
           $data['firstname']       = $data['user']['0']->fname;
           $data['lastname']        = $data['user']['0']->lname; 
           $data['date_db']         = $data['user']['0']->join_date;
           $data['email']           = $data['user']['0']->email; 
           $data['password']        = $data['user']['0']->password; 
 
        }
        
        $data['id']                 = $id;
        
               
        if($this->input->post('submit'))
        {
            $save                       = array();
            $save['id']                 = $id;
            $save['fname']              = $this->input->post('f_name');
            $save['lname']              = $this->input->post('l_name');
            $save['gender']             = $this->input->post('gender');
            if($id ==''){
            $save['join_date']          = date("Y-m-d");
            $save['password']           = md5($this->input->post('password'));
            } 
            $save['email']              = $this->input->post('email');
            $save['status']             = '1';
            $insert                     = $this->Admin_model->save_record($save , 'user_info');
       //print_r( $save); exit;
           redirect('index.php/pages/all_user'); 
        }
        
        
        $this->load->view('admin/add_user' , $data); 
    }
    
    
    function add_product($id=false)
    {
        $data['left_bar']           = 'product';
        // image uploade code
        $config['upload_path']      = './uploads/';
        $config['allowed_types']    = 'gif|jpg|png';
        $config['max_size']         = '1500';
        $config['max_width']        = '1024';
        $config['max_height']       = '768';
        $config['overwrite']        = false;
        $config['encrypt_name']     = TRUE;
        $this->load->library('upload', $config);
        
        $uploaded                   = $this->upload->do_upload('image');
           
        $p_image                    = $this->upload->data();
        
        $data['user_id']            = '';
        $data['brand_id']           = '';
        $data['note']               = '';
        $data['price']              = ''; 
        $data['image']              = '';
       
        $data['shop']               = $this->Admin_model->get_records('shops');
        $data['user']               = $this->Admin_model->get_records('user_info');
        if($id!='')
        {
          $data['product']          = $this->Admin_model->get_records('products',$id);
          $data['user_id']          = $data['product']['0']->user_id;
          $data['brand_id']         = $data['product']['0']->brand_id;
          $data['note']             = $data['product']['0']->note;
          $data['price']            = $data['product']['0']->price; 
          $data['image']            = $data['product']['0']->image;   

        }
        $data['id']                 = $id;
        
               
        if($this->input->post('submit'))
        {
            $save                   = array();
            $save['id']             = $id;
            $save['user_id']        = $this->input->post('user');
            $save['brand_id']       = $this->input->post('shop');
            $save['note']           = $this->input->post('note'); 
            $save['price']          = $this->input->post('price');
            if($uploaded){
            $save['image']          = $p_image['file_name'];
            }
            $save['status']         = '1';
            $insert                 = $this->Admin_model->save_record($save , 'products');
           redirect('index.php/pages/all_records/'.$id); 
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