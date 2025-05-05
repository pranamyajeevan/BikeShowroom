CREATE DATABASE bike_showroom;

USE bike_showroom;

CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(15),
    bike_model VARCHAR(100),
    booking_date DATE
);