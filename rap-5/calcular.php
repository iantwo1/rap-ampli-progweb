<?php
    $numero1 = $_POST['numero1'];
    $numero2 = $_POST['numero2'];
    $operacao = $_POST['operacao'];
    $resultado = 0;
    switch($operacao){
        case "soma":
            $resultado = $numero1 + $numero2;
            break;
        case "subtracao":
            $resultado = $numero1 - $numero2;
            break;
        case "multiplicacao":
            $resultado = $numero1 * $numero2;
            break;
        case "divisao":
            if($numero2==0){
                die("Número 2 precisa ser diferente de zero!");
            } 
            $resultado = $numero1 / $numero2;
            break;
    }

    echo "O resultado é: ". $resultado;

?>