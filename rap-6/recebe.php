<?php
    $texto = $_POST['texto'];
   
    if(strlen($texto)===0){
        die("O texto não pode ser vazio!");
    }
    $arquivo = fopen("dados.txt", "w+");
    if(fwrite($arquivo, $texto)){
        echo "Arquivo dados.txt escrito com sucesso!";
    }else{
        echo "Erro ao escrever no arquivo! Tente novamente!";
    }

?>