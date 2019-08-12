@extends('admin.layout')

@section('content')
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Blank page
        <small>it all starts here</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Examples</a></li>
        <li class="active">Blank page</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Default box -->
      <div class="box">        
          <div class="box-header">
              <h3 class="box-title">Listing</h3>
          </div>
          <div class="box-header">    
            <div class="form-group">
                <a href="{{route('admin.purchases.indexDayBefore')}}" class="btn btn-success">Purchase per Day</a>
              </div>
              <div class="form-group">
                <a href="{{route('admin.purchases.indexWeekBefore')}}" class="btn btn-success">Purchase per Week</a>
              </div>
              <div class="form-group">
                <a href="{{route('admin.purchases.indexMonthBefore')}}" class="btn btn-success">Purchase per Month</a>
            </div>
            <div>
              {{--$amountOfSum = 0--}}
              {{--$amountOfQtySum = 0--}}
              {{--$amountOfQtyBook = 0--}}
              {{--$amountOfQtyMagazin = 0--}}
            @foreach($purchases as $purchase)
              {{--$amountOfSum += $purchase->ordersAlls()->getSumma()--}}
              {{--$amountOfQtySum += $purchase->ordersAlls()->getQuantitySum()--}}
              {{--$amountOfQtyBook += $purchase->ordersAlls()->getQuantity()--}}
              {{--$amountOfQtyMagazin += $purchase->ordersAlls()->getQuantity_m()--}}
            @endforeach
            </div>
          </div>
            <!-- /.box-header -->
            <div class="box-body">
              <div class="form-group">
                
              </div>
              @if(Auth::check())
                    <div class="leave-comment"><!--leave comment-->
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th>Paid</th>
                  <th>Del</th>
                  <th>Order</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Quantity</th>
                  <th>Summa</th>   
                  <th>%id or %gl</th>
                  <th>Price-%</th>
                  <th>Code</th>
                </tr>
                </thead>
                <tbody>
                <!--foreach-->                
                @foreach($purchases as $purchase)
                <tr>
                  <td>
                    @if($purchase->status_bought == 1)
                      @if($purchase->status_paied == 0)
                        <a href="" class="fa fa-lock"></a> 
                      @else
                          <a href="" class="fa fa-thumbs-o-up"></a> 
                      @endif
                    @endif
              </td>
                  <td> {{Form::open(['route'=>['purchases.destroy', $purchase->id], 'method'=>'delete'])}}
                      <button onclick="return confirm('are you sure?')" type="submit" class="delete">
                       <i class="fa fa-remove"></i>
                      </button>
                      <!--a href="{{route('purchases.edit', $purchase->id)}}" class="fa fa-pencil"></a-->

                       {{Form::close()}}
                     </td>
                   
                   <td>{{($purchase->order_id)}}</td>
                   <td>{{$purchase->id}}</td>
                   <td>{{$purchase->purchaseable()->name}}
                  </td>
                  <td>{{$purchase->purchaseable()->price}}
                  </td>
                  <td>{{$purchase->created_at}}
                  </td> 
                  <td>{{$purchase->qty}}</td>
                  <td>{{$purchase->purchaseable()->price * $purchase->qty}}</td>
                  <td>{{$purchase->purchaseable()->currentDiscont}}</td>
                  <td>{{$purchase->purchaseable()->newPrice * $purchase->qty}}</td>
                  <td>{{$purchase->purchaseable()->status}}</td>
                </tr>
                @endforeach
                <!--endforeach-->
                </tfoot>
                
                </tbody>
              </table> 
                @endif
             </div>
            <!-- /.box-body -->
          </div>
      <!-- /.box -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
@endsection