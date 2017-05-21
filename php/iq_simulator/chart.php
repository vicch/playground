<?php

class Chart
{
    const CHAR = "\xE2\x96\xA0"; // Black Square U+25A0

    public static function output($min, $max, $step, $data)
    {
        $output = '';

        // Split data items into groups
        // array(
        //     <level> => <count>, // Count of items that: <level> <= and < <level>+<step>
        // )
        $group = array();
        foreach ($data as $item) {
            $level = $item - ($item % $step);
            $group[$level] = isset($group[$level]) ? $group[$level] + 1 : 1;
        }

        for ($i = $min; $i < $max; $i += $step) { 
            $line  = str_pad($i . '-' . ($i + $step), 8, ' ', STR_PAD_LEFT) . ' ';

            $count = isset($group[$i]) ? $group[$i] : 0;
            $line .= str_repeat(self::CHAR, round($count / 10));

            $line .= "\n";

            $output .= $line;
        }

        $output .= "\n";

        return $output;
    }
}