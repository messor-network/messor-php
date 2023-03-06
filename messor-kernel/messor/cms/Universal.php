<?php

namespace cms;

use main\MessorLib;

/**
 * Трейт для взаимодействия Messor c Opencart CMS
 * интерфейсно-независимым способом
 */
trait Universal
{
    private $pathToPeer = "extension/module/messor/requestToPeer";

    public function getEmail()
    {
    }

    public function getDefaultPath()
    {
        return dirname(BASE_DIR);
    }

    public function getFullPath()
    {
        return '/var/www';
    }

    public function getAdminPanelName()
    {
        return 'admin';
    }

    public function getDatabaseData()
    {
        return array('host' => DB_HOSTNAME, 'user' => DB_USERNAME, 'password' => DB_PASSWORD, 'dbname' => DB_DATABASE);
    }

    public function getVersion()
    {
        return 2.1;
    }

    public function getCMS()
    {
        return "no cms";
    }

    public function getUserCMS()
    {
    }

    public function getSettingsShowError()
    {
    }

    public function moveDirectoryStorage()
    {
        
    }

    public function getDBUserName()
    {
        return DB_USERNAME;
    }

    public function checkLastVersionCMS()
    {
        
    }

    public function getConfigFileName()
    {
        return 'config.php';
    }

    public function getDBPrefix()
    {
        
    }

    public function getDBPrefixForCMS()
    {
        
    }

    public function getPathInstallDir()
    {
        
    }

    public function getUserNameAndEmail()
    {
    }

    public function getUrl()
    {
        return ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    }

    public function getLinkApi($path)
    {
        $url = parse_url($this->getUrl());
        if (strpos($path, "extension/module/messor/") !== false) {
            return $url['scheme'] . '://' . $url['host'] . $url['path'] . '?route=' . $path;
        } else {
            return $url['scheme'] . '://' . $url['host'] . $url['path'] . '?extension/module/messor/' . $path;
        }
    }

    public function getUrlLink($route, $data = null, $tokenFlag = true)
    {
        $path = "extension/module/messor/";
        $route = $path . $route;
        $token = $tokenFlag ? $this->getUserToken() : '';
        if ($data != null) {
            foreach ($data as $k => $v) {
                $string = '&' . $k . '=' . $v;
            }
            $url = $this->getUrl() . '?route=' . $route . '&user_token=' . $token . $string;
            return str_replace('&amp;', '&', $url);
        } else if ($data == null) {
            $url = $this->getLinkApi($route) . '&user_token=' . $token;
            return str_replace('&amp;', '&', $url);
        }
    }

    public function isImage()
    {
        if ($this->getRequestGet('_route_') !== null) {
            $check = pathinfo($this->getRequestGet('_route_'));
            $list = array('svg', 'jpg', 'jpeg', 'png', 'webp', 'gif', 'woff', 'ttf', 'eot', 'woff2', 'css', 'js');
            if (isset($check['extension']) && in_array(strtolower($check['extension']), $list)) {
                return true;
            }
        }
        if ($this->getRequestGet('route') !== null) {
            $check = pathinfo($this->getRequestGet('route'));
            $list = array('svg', 'jpg', 'jpeg', 'png', 'webp', 'gif', 'woff', 'ttf', 'eot', 'woff2', 'css', 'js');

            if (isset($check['extension']) && in_array(strtolower($check['extension']), $list)) {
                return true;
            }
        }
    }

    public function addStyle($name)
    {
    }

    public function getStyle()
    {
        return false;
    }

    public function addScript($name)
    {
    }

    public function getScript()
    {
    }

    public function redirect($route)
    {
        header('Location:'.$route);
    }

    public function getRequestGet($item)
    {
        if (isset($_GET[$item])) {
            return $_GET[$item];
        } else {
            return null;
        }
    }

    public function getRequestGetArr()
    {
    }


    public function getRequestPost($item)
    {
    }

    public function getRequestPostArr()
    {
    }


    public function getRoute()
    {
        $route = $this->getRequestGet('route');
        if ($route !== null) {
            return $route;
        }
    }

    public function getUserToken()
    {
        return 'qwe';
    }

    public function getServerVar($var)
    {
        return $_SERVER[$var];
    }

    public function getLanguage()
    {
        $MessorLib = new MessorLib();
        $configUser = $MessorLib->getConfigUser();
        if (!isset($configUser['Language'])) {
            $configUser['Language'] = 'en';
        }
        if (file_exists(BASE_DIR . "/frontend/language/" . $configUser['Language'] . "/messor.php")) {
            require BASE_DIR . "/frontend/language/" . $configUser['Language'] . "/messor.php";
        }
        $language = array();
        $language = array_merge($language, $_);
        return $language;
    }

    public function getHeader()
    {
        return 'header<br>';
        //return $this->load->controller('common/header');
    }

    public function getColumnLeft()
    {
        return 'left<br>';
        //return $this->load->controller('common/column_left');
    }

    public function getFooter()
    {
        return 'footer<br>';
        //$this->load->controller('common/footer');
    }

    public function setTitle($title)
    {
    }

    public function responseOutput($path, $data)
    {
        extract($data);

        $view = BASE_DIR . '/frontend/view/' . $path . '.php';
        ob_start();
        if (file_exists($view)) {
            include $view;
        } else {
            echo 'Template not found!';
        }
        ob_flush();
        ob_end_clean();
    }

    public function getOutput()
    {
        
    }

    public function notFound()
    {
        return "index.php?route=error/not_found&status=redirect";
    }
}
