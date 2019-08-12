@extends('layouts.app')

@section('content')
	<div>
		<div>
			<div>
				<div>
					<div>	</div>
					<div>
						{{ link_to_route('.create', 'create', null, ['class' => 'btn btn-info btn-xs']) }}
						<hr>
						<table>
							<tr>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
							</tr>
							@foreach ($s as $model)
							<tr>
								<td>	</td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td>
									{{Form::open(['class' => 'confirm-delete', 'route' => ['.destroy', $model->id], 'method' => 'DELETE'])}}
                                    {{ link_to_route('.show', 'info', [$model->id], ['class' => 'btn btn-info btn-xs']) }} |
                                    {{ link_to_route('.edit', 'edit', [$model->id], ['class' => 'btn btn-success btn-xs']) }} |
                                    {{Form::button('Delete', ['class' => 'btn btn-danger btn-xs', 'type' => 'submit'])}}
                                    {{Form::close()}}
								</td>
							</tr>
							@endforeach
						</table>						
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
<!--div>div>div>div>div+div>hr>table>tr>th*15^tr>td*15^^^^^^^^^ - /hr-->