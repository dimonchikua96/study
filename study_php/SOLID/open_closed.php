<?php

/**
 * Interface Shape
 */
interface Shape
{
    /**
     * @return mixed
     */
    public function area();
}

/**
 * Class Square
 */
class Square implements Shape
{
    /**
     * @var
     */
    public $width;
    /**
     * @var
     */
    public $height;

    /**
     * Square constructor.
     * @param $width
     * @param $height
     */
    public function __construct($width, $height)
    {
        $this->width = $width;
        $this->height = $height;
    }

    /**
     * @return mixed
     */
    public function area()
    {
        return $this->width * $this->height;
    }
}

/**
 * Class Circle
 */
class Circle implements Shape
{
    /**
     * @var
     */
    public $radius;

    /**
     * Circul constructor.
     * @param $radius
     */
    public function __construct($radius)
    {
        $this->radius = $radius;
    }

    /**
     * @return mixed
     */
    public function area()
    {
        return $this->radius*$this->radius * pi();
    }
}


class AriaCalculator
{

    public function calculate($shapes)
    {
        $area = 0;
        foreach ($shapes as $shape) {
            $area += $shape->area();
        }
        return $area;
    }

}

$sq = new Square(2, 5);
$ci = new Circle(2);

$ar = new AriaCalculator();

echo $sq->area().'<br>';
echo $ci->area().'<br>';

echo $ar->calculate([$sq, $ci]);