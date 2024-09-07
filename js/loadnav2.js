function loadNav() {
	const navbarcont = `<header class="headerbar">
	  <img src="../images/logo/logo.png" style="margin-left:30px;width:150px;height:60px;float:left" />
	  <span style="float:left;padding:20px 0;"><b>&nbsp;&nbsp;&nbsp;The Learning Lens</b></span>
	  <ul class="links">
	    <li><a href="#"><span class="fa fa-book"></span>&nbsp;Reflections/Journal Entries</a></li>
	    <li><a href="#"><span class="fa fa-home"></span>&nbsp;Home</a></li>
	  </ul>
	</header>
	`;
	
	const footercont = `<footer style='position: fixed;height: 50px;background: #6067ba;color: white;bottom: 0;left: 0;right: 0px;width: 100%;margin-bottom: 0px;clear: both;text-align: center;padding: 15px;'>(c) 2024 Reymundo Esteves II</footer>`;
	document.getElementById('headerbar').insertAdjacentHTML('afterbegin', navbarcont);
	document.getElementById('footer').insertAdjacentHTML('afterbegin', footercont);
}