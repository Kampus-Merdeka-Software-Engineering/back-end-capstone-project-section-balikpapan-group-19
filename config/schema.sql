--DATABASE--


CREATE DATABASE IF NOT EXISTS `pengiriman`;

USE `pengiriman`;

CREATE TABLE IF NOT EXISTS kota (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kota_asal VARCHAR(45) NOT NULL,
    kota_tujuan VARCHAR(45) NOT NULL
 );

 CREATE TABLE IF NOT EXISTS pengiriman (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kota_asal VARCHAR(255) NOT NULL,
    kota_tujuan VARCHAR(255) NOT NULL, 
    berat_kg INT(11) NOT NULL,
    price INT (11) NOT NULL
 );


 CREATE TABLE IF NOT EXISTS pelacakan (
    id INT PRIMARY KEY NOT NULL,
    nama VARCHAR(45) NOT NULL,
    numberTelpon INT NOT NULL,
    statusPengiriman VARCHAR(30) NOT NULL,
    no_resi INT (11) NOT NULL
 );


 
