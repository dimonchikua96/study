<?php

use App\Helpers;
/**
 * Created by PhpStorm.
 * User: samsung
 * Date: 21.01.2017
 * Time: 0:00
 */
class ExampleTest extends PHPUnit_Framework_TestCase
{
    public function testBehavior(){
        $this->assertTrue(true);
        new Helpers\Calculator();
    }

}