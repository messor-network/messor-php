<!doctype html>
<html lang="">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="icon" href="media/favicon.ico">
    <title>Security Settings</title>
    <script defer="defer" src="media/javascript/messor/chunk-vendors.f0a482fb58c74411.js"></script>
    <script defer="defer" src="media/javascript/messor/chunk-common.e0239a17cf85b8a3.js"></script>
    <script defer="defer" src="media/javascript/messor/security-settings.25b44b9c2b022049.js"></script>
    <link href="media/stylesheet/messor/chunk-common.e0239a17cf85b8a3.css" rel="stylesheet">
  </head>

  <body>
    <div id="content">
      <div id="app"></div>
    </div>
    <div id="messor-plugin-dictionary" style="display:none"><?php echo $language ?></div>
    <input type="hidden" id="user_token" value=<?php echo $user_token ?>>
    <input type="hidden" id="api_url" value=<?php echo $path_api ?>>
  </body>

</html>