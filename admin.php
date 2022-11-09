<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
error_reporting(E_ALL); // Debug
include("messor-kernel/messor/Autoloader.php");
include("messor-kernel/controller/admin/messor.php");

$Messor_admin = new ControllerExtensionModuleMessor();
if(!empty($_REQUEST['route'])) {
    $route = str_replace('extension/module/messor/', '', $_REQUEST['route']);
    $Messor_admin->$route();
}
