<?php
require_once(__DIR__ . "/messor-kernel/messor/Autoloader.php");
require_once(__DIR__ . "/messor-kernel/controller/admin/messor.php");
require_once(__DIR__ . "/messor-kernel/controller/catalog/messor.php");
require_once("config.php");

use main\MessorLib;

$MessorLib = new MessorLib();
$configUser = $MessorLib->getConfigUser();

const BASE_DIR = __DIR__;

$route = isset($_GET['route']) ? $_GET['route'] : '';
$route = str_replace('extension/module/messor/', '', $route);
$controller = new ControllerAdmin();
$routeApi = strpos($route, 'Api');
if(!$MessorLib->isConfig() && $route != 'Register' && $routeApi === false) {
    $url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    $url = parse_url($url);
    $url['path'] = stripos($url['path'], 'index.php') === false ? $url['path'].'index.php' : $url['path'];
    $routeUrl = $url['scheme'] . '://' . $url['host'] . $url['path'] . '?route=extension/module/messor/Register';
    header("Location: $routeUrl", true, 302);
    return;
}

if ($route == "requestToPeer") {
    $controllerCatalog = new ControllerCatalog();
    $controllerCatalog->requestToPeer();
    return;
}
session_start();
$post = json_decode(file_get_contents('php://input'), true);
if (!empty($post['password']) && !empty($post['login'] && $route == 'Login')) {
    if (
        $configUser['Admin_login'] == $post['login'] &&
        $configUser['Admin_password'] == $MessorLib->messPasswordHash($post['password']) &&
        $route == 'Login'
    ) {
        $_SESSION['auth'] = true;
        $url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $url = parse_url($url);
        $url['path'] = stripos($url['path'], 'index.php') === false ? $url['path'].'index.php' : $url['path'];
        $routeUrl = $url['scheme'] . '://' . $url['host'] . $url['path'] . '?route=extension/module/messor/Messor';
        header('Content-Type: application/json; charset=utf-8', true, 200);
        echo json_encode(array('status' => 'Error', 'data' => array('location' => $routeUrl)));
        return;
    } else {
        sleep(rand(2,5));
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(array('status' => 'Error', 'data' => array('text' => 'No wrong password or login')));
        return;
    }
} elseif ($route == 'Login' && (empty($post['password']) xor empty($post['login']))) {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(array('status' => 'Error', 'data' => array('text' => 'Empty password or login')));
    return;
}
if (!isset($_SESSION['auth']) || $_SESSION['auth'] != true) {
    $url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    $url = parse_url($url);
    $url['path'] = stripos($url['path'], 'index.php') === false ? $url['path'].'index.php' : $url['path'];
    $routeUrl = $url['scheme'] . '://' . $url['host'] . $url['path'] . '?route=extension/module/messor/Login';
    if ($routeApi !== false && $route != 'Register' && $post['action'] != 'register_data_page' && $post['action'] != 'register') {
        header('Content-Type: application/json; charset=utf-8', true, 200);
        echo json_encode(array('status' => 'Error', 'data' => array('location' => $routeUrl)));
        return;
    }
    if ($route != 'Login' && $route != 'Register' && $post['action'] != 'register_data_page' && $post['action'] != 'register') {
        header("Location: $routeUrl", true, 302);
        return;
    }
}

switch ($route) {
    case 'Messor':
        $controller->Messor();
        break;
    case 'Login':
        $controller->Login();
        break;
    case 'Register':
        $controller->registerPage();
        break;
    case 'Api':
        $controller->Api();
        break;
    case 'MCLMain':
        $controller->MCLMain();
        break;
    case 'MCLApi':
        $controller->MCLApi();
        break;
    case 'FSControlMain':
        $controller->FSControlMain();
        break;
    case 'FSControlApi':
        $controller->FSControlApi();
        break;
    case 'FDBBMain':
        $controller->FDBBMain();
        break;
    case 'FDBBApi':
        $controller->FDBBApi();
        break;
    case 'FSCheckMain':
        $controller->FSCheckMain();
        break;
    case 'FSCheckApi':
        $controller->FSCheckApi();
        break;
    case 'SecuritySettingsMain':
        $controller->SecuritySettingsMain();
        break;
    default:
        $controller->Login();
        break;
}
