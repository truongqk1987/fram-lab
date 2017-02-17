<?php

use Illuminate\Database\Seeder;
use Flynsarmy\CsvSeeder\CsvSeeder;
class OrderTableSeeder extends CsvSeeder
{

	public function __construct() {
		$this->table = 'orders';
		$this->filename = base_path().'/database/seeds/csvs/orders.csv';
		$this->mapping = [
	        0 => 'payment_date',
	        1 => 'person_id',
	        2 => 'playing_currency',
	        3 => 'playing_original_amount',
	    ];
	}

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::disableQueryLog();
        DB::table($this->table)->truncate();
        parent::run();
    }
} 

