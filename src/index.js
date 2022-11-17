import  _  from  'lodash';
import  './style.css';
import   page_load1 from './pages/page1.js';
import   page_load2 from './pages/page2.js';
import   page_load3 from './pages/page3.js';
//import Icon from './images';

 
 
 function component(num) {
	  
	   const element = document.getElementById('content');
	   
		if (num == 1) { 
			element.innerHTML = page_load1();
			
			const link1 = document.getElementById('link1');
			const link2 = document.getElementById('link2');
			const link3 = document.getElementById('link3');
			
			link1.classList.add('bgclick');
		}
		else if (num == 2){  
			element.innerHTML = page_load2();	

			const link1 = document.getElementById('link1');
			const link2 = document.getElementById('link2');
			const link3 = document.getElementById('link3');
			
			link2.classList.add('bgclick');
		}
		else{
			element.innerHTML = page_load3();
			
			const link1 = document.getElementById('link1');
			const link2 = document.getElementById('link2');
			const link3 = document.getElementById('link3');
			
			link3.classList.add('bgclick');
		}
		
			
			
			link1.addEventListener('click', function() {
				component(1);
			});
			
			
			link2.addEventListener('click', function() {
				component(2);
			});
			
			link3.addEventListener('click', function() {
				component(3);
			});
 }
 
component(1);
