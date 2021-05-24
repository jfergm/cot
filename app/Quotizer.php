<?php

namespace App;
use App\InterestRates;

use Illuminate\Support\Facades\Log;
Class Quotizer {
  public $interestRate;
  public $amount;
  public $q;
  public $amortization;
  public $pay;
  
  public function __construct($q = 8, $amount = 5000) {
    $this->amount = $amount;
    $this->q = $q;
    $propertyName = "Q_{$q}"; 
    $this->interestRate = InterestRates::$$propertyName;
    $this->pay = $this->calculatePay();
    $this->amortization = $this->generateAmortization();

  }

  private function calculatePay() {
    $rate = $this->interestRate['TIQIVA'] / 100;
    $pay = $this->amount * ( ($rate * pow(1 + $rate, $this->q)) / (pow(1 + $rate, $this->q) - 1) );
    return number_format($pay, 2);
  }

  private function generateAmortization() {
    $amortization = [];

    $am;
    $interest;
    $balance = $this->amount;
    $iva;
    $pay = floatval(preg_replace('/[^\d.]/', '', $this->pay));
    
    for($i = 0; $i < $this->q; $i++) {
      $interest = $balance * ($this->interestRate['TIQ'] / 100);
      $iva = $interest * 0.16;
      $am = $pay - $interest - $iva;

      $item = [
        'num' => $i + 1,
        'balance' => number_format($balance,2),
        'amort' => number_format($am,2),
        'interest' => number_format($interest,2),
        'iva' => number_format($iva,2),
        'pay' => $this->pay
      ];

      $amortization[$i] = $item;
      $balance = $balance - $am;
    }
    return $amortization;
  }
}