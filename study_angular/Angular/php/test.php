<?php

/**
 * Created by PhpStorm.
 * User: samsung
 * Date: 08.01.2016
 * Time: 10:03
 * http://localhost/angular/php/test.php
 */


    ini_set('memory_limit','256M');
echo '<pre>';
//print_r(ini_get_all ());

    if ($_POST['action'] == 'new') {
        file_put_contents('my_file', str_repeat('dima',10000000),FILE_APPEND);
    }


?>

<form method="post">
    <input type="hidden" value="<? echo file_get_contents('my_file') ?>">
    <input type="submit">
    <input type="hidden" name="action" value="new">

</form>

