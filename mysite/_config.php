<?php

global $project;
$project = 'mysite';

global $database;
$database = '';

require_once('conf/ConfigureFromEnv.php');

SSViewer::set_theme('simple');

// Set the site locale
i18n::set_locale('en_US');

Security::setDefaultAdmin('admin', 'password');