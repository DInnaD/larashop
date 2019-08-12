// php namespace App\Services;

// use App\CartItem;
// use App\Product;
// use App\Exceptions\CartException as Exception;
// use Illuminate\Contracts\Auth\Guard;
// use Illuminate\Database\Eloquent\Collection;
// use Illuminate\Http\Request;
// use Illuminate\Session\Store as Session;

// class Cart {

// 	/**
// 	 * @var Session
// 	 */
// 	private $session;

// 	/**
// 	 * @var Guard
// 	 */
// 	private $auth;

// 	/**
// 	 * @var CartItem
// 	 */
// 	private $model;

// 	/**
// 	 * @var string
// 	 */
// 	private $code;


// 	function __construct(Request $request, Guard $auth, CartItem $model)
// 	{
// 		$this->session = $request->session();
// 		$this->auth = $auth;
// 		$this->model = $model;

// 		$this->code = $this->session->get('cart.code');
// 		if (is_null($this->code)) {
// 			$this->createNewCart();
// 		}
// 	}


// 	public function code()
// 	{
// 		return $this->code;
// 	}


// 	public function clear()
// 	{
// 		$this->session->remove('cart');
// 		$this->model->whereCode($this->code)->delete();
// 		$this->createNewCart();
// 	}


// 	/**
// 	 * Сумма стоимостей всех позиций в корзине. Итоговая сумма на чеке.
// 	 *
// 	 * @return float
// 	 */
// 	public function total()
// 	{
// 		$total = $this->session->get('cart.total');

// 		if (is_null($total)) {
// 			/** @var Collection $items */
// 			$items = $this->model->with([ 'product' => function ($query) { $query->select([ 'id', 'price' ]); } ])
// 								 ->whereCode($this->code)
// 								 ->get([ 'product_id', 'quantity' ]);

// 			$total = $items->sum(function ($item) { return $item->quantity * $item->product->price; });

// 			$this->session->set('cart.total', $total);
// 		}

// 		return $total;
// 	}


// 	/**
// 	 * Суммарное количество единиц товара в заказе.
// 	 *
// 	 * @return int
// 	 */
// 	public function count()
// 	{
// 		$count = $this->session->get('cart.count');

// 		if (is_null($count)) {

// 			$count = $this->model->whereCode($this->code)->sum('quantity');

// 			$this->session->set('cart.count', $count);
// 		}

// 		return $count;
// 	}


// 	/**
// 	 * Позиции заказа.
// 	 *
// 	 * @param array $columns
// 	 * @param bool  $lock
// 	 *
// 	 * @return Collection
// 	 */
// 	public function items($columns = [ '*' ], $lock = false)
// 	{
// 		if ($lock) {
// 			return $this->model->with(
// 				[
// 					'product' => function ($query) {
// 						$query->lockForUpdate();
// 					}
// 				]
// 			)->whereCode($this->code)->latest('created_at')->lockForUpdate()->get($columns);
// 		}

// 		return $this->model->with('product')->whereCode($this->code)->latest('created_at')->get($columns);
// 	}


// 	/**
// 	 * Изменения количества позиции в заказе. Проверяет наличие на складе. Не проверяет баланс пользователя.
// 	 *
// 	 * @param string|array $condition
// 	 * @param int          $quantity
// 	 *
// 	 * @throws Exception
// 	 */
// 	public function setQuantity($condition, $quantity)
// 	{
// 		if (!is_array($condition)) {
// 			$condition = [ 'product_id' => $condition ];
// 		}

// 		// проверка наличия на складе

// 		$item = $this->model->with('product')->whereCode($this->code)->where($condition)->first();

// 		if ($quantity > $item->product->quantity) {
// 			throw new Exception(setting('message.not_enough_in_stock') ?: 'Количество на складе ограничено.');
// 		}

// 		$item->update(compact('quantity'));

// 		$this->clearCounters();
// 	}
//****************************************************

// 	/**
// 	 * @param Product $product
// 	 * @param int     $quantity
// 	 *
// 	 * @return CartItem
// 	 * @throws Exception
// 	 */
// 	public function addItem($product, $quantity = 1)
// 	{
// 		if ($this->auth->guest()) {
// 			abort(401);
// 		}

// 		if (!$this->auth->user()->is_admin) {

// 			// перед добавлением товара в корзину надо проверить баланс пользователя
// 			// если баллов не хватает, контроллеру возвращается false для того
// 			// чтобы тот мог уведомить пользователя надлежащим способом

// 			$possible_total = $this->total() + $product->price;

// 			if ($possible_total > $this->auth->user()->balance) {

// 				throw new Exception(
// 					setting(
// 						'message.not_enough_points'
// 					) ?: 'На вашем балансе недостаточно баллов для выполнения этого действия.'
// 				);

// 			}
// 		}

// 		// если товар уже есть в корзине - только увеличим его количество

// 		/** @var CartItem $item */
// 		$item = $this->model->whereCode($this->code)->whereProductId($product->getKey())->first();

// 		if ($item) {

// 			// проверка наличия на складе

// 			if ($item->quantity + $quantity > $product->quantity) {
// 				throw new Exception(setting('message.not_enough_in_stock') ?: 'Количество на складе ограничено.');
// 			}

// 			$item->increment('quantity', $quantity);

// 			$this->clearCounters();

// 			return $item;
// 		}

// 		// проверка наличия на складе

// 		if ($quantity > $product->quantity) {
// 			throw new Exception(setting('message.not_enough_in_stock') ?: 'Количество на складе ограничено.');
// 		}

// 		// добавление нового товара в корзину

// 		/** @var CartItem $newItem */
// 		$newItem = $this->model->create(
// 			[
// 				'code' => $this->code,
// 				'user_id' => $this->auth->user()->getAuthIdentifier(),
// 				'product_id' => $product->getKey(),
// 				'quantity' => $quantity,
// 			]
// 		);

// 		$this->clearCounters();

// 		return $newItem;
// 	}


// 	public function deleteItem($condition)
// 	{
// 		if (!is_array($condition)) {
// 			$condition = [ 'product_id' => $condition ];
// 		}

// 		$this->model->whereCode($this->code)->where($condition)->delete();

// 		$this->clearCounters();
// 	}


// 	private function createNewCart()
// 	{
// 		$this->code = str_random();
// 		$this->session->set('cart.code', $this->code);
// 		$this->clearCounters();
// 	}


// 	private function clearCounters()
// 	{
// 		$this->session->remove('cart.count');
// 		$this->session->remove('cart.total');
// 	}
// }
// app/CartItem.php: product_id

// <?php namespace App;

// use Illuminate\Database\Eloquent\Model;

// *
//  * App\CartItem
//  *
//  * @property integer $id 
//  * @property string $code 
//  * @property integer $user_id 
//  * @property integer $product_id 
//  * @property integer $quantity 
//  * @property \Carbon\Carbon $created_at 
//  * @property \Carbon\Carbon $updated_at 
//  * @property-read \App\User $user 
//  * @property-read \App\Product $product 
//  * @method static \Illuminate\Database\Query\Builder|\App\CartItem whereId($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\CartItem whereCode($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\CartItem whereUserId($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\CartItem whereProductId($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\CartItem whereQuantity($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\CartItem whereCreatedAt($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\CartItem whereUpdatedAt($value)
 
// class CartItem extends Model {

// 	/**
// 	 * The attributes that should be casted to native types.
// 	 *
// 	 * @var array
// 	 */
// 	protected $casts = [ 'quantity' => 'integer' ];

// 	/**
// 	 * The attributes that are mass assignable.
// 	 *
// 	 * @var array
// 	 */
// 	protected $fillable = [ 'code', 'user_id', 'product_id', 'quantity' ];


// 	public function user()
// 	{
// 		return $this->belongsTo('App\User');
// 	}


// 	public function product()
// 	{
// 		return $this->belongsTo('App\Product');
// 	}

// }


// app/Product.php:

// <?php namespace App;

// use App\Events\CatalogWasChanged;
// use Illuminate\Database\Eloquent\Model;

// /**
//  * App\Product
//  *
//  * @property integer $id
//  * @property string $name
//  * @property string $photo
//  * @property string $sticker
//  * @property string $description
//  * @property string $properties
//  * @property float $price
//  * @property float $old_price
//  * @property integer $quantity
//  * @property boolean $published
//  * @property boolean $archived
//  * @property integer $top_position
//  * @property integer $updated_by
//  * @property string $updated_ip
//  * @property \Carbon\Carbon $created_at
//  * @property \Carbon\Carbon $updated_at
//  * @property-read \Illuminate\Database\Eloquent\Collection|\App\ProductCategory[] $categories
//  * @property-read \App\User $editor
//  * @property-read \Illuminate\Database\Eloquent\Collection|\App\User[] $likes
//  * @method static \Illuminate\Database\Query\Builder|\App\Product whereId($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\Product whereName($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\Product wherePhoto($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\Product whereSticker($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\Product whereDescription($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\Product whereProperties($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\Product wherePrice($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\Product whereOldPrice($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\Product whereQuantity($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\Product wherePublished($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\Product whereArchived($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\Product whereTopPosition($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\Product whereUpdatedBy($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\Product whereUpdatedIp($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\Product whereCreatedAt($value)
//  * @method static \Illuminate\Database\Query\Builder|\App\Product whereUpdatedAt($value)
//  * @method static \App\Product available()
//  */
// class Product extends Model {

// 	/**
// 	 * The attributes that should be casted to native types.
// 	 *
// 	 * @var array
// 	 */
// 	protected $casts = [
// 		'published' => 'boolean',
// 		'archived' => 'boolean',
// 		'properties' => 'object',
//         'sort_order' => 'integer',
// 	];

// 	/**
// 	 * The attributes that are mass assignable.
// 	 *
// 	 * @var array
// 	 */
// 	protected $fillable = [
// 		'name',
// 		'photo',
// 		'sticker',
// 		'description',
// 		'properties',
// 		'price',
// 		'old_price',
// 		'quantity',
// 		'published',
// 		'archived',
// 		'sort_order',
// 		'updated_by',
// 		'updated_ip'
// 	];

// 	/**
// 	 * The attributes that should be hidden for arrays.
// 	 *
// 	 * @var array
// 	 */
// 	protected $hidden = [ 'updated_ip' ];


// 	public static function boot()
// 	{
// 		parent::boot();
// 		static::created(function () { event(new CatalogWasChanged); });
// 		static::saved(function () { event(new CatalogWasChanged); });
// 	}


// 	public function categories()
// 	{
// 		return $this->belongsToMany('App\ProductCategory');
// 	}


// 	public function editor()
// 	{
// 		return $this->belongsTo('App\User', 'updated_by');
// 	}


// 	public function likes()
// 	{
// 		return $this->belongsToMany('App\User', 'product_user_likes');
// 	}


// 	public function scopeAvailable($query)
// 	{
// 		return $query->wherePublished(true)->whereArchived(false)->where('quantity', '>', 0);
// 	}
// }