<!doctype html>
<html lang="">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<link rel="icon" href="media/favicon.ico">
	<title>You need to upgrade your plan</title>
	<link href="media/stylesheet/messor/subscription-alert-styles.css" rel="stylesheet">
</head>
<body>
<?php $language = json_decode($language, true);?>

<div id="content">
	<div class="ms-wrapper">
		<div class="ms-container">
			<div class="ms-loading-page">
				<span class="ms-loading-page__img-lg">
					<img src="media/image/messor/upgrade-img.svg" alt="">
				</span>
				<span class="ms-loading-page__title ms-loading-page__title-xs"><?php echo $language['page_upgrade_text']; ?>
					<a href="https://messor.network/Upgrade"><?php echo $language['page_upgrade_link_plan']; ?></a>
				</span>
				<a href=<?php echo $link ?> target="_blank" class="ms-btn ms-btn-white"><?php echo $language['page_upgrade_upgrade']; ?></a>
			</div>
		</div>
	</div>
</div>
</body>
</html>
<script type="text/javascript">
$('.ms-loading-page').css({"position" : "relative", "background" : "none"} );
</script>
