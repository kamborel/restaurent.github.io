export default function  page_load2() {
	
	let header =   '<div id="navbar" class="navbar">'+ 
								   '<span   id="link1" >Home</span>'+ 
								   '<span   id="link2" >Menu</span>'+ 
								   '<span   id="link3" >Contact</span>'+ 
							'</div>';
	
	let html = '<div id="pg1" class="pg content_home aling_item">'+
					'<div class="div_homepage center aling_item_menu1">'+
								'<img src="./dist/images/tvgv.jpg" style="width:70px; height:70px" />'+
								'<div class="h1"> Menu</div>'+ 
								'<img src="./dist/images/cup.png" style="width:70px; height:70px" />'+
					'</div>'+
		  
					'<div class="div_homepagemenu aling_item_menu2">'+
								'<div class="h1"></div>'+ 
								'<div class="h1"> Beverages</div>'+ 
								'<img src="./dist/images/bunny-chow.jpg" style="width:70px; height:70px" />'+
					'</div>'+
					
					'<div class="square  aling_item">'+
								'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;">'+ 
										'Honey Tea'+ 	
								'</div>'+
								
								'<div style="margin-left: 25px;">'+ 
										'<div class="">'+ 
													'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!'+
										'</div>'+ 
										
										'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;margin-top: 20px;">'+
												'$2'+
										'</div>'+
								'</div>'+
								'<div class="blockimg">'+
									'<img src="./dist/images/platpoulet.jpg" style="width:250px; height:250px;border-radius: 20px;" />'+
								'</div>'+
					'</div>'+
					
					'<div class="square  aling_item">'+
								'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;">'+ 
										'Beary Tea'+	
								'</div>'+
								
								'<div style="margin-left: 25px;"> '+
										'<div class=""> '+
													'A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.'+
										'</div> '+
										
										'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;margin-top: 20px;">'+
												'$3'+
										'</div>'+
								'</div>'+
								'<div class="blockimg"> '+
									'<img src="./dist/images/poisson.jpg" style="width:250px; height:250px;border-radius: 20px;" />'+
								'</div>'+
					'</div>'+
					
					'<div class="div_homepagemenu aling_item_menu2">'+
								'<div class="h1"></div> '+
								'<div class="h1"> Sides</div>'+ 
								'<img src="./dist/images/bunny-chow.jpg" style="width:70px; height:70px" />'+
					'</div>'+
					
					'<div class="square  aling_item">'+
								'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;"> '+
										'Toast and Jam'+
								'</div>'+
								
								'<div style="margin-left: 25px;">'+ 
										'<div class=""> '+
													'A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.'+
										'</div> '+
										
										'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;margin-top: 20px;">'+
												'$1'+
										'</div>'+
								'</div>'+
								'<div class="blockimg"> '+
									'<img src="./dist/images/ketchup.jpg" style="width:250px; height:250px;border-radius: 20px;" />'+
								'</div>'+
					'</div>'+
					
					'<div class="square  aling_item">'+
								'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;"> '+
										'Fresh Fruit'+
								'</div>'+
								
								'<div style="margin-left: 25px;"> '+
										'<div class=""> '+
													'A small bowl of fresh fruit, whatever we find at the market for the day.'+
										'</div> '+
										
										'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;margin-top: 20px;">'+
												'$3'+
										'</div>'+
								'</div>'+
								'<div class="blockimg"> '+
									'<img src="./dist/images/fruit-sur.jpg" style="width:250px; height:250px;border-radius: 20px;" />'+
								'</div>'+
					'</div>'+
					
					'<div class="div_homepagemenu aling_item_menu2">'+
								'<div class="h1"></div> '+
								'<div class="h1"> Main Dishes</div> '+
								'<img src="./dist/images/bunny-chow.jpg" style="width:70px; height:70px" />'+
					'</div>'+
					
					'<div class="square  aling_item">'+
								'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;"> '+
										'Pancakes'+
								'</div>'+
								
								'<div style="margin-left: 25px;"> '+
										'<div class=""> '+
													'A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.'+
										'</div>'+ 
										
										'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;margin-top: 20px;">'+
												'$4'+
										'</div>'+
								'</div>'+
								'<div class="blockimg"> '+
									'<img src="./dist/images/painfromage.jpg" style="width:250px; height:250px;border-radius: 20px;" />'+
								'</div>'+
					'</div>'+
					
					'<div class="square  aling_item">'+
								'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;"> '+
										'French Toast'+
								'</div>'+
								
								'<div style="margin-left: 25px;"> '+
										'<div class=""> '+
													'Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.'+
										'</div> '+
										
										'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;margin-top: 20px;">'+
												'$5'+
										'</div>'+
								'</div>'+
								'<div class="blockimg"> '+
									'<img src="./dist/images/tartine.jpg" style="width:250px; height:250px;border-radius: 20px;" />'+
								'</div>'+
					'</div>'+
					
					'<div class="square  aling_item">'+
								'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;"> '+
										'Beary Veggie Sandwich'+
								'</div>'+
								
								'<div style="margin-left: 25px;"> '+
										'<div class=""> '+
													'Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.'+
										'</div> '+
										
										'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;margin-top: 20px;">'+
												'$8'+
										'</div>'+
								'</div>'+
								'<div class="blockimg"> '+
									'<img src="./dist/images/painsalade.jpg" style="width:250px; height:250px;border-radius: 20px;" />'+
								'</div>'+
					'</div>'+
					
					'<div class="square  aling_item">'+
								'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;"> '+
										'BLT'+
								'</div>'+
								
								'<div style="margin-left: 25px;"> '+
										'<div class=""> '+
													'Interested in the Beary Veggie Sandwich but also love bacon? Say no more.'+
										'</div> '+
										
										'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;margin-top: 20px;">'+
												'$6'+
										'</div>'+
								'</div>'+
								'<div class="blockimg"> '+
									'<img src="./dist/images/paincrudite.png" style="width:250px; height:250px;border-radius: 20px;" />'+
								'</div>'+
					'</div>'+
					
					'<div class="square  aling_item">'+
								'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;"> '+
										'Bagel and Lox'+
								'</div>'+
								
								'<div style="margin-left: 25px;"> '+
										'<div class=""> '+
													'Our house specialty, you can\'t go wrong with a hearty bagel topped with sustainably harvested salmon.'+
										'</div> '+
										
										'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;margin-top: 20px;">'+
												'$8'+
										'</div>'+
								'</div>'+
								'<div class="blockimg"> '+
									'<img src="./dist/images/painsalafrommage.jpg" style="width:250px; height:250px;border-radius: 20px;" />'+
								'</div>'+
					'</div>'+
					
					'<div class="square  aling_item">'+
								'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;"> '+
										'Honeycomb'+
								'</div>'+
								
								'<div style="margin-left: 25px;"> '+
										'<div class=""> '+
													'Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.'+
										'</div>'+ 
										
										'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;margin-top: 20px;">'+
												'$6'+
										'</div>'+
								'</div>'+
								'<div class="blockimg"> '+
									'<img src="./dist/images/miel.jpg" style="width:250px; height:250px;border-radius: 20px;" />'+
								'</div>'+
					'</div>'+
					
					'<div class="square  aling_item">'+
								'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;"> '+
										'Beary Bowl'+
								'</div>'+
								
								'<div style="margin-left: 25px;"> '+
										'<div class=""> '+
													'Get a big ole bowl of our berries! Side of honey is $1 extra.'+
										'</div> '+
										
										'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;margin-top: 20px;">'+
												'$7'+
										'</div>'+
								'</div>'+
								'<div class="blockimg">'+ 
									'<img src="./dist/images/boldfruits.jpeg" style="width:250px; height:250px;border-radius: 20px;" />'+
								'</div>'+
					'</div>'+
					
					'<div class="square  aling_item">'+
								'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;"> '+
										'The Beary Best Porridge'+
								'</div>'+
								
								'<div style="margin-left: 25px;"> '+
										'<div class=""> '+
													'Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.'+
										'</div> '+
										
										'<div style="width: 100%;font-size: 25px;font-weight: bold;height: 34px;margin-top: 20px;">'+
												'$5'+
										'</div>'+
								'</div>'+
								'<div class="blockimg"> '+
									'<img src="./dist/images/platfrommage.jpeg" style="width:250px; height:250px;border-radius: 20px;" />'+
								'</div>'+
					'</div>'+		
		 '</div>';

			return header+html;	
}	
