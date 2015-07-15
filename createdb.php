<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = 'root';
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
  die('Could not connect: ' . mysqli_error($conn));
}
echo "Connected successfully\n";

$sql = 'CREATE DATABASE test_db';
$retval = mysqli_query($conn, $sql);
if(! $retval )
{
  die('Could not create database: ' . mysqli_error($conn));
}
echo "Database test_db created successfully\n";
mysqli_close($conn);
?>


