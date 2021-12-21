<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EStoreController extends Controller
{
    //

    public function getCartItem(Request $request){
      

        $item = array(
            'item_name' => ' Portable 7.5 Ladder',
            'item_src' =>  '../assets/images/p2.png',
            'item_desc' => 'Aluminum Lader 7.5 height 2 kg light weight portal ladder',
            'item_price' => '3000',
            'item_qty' => '2',
            'item_color' => '#FF0000',
            'item_gst' => '18',
            'item_total' => '8090'
        );

        return json_encode($item);
    }

    public function EStoreController(Request $request){
        // return json_decode($request->getContent(), true);

        return 'true';
    }
}


// Route::GET('getCartItem/{id}    ','EStoreController@getCartItem')->middleware('cors:api');
// Route::POST('submitCustomerShippingForm','EStoreController@EStoreController')->middleware('cors:api');
