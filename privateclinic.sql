-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 08, 2022 at 02:30 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `privateclinic`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(255) NOT NULL,
  `patient` varchar(255) NOT NULL,
  `doctor` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `department` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `patient`, `doctor`, `date`, `time`, `department`) VALUES
(1, 'Diana Nechita', 'Pop Anca', '2022-08-11', '15:30:00', ''),
(2, 'Diana', 'Tudor', '2022-08-13', '16:30:00', ''),
(3, 'Diana', 'Tudor', '2022-08-14', '16:30:00', ''),
(4, 'diana', 'DDD', '2022-08-11', '12:13:00', 'cardio'),
(5, 'Diana-Marcela Nechita', '', '2022-03-12', '22:30:00', ''),
(6, 'Diana-Marcela Nechita', 'Diana Nechita', '2022-03-12', '22:30:00', 'Cardiology'),
(7, 'Diana-Marcela Nechita', 'Diana Nechi', '2022-03-09', '23:30:00', 'Neurology'),
(8, 'Diana-Marcela Nechita', 'Diana Nechi', '2022-03-09', '12:30:00', 'Neurology');

-- --------------------------------------------------------

--
-- Table structure for table `registereddoctors`
--

CREATE TABLE `registereddoctors` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `start_work_hour` time NOT NULL,
  `end_work_hour` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `registereddoctors`
--

INSERT INTO `registereddoctors` (`id`, `username`, `password`, `fullname`, `department`, `start_work_hour`, `end_work_hour`) VALUES
(1, 'didi', '$2b$10$ZED08Ut.Rpa00imtJIOf/utE8laAYrE4Qj.nxP.h2C38z8sBKf8TK', 'Diana Nechita', 'Cardiology', '10:00:00', '14:00:00'),
(2, 'didi2', '$2b$10$ZED08Ut.Rpa00imtJIOf/utE8laAYrE4Qj.nxP.h2C38z8sBKf8TK', 'Diana Nechi', 'Neurology', '00:00:00', '00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `registeredusers`
--

CREATE TABLE `registeredusers` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `registeredusers`
--

INSERT INTO `registeredusers` (`id`, `username`, `password`, `fullname`) VALUES
(12, 'vlad', '$2b$10$P0Ie.NcR5dACsxSV4cyx4OxPksjS2oaIrBCZGnUYEVTAAq.YRrt5u', ''),
(14, 'didi', '$2b$10$ZED08Ut.Rpa00imtJIOf/utE8laAYrE4Qj.nxP.h2C38z8sBKf8TK', ''),
(15, 'vl', '$2b$10$UBEI3B2o4miTs.VcvV4U4OfsxT4j9mnA8PFpXCAUgrehVdhGM/DOa', ''),
(16, 'diana', '$2b$09$yKBPi3KP8LiO.UuKKhFl.uJMpouMjQimV4nZ8tlhESx9GRoy44YfG', 'Diana-Marcela Nechita');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registereddoctors`
--
ALTER TABLE `registereddoctors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registeredusers`
--
ALTER TABLE `registeredusers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `registereddoctors`
--
ALTER TABLE `registereddoctors`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `registeredusers`
--
ALTER TABLE `registeredusers`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
