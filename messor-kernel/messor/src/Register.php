<?php

namespace src;

use src\Request\toServer;
use src\Config\Path;
use src\Utils\File;
use src\Utils\Random;
use src\Utils\Parser;
use src\Request\HttpRequest;

class Register
{
    public $http;

    public function __construct()
    {
        $this->http = new HttpRequest();
    }
    public function getIP()
    {
        if (isset($_SERVER['HTTP_CF_CONNECTING_IP'])) {
            $ip = $_SERVER['HTTP_CF_CONNECTING_IP'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        return $ip;
    }

    public function getRouteRequesToPeer()
    {
        $url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . "/index.php?route=requestToPeer";
        return $url;
    }

    public function register()
    {
        
    }
}
