<?
  header("Access-Control-Allow-Origin: *");
  $id = $_POST['id'];
  $title = $_POST['title'];
  $content = $_POST['content'];
  $author = $_POST['author'];
  $mysqli = new mysqli("localhost", "vladle43_16", "*3HJq53u", "vladle43_16");
  $mysqli->query("UPDATE `articles` SET `title`='$title',`content`='$content',`author`='$author' WHERE id='$id'");
  echo json_encode(['result'=>'success']);
?>