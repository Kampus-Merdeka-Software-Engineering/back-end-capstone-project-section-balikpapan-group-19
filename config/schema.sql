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
 );


 CREATE TABLE IF NOT EXISTS tracking_paket (
    nomor_resi INT PRIMARY KEY NOT NULL,
    nama VARCHAR(45) NOT NULL,
    nomor_telepon INT NOT NULL,
    status_pengiriman VARCHAR(30) NOT NULL
 );


 