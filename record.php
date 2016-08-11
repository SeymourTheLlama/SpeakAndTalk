<?php
 		error_log("I love errors!", 0);

		$var = $_GET["list"];
		if ($var == "up"){
						$output = exec('sudo -u pi /var/www/html/files/playUpRecord.sh');
		}
		elseif ($var == "down"){
						$output = exec('sudo -u pi /var/www/html/files/playDownRecord.sh');
		}
		elseif ($var == "right"){
						$output = exec('sudo -u pi /var/www/html/files/playRightRecord.sh');
		}
		elseif ($var == "left"){
						$output = exec('sudo -u pi /var/www/html/files/playLeftRecord.sh');
		}
		//$output = exec('/home/pi/OpenShow.sh '.$var);
		// echo $output;
		//$user = get_current_user();
		echo "done with ";
		echo $var;
		
?>
