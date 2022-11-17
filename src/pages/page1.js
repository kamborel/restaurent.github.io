
export default function page_load1() {
	
	let header =   '<div id="navbar" class="navbar">'+ 
								   '<span   id="link1" >Home</span>'+ 
								   '<span   id="link2" >Menu</span>'+ 
								   '<span   id="link3" >Contact</span>'+ 
							'</div>';

	
	let html = '<div id="pg0" class="pg content_home aling_item">'+ 
					'<div class="div_homepage center aling_item_menu">'+ 
								'<img src="./dist/images/tvgv.jpg" style="width:70px; height:70px" />'+ 
								'<div class="h1"> Beary\'s Breakfast Bar </div> '+ 
								'<img src="./dist/images/cup.png" style="width:70px; height:70px" />'+ 
					'</div>'+ 
					
					'<div class="square " style="height: 157px;">'+ 
							'<p>'+ 
									'Beary\'s has the best porridge! The atmosphere and customer '+ 
									'service make you feel like you are sitting in the middle of the woods, '+ 
									'eating like a bear! This is exactly the kind of place that I like to return'+ 
									'to again and again.'+ 
							'</p>'+ 
						'<p style="font-size:20px">'+ 
								'Goldilocks'+ 
						'</p>'+ 
						
					'</div>'+ 
					
					'<div class="square">'+ 
							'<div style="font-size:20px">'+ 
								'Goldilocks'+ 
							'</div>'+ 
							
							'<div>'+ 
							
								'<p>Sunday: 8am - 8pm </p>'+ 

								'<p>	Monday: 6am - 6pm </p>'+ 

								'<p>		Tuesday: 6am - 6pm </p>'+ 

								'<p>		Wednesday: 6am - 6pm </p>'+ 

								'<p>		Thursday: 6am - 10pm </p>'+ 

								'<p>		Friday: 6am - 10pm </p>'+ 

								'<p>		Saturday: 8am - 10pm </p>'+ 
							
							'</div>'+ 
					'</div>'+ 
					
					'<div class="square" style="height: 48px;">'+ 
							'<div style="font-size:20px">'+ 
									'Location'+ 
							'</div>'+ 
							'<p> 123 Forest Drive, Forestville, Maine </p>'+ 
					'</div>'+ 
		  '</div>'; 
		  
		  return header+html;
}



  //export  { page_load1, page_load2, page_load3};