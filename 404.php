<?php
include("messor-kernel/messor/Autoloader.php");
use src\Messor;
use main\MessorLib;
$MessorLib = new MessorLib();
$server = $_SERVER;
//    public static function check($ip, $disableDetect, $pageNotFound, $route, $url = null)
if(!empty($_REQUEST['url'])) {
    $route = 'hashJs.php';
} else {
    $route = $_SERVER['REQUEST_URI'];
}
function notFound() {
    die('aaaa');
}
$MessorLib->check($_SERVER['REMOTE_ADDR'], array('path'), 'notFound', $route, '/404.php');
//$MessorLib->check($ip = null, $disableDetect = array('path'), $this->notFound(), $route, $url);

?>
404 Not found.
