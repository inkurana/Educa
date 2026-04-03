<?php
// backend/config.php
$host = 'localhost';
$dbname = 'educa_db';
$username = 'root'; // Apne MySQL ka username dalein (XAMPP mein default 'root' hota hai)
$password = ''; // Apne MySQL ka password dalein (XAMPP mein default blank hota hai)

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Error mode set to Exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die(json_encode(["error" => "Connection failed: " . $e->getMessage()]));
}
?>