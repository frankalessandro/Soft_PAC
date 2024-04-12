-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 09-04-2024 a las 08:50:32
-- Versión del servidor: 5.7.23-23
-- Versión de PHP: 8.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sweetmym_pac`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `area`
--

CREATE TABLE `area` (
  `id` int(11) NOT NULL,
  `area` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `idEstado` int(11) NOT NULL,
  `idCentro` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `area`
--

INSERT INTO `area` (`id`, `area`, `idEstado`, `idCentro`) VALUES
(1, '💻Sistemas', 1, 1),
(3, '👷Industrial', 1, 1),
(4, '🗒️Gestión Documental', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `centro`
--

CREATE TABLE `centro` (
  `id` int(11) NOT NULL,
  `centro` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `siglas` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `centro`
--

INSERT INTO `centro` (`id`, `centro`, `siglas`, `estado`) VALUES
(1, 'SENA - Centro de Biotecnologia Industrial Palmira', 'CBI', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `id` int(11) NOT NULL,
  `estado` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`id`, `estado`, `tipo`) VALUES
(1, 'Activo', 1),
(2, 'Inactivo', 1),
(3, 'Enviado', 2),
(6, 'Aceptado por área', 2),
(7, 'Asignado', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `nota` int(150) NOT NULL,
  `fecha` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idProyecto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `objetivo` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `personasImpactadas` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idArea` int(11) NOT NULL,
  `idEstado` int(11) NOT NULL,
  `urlFormulario` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `rol` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `rol`, `estado`) VALUES
(1, 'Super-Admin', 1),
(2, 'Admin-area', 1),
(3, 'Admin-Senova', 0),
(4, 'Clientes', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipoEstado`
--

CREATE TABLE `tipoEstado` (
  `id` int(11) NOT NULL,
  `tipo` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipoEstado`
--

INSERT INTO `tipoEstado` (`id`, `tipo`) VALUES
(1, 'Usuarios'),
(2, 'Proyectos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `documento` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `telefono` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `correo` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `empresa` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `contrasena` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `idCentro` int(11) NOT NULL,
  `idArea` int(11) NOT NULL,
  `idRol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `documento`, `telefono`, `correo`, `empresa`, `contrasena`, `idCentro`, `idArea`, `idRol`) VALUES
(6, 'Alejandro', '1130637614', '3226431138', 'super@a.com', 'sena', '$2a$10$e6bXtr8EYxFyvaiOAmfHZO.ugvPLZd0lDj0zPAVCqWvZ1gqEg49b6', 1, 1, 1),
(7, 'franck', '123456', '3226431138', 'area@a.com', 'sena', '$2a$10$e6bXtr8EYxFyvaiOAmfHZO.ugvPLZd0lDj0zPAVCqWvZ1gqEg49b6', 1, 3, 2),
(55, 'ss', '1223', '1111', 's@gmail.com', 'sena', '$2a$10$Gyw4vTo74nKr42CQl1WSOe3Uepcr3gPa9C0wUqNyAJZgd9mfNcqFO', 1, 4, 1),
(57, 'Frank Roldan', '1006308186', '3207949818', 'frank.alessandro.roldan@gmail.com', 'SENA', '$2a$10$3EFAKjLAvnv.qpEb/rYVOeMtCuysqJPad3j2CNNINiCLoLM5PdKHa', 1, 1, 1),
(59, 'stiven', '1193215590', '32132131', 'a1@a.com', 'SENA', '$2a$10$ZDBvsoMMZW76mTWU1qHTpeYbVbZ9v/peDtdHhT8DtMnsn9B7EGb.e', 1, 1, 1),
(67, 'Freddy Sierra Silva', '6478800', '3206140487', 'freddysierras@yahoo.com', 'freddysierras@yahoo.com', '$2a$10$kqEUu5BVCVS2IlBqPMEhxeahX6UWHObuz5cF8oUvDQGR/UdZ3RUU.', 1, 1, 4),
(68, 'Freddy Otoniel Sierra Silva', '16478800', '3206140487', 'fsierras@sena.edu.co', 'Sena', '$2a$10$XG1GOu6mvrEAuZN41Wh2v.0/21d1RrdYacfBDko3hLOhzC28DBBHC', 1, 1, 2),
(69, 'David Márquez Herrera', '194424086', '3175107868', 'dmarquez@sena.edu.co', 'sena', '$2a$10$XG1GOu6mvrEAuZN41Wh2v.0/21d1RrdYacfBDko3hLOhzC28DBBHC', 1, 1, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCentro` (`idCentro`),
  ADD KEY `idEstado` (`idEstado`);

--
-- Indices de la tabla `centro`
--
ALTER TABLE `centro`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tipo` (`tipo`);

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idProyecto` (`idProyecto`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idArea` (`idArea`),
  ADD KEY `idEstado` (`idEstado`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipoEstado`
--
ALTER TABLE `tipoEstado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCentro` (`idCentro`),
  ADD KEY `idArea` (`idArea`),
  ADD KEY `idRol` (`idRol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `area`
--
ALTER TABLE `area`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `centro`
--
ALTER TABLE `centro`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tipoEstado`
--
ALTER TABLE `tipoEstado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `area`
--
ALTER TABLE `area`
  ADD CONSTRAINT `area_ibfk_1` FOREIGN KEY (`idCentro`) REFERENCES `centro` (`id`);

--
-- Filtros para la tabla `estado`
--
ALTER TABLE `estado`
  ADD CONSTRAINT `estado_ibfk_1` FOREIGN KEY (`tipo`) REFERENCES `tipoEstado` (`id`);

--
-- Filtros para la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD CONSTRAINT `novedades_ibfk_1` FOREIGN KEY (`idProyecto`) REFERENCES `proyectos` (`id`),
  ADD CONSTRAINT `novedades_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD CONSTRAINT `proyectos_ibfk_2` FOREIGN KEY (`idArea`) REFERENCES `area` (`id`),
  ADD CONSTRAINT `proyectos_ibfk_3` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_3` FOREIGN KEY (`idRol`) REFERENCES `rol` (`id`),
  ADD CONSTRAINT `usuarios_ibfk_4` FOREIGN KEY (`idCentro`) REFERENCES `centro` (`id`),
  ADD CONSTRAINT `usuarios_ibfk_5` FOREIGN KEY (`idArea`) REFERENCES `area` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
