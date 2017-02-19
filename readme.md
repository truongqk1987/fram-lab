# Fram-Lab

We build a dashboard to show data, which gets from end-point APIs.

[DEMO on Heroku server](https://fram-lab.herokuapp.com/)

### Prerequisites

First of all, install Composer and PHP compiler in your machine

On MacOS

PHP

```
brew install php
```

Composer

```
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer  
```



### Installing

1. Download source code from github
2. Access to project folder
3. Run "composer install"
4. Update file ".evn" if you want to run on locally
5  Update file 'config/database.php' if you want to run on production environment
6. Run "php artisan migrate:refresh" to create tables in database (Remember to start DB server)
7. Run "composer dump-autoload" to load all classes
8. Run "php artisan db:seed" to insert CSV data to DB

## Running the tests

If you want to run the testcases, please type below commands (Before typing them, don't forget to start the DB and server)

```
cd <your-project-folder>
```
```
./vendor/bin/phpunit

```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Laravel](https://laravel.com/) - The web framework used
* [React](https://facebook.github.io/react/) - View library

## Authors

* **truongqk1987** - *Initial work* - [github](https://github.com/truongqk1987)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


