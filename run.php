<?php
require_once(__DIR__ . "/messor-kernel/messor/Autoloader.php");
require_once(__DIR__ . "/messor-kernel/controller/catalog/messor.php");

$controllerCatalog = new ControllerCatalog();
$controllerCatalog->alertMessor();
if (isset($_GET['route']) && $_GET['route'] == "extension/module/messor/hashJs") {
    $controllerCatalog->hashJs();
}