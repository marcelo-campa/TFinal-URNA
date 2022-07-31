-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: eleicoes
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `candidatos`
--

DROP TABLE IF EXISTS `candidatos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidatos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cargo` varchar(255) DEFAULT NULL,
  `numero_digitos` int DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `partido` varchar(255) DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL,
  `nome_vice` varchar(255) DEFAULT NULL,
  `partido_vice` varchar(255) DEFAULT NULL,
  `foto_vice` varchar(255) DEFAULT NULL,
  `numero_voto` int DEFAULT NULL,
  `votos` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidatos`
--

LOCK TABLES `candidatos` WRITE;
/*!40000 ALTER TABLE `candidatos` DISABLE KEYS */;
INSERT INTO `candidatos` VALUES (34,'vereador',5,'Christianne Varão','PEN','cv1.jpg',NULL,NULL,NULL,51222,0),(35,'vereador',5,'Homero do Zé Filho','PSL','cv2.jpg',NULL,NULL,NULL,55555,0),(36,'vereador',5,'Dandor','PV','cv3.jpg',NULL,NULL,NULL,43333,8),(37,'vereador',5,'Filho','MDB','cv4.jpg',NULL,NULL,NULL,15123,0),(38,'vereador',5,'Joel Varão','PSDC','cv5.jpg',NULL,NULL,NULL,27222,0),(39,'vereador',5,'Professor Clebson Almeida','PSDB','cv6.jpg',NULL,NULL,NULL,45000,0),(40,'prefeito',2,'Chiquinho do Adbon','PDT','cp3.jpg','Arão','PRP','v3.jpg',12,0),(41,'prefeito',2,'Malrinete Gralhada','MDB','cp2.jpg','Biga','MDB','v2.jpg',15,4),(42,'prefeito',2,'Dr. Francisco','PSC','cp1.jpg','João Rodrigues','PV','v1.jpg',45,0),(43,'prefeito',2,'Zé Lopes','PPL','cp4.jpg','Francisca Ferreira Ramos','PPL','v4.jpg',54,0),(44,'prefeito',2,'Lindomar Pescador','PC do B','cp5.jpg','Malú','PC do B','v5.jpg',65,0);
/*!40000 ALTER TABLE `candidatos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-31 19:03:19
