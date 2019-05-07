M.AutoInit();

$(window).ready(function(){
	$('.table').DataTable();

	$(document).on('click','.sweet-success',function(){
		Swal.fire(
		  'Process Successful!',
		  'Way to go! Press okay to continue.',
		  'success'
		);
	});
});
