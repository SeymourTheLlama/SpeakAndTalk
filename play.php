<?php
 
                $var = $_GET["list"];
                if ($var == "up"){
                                $output = exec('/var/www/html/makey/speaktalk/files/playUp.sh');
                }
                elseif ($var == "down"){
                                $output = exec('/var/www/html/makey/speaktalk/files/playDown.sh');
                }
                elseif ($var == "right"){
                                $output = exec('/var/www/html/makey/speaktalk/files/playRight');
                }
                elseif ($var == "left"){
                                $output = exec('/var/www/html/makey/speaktalk/files/playLeft');
                }
                //$output = exec('/home/pi/OpenShow.sh '.$var);
                // echo $output;
                $user = get_current_user();
                echo $user;
                echo $var;
?>
