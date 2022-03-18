<?php

class Random
{
    public static function gender()
    {
        return mt_rand(0, 1);
    }

    public static function childNum()
    {
        return round(self::purebell(0, 4.06, 1.1));
    }

    public static function iQ($base, $variation = 0, $sd = 0)
    {
        $base      = (float)$base;
        $variation = (float)$variation;

        $iQ = self::purebell($base - $variation, $base + $variation, $sd);
        return $iQ;
    }

    /**
     * Random Number Generator with Normal Distribution / Bell Curve
     * http://www.eboodevelopment.com/php-random-number-generator-with-normal-distribution-bell-curve/
     */
    protected static function purebell($min, $max, $std_deviation, $step = 1) {
        $rand1 = (float)mt_rand() / (float)mt_getrandmax();
        $rand2 = (float)mt_rand() / (float)mt_getrandmax();
        $gaussian_number = sqrt(-2 * log($rand1)) * cos(2 * M_PI * $rand2);
        $mean = ($max + $min) / 2;
        $random_number = ($gaussian_number * $std_deviation) + $mean;
        $random_number = round($random_number / $step) * $step;
        if ($random_number < $min || $random_number > $max) {
            $random_number = self::purebell($min, $max, $std_deviation);
        }
        return $random_number;
    }
}
