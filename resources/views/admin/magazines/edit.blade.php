@extends('layouts.panel')
<?php?>
@section('panel')
	<div>
		<div>
			<a href="{{route('/')}}"><i>	</i></a>
			<div>Edit<b>{{}}</b>
	          @include('layouts.errors')
	        </div>
			<div>
				<div>
					{{Form::open(['class' => 'confirm-delete', 'route' => ['.destroy', $->id], 'method' => 'DELETE'])}}
                    {{Form::button('Delete', ['class' => 'btn btn-danger btn-xs', 'type' => 'submit'])}}
                    {{Form::close()}}
				</div>
			</div>
		</div>
	</div>
	<div>
        {!! Form::model($, ['route' => ['.update', $->id], 'method' => 'PUT']) !!}

        @include('template._form')
		<div>
			{!! Form::button('Edit', ['type' => 'submit', 'class' => 'btn btn-primary']) !!}
		</div>
		{!! Form::close() !!}
	</div>
@endsection
<!--div>div>a[href={{route('/')}}]>i^div>b^div>div^^^div>div-->