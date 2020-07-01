
<form>
	<label class="loginLabel" for="isItPrime">Enter your number to see if it's prime</label>
	<input type="text" name="isItPrime" id="isItPrime"  placeholder="2" />
	<button value="Submit"> Check </button>
</form>

<?php
/*  
	Providing you actually have access to set the location of the php.ini file you would manually set these options to be able to display errors, however ecowebhosting
	has chosen to do this for you, the php.ini file settings can be found on the web package settings
	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);
	phpinfo();
*/

	//get variables are stored in $_GET
	
	if ($_GET) {

		$i = 2;
		$flag = true;
		while ($i < $_GET["isItPrime"]) {
			$mod = $_GET["isItPrime"] % $i;
			if($mod == 0){
				$flag = false;
			}
			//echo $i." ".$mod."<br>";
			$i++;
		}
		if ($flag == false) {
			echo "Your entered number is not a prime number";
		} else {
			echo "Your entered number is a prime number";
		}
	}
?>