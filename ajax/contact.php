<?php
if (isset($_POST['name'], $_POST['number'], $_POST['park'], $_POST['message'])) {
  $data = $_POST['name'] . '-' . $_POST['number'] . '-' . $_POST['park'] . '-' . $_POST['message'] . "\n";
  //print_r($data);
  $invitationFile = file_put_contents('invitations.txt', $data.PHP_EOL , FILE_APPEND | LOCK_EX);
} else {
  die('No data');
}
