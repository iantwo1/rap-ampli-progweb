<?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=cadastroaluno", "root", "");
    $insereDados = $pdo->query("INSERT INTO tbl_aluno (nome, sobrenome, idade, telefone, email) VALUES ('Teste', 'de conexão', 10, '1112341234', 'teste@teste.com.br')");
    echo "Conexão realizada e inserção de dados feita!";
} catch (PDOException $e) {
    die("Conexão com o banco de dados falhou!");
}

?>