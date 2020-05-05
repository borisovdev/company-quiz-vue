<?php

add_action('wp_ajax_send_quiz_mail', 'send_quiz_mail');
add_action('wp_ajax_nopriv_send_quiz_mail', 'send_quiz_mail');

function send_quiz_mail()
{
  // удалим фильтры, которые могут изменять заголовок $headers
  remove_all_filters('wp_mail_from');
  remove_all_filters('wp_mail_from_name');

  // Собираем данные
  $data  = file_get_contents( "php://input" );
  $json = json_decode($data, true);

  // Инициализируем данные для отправки почты
  $from = "postmaster@local.host";
  $to_admin = "admin@local.host";
  $subject_admin = "Новая заявка Квиза";
  $message_admin = serialize($json);
  $headers = "From: $from \r\n" .
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=utf-8" . "\r\n";

  if ($json)
  {
    $error = '';

    if (!$error) {
      // todo Разобраться с кодировкой. На почту приходят некорректные данные
      $mail = wp_mail($to_admin, $subject_admin, mb_convert_encoding($message_admin, 'utf-8', mb_detect_encoding($message_admin)), mb_convert_encoding($headers, 'utf-8', mb_detect_encoding($headers)));
      if ($mail) {
        echo "success";
      }
    } else {
      echo $error;
    }

  }

  wp_die();
}

function validateTel($value) {
      $regexTel = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";

      if ($value == "") {
        return false;
      } else {
        $string = preg_replace($regexTel, "", $value);
      }

      return empty($string) ? true : false;
}

function validateName($value) {
  if ( !$value || strlen($value) < 2 ) {
    echo 'Слишком короткое имя';
  }
}

