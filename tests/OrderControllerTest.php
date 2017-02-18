<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class OrderControllerTest extends TestCase
{




    public function checkGETAPI($uri) {
        $this->call('GET', $uri); // Check if API exist
        $this->json('GET', $uri); // Check if API return content is JSON
        $response = $this->get($uri);
        $this->assertResponseOk(); // Check status of API is 200
        
    }

    public function testIndex() {
        $this->visit('/')
            ->seePageIs('/dashboard');
    }

    public function testTotalOrdersMonthlyAPI() {
        $this->checkGETAPI('/orders/totalOrdersMonthly');
    }

    public function testTotalOrdersByPersonAPI() {
        $this->checkGETAPI('/orders/totalOrdersByPerson');
    }

    public function testTotalOrdersByCurrencyAPI() {
        $this->checkGETAPI('/orders/totalOrdersByCurrency');
    }
}
