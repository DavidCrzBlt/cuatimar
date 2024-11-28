<?php

$destino="contacto@cuatimarconstrucciones.com.mx";
$nombre =$_POST["nombre"];
$empresa =$_POST["empresa"];
$telefono = $_POST["telefono"];
$email = $_POST["email"];
$mensaje = $_POST["mensaje"];
$contenido = "Nombre: ". $nombre . "\nEmpresa: " . $empresa . "\nEmail: "
 . $email. "\nTeléfono: " . $telefono . "\nMensaje: " . $mensaje;
mail($destino,"Información", $contenido);
header("Location:index.html");
?>
