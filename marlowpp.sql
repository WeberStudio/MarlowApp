-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Sep 23, 2013 at 04:10 PM
-- Server version: 5.0.51
-- PHP Version: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- Database: `marlowpp`
-- 

-- --------------------------------------------------------

-- 
-- Table structure for table `admin_login`
-- 

CREATE TABLE `admin_login` (
  `id` int(128) NOT NULL auto_increment,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('0','1') NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

-- 
-- Dumping data for table `admin_login`
-- 

INSERT INTO `admin_login` VALUES (1, 'admin', 'admin', '123456', '1');

-- --------------------------------------------------------

-- 
-- Table structure for table `products`
-- 

CREATE TABLE `products` (
  `id` int(125) NOT NULL auto_increment,
  `user_id` int(125) NOT NULL,
  `note` text NOT NULL,
  `price` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `brand_id` int(125) NOT NULL,
  `status` enum('0','1') NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

-- 
-- Dumping data for table `products`
-- 

INSERT INTO `products` VALUES (1, 7, 'i am here', '5', 'snap-it-active.png', 84, '1');
INSERT INTO `products` VALUES (2, 7, 'Love this product', '5', 'snap-it-active.png', 103, '1');
INSERT INTO `products` VALUES (3, 7, 'ffffffffffff', '5', 'snap-it-active.png', 7, '1');
INSERT INTO `products` VALUES (4, 7, 'sasdads', '2', 'snap-it-active.png', 127, '1');
INSERT INTO `products` VALUES (5, 7, 'xcvxvc', '2', 'snap-it-active.png', 21, '1');
INSERT INTO `products` VALUES (6, 7, 'sdfsdf', '3', 'snap-it-active.png', 21, '1');
INSERT INTO `products` VALUES (7, 7, 'sddsfs', '3', 'snap-it-active.png', 124, '1');

-- --------------------------------------------------------

-- 
-- Table structure for table `shops`
-- 

CREATE TABLE `shops` (
  `id` int(128) NOT NULL auto_increment,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `des` varchar(255) NOT NULL,
  `status` enum('0','1') NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=151 ;

-- 
-- Dumping data for table `shops`
-- 

INSERT INTO `shops` VALUES (1, 'Gatsbys', '8-12 West Street, Marlow, SL7 2NB', '', '', '');
INSERT INTO `shops` VALUES (2, 'Costa Coffee', '4-6 West Street, Marlow, SL7 2NB', '', '', '');
INSERT INTO `shops` VALUES (3, 'Sainsburys', '14 West Street, Marlow, SL7 2NB', '', '', '');
INSERT INTO `shops` VALUES (4, 'M & Co', '3 Market Square, Marlow, SL7 3HH', '', '', '');
INSERT INTO `shops` VALUES (5, 'Boraca', '1 Anglers Court, 34 Spittal Street, Marlow, SL7 1DB', '', '', '');
INSERT INTO `shops` VALUES (6, 'Orygyns', '12 West Street, Marlow, SL7 2NB', '', '', '');
INSERT INTO `shops` VALUES (7, 'Austins', '9-11 Spittal Street, Marlow, SL7 3HJ', '', '', '');
INSERT INTO `shops` VALUES (8, 'Francescos', '13 Spittal Street, Marlow, SL7 3HJ', '', '', '');
INSERT INTO `shops` VALUES (9, 'Boots', '4-5 Market Square, Marlow, SL7 3HH', '', '', '');
INSERT INTO `shops` VALUES (10, 'The Tailoring Team', '44 West Street , Marlow, SL7 2NB', '', '', '');
INSERT INTO `shops` VALUES (11, 'The Cedar Coffee Shop', '28 West Street, Marlow, SL7 2NB', '', '', '');
INSERT INTO `shops` VALUES (12, 'Carphone Warehouse', '3 Spiattal Street, Marlow, SL7 3HJ', '', '', '');
INSERT INTO `shops` VALUES (13, 'Miso', 'Unit 3, Anglers Court, Marlow, SL7 1DB', '', '', '');
INSERT INTO `shops` VALUES (14, 'Marlow Nail & Beauty', '38 West Street, Marlow, SL7 2NB', '', '', '');
INSERT INTO `shops` VALUES (15, 'Subway', '31 Spittal Street, Marlow, SL7 3HJ', '', '', '');
INSERT INTO `shops` VALUES (16, 'WPS', '21-23 Spittal Street, Marlow, SL7 3HJ', '', '', '');
INSERT INTO `shops` VALUES (17, 'Helen & Douglas House', '19 Spittal Street, Marlow, SL7 3HJ', '', '', '');
INSERT INTO `shops` VALUES (18, 'Harvey Jones', '30 Spittal Street, Marlow, SL7 1DB', '', '', '');
INSERT INTO `shops` VALUES (19, 'Steamer Trading Cookshop', '1 Market Square, Marlow, SL7 3HH', '', '', '');
INSERT INTO `shops` VALUES (20, 'Wonderland', '7 Spittal Street, Marlow, SL7 3HJ', '', '', '');
INSERT INTO `shops` VALUES (21, 'Bang and Olufsen', '32 Spittal Street, Marlow, SL7 1DB', '', '', '');
INSERT INTO `shops` VALUES (22, 'Pips ', '4-5 Anglers Court, Spittal Street, Marlow, SL7 1DB', '', '', '');
INSERT INTO `shops` VALUES (23, 'Villa D''Este', '2 Chapel Street, Marlow, SL7 1DD', '', '', '');
INSERT INTO `shops` VALUES (24, 'Alfred The Grape', '17 Spittal Street, Marlow, Sl7 3HJ', '', '', '');
INSERT INTO `shops` VALUES (25, 'Sunrise Health and Beauty', '42 West Street, Marlow, SL7 2NB', '', '', '');
INSERT INTO `shops` VALUES (26, 'Fullard Fine Jewellery', '44 Anglers Court, Spittal Street, Marlow, SL7 1DB', '', '', '');
INSERT INTO `shops` VALUES (27, 'Premier Phone Accessories', '11 Spittal Street, Marlow, SL7 3HJ', '', '', '');
INSERT INTO `shops` VALUES (28, 'Heighway Associates', '34 West Street, Marlow, SL7 2NB', '', '', '');
INSERT INTO `shops` VALUES (29, 'Starbucks', '60 High Street, Marlow, SL7 1AH', '', '', '');
INSERT INTO `shops` VALUES (30, 'Wimpy', '64 High Street, Marlow, SL7 1AH', '', '', '');
INSERT INTO `shops` VALUES (31, 'Zizzi', '76 High Street, Marlow, SL7 1AQ', '', '', '');
INSERT INTO `shops` VALUES (32, 'Spirited Wines', '57a High Street, Marlow', '', '', '');
INSERT INTO `shops` VALUES (33, 'Lady Sew & Sew', 'Institute Road, Marlow', '', '', '');
INSERT INTO `shops` VALUES (34, 'Burgers', 'The Causeway, Marlow, SL7 1NF', '', '', '');
INSERT INTO `shops` VALUES (35, 'Huttons', '79 High Street, Marlow, SL7 1AB', '', '', '');
INSERT INTO `shops` VALUES (36, 'British Heart Foundation', 'High Street, Marlow', '', '', '');
INSERT INTO `shops` VALUES (37, 'Slug and Lettuce', '82-84 High Street, Marlow, SL5 1AH', '', '', '');
INSERT INTO `shops` VALUES (38, 'Caf', '77 High Street, Marlow, SL7 1AB', '', '', '');
INSERT INTO `shops` VALUES (39, 'Fat Face', '71 High Street, Marlow, SL7 1AB', '', '', '');
INSERT INTO `shops` VALUES (40, 'Gather and Hunt', '63 High Street, Marlow, SL7 1AB', '', '', '');
INSERT INTO `shops` VALUES (41, 'Turners', '75 High Street, Marlow, SL7 1AB', '', '', '');
INSERT INTO `shops` VALUES (42, 'George and Dragon', '85 The Causeway, Marlow', '', '', '');
INSERT INTO `shops` VALUES (43, 'The Shaw Trust', '89 High Street, Marlow, SL7 1AB', '', '', '');
INSERT INTO `shops` VALUES (44, 'Leightons Opticians', '73 High Street, Marlow, SL7 1AE', '', '', '');
INSERT INTO `shops` VALUES (45, 'Pizza Express', 'High Street, Marlow', '', '', '');
INSERT INTO `shops` VALUES (46, 'Prezzo', '21 High Street, Marlow, SL7 1AU', '', '', '');
INSERT INTO `shops` VALUES (47, 'Chequers ', '51-53 High Street, Marlow, SL7 1BA', '', '', '');
INSERT INTO `shops` VALUES (48, 'The Assembly Room', '1 Market Square, Marlow, SL7 3HH', '', '', '');
INSERT INTO `shops` VALUES (49, 'Mandarin Stone', '47 West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (50, 'Jacu', '37 West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (51, 'Runners Retreat', '33 West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (52, 'Wesley-Barrell', '15-17 West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (53, 'Sputnik', '49a West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (54, 'Fired Earth', '55 West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (55, 'Renaissance', '53 West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (56, 'Optician', '49 West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (57, 'S.G. Busby', '51 West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (58, 'D&J', 'West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (59, 'The Ship', '23 West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (60, 'Ladbrokes ', '28 Spittal Street, Marlow, SL7 1DB', '', '', '');
INSERT INTO `shops` VALUES (61, 'Natwest', '7 High Street, Marlow, SL7 1AY', '', '', '');
INSERT INTO `shops` VALUES (62, 'Halifax', '5 High Street, Marlow, SL7 1AU', '', '', '');
INSERT INTO `shops` VALUES (63, 'Lloyds', '17 High Street, Marlow, SL7 1AU', '', '', '');
INSERT INTO `shops` VALUES (64, 'M & S', '20-26 Spittal Street, Marlow, SL7 1DB', '', '', '');
INSERT INTO `shops` VALUES (65, 'Plume', '7 Station Road, Marlow, SL7 1NG', '', '', '');
INSERT INTO `shops` VALUES (66, 'Tree Nail Spa', '13 Station Road, Marlow, SL7 1NG', '', '', '');
INSERT INTO `shops` VALUES (67, 'Desborough Pets', 'Station Road, Marlow, SL7 1NG', '', '', '');
INSERT INTO `shops` VALUES (68, 'Cath Kitson', '6 Market Square, Marlow, SL7 1DA', '', '', '');
INSERT INTO `shops` VALUES (69, 'Jacksons', '10 Spittal Street, Marlow, SL7 1DB', '', '', '');
INSERT INTO `shops` VALUES (70, 'Paperchain', '91 High Street, Marlow, SL7 1AB', '', '', '');
INSERT INTO `shops` VALUES (71, 'Mary Brooks', '103 High Street, Marlow, SL7 1AB', '', '', '');
INSERT INTO `shops` VALUES (72, 'Boots Opticians', '93 High Street, Marlow, SL7 1AB', '', '', '');
INSERT INTO `shops` VALUES (73, 'Hunts', '35 Station Road, Marlow, SL7 1NW', '', '', '');
INSERT INTO `shops` VALUES (74, 'Beehive Treats', '18 Spittal Street, Marlow, SL7 1DB', '', '', '');
INSERT INTO `shops` VALUES (75, 'Maliks', '101 High Street, Marlow, SL7 1AB', '', '', '');
INSERT INTO `shops` VALUES (76, 'Swish', '5 Liston Court, Marlow, SL7 1ER', '', '', '');
INSERT INTO `shops` VALUES (77, 'The Vanilla Pod', '31 West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (78, 'Rococo', '3 Liston Court, Marlow, SL7 1ER', '', '', '');
INSERT INTO `shops` VALUES (79, 'Ceremony Ltd', '6 Liston Court, Marlow, SL7 1ER', '', '', '');
INSERT INTO `shops` VALUES (80, 'The Flower Studio', '4 Liston Court, Marlow, SL7 1ER', '', '', '');
INSERT INTO `shops` VALUES (81, 'Choc-Latte', '7 & 8 Liston Court, Marlow, SL7 1ER', '', '', '');
INSERT INTO `shops` VALUES (82, 'Feathersof Marlow', '10 Liston Court, Marlow, SL7 1ER', '', '', '');
INSERT INTO `shops` VALUES (83, 'Marlow Kitchens and Bathrooms', '9 Liston Court, Marlow, SL7 1ER', '', '', '');
INSERT INTO `shops` VALUES (84, 'Accademia Italiana', '2 Anglers Court, Marlow, SL7 1DB', '', '', '');
INSERT INTO `shops` VALUES (85, 'The Barber Shop', '5 Spittal Street, Marlow, SL7 3HJ', '', '', '');
INSERT INTO `shops` VALUES (86, 'O''Donoghues', '15 Spittal Street, Marlow SL7 3HJ', '', '', '');
INSERT INTO `shops` VALUES (87, 'La Cottonniere', '105 High Street, Marlow, SL7 1AB', '', '', '');
INSERT INTO `shops` VALUES (88, 'Lorimers', '22 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (89, 'Daisy', '42A High Street,Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (90, 'Mistral', '44 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (91, 'The White Co', '30-32 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (92, 'Cargo', '36-38 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (93, 'East', '40 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (94, 'Jojomamanbebe', '50 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (95, 'Thomas Cook', '28 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (96, 'Monsoon', '24 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (97, 'J.M Wellington', '24 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (98, 'Oxfam', '31 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (99, 'Jaeger', '54 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (100, 'White Stuff', '62 High Street, Marlow, SL7 1AH', '', '', '');
INSERT INTO `shops` VALUES (101, 'Jack Wills', '72 High Street, Marlow, SL7 1AH', '', '', '');
INSERT INTO `shops` VALUES (102, 'Suzie Watson Designs', '74 High Street, Marlow, SL7 1AH', '', '', '');
INSERT INTO `shops` VALUES (103, 'Clarks', '68 High Street, Marlow, SL7 1AH', '', '', '');
INSERT INTO `shops` VALUES (104, 'Crew Clothing', '52 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (105, 'Sahara ', '96 High Street, Marlow, SL7 1AQ', '', '', '');
INSERT INTO `shops` VALUES (106, 'David Clulow', '42 High street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (107, 'Fego', '59 High Street, Marlow, SL7 1AB', '', '', '');
INSERT INTO `shops` VALUES (108, 'Baroosh', '56-58 High Street, Marlow, SL7 1AH', '', '', '');
INSERT INTO `shops` VALUES (109, 'Marlw Bar & Grill', '92-94 High Street, Marlow, SL7 1AQ', '', '', '');
INSERT INTO `shops` VALUES (110, 'Scarlett Monroe', '11 High Street, Marlow, SL7 1AU', '', '', '');
INSERT INTO `shops` VALUES (111, 'Hewetts', '47-49 High Street, Marlow, SL7 1BA', '', '', '');
INSERT INTO `shops` VALUES (112, 'Maythers', '16 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (113, 'Marlow Pharmacy', '61 High Street, Marlow, SL7 1AB', '', '', '');
INSERT INTO `shops` VALUES (114, 'Mint Velvet', '57 High Street, Marlow, SL7 1AB', '', '', '');
INSERT INTO `shops` VALUES (115, 'Healthy Store', '11 Liston Court,  Marlow, SL7 1ER', '', '', '');
INSERT INTO `shops` VALUES (116, 'Hanson Zandi', '12 Liston Court, Marlow, SL7 1ER', '', '', '');
INSERT INTO `shops` VALUES (117, 'Sainsburys HS', '27 High Street, Marlow, SL7 1AU', '', '', '');
INSERT INTO `shops` VALUES (118, 'Vodafone', '23 High Street, Marlow, SL7 1AU', '', '', '');
INSERT INTO `shops` VALUES (119, 'WH Smith', '19 High Street, Marlow, SL7 1AU', '', '', '');
INSERT INTO `shops` VALUES (120, 'Harringtons', '13 High Street, Marlow, SL7 1AU', '', '', '');
INSERT INTO `shops` VALUES (121, 'Toni & Guy', '9 High Street, Marlow, SL7 1AU', '', '', '');
INSERT INTO `shops` VALUES (122, 'Phase Eight', '7 Market Square, Marlow, SL7 1DA', '', '', '');
INSERT INTO `shops` VALUES (123, 'Pike Smith & Kemp', '65 High Street, Marlow, SL7 1AB', '', '', '');
INSERT INTO `shops` VALUES (124, 'Ballards', '45 High Street, Marlow, SL7 1BA', '', '', '');
INSERT INTO `shops` VALUES (125, 'Hamptons', '43 High Street, Marlow, SL7 1BA', '', '', '');
INSERT INTO `shops` VALUES (126, 'Santander', '37 High Street, Marlow, SL7 1XA', '', '', '');
INSERT INTO `shops` VALUES (127, 'Andrew Milsom', '35 High Street, Marlow, SL7 1AU', '', '', '');
INSERT INTO `shops` VALUES (128, 'Simmons and Sons', '1 High Street, Marlow, SL7 1AX', '', '', '');
INSERT INTO `shops` VALUES (129, 'Granvilles', '36 West Street, Marlow, SL7 2NB', '', '', '');
INSERT INTO `shops` VALUES (130, 'Nationwide', '34 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (131, 'HSBC', '46 High Street, Marlow, SL7 1AT', '', '', '');
INSERT INTO `shops` VALUES (132, 'Saddle Safari', 'Dean Street, Marlow, SL7 3AA', '', '', '');
INSERT INTO `shops` VALUES (133, 'Timpsons', '12 Spittal Street, Marlow, SL7 1DB', '', '', '');
INSERT INTO `shops` VALUES (134, 'Woodstock', '14 Spittal Street, Marlow, SL7 1DB', '', '', '');
INSERT INTO `shops` VALUES (135, 'A Space', '22 Spittal Street, Marlow, SL7 1DB', '', '', '');
INSERT INTO `shops` VALUES (136, 'Zest Dry Clean', '2 Station Road, Marlow, SL7 1NB', '', '', '');
INSERT INTO `shops` VALUES (137, 'Toly Packaging', '9 Station Road, Marlow, SL7 1NG', '', '', '');
INSERT INTO `shops` VALUES (138, 'Forever Young', '11-13 Station Road, Marlow, SL7 1NG', '', '', '');
INSERT INTO `shops` VALUES (139, 'Prince of Wales', '1 Mill Rod, Marlow, SL7 1PX', '', '', '');
INSERT INTO `shops` VALUES (140, 'Thai Square', '57 West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (141, 'Acupucture Clinic', '39 West Street, Marlow,SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (142, 'Penguin Fish Bar', '13 West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (143, 'Landmark', '7-9 West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (144, 'Coach and Horses', '3 West Street, Marlow, SL7 2LS', '', '', '');
INSERT INTO `shops` VALUES (145, 'Mode a Pelle', '2 Market Square, Marlow, SL7 1BE', '', '', '');
INSERT INTO `shops` VALUES (146, 'Reportoire', '6-8 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (147, 'Superdrug', '12-14 High Street, Marlow SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (148, 'Space NK', '20 High Street, Marlow, SL7 1AW', '', '', '');
INSERT INTO `shops` VALUES (149, 'Lots of Living', '14 Spittal Street, Marlow, SL7 1DB', '', '', '');
INSERT INTO `shops` VALUES (150, 'Tinc', '18b Spittal Street, Marlow, SL7 1DB', '', '', '');

-- --------------------------------------------------------

-- 
-- Table structure for table `user_info`
-- 

CREATE TABLE `user_info` (
  `user_id` int(128) NOT NULL auto_increment,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) default NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `join_date` varchar(255) NOT NULL,
  `status` enum('0','1') NOT NULL,
  PRIMARY KEY  (`user_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

-- 
-- Dumping data for table `user_info`
-- 

INSERT INTO `user_info` VALUES (7, 'junaid', 'khalil', 'khalil.junaid@gmail.com', '25d55ad283aa400af464c76d713c07ad', '', '2013-09-19', '1');
INSERT INTO `user_info` VALUES (2, 'sss', 'ssss', 'tom@native.com', '123456789', '', '2013-09-13', '1');
INSERT INTO `user_info` VALUES (3, 'sd', 'asdasdas', 'khalil.junaid11@gmail.com', '123456789', '', '2013-09-14', '1');
INSERT INTO `user_info` VALUES (4, 'sdas', 'asdas', 'junaidffkhalil@virtism.com', '12345678', '', '2013-09-16', '1');
INSERT INTO `user_info` VALUES (5, 'cssda', 'sdasd', 'weber1@gmail.com', '25d55ad283aa400af464c76d713c07ad', '', '2013-09-16', '1');
