<?php

/* https://api.telegram.org/bot758382664:AAE0U8zYoAw2rikLO_Q_006P5jilBumZSN4/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$form = $_POST['user_form'];
$token = "758382664:AAE0U8zYoAw2rikLO_Q_006P5jilBumZSN4";
$chat_id = "-345063811";
$arr = array(
  'Форма: ' => $form,
  'Мессенджер: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>