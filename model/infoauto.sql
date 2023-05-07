-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 07-05-2023 a las 02:52:09
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `infoautos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auto`
--

CREATE TABLE `auto` (
  `Patente` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Marca` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Modelo` int NOT NULL,
  `DniDuenio` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `auto`
--

INSERT INTO `auto` (`Patente`, `Marca`, `Modelo`, `DniDuenio`) VALUES
('AAA 152', 'renault doce', 1988, '32021354'),
('ADC 152', 'Fiat Uno', 98, '22985265'),
('ADC 153', 'chevrolet corsa', 2010, '32021354'),
('GKJ 123', 'vw golf', 2017, '32021354'),
('GKJ 124', 'renault ', 1987, '32021354'),
('GKJ 397', 'vw golf', 2006, '32021354'),
('JVK 897', 'vw amarok', 2011, '22985265'),
('KJU 952', 'Ford Fiesta', 2006, '25963874'),
('LKI 865', 'Fiat Siena', 90, '28326986'),
('MMM 222', 'fiat', 1987, '32021354'),
('POL 968', 'Renault 12', 77, '28326986'),
('SDC 965', 'Peugeot 205', 88, '30875962'),
('SSS 111', 'vw golf', 1977, '32021354'),
('UYH 985', 'Fiat Palio', 95, '30875962'),
('XXC 321', 'vw polo', 2020, '22985265'),
('XXX 123', 'petarso cosmico', 1988, '22985265');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `NroDni` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Apellido` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Nombre` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `fechaNac` date NOT NULL,
  `Telefono` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `Domicilio` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`NroDni`, `Apellido`, `Nombre`, `fechaNac`, `Telefono`, `Domicilio`) VALUES
('22985265', 'Ramirez', 'Claudia', '1971-05-16', '299-9854155', 'Sarmiento 55'),
('25963874', 'Farias', 'Marta', '1975-06-21', '299-1559354', 'Roca 568'),
('28326986', 'Moya', 'Manuel', '1981-12-03', '299-9632587', 'Linares 44 piso 2 dpto 5'),
('30500155', 'dominguez ', 'ailin', '1983-10-06', '2994445544', 'aimogasta 1032'),
('30875962', 'Lopez', 'Eduardo', '1983-10-03', '299-6587741', 'Santa Fe 98'),
('32021354', 'rubilar', 'francisco', '1986-03-20', '299883833434', 'sdfdsf');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auto`
--
ALTER TABLE `auto`
  ADD PRIMARY KEY (`Patente`),
  ADD KEY `idTipoVehiculo` (`DniDuenio`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`NroDni`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `auto`
--
ALTER TABLE `auto`
  ADD CONSTRAINT `auto_ibfk_1` FOREIGN KEY (`DniDuenio`) REFERENCES `persona` (`NroDni`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
