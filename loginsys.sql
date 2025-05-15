-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Maj 15, 2025 at 08:10 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loginsys`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `reservations`
--

CREATE TABLE `reservations` (
  `id` bigint(20) NOT NULL,
  `reservation_date` date NOT NULL,
  `reservation_end_time` time(6) NOT NULL,
  `reservation_time` time(6) NOT NULL,
  `restaurant_table_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `reservation_date`, `reservation_end_time`, `reservation_time`, `restaurant_table_id`, `user_id`) VALUES
(1, '2025-05-14', '19:30:00.000000', '18:00:00.000000', 3, 1),
(2, '2025-05-15', '19:30:00.000000', '18:00:00.000000', 1, 1),
(3, '2025-05-13', '13:30:00.000000', '12:00:00.000000', 5, 1),
(4, '2025-05-14', '16:00:00.000000', '14:00:00.000000', 3, 1),
(5, '2025-05-14', '17:00:00.000000', '15:30:00.000000', 1, 2),
(6, '2025-05-16', '19:00:00.000000', '16:00:00.000000', 1, 2),
(7, '2025-05-16', '19:30:00.000000', '16:30:00.000000', 3, 2);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `restaurant_table`
--

CREATE TABLE `restaurant_table` (
  `id` bigint(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurant_table`
--

INSERT INTO `restaurant_table` (`id`, `description`, `name`, `size`) VALUES
(1, 'Stolik dla 1 osoby', 'Stolik 1A', 1),
(2, 'Stolik dla 1 osoby', 'Stolik 1B', 1),
(3, 'Stolik dla 2 osób', 'Stolik 2A', 2),
(4, 'Stolik dla 2 osób', 'Stolik 2B', 2),
(5, 'Stolik dla 3 osób', 'Stolik 3A', 3),
(6, 'Stolik dla 3 osób', 'Stolik 3B', 3),
(7, 'Stolik dla 4 osób', 'Stolik 4A', 4),
(8, 'Stolik dla 4 osób', 'Stolik 4B', 4),
(9, 'Stolik dla 5 osób', 'Stolik 5A', 5),
(10, 'Stolik dla 5 osób', 'Stolik 5B', 5),
(11, 'Stolik dla 6 osób', 'Stolik 6A', 6),
(12, 'Stolik dla 6 osób', 'Stolik 6B', 6),
(13, 'Stolik dla 7 osób', 'Stolik 7A', 7),
(14, 'Stolik dla 7 osób', 'Stolik 7B', 7),
(15, 'Stolik dla 8 osób', 'Stolik 8A', 8),
(16, 'Stolik dla 8 osób', 'Stolik 8B', 8);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `username`) VALUES
(1, 'testowy@gmail.com', '$2a$10$PKe9.X/n3AtXtfj0hlfgv.BdhyPuuwpIIM/nK2yZkyzPca4BJDyLO', 'Uzytkownik'),
(2, 'mateusz3@gmail.com', '$2a$10$Jl5usicFraHFj6y95tY2VeWrGuLk5IU6NmyOof.jnHZyhQxLOdpna', 'Mateusz3'),
(3, 'mateusz8@gmail.com', '$2a$10$B1UltymwAi3ol7J8GAsSpuo5jrFyJ.YixYRV0ZWndVdxlH5PBCCde', 'ktostam');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKboj59uldpjvioy9u7elnijm2y` (`restaurant_table_id`),
  ADD KEY `FKb5g9io5h54iwl2inkno50ppln` (`user_id`);

--
-- Indeksy dla tabeli `restaurant_table`
--
ALTER TABLE `restaurant_table`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`),
  ADD UNIQUE KEY `UKr53o2ojjw4fikudfnsuuga336` (`password`),
  ADD UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `restaurant_table`
--
ALTER TABLE `restaurant_table`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `FKb5g9io5h54iwl2inkno50ppln` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKboj59uldpjvioy9u7elnijm2y` FOREIGN KEY (`restaurant_table_id`) REFERENCES `restaurant_table` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
