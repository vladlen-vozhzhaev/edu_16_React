<?php
  header('Content-type: text/html; charset=utf-8'); // Устанавливаем кодировку
  $name = $_POST["name"]; // Принимаем параметр запроса методом GET
  $phone = $_POST["phone"]; // Принимаем параметр запроса методом GET
  $msg = $_POST["msg"]; // Принимаем параметр запроса методом GET
  // Для тех у кого платный хостинг
  mail("Vladlen_778@mail.ru", "Тема письма", "$name\n$phone\n$msg");
  //Для тех у кого free хостинг
  echo "Письмо отправлено";
?>