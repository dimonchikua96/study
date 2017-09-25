<?
ini_set('session.gc_maxlifetime',5);
    session_start();
    //session_destroy();


    //$_SESSION['name'] = 'Dima';
  //  var_dump($_SESSION);
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Angular applications</title>
    <link rel="stylesheet" href="resources/css/bootstrap.min.css">
</head>
<body>
<div class="container">
    <?php

    //---------------
    echo '<div class="page-header"><h2>Готовые приложения</h2></div>';
    $dir = 'apps';
    $apps_iterator = new RecursiveDirectoryIterator($dir, FilesystemIterator::SKIP_DOTS);
    foreach ($apps_iterator as $path) {
        if (file_exists($path->getPathName() . '/index.html')) {
            $url = $path->getPathName() . '/index.html';
            echo getLink($url);
        }
        if (file_exists($path->getPathName() . '/index.php')) {
            $url = $path->getPathName() . '/index.php';
            echo getLink($url);
        }
    }

    //---------------
    echo '<div class="page-header"><h2>Примеры/плюшки</h2></div>';

    $dir = 'study';
    $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir), RecursiveIteratorIterator::CHILD_FIRST);

    foreach ($iterator as $path) {
        if ($path->isFile() && preg_match('/^html|php?$/i', pathinfo($path->getFilename(), PATHINFO_EXTENSION))) {
            if(!strpos($path->getPathname(),'templates')){
                $data[$path->getPathname()] = getLink(str_replace("\\", '/', $path->getPathname() . PHP_EOL));
            }
        }
    }

    ksort($data);
    
    foreach ($data as $key=>$val) {
        echo $val;
    }

    function getLink($url)
    {
        return "<div class='row'><div class='col-md-12'><a href='{$url}' target='_blank'>$url</a></div></div>";
    }

    ?>

</div>
</body>
</html>