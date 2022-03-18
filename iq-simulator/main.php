<?php

require_once 'generation.php';

$gen_num  = 200;
$last_gen = null;

for ($i = 1; $i <= $gen_num; $i++) { 
    echo '----- Generation #' . $i . ' -----' . "\n\n";
    $gen = new Generation($last_gen);
    $gen->report();
    $last_gen = $gen->genderGroups();
}