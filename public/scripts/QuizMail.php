<?php

class QuizMail
{

    private $from = "local@host.com";
    private $to = "admin@host.ru";
    private $subject = "Новая заявка";

    public function __construct()
    {
        $this->data = file_get_contents("php://input");
        $this->json = json_decode($this->data, true);
        $this->send_mail();
    }

    private function dump_json()
    {
        var_dump($this->json);
    }

    private function user_fullinfo()
    {
        $data = "Данные пользователя: ";
        foreach($this->json["userFullinfo"] as $key => $value) {
            $data .= "$key: $value, ";
        }

        return $data;
    }

    private function user_fulldata()
    {
        $data = "Введенные данные: ";
        foreach($this->json["quizData"] as $key => $value) {
            foreach($value as $item_key => $item_value) {
                if (is_array($item_value)) {
                    $data .= $item_key . ': ' . implode(",", $item_value) . '; ' . PHP_EOL;
                } else {
                    $data .= "$item_key: $item_value; " . PHP_EOL;
                }
            }
        }

        return $data;
    }

    public function set_message()
    {
        return $this->user_fullinfo() . PHP_EOL . $this->user_fulldata();;
    }

    private function serialized_data()
    {
        return serialize($this->json);
    }

    private function set_headers()
    {
        return "From: $this->from \r\n".
            "MIME-Version: 1.0" . "\r\n" .
            "Content-type: text/html; charset=utf-8" . "\r\n";
    }

    private function converted_message()
    {
        return mb_convert_encoding( $this->set_message(), "utf-8", mb_detect_encoding($this->set_message()) );
    }

    private function converted_headers()
    {
        return mb_convert_encoding( $this->set_headers(), "utf-8", mb_detect_encoding($this->set_headers()) );
    }

    private function send_mail()
    {
        $mail = mail( $this->to, $this->subject, $this->set_message(), $this->set_headers() );

        echo $mail ? "success" : "error";

        die();
    }

}

return new QuizMail();