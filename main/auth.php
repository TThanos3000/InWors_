<?php
    $data_json = $_POST['send_scene'];
    file_put_contents('s.json',$data_json);
    $id = $_POST['location']; 
?>
