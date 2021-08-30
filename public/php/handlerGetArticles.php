<?
   header("Access-Control-Allow-Origin: *");
   $mysqli = new mysqli("localhost", "root", "root", "blog");
   $result = $mysqli->query("SELECT * FROM `articles`"); // Запрос к БД для получения статей из БД
   $articles = []; // Создаём массив в котором будут наши статьи
   while($row = $result->fetch_assoc()){ // Читаем записи до тех пор пока они не кончатся
     $articles[] = $row; // Кладём каждую статью в массив
   }
   echo json_encode($articles); // Преобразуем массив в JSON и отдаём клиенту
?>
