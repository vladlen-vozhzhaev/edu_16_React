<?
  header("Access-Control-Allow-Origin: *");
  $id = $_POST['id'];
  $mysqli = new mysqli("localhost", "vladle43_16", "*3HJq53u", "vladle43_16");
  $result = $mysqli->query("SELECT * FROM `articles` WHERE id = '$id'");
  echo json_encode($result->fetch_assoc());
?>