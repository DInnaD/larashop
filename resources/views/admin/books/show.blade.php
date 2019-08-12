@extends('layouts.panel')
<?php
/** @var \Illuminate\Support\ViewErrorBag $errors */
/** @var \App\ $s */
?>
@section('panel')
<div>
	<div>
		<a href="{{route('/')}}"><i></i></a>
		<div>Item: <b>{{}}</b></div>
		<div>
			<div>
				{{Form::open(['class' => 'confirm-delete', 'route' => ['.destroy', $->id], 'method' => 'DELETE'])}}
                    {{ link_to_route('.edit', 'edit', [$->id], ['class' => 'btn btn-primary btn-xs']) }} |
                    {{Form::button('Delete', ['class' => 'btn btn-danger btn-xs', 'type' => 'submit'])}}
                    {{Form::close()}}
			</div>
		</div>
	</div>
</div>
<div>
	<table>
		<tr>
			<th width="25%">Attribute</th>
            <th width="75%">Value</th>
		</tr>
		@foreach ($->getAttributes() as $attribute => $value)
		<tr>
			<td></td>
			<td></td>
		</tr>
		@endforeach
	</table>
</div>
@endsection
<!--div>div>a[href={{route('/')}}]>i^div>b^div>div^^^^div>table>tr>th*2^+tr>td*2^-->