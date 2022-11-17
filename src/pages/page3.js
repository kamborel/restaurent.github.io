export default function page_load3() {	

	let header =   '<div id="navbar" class="navbar">'+ 
								   '<span   id="link1" >Home</span>'+ 
								   '<span   id="link2" >Menu</span>'+ 
								   '<span   id="link3" >Contact</span>'+ 
							'</div>';
		 
	let html = ' <div id="pg2"  class="pg content_home aling_item">'+ 
				'<div class="div_homepage center aling_item_menu1">'+
							'<img src="./dist/images/tvgv.jpg" style="width:70px; height:70px" />'+
							'<div class="h1"> Contact Us</div>'+ 
							'<img src="./dist/images/cup.png" style="width:70px; height:70px" />'+
				'</div>'+
				
				'<div class="square  aling_item">'+
								'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;">'+ 
										'Mama Bear'+
								'</div>'+
								'<div class="blockimg" style="margin-left: 25px;"> '+
										'<div class=""> '+
													'Chef </br></br>'+

													'555-555-5554 </br></br>'+

													'totallyRealEmail@notFake.com </br></br>'+
										'</div> '+
										'<div style="width:150px; height:100px;border-radius: 20px;position: relative;bottom: 55px">'+
											'<img src="./dist/images/person2.jpg" style="width:150px; height:100px;border-radius: 20px" />'+
										'</div> '+
								'</div>'+
				'</div>'+
				
				'<div class="square  aling_item">'+
								'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;"> '+
										'Papa Bear'+
								'</div>'+
								'<div class="blockimg" style="margin-left: 14px;"> '+
										'<div class=""> '+
													'Manager </br></br>'+

													'555-555-5555 </br></br>'+

													'perfectlyRealEmail@notFake.com</br></br>'+
										'</div> '+
										'<div style="width:150px; height:100px;border-radius: 20px;position: relative;bottom: 55px">'+
											'<img src="./dist/images/person1.webp" style="width:150px; height:100px;border-radius: 20px" />'+
										'</div>'+
								'</div>'+
				'</div>'+
				
				'<div class="square  aling_item">'+
								'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;"> '+
										'Baby Bear'+
								'</div>'+
								'<div class="blockimg" style="margin-left: 25px;"> '+
										'<div class=""> '+
													'Waiter </br></br>'+

													'555-555-5556 </br></br>'+

													'totallyRealEmail@notFake.com</br></br>'+
										'</div> '+
										'<div style="width:150px; height:100px;border-radius: 20px;position: relative;bottom: 55px">'+
											'<img src="./dist/images/person3.jpeg" style="width:150px; height:100px;border-radius: 20px" />'+
										'</div>'+
								'</div>'+
				'</div>'+
				
		'</div>';
		
		return header+html;	
}
