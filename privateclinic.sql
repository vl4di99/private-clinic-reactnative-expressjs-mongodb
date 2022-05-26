-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2022 at 11:36 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.0

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
(3, 'Diana', 'Tudor', '2022-08-14', '16:30:00', ''),
(6, 'Diana-Marcela Nechita', 'Diana Nechita', '2022-03-12', '22:30:00', 'Cardiology'),
(7, 'Diana-Marcela Nechita', 'Diana Nechi', '2022-03-09', '23:30:00', 'Neurology'),
(11, 'DMM', 'Diana Nechita', '2022-07-22', '13:00:00', 'Cardiology'),
(18, 'Diana-Marcela Nechita', 'Diana Nechita', '2022-04-21', '12:00:00', 'Cardiology'),
(20, 'Diana-Marcela Nechita', 'Diana Nechita', '2022-04-14', '11:30:00', 'Cardiology');

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
(2, 'didi2', '$2b$10$ZED08Ut.Rpa00imtJIOf/utE8laAYrE4Qj.nxP.h2C38z8sBKf8TK', 'Diana Nechi', 'Neurology', '00:00:00', '00:00:00'),
(3, 'balan', '$2b$09$pLZW06PIXysXjXCfELvX/e/xDffzve8bgpzIklXl4KVBhNwGO9HuC', 'Balan Andrei', 'eNT', '09:00:00', '15:00:00'),
(4, 'ardelean', '$2b$09$y810kXbxpXn2VauNJSswH.x7CCahkthAfvvsd4Y7OwTc3Lbe5.HxC', 'Ardelean Maria Alisa', 'Diabetes, Nutrition and Metabolic diseases', '08:00:00', '14:00:00'),
(5, 'chis', '$2b$09$rTioD8hY9nsRXB64lu2IueQ8Z7VRac.fNRf56ZtHeiBhgRbvWbu7S', 'Chis Razvan', 'Endocrinology', '10:00:00', '16:00:00'),
(6, 'rednic', '$2b$09$1sBiHvg5.TIj6cGaXO55q.j/1tv48ojfuI90pIj6dIkWXYAOz3kPy', 'Rednic Cristina', 'Ophtalmology', '10:00:00', '16:00:00'),
(7, 'rad', '$2b$09$sfzr3iXkp59CypJAOa5wx.zJjoNzOBZ9FNfPIYl4piam6.3Msjaue', 'Rad Claudiu', 'Urology', '11:00:00', '16:00:00'),
(8, 'pacurar', '$2b$09$hvLYrangg39/SJskON1SsOteQddUDgM0xVT/48nsTW0OdUjtlQqNm', 'Pacurar Flaviu', 'Radiology', '11:00:00', '16:00:00');

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

-- --------------------------------------------------------

--
-- Table structure for table `servicesprices`
--

CREATE TABLE `servicesprices` (
  `id` int(255) NOT NULL,
  `service` text NOT NULL,
  `price` double NOT NULL,
  `department` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `servicesprices`
--

INSERT INTO `servicesprices` (`id`, `service`, `price`, `department`) VALUES
(1, 'Consultation', 50, 'Cardiology'),
(2, 'Echography and color Doppler', 72, 'Cardiology'),
(3, 'ECG', 30, 'Cardiology'),
(4, 'Ankle-arm index', 28, 'Cardiology'),
(5, 'Consultation', 50, 'Diabetes, Nutrition and Metabolic diseases'),
(6, 'Quantitative evaluation of the galvanic response of the skin', 22, 'Diabetes, Nutrition and Metabolic diseases'),
(7, 'Endo Institute Nutrition Control ', 18, 'Diabetes, Nutrition and Metabolic diseases'),
(8, 'Sensitivity tests ', 22, 'Diabetes, Nutrition and Metabolic diseases'),
(9, 'Consultation', 45, 'Endocrinology'),
(10, 'Inbody720 body analysis', 32, 'Endocrinology'),
(11, 'Interpretation of blood tests', 33, 'Endocrinology'),
(12, 'Consultation', 60, 'Neurology'),
(13, 'Clinical Trials (EDS, Myasthenic Score, UPDRS, MMSE, Reisberg) ', 20, 'Neurology'),
(14, 'Muscle strength measurement with dynamometer', 25, 'Neurology'),
(15, 'Consultation', 50, 'Ophthalmology '),
(16, 'Biomicroscopy ', 30, 'Ophthalmology '),
(17, 'Exophthalmometry ', 18, 'Ophthalmology'),
(18, 'Bottom eye examination', 42, 'Ophthalmology'),
(19, 'Gonioscopy', 27, 'Ophthalmology'),
(20, 'Consultation', 40, 'eNT'),
(21, 'Nasal endoscopy', 37, 'eNT'),
(22, 'Examination of vestibular tests, balance tests', 23, 'eNT'),
(23, 'Nasal-pharyngeal-laryngeal fibroscopy', 57, 'eNT'),
(24, 'Incision of the amygdala cyst', 26, 'eNT'),
(25, 'Periamygdalian phlegmon incisions', 31, 'eNT'),
(26, 'Consultation', 41, 'Urology'),
(27, 'Suprapubic cystostomy', 42, 'Urology'),
(28, 'Urethral dilatation', 101, 'Urology'),
(29, 'Ureteral stone extraction by ureteroscopy', 90, 'Urology'),
(30, 'Phimosis-dorsal debridement', 85, 'Urology'),
(31, 'Consultation', 43, 'Rheumatology '),
(32, 'Intraarticular infiltration (with substance)', 72, 'Rheumatology'),
(33, 'Intraarticular infiltration (no substance)', 35, 'Rheumatology'),
(34, 'Radiological examination of the sacroiliac joints', 19, 'Radiology'),
(35, 'Radiological examination of the scapular girdle', 21, 'Radiology'),
(36, 'Double contrast radiological examination of the colon or small intestine on the duodenal tube', 25, 'Radiology'),
(37, 'Radiological examination of general vision of the native abdomen', 21, 'Radiology'),
(38, 'Radiography of the pelvis', 21, 'Radiology'),
(39, 'Chest X-ray', 20, 'Radiology'),
(40, 'Consultation', 38, 'Psychology'),
(41, 'Initial psychological evaluation', 53, 'Psychology'),
(42, 'Pneumophthisiology consultation', 45, 'Pneumology'),
(43, 'Spirometry with bronchodilator test', 38, 'Pneumology'),
(44, 'Pulse oximetry', 16, 'Pneumology'),
(45, 'Spirometry with bronchodilator test', 32, 'Pneumology'),
(46, 'Consultation', 50, 'Allergology and immunology'),
(47, 'Initiation of immunotherapy', 47, 'Allergology and immunology'),
(48, 'PATCH test ES * 28 allergens', 101, 'Allergology and immunology'),
(49, 'Combined skin test', 25, 'Allergology and immunology'),
(50, 'Consultation', 50, 'Hematology'),
(51, 'Thrombophilia risk assessment', 52, 'Hematology'),
(52, 'Polypectomy of the cervix', 260, 'Obstetrics - gynecology'),
(53, 'IUD mounting', 70, 'Obstetrics - gynecology'),
(54, 'Amniocentesis maneuver', 73, 'Obstetrics - gynecology'),
(55, 'Diagnostic hysteroscopy', 325, 'Obstetrics - gynecology'),
(56, 'Intrauterine hysteroscopy', 500, 'Obstetrics - gynecology'),
(57, 'Cauterization with electrocautery keratoses', 40, 'Dermatovenereology'),
(58, 'TCA/lesion application', 25, 'Dermatovenereology'),
(59, 'Cauterization with electrocautery plantar warts', 73, 'Dermatovenereology');

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
-- Indexes for table `servicesprices`
--
ALTER TABLE `servicesprices`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `registereddoctors`
--
ALTER TABLE `registereddoctors`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `registeredusers`
--
ALTER TABLE `registeredusers`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `servicesprices`
--
ALTER TABLE `servicesprices`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
