<?php
// Nagłówki CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");
// Połączenie z bazą danych (MySQL)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "projektdatabase";

// Tworzenie połączenia
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzenie połączenia
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Pobranie danych z frontend (Angular)
$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = password_hash($data->password, PASSWORD_BCRYPT);  // Haszowanie hasła
$username = $data->username;

// Sprawdzanie, czy użytkownik już istnieje
$sql_check = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql_check);

if ($result->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "Użytkownik o takim adresie email już istnieje."]);
    exit();
}

// Wstawienie użytkownika do bazy danych
$sql = "INSERT INTO users (email, password, username) VALUES ('$email', '$password', '$username')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
}

$conn->close();
?>
