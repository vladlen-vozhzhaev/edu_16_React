<?
  header("Access-Control-Allow-Origin: *");
  $id = $_POST['id'];
  $mysqli = new mysqli("localhost", "vladle43_16", "*3HJq53u", "vladle43_16");
  $mysqli->query("DELETE FROM `articles` WHERE id='$id'");
  echo json_encode(['result'=>'success']);
?>