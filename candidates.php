<?php
require_once 'db.php';

$query = "SELECT * FROM candidates";
$stmt = $pdo->query($query);
$candidates = $stmt->fetchAll();

include 'index.html';
