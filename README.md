# About

For those wanting to experiment with AngularJS and SilverStripe, this is a very basic demo site that integrates the two great technologies.  The demo site showcases fetching data internally using ajax controllers and by calling a restful api service.

# Installation

Clone the repo.
```
$ cd ~/Sites
$ git clone https://github.com/pandauxstudio/silverstripe-angularjs-demo.git
```

Install project dependencies.
```
$ cd ~/Sites/silverstripe-angularjs-demo
$ composer install
```

For convenience, front end dependencies have already been comitted.
If new dependencies are added to bower.json then install.
```
$ cd ~/Sites/silverstripe-angularjs-demo/themes/simple/
$ bower install
```

Create a DB for your CMS.
```
$ mysql -u root
$ create database ssangularjs;
```
Update ~/mysite/_config.php db entry.
```
$database = 'ssangularjs';
```
Configure _ss_environment.php (https://docs.silverstripe.org/en/3.2/getting_started/environment_management).
```
$ vi ~/Sites/_ss_environment.php
```
Create a new host entry for your site.
```
127.0.0.1    ssangular.dev
```
```
$ sudo vi /etc/hosts
```
Create a virtual host for your site.
```
<VirtualHost *:80>
        DocumentRoot "/Users/zaid/Sites/silverstripe-angularjs-demo"
        ServerName ssangularjs.dev
        <Directory /Users/zaid/Sites/silverstripe-angularjs-demo/>
                Options -Indexes
                Options FollowSymLinks MultiViews
                AllowOverride All
                Order allow,deny
                allow from all
                Require all granted
        </Directory>
</VirtualHost>
```
```
$ sudo vi /etc/apache2/extra/httpd-vhosts.conf
$ sudo apachectl restart
```
Build your site (http://ssangular.dev/dev/build).