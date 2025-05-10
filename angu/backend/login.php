<?php
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
$password = $data->password;

// Sprawdzanie, czy użytkownik istnieje
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Użytkownik znaleziony, teraz sprawdzamy hasło
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        // Zwracamy dane użytkownika po pomyślnym logowaniu
        echo json_encode([
            "success" => true,
            "email" => $user['email'],
            "username" => $user['username'] // Zakładając, że w tabeli użytkownika jest pole 'username'
        ]);
    } else {
        echo json_encode(["success" => false, "message" => "Nieprawidłowe hasło."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Użytkownik o takim emailu nie istnieje."]);
}

$conn->close();
?>