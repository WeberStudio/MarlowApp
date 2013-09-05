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
}
?>
