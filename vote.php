<?php
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $candidateId = $_POST['candidate_id'];
  $voterName = $_POST['voter_name'];

  $query = "INSERT INTO votes (candidate_id, voter_name) VALUES (:candidate_id, :voter_name)";
  $stmt = $pdo->prepare($query);
  $stmt->bindParam(':candidate_id', $candidateId);
  $stmt->bindParam(':voter_name', $voterName);

  if ($stmt->execute()) {
    echo json_encode(['success' => true]);
  } else {
    echo json_encode(['success' => false]);
  }
}
