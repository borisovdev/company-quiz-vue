<?php

/**
 * Without headers;
 */
// function send_prayer_sheet_mail() {
//   $data = file_get_contents("php://input");
//   $json = json_decode($data, true);

//   echo $json;
// }

function send_prayer_sheet_mail() {
  $post = ( !empty($_POST) ) ? true : false;
  $post_data = $_POST;
  
  var_dump($post_data);
}

// function send_prayer_sheet_mail() {
//   $post = (!empty($_POST)) ? true : false;

//   if ($post) {
//     if ( isset($_POST['fullname']) ) { $user_fullname = json_decode($_POST['fullname']); }
//     if ( isset($_POST['userData']) ) { $user_data =  json_decode($_POST['userData']); }

//     $error = '';

//     if (!$error) {
// 			$from = "local@host.com";

// 			$to = "admin@host.ru";

// 			$subject = "Новый заказ требы";

//       $message = "<br>Заказчик: $user_fullname <br>Список треб: $user_data";

// 			$headers = "From: $from \r\n".
// 			"MIME-Version: 1.0" . "\r\n" . 
//       "Content-type: text/html; charset=utf-8" . "\r\n";
      
//       $mail = mail( $to, $subject, mb_convert_encoding($message, 'utf-8', mb_detect_encoding($message)), mb_convert_encoding($headers, 'utf-8', mb_detect_encoding($headers)) );

//       if ($mail) {
//         echo "success";
//       }
//     } else {
//       echo $error;
//     }
    
//   } else {
//     echo "Нет данных";
//   }

//   die();
// }

send_prayer_sheet_mail();

?>