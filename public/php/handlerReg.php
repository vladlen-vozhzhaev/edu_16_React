<?php
  header("Access-Control-Allow-Origin: *");
  $name = $_POST['name'];
  $lastname = $_POST['lastname'];
  $email = $_POST['email'];
  $pass = $_POST['pass'];
  $mysqli = new mysqli('localhost','root','root','blog');

  $result = $mysqli->query("SELECT `email` FROM `users` WHERE email = '$email'");

  if($result->num_rows){
    exit(json_encode(['result'=>'exist']));
  }else{
    $mysqli->query("INSERT INTO `users`(`name`, `lastname`, `email`, `pass`) VALUES ('$name','$lastname','$email','$pass')");
    exit(json_encode(['result'=>'success']));
  }
?>
