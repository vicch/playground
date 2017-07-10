<?php

function beadsort($array, $max = 10, $reverse = false) {
    $count = count($array);
    
    // Initialize beads
    $beads = array();
    foreach ($array as $num)
        $beads[] = array_merge(array_fill(0, $num, 1), array_fill(0, $max - $num, 0));

    // Iterate upwards from row -2
    for ($i = $count - 2; $i >= 0; $i--) {
        // Iterate beads from left to right
        for ($j = 0; $j < $max && $beads[$i][$j] == 1; $j++) {
            // Find which row the bead falls to
            for ($k = $i + 1; $k < $count && $beads[$k][$j] == 0; $k++);
            // Bead falls from row $i to $k
            if (--$k > $i) {
                $beads[$k][$j] = 1;
                $beads[$i][$j] = 0;
            }
        }
    }

    $result = array();
    foreach ($beads as $row)
        $result[] = array_sum($row);

    return $reverse ? array_reverse($result) : $result;
}

$array = beadsort(array(5, 3, 1, 3, 8, 7, 4, 1, 1, 3), 10, true);
var_export($array);