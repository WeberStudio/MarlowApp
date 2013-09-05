<?php
class Client_model extends CI_Model {

    function __construct()
    {
        // Call the Model constructor
        parent::__construct();
    }
    
    function login($email=false , $password=false)
    {
        $this->db->where('email', $email);
        $this->db->where('password' , $password);
        $this->db->where('status' , '1');
        $query = $this->db->get('user_info');
        return $query->result();
        
    }
    
    function register($data , $id = false)
    {
        if($id !="")
        {
            $this->db->where('id', $id);
            $this->db->update('user_info', $data);
        }
        else
        {
            $this->db->insert('user_info' , $data);
        }
        
    }
    
    function email_finder($email = false)
    {
        $this->db->where('email',$email); 
       $query =  $this->db->get('user_info')->result();
       return count($query);
        
    }
    
}
?>