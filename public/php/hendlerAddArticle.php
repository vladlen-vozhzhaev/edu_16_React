<?php
  header("Access-Control-Allow-Origin: *");
  $title = $_POST['title'];
  $content = $_POST['content'];
  $author = $_POST['author'];
  
  $mysqli = new mysqli("localhost", "vladle43_16", "*3HJq53u", "vladle43_16");
  $mysqli->query("INSERT INTO `articles`(`title`, `content`, `author`) VALUES ('$title','$content','$author')");
  
?>