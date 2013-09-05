-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Generation Time: Aug 15, 2013 at 02:52 PM
-- Server version: 5.0.51
-- PHP Version: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- Database: `mubile_app`
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
-- Table structure for table `user_info`
-- 

CREATE TABLE `user_info` (
  `user_id` int(128) NOT NULL auto_increment,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `join_date` varchar(255) NOT NULL,
  `status` enum('0','1') NOT NULL,
  PRIMARY KEY  (`user_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

-- 
-- Dumping data for table `user_info`
-- 

INSERT INTO `user_info` VALUES (1, 'qasim', 'qasim@yahoo.com', '123456', 'mail', '2013-08-15', '1');
INSERT INTO `user_info` VALUES (2, 'qasim', 'qasimmm@yahoo.com', '123456', 'male', '2013-08-15', '1');
