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

    public function getUserAllCartItems(Request $request){
        $req = json_decode($request->getContent(), true);    

        $user_id = $req['user_id'];
    
        $carts = DB::SELECT("SELECT Products.* , Cart.quantity   FROM `Cart` , `Products` WHERE `user_id` = ? AND Cart.item = Products.id",[$user_id]);


        return json_encode($carts);
    }


    public function getCartItem(Request $request){
        $req = json_decode($request->getContent(), true);    
        $item = $req[0]['item_id'];
        $user_id = $req[0]['user_id'] ;

        $carts = DB::SELECT("SELECT Products.* , Cart.quantity , Products.price * Cart.quantity as total_amt , '18' as gst  FROM `Cart` , `Products` WHERE Cart.item = Products.id  AND `user_id` = ? AND Cart.item = ?",[$user_id ,$item ] );

        return json_encode($carts);
    }

    public function storeOrder(Request $request){

        $req = json_decode($request->getContent(), true);

        $req = $req[0];

        $user_id = $req['user_id'];
        $item_id = $req['item_id'];
        $item_qty = $req['item_qty'];
        $shipping_address_line = $req['form_data']['customer_address_line'];
        $shipping_address_city = $req['form_data']['customer_city'];
        $shipping_address_pincode = $req['form_data']['customer_pincode'];
        $shipping_address_state = $req['form_data']['customer_state'];
        $person_name = $req['form_data']['customer_name'];
        $person_email = $req['form_data']['customer_email'];
        $person_phone = $req['form_data']['customer_phone'];
        $order_amount = '413221' ;


        $order_store =   DB::INSERT("INSERT INTO `orders` (`user_id`, `item_id`, `qty`, `shipping_address_line`, `shipping_address_city`, `shipping_address_state`, `person_name`, `person_email`, `person_phone`, `shipping_address_pincode` , `order_amount` ) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[$user_id , $item_id ,$item_qty ,$shipping_address_line ,$shipping_address_city ,$shipping_address_state ,$person_name ,$person_email ,$person_phone,$shipping_address_pincode ,$order_amount]);

        $order_id = DB::SELECT("SELECT LAST_INSERT_ID() as order_id");


        return array('result' => 'true','data' => $order_id );


    }

    public function doPayment(Request $request){

        $req = json_decode($request->getContent(), true);

        $order_id = $req['order_id'] ;

        DB::UPDATE("UPDATE `orders` SET `payment_status` = '1' WHERE `orders`.`id` = ?",[$order_id]);

        return 'true' ;

    }

    public function getUserOrders(Request $request){

        $req = json_decode($request->getContent(), true);

        $user_id = $req['user_id'] ;

        $Orders = DB::SELECT("SELECT *  FROM `orders` WHERE `user_id` = ? AND `payment_status` = 1",[$user_id]);
        return json_encode($Orders);
    }
}


// Route::GET('getItems','EStoreController@getItems')->middleware('cors:api');
// Route::POST('getCartItem','EStoreController@getCartItem')->middleware('cors:api');
// Route::POST('getCartItems','EStoreController@getUserAllCartItems')->middleware('cors:api');
// Route::POST('addItemToCart    ','EStoreController@addItemToCart')->middleware('cors:api');
// Route::POST('submitCustomerShippingForm','EStoreController@storeOrder')->middleware('cors:api');
// Route::POST('doPaymentForOrder','EStoreController@doPayment')->middleware('cors:api');
// Route::POST('getUserOrders','EStoreController@getUserOrders')->middleware('cors:api');
