<?php
// backend/save_progress.php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

require_once 'config.php';

// Get POST data from JavaScript
$data = json_decode(file_get_contents("php://input"));

if(!empty($data->user_id) && !empty($data->score)) {
    try {
        // Securely insert data using Prepared Statements
        $query = "INSERT INTO quiz_results (user_id, quiz_id, score) VALUES (:user_id, :quiz_id, :score)";
        $stmt = $pdo->prepare($query);
        
        $stmt->bindParam(":user_id", $data->user_id);
        $stmt->bindParam(":quiz_id", $data->quiz_id);
        $stmt->bindParam(":score", $data->score);
        
        if($stmt->execute()) {
            echo json_encode(["message" => "Score saved successfully!"]);
        }
    } catch(PDOException $e) {
        echo json_encode(["error" => $e->getMessage()]);
    }
} else {
    echo json_encode(["message" => "Incomplete data sent."]);
}
?>