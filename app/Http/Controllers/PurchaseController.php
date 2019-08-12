<?php

namespace App\Http\Controllers;

use Auth;
USE Session;
use App\Magazine;
use App\Book;
use App\Order;
use App\Purchase;
use App\Http\Requests\PurchaseRequest;
use Illuminate\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;

class PurchaseController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Purchase::class, 'purchase');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $purchases = Purchase::with('book', 'magazine', 'order')->where('status_paid', '!=', '1')->get();

        return view('purchases.index',compact('purchases'));//homes.pay
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PurchaseRequest $request)
    {
        $purchase->create($request->all());
        //$purchase->getNewPriceAttributes($request->get('newPrice'));//?
        $purchase->toggleStatusBuy();
        
        return redirect()->route('purchases.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function show(Purchase $purchase)
    {
        return view('purchases.show', compact('purchase'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function edit(Purchase $purchase)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function update(PurchaseRequest $request, Purchase $purchase)
    {
        $purchase->update($request->all());
        //$purchase->getNewPriceAttributes($request->get('newPrice'));//?

        return redirect()->route('purchases.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Purchase  $purchase
     * @return \Illuminate\Http\Response
     */
    public function destroy(Purchase $purchase)
    {
        $purchase->delete();
        return redirect()->back();
    }

    public function destroyAll(Request $request)
    {
        $purchases = Purchase::all()->where('status_paid', '==', '0')->where('status_sub_price', '==', '0');
        foreach ($purchases as $purchase) {

            $purchase->delete();
        }
        return redirect()->back();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function order(Purchase $purchase, Order $order)
    {
        $purchases = $order->purchases;//?????????owned(); //'desc'; 
        return view('purchases.order', compact('order'));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function indexCart()//
    {        
        $purchases = Purchase:::with('book', 'magazine', 'order')->where('status_paid', '==', '0')->get();

        return view('purchases.index', compact('purchases'));//homes.pay
        

    }


  //   /**
  //  * Отправка пользователю напоминания по e-mail.
  //  *
  //  * @param  Request  $request
  //  * @param  int  $id
  //  * @return Response
  //  */
  // public function sendEmailReminder(Request $request, $id)
  // {
  //   $user = User::findOrFail($id);

  //   Mail::send('emails.reminder', ['user' => $user], function ($m) use ($user) {
  //     $m->from('innadanylevska@gmail.com', 'Shop');

  //     $m->to($user->email, $user->name)->subject('Your Order!');
  //   });
  // }

    

    //MODELpublic function toggleStatus()
    
 //cart
    //use Cache;
    //pub item:
    //relat item belowTo cart $item_id
       /**
     * Store an item in the cache.
     *
     * @param  string  $key
     * @param  mixed   $value
     * @param  int     $seconds
     * @return array|bool
     */
    public function addToCart($id, $count, $price){
            // $this->item = put($key, $value, $seconds);//?cookie
            // $this->item = start();//?session
            // return $this;
        //or purchaseable???


            $this->purchaseable()s = $_SESSION['products'];//?session
            if(array_key_exists(($id), $this->purchaseable()s)){
                $this->purchaseable()s['id']['count'] += $count;

            }else{
                $this->purchaseable()s = ['id'][

                    'id' => $id,
                    'count' => $count,

                ];
            }

            $_SESSION = $this->purchaseable()s;

    }

    //
    public function remove(){
        $this->purchaseable()s = $_SESSION['products'];
        $this->purchaseable()s = arraay_diff_key($this->purchaseable()s, [$id => []]);
        $_SESSION['products'] = $this->purchaseable()s;
    }

    public function total(){
        $this->purchaseable()s = $_SESSION['products'];
        foreach($this->purchaseable()s as $this->purchaseable()){
            return $total += $purchaseable()['count'] * $price['price'];
        }
    }

    public function buy($order)//, $summa trait
    {
        $purchases = Purchase::with('book', 'magazine', 'order')->where('status_bought', '==', '1')->where('status_paid', '==', '0')->get();
        $order = new Order(); 
        $order = Order::add($request->all());
        $order->setCountAttributes($request->get('count')); 
        $order->setTotalAttributes($request->get('total'));   
        $order->setCode($request->get('code'));
        foreach ($purchases as $purchase){
            $purchase->order_id = $order->id;
            $purchase->toggleStatus();  
            $purchase->sendEmailReminder();//action lisiner observe 
        }     
        $order->save();        

        return redirect()->route('cart')->with('status_paid','Check your email!');//to payment service
    }

    public function toggleBuyAll()//toggleBeforeToggleAll()//not work
    {
        $purchases = Purchase::where('status_bought', '==', '0')->where('status_paid', '==', '0')->get();

        foreach ($purchases as $purchase) 
        {

            $purchase->toggleStatusBuy();
        }
            
        return redirect()->back();
    }

    public function toggleBuy($id)//toggleBeforeToggle($id)
    {

        $purchase = Purchase::find($id);//where it got// order in toggle
        $purchase->toggleStatusBuy();

            
        return redirect()->back();
    }

    public function toggleIsPausedSubPrice($id)//toggleBeforeToggle($id)
    {

        $purchase = Purchase::find($id);//where it got// order in toggle
        $purchase->getIsStatusSubPriceAttribute();

            
        return redirect()->back();
    } 

    //any_disconts

    public function toggleIsPausedDiscontId($id)//toggleBeforeToggle($id)
    {

        $purchase = Purchase::find($id);//where it got// order in toggle
        $purchase->getStatusVisibleDiscontIdAttribute();

            
        return redirect()->back();
    } 
}
