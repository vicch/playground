<?php

require_once 'human.php';
require_once 'random.php';
require_once 'chart.php';

class Generation
{
    private $_humans;

    const INIT_NUMBER = 5000; // First generation number

    // IQ init
    const IQ_INIT_BASE = 100;
    const IQ_INIT_VAR  = 60; // Variation
    const IQ_INIT_SD   = 20; // Standard deviation

    // IQ inheritance
    const IQ_INHER_VAR = 15; // Variation
    const IQ_INHER_SD  = 5;  // Standard deviation

    public function __construct($last_gen = null)
    {
        $this->_humans = array();

        // Init
        if (!isset($last_gen) || !is_array($last_gen)) {
            for ($i = 0; $i < self::INIT_NUMBER; $i++) {
                $gender = Random::gender();
                $iQ     = Random::iQ(self::IQ_INIT_BASE, self::IQ_INIT_VAR, self::IQ_INIT_SD);

                $this->_humans[] = new Human($gender, $iQ);
            }

        // Based on last generation
        } else {
            while (($mother = array_shift($last_gen[Human::$genders[Human::FEMALE]])) &&
                ($father = array_shift($last_gen[Human::$genders[Human::MALE]]))
            ) {
                $childNum = Random::childNum();
                for ($i = 0; $i < $childNum; $i++) { 
                    $gender = Random::gender();
                    $iQ     = self::childIQ($gender, $father, $mother);

                    $this->_humans[] = new Human($gender, $iQ);
                }
            }
        }
    }

    protected static function childIQ($gender, $father, $mother)
    {
        // // Son's IQ depends on mother's IQ
        // if ($gender == Human::MALE) {
        //     $iQ = Random::iQ($mother->getIQ(), self::IQ_INHER_VAR, self::IQ_INHER_SD);

        // // Daughter's IQ depends on father's and mother's IQ
        // } else {
        //     $averageIQ = ($father->getIQ() + $mother->getIQ()) / 2;
        //     $iQ = Random::iQ($averageIQ, self::IQ_INHER_VAR, self::IQ_INHER_SD);
        // }

        $iQ = Random::iQ($mother->getIQ(), self::IQ_INHER_VAR, self::IQ_INHER_SD);

        return $iQ;
    }

    public function genderGroups()
    {
        $genders = array();
        foreach ($this->_humans as $human) {
            if ($human instanceof Human) {
                $genders[$human->getGender()][] = $human;
            }
        }
        return $genders;
    }

    public function report()
    {
        // // Group IQs by gender
        // $genderIQs = array();
        // foreach ($this->_humans as $human) {
        //     if ($human instanceof Human) {
        //         $genderIQs[$human->getGender()][] = $human->getIQ();
        //     }
        // }

        // // Output gender IQ distribution
        // foreach ($genderIQs as $gender => $iQs) {
        //     echo $gender . ': ' . count($iQs) . "\n";
        //     echo Chart::output(self::IQ_INIT_BASE - self::IQ_INIT_VAR, self::IQ_INIT_BASE + self::IQ_INIT_VAR, 5, $iQs);
        // }

        $iQs = array();
        foreach ($this->_humans as $human) {
            $iQs[] = $human->getIQ();
        }
        echo 'Count: ' . count($iQs) . "\n";
        echo Chart::output(self::IQ_INIT_BASE - self::IQ_INIT_VAR, self::IQ_INIT_BASE + self::IQ_INIT_VAR, 5, $iQs);
    }
}