<?php
include("messor-kernel/messor/Autoloader.php");

use src\Messor;
use main\MessorLib;

if(!empty($_POST['install'])) {
    $MessorLib = new MessorLib();
    $Messor = new Messor();
    //Messor::Check('127.0.0.1');
    //$toServer = new toServer();
    //var_dump(toServer::ping());

    $post['cms'] = 'Universal'; // Wordpress OpenCart Magento etc...
    $post['cms_version'] = '0.1'; // Wordpress 3.4.3
    $post['random_data'] = 'dsfsdfsdfds';
    $post['plugin_version'] = '0.1';

    var_dump($MessorLib->register($post));
}
?>
<form method="POST" >
    user_email:<br>
    <input type='text' name='user_email' value='' ><br>
    user_password:<br>
    <input type='text' name='user_password' value=''><br>
    <br>
    admin_login:<br>
    <input type='text' name='admin_login' value=''><br>
    admin_password:<br>
    <input type='text' name='admin_password' value=''><br>
    reg_network_password:<br>
    <input type='text' name='reg_network_password' value=''><br>
    url:<br>
    <input type='text' name='url' value='' ><br>
    name:<br>
    <input type='text' name='name' value='' ><br>
    company:<br>
    <input type='text' name='company' value='' ><br>
    email:<br>
    <input type='text' name='email' value='' ><br>
    phone:<br>
    <input type='text' name='phone' value='' ><br>
    about:<br>
    <input type='text' name='about' value='' ><br>
    country:<br>
    <input type='text' name='country' value='us' ><br>
    lang:<br>
    <input type='text' name='lang' value='en' ><br>
    encryption_alg:<br>
    <input type='text' name='encryption_alg' value='aes128' ><br>
    <button name=install value="1" >install</button>
</form>
