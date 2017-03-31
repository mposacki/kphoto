<?php

date_default_timezone_set('Etc/UTC');

require './PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->CharSet = "UTF-8";
$mail->isSMTP();

$mail->Host = 'mail11.mydevil.net';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = "kphoto@kphoto.maciejposacki.usermd.net";
$mail->Password = "Mik1992lks";

$mail->setFrom($_GET['email'], $_GET['surname']);
$mail->addReplyTo($_GET['email']);
$mail->addAddress('katniss.photo@gmail.com');
$mail->Subject = $_GET['subject'];
$mail->msgHTML($_GET['content']);
$mail->AltBody = 'Nothing to see';

if (!$mail->send()) {
    echo "<p> The message was not sent</p>";
} else {
    echo "<p>Message sent!</p>";
}

?>