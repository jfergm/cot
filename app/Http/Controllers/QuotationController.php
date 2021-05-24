<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Quotizer;

class QuotationController extends Controller
{
    //

    public function index() {
        return view('quotation');
    }

    public function quotizer(Request $request) {
        $quotizer = new Quotizer($request->input('q'), $request->input('amount'));

        return json_encode($quotizer);
    }
}
