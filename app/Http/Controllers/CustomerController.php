<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Customer;
 
class CustomerController extends Controller
{
    public function index()
    {
        return Customer::all();
    }
 
    public function show($id)
    {
        return Customer::find($id);
    }

    public function store(Request $request)
    {
        return Customer::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $customer = Customer::findOrFail($id);
        $customer->update($request->all());

        return $customer;
    }

    public function delete(Request $request, $id)
    {
        $customer = Customer::findOrFail($id);
        $customer->delete();

        return 204;
    }
}
