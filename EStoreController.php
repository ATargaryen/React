<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class EStoreController extends Controller
{
    //

    public function getItems(Request $request){

        $Products = DB::SELECT("SELECT * FROM `Products` WHERE `status` = 'active'");
        return json_encode($Products);
    }

    public function addItemToCart(Request $request){

        $req = json_decode($request->getContent(), true);

        $req = $req[0];

        $user_id = $req['user_id'];
        $item_id = $req['item']['item_id'];
        $item_qty = '1' ;

        $cart_row = DB::SELECT("SELECT *  FROM `Cart` WHERE `user_id` = ? AND `item` = ? ",[$user_id , $item_id]);

        if(count($cart_row)>0){
            $item_qty = $cart_row[0]->quantity + 1 ;
            DB::UPDATE("UPDATE `Cart` SET  quantity = ? WHERE `user_id` = ? AND `item` = ? ",[$item_qty,$user_id , $item_id]);
        }else{
            DB::INSERT("INSERT INTO `Cart` (`user_id`, `item`, `quantity`, `created_at`, `updated_at`) VALUES (?,?,?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)",[$user_id , $item_id ,$item_qty]);
        }


        return 'true';
    }

    public function getCartItem(Request $request){
    
        $carts = DB::SELECT("SELECT Products.* , Cart.quantity   FROM `Cart` , `Products` WHERE `user_id` = 121 AND Cart.item = Products.id");
        return json_encode($carts);
    }

    public function EStoreController(Request $request){
        // return json_decode($request->getContent(), true);

        return 'true';
    }
}



// store
// Route::GET('getItems','EStoreController@getItems')->middleware('cors:api');
// Route::GET('getCartItem/{id}    ','EStoreController@getCartItem')->middleware('cors:api');
// Route::POST('getCartItems','EStoreController@getCartItem')->middleware('cors:api');
// Route::POST('addItemToCart    ','EStoreController@addItemToCart')->middleware('cors:api');
// Route::POST('submitCustomerShippingForm','EStoreController@EStoreController')->middleware('cors:api');
// Route::POST('jobStatus','EStoreController@jobStatus')->middleware('cors:api');

