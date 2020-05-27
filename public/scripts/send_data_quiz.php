<?php
//define('SHORTINIT', true);
//require_once ($_SERVER['DOCUMENT_ROOT'] . '/wp-load.php');

add_action( 'wp_ajax_send_company_quiz_mail', 'send_company_quiz_mail' );
add_action( 'wp_ajax_nopriv_send_company_quiz_mail', 'send_company_quiz_mail' );

function send_company_quiz_mail() {
  // удалим фильтры, которые могут изменять заголовок $headers
  remove_all_filters( 'wp_mail_from' );
  remove_all_filters( 'wp_mail_from_name' );

  // Собираем данные
  $data = file_get_contents( "php://input" );
  $json = json_decode( $data, true );

  // Инициализируем данные для отправки почты
  $from          = "postmaster@map-line.ru";
  $to_admin      = "burninghills@yandex.ru";
  $subject = "Новая заявка с Квиза";
  $message = set_message($json);

  // Служебные заголовки
  $headers       = "From: $from" . PHP_EOL .
                   "MIME-Version: 1.0" . PHP_EOL .
                   "Content-type: text/html; charset=utf-8" . PHP_EOL;

  if ( $json ) {
    $error = '';

    if ( !$error ) {
      $mail = wp_mail( $to_admin, $subject, converted_message($message), converted_headers($headers) );
      if ( $mail ) {
        echo "success";
      }
    } else {
      echo $error;
    }

  }

  wp_die();
}

function user_fullinfo($info) {
  $content = "Данные пользователя: ";
  foreach($info["userFullinfo"] as $key => $value) {
    $content .= "$key: $value, ";
  }

  return $content;
}

function user_fulldata($info) {
  $content = "Введенные данные: ";
  foreach($info["quizData"] as $key => $value) {
    foreach($value as $item_key => $item_value) {
      if (is_array($item_value)) {
        $content .= $item_key . ': ' . implode(",", $item_value) . '; ' . PHP_EOL;
      } else {
        $content .= "$item_key: $item_value; " . PHP_EOL;
      }
    }
  }

  return $content;
}

function converted_message($msg) {
  return mb_convert_encoding( $msg, 'utf-8', mb_detect_encoding( $msg ) );
}

function converted_headers($headers) {
  return mb_convert_encoding( $headers, 'utf-8', mb_detect_encoding( $headers ) );
}

function set_message($info) {
  return user_fullinfo($info) . PHP_EOL . user_fulldata($info);
}
