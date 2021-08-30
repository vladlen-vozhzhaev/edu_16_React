<?php
  session_start();
  $item = $_POST['item'];
  $itemValue = $_POST['itemValue'];
  $id = $_SESSION['id'];
  $mysqli = $mysqli = new mysqli('localhost', 'vladle43_16','*3HJq53u','vladle43_16');
  $mysqli->query("UPDATE `users` SET `$item`='$itemValue' WHERE id='$id'");
  $_SESSION[$item] = $itemValue;
  exit(json_encode(['result'=>'success']));
?>