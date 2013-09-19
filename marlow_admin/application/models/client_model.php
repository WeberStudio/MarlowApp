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
    
    function register($data)
    {
        if($data['id'] !="")
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
    
    function get_shop($id=false)
    {
        if($id!='')
        {
            $this->db->where('id',$id);
        }
        $this->db->where('status','1');
        $query = $this->db->get('shops');
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
    
     function get_my_listing_record()
    {
        $this->db->select('p.id AS product_id, p.user_id, p.note, p.price, p.image, p.brand_id, p.status AS pro_status, s.id AS stop_id, s.name, s.address');
       
        $this->db->from('products AS p');
        $this->db->join('shops AS s', 's.id = p.brand_id');
        $query = $this->db->get(); 
        return $query->result();
    }
    
}
?>