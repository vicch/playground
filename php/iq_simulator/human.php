<?php

class Human
{
    const MALE   = 0;
    const FEMALE = 1;

    public static $genders = array(
        self::MALE   => 'Male',
        self::FEMALE => 'Female',
    );

    private $_gender;
    private $_iQ;

    /**
     * Create a human
     * 
     * @param int   $gender
     * @param float $iQ
     */
    public function __construct($gender, $iQ)
    {
        $this->_gender = $gender;
        $this->_iQ     = $iQ;
    }

    public function __toString()
    {
        $lines   = array();
        $lines[] = 'Gender = ' . $this->_gender;
        $lines[] = 'IQ     = ' . $this->_iQ;
        return implode("\n", $lines) . "\n";
    }

    public function getGender()
    {
        return self::$genders[$this->_gender];
    }

    public function getIQ()
    {
        return $this->_iQ;
    }
}
