<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\Contact;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    //
    public function index () {
        return view('contact');
    }

    public function sendEmail(Request $request) {
        Mail::to($request->input('email'))->send(new Contact());
        return redirect('/');
    }
}
