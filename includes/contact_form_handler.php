<?php session_start(); ?>
<?php
$errors = '';
//<-----Put Your email address here.

$name = $_POST['name'];
$phone = $_POST['phone'];
$email_address = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
    echo "El correo que introdujo es inválido.<br /><br />";

	  echo "Por favor regrese <a href='javascript:history.go(-1)'>back</a> E inténtelo de nuevo";

	  exit;
}

include_once $_SERVER['../index.php'] . '../securimage/securimage.php';
	$securimage = new Securimage();
if ($securimage->check($_POST['captcha_code']) == false) {

	  // the code was incorrect

	  // you should handle the error so that the form processor doesn't continue

	 

	  // or you can use the following code if there is no validation or you do not know how

	  echo "El código de seguridad es incorrecto.<br /><br />";

	  echo "Por favor regrese <a href='javascript:history.go(-1)'>back</a> e inténtelo de nuevo.";

	  exit;
	}

if( empty($errors))
{
$to = "baezgr@hotmail.com, radiocombc@hotmail.com";
$email_subject = "Mensaje de: $name";
$email_body = "Ha recibido un mensaje. ".
" Los detalles son:\n Name: $name \n ".
    "Telefono: $phone \n ".
    "Asunto: $subject \n ".
"Email: $email_address\n Mensaje \n $message";
$headers = "From: $myemail\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
//redirect to the 'thank you' page
header('Location: ../contact-form-thank-you.php');
}
?>