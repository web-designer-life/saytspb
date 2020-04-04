<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userAddress = $_POST['userAddress'];
$userPhone = $_POST['userPhone'];
$userMessange = $_POST['userMessange'];

// Load Composer's autoloader
require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->CharSet = "UTF-8";

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'himynameisantony@gmail.com';                     // SMTP username
    $mail->Password   = 'himynameis123';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('himynameisantony@gmail.com', 'Пользователь');
    $mail->addAddress('io57196657@gmail.com');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка';
    $mail->Body    = "Имя пользователя: ${userName};
                      Телефон: ${userPhone};
                      Адрес веб-сайта: ${userPhone};
                      Почтовый ящик: ${userEmail};
                      Сообщение: ${userMessange}.";

    if ($mail->send()) {
        echo "ok";
    } else {
        echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }

} catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}

?>
