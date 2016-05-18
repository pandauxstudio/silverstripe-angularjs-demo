<!DOCTYPE html>
<!--[if !IE]><!-->
<html lang="$ContentLocale">
	<!--<![endif]-->
	<!--[if IE 6 ]><html lang="$ContentLocale" class="ie ie6"><![endif]-->
	<!--[if IE 7 ]><html lang="$ContentLocale" class="ie ie7"><![endif]-->
	<!--[if IE 8 ]><html lang="$ContentLocale" class="ie ie8"><![endif]-->
	<head>
		<% base_tag %>
		<title><% if $MetaTitle %>$MetaTitle<% else %>$Title<% end_if %> &raquo; $SiteConfig.Title</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<meta http-equiv="X-UA-Compatible" content="IE=edge" /> 
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta id="metaApplication" name="application" content="$SiteConfig.Title"/>

		$MetaTags(false)
		<!--[if lt IE 9]>
		<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

		<% require themedCSS('reset') %>
		<% require themedCSS('typography') %>
		<% require themedCSS('form') %>
		<% require themedCSS('layout') %>
		
	</head>
	<body data-ng-controller="MainController">
		<div>
			<% include Header %>
			<div class="typography">
				$Layout
			</div>
			<% include Footer %>
		</div>

		<script src="/$ThemeDir/bower_components/requirejs/require.js"></script>
		<script>
			requirejs(['$ThemeDir/javascript/common.js']);
		</script>
	</body>
</html>