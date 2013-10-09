<?php
class Admin_model extends CI_Model {

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }
    
    
    function admin_login($email=false, $password=false)
    {
        $this->db->where('email', $email);
        $this->db->where('password' , $password);
        $this->db->where('status' , '1');
        $query = $this->db->get('admin_login');
       
        return $query->result();
    }
    
    
    function get_records($table , $id=false)
    {
        if($id!="")
        {
            $this->db->where('id',$id);
        }
        
    $query = $this->db->get($table);
    return $query->result();    
    }
    

    function save_record($data, $table)
    {
        if($data['id'] !="")
        {
            $this->db->where('id', $data['id']);
            $this->db->update($table, $data);
        }
        else
        {
            $this->db->insert($table , $data);
        }
        
    }
    
    function save_status($data , $table)
    {
            $this->db->where('id', $data['id']);
            $this->db->update($table, $data);
    }
    
    function delete($id=false , $table=false)
    {
        $this->db->where('id', $id);
        $this->db->delete($table); 
    }
    
    /*function save_product($data)
    {
        if($data['id'] !="")
        {
            $this->db->where('id', $data['id']);
            $this->db->update('products', $data);
        }
        else
        {
            $this->db->insert('products' , $data);
        }
        
    }
    function add_user($data)
    {
         if($data['id'] !="")
        {
            $this->db->where('id', $data['id']);
            $this->db->update('user_info', $data);
        }
        else
        {
            $this->db->insert('user_info' , $data);
        }
    }*/
}
?>
