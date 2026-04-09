-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: profile
-- ------------------------------------------------------
-- Server version	8.0.43

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
-- Table structure for table `works`
--

DROP TABLE IF EXISTS `works`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `works` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `descript` text,
  `image` varchar(255) DEFAULT NULL,
  `frontEnd` json DEFAULT NULL,
  `backEnd` json DEFAULT NULL,
  `database_name` varchar(255) DEFAULT NULL,
  `tool` json DEFAULT NULL,
  `function_name` json DEFAULT NULL,
  `gitHub_link` json DEFAULT NULL,
  `page_link` varchar(255) DEFAULT NULL,
  `item_label` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `works`
--

LOCK TABLES `works` WRITE;
/*!40000 ALTER TABLE `works` DISABLE KEYS */;
INSERT INTO `works` VALUES (1,'Musclecore','商品展示頁\n\n讓使用者能快速瀏覽商品資訊，挑選喜歡的商品並加入購物車。\n\n會員中心\n\n登入後的會員可以查看自己的歷史訂單，輕鬆掌握購買紀錄。\n\n購物車 & 結帳流程\n\n使用者可將商品加入購物車，確認無誤後即可立即結帳，系統會自動建立訂單。\n\n後台管理系統\n\n提供管理員登入入口，可管理商品與會員資料，並支援新增、編輯、刪除等操作。\n\n預計新增功能\n\n管理員可更新訂單處理進度\n\n串接第三方金流，提供更完整的線上支付流程','[\"PJ1-001.png\",\"PJ1-002.png\",\"PJ1-003.png\",\"PJ1-004.png\",\"PJ1-005.png\",\"PJ1-006.png\"]','{\"framework\": \"React\", \"programming_language\": \"Typescript\"}','{\"framework\": \"Express\", \"programming_language\": \"Javascript\"}','MongoDB','[\"Git\", \"VS Code\", \"AI\"]','[\"商品系統\", \"會員系統\", \"購物車系統\", \"管理系統\"]','{\"BackEnd\": \"https://github.com/a036920022002/PJ1-musclecore-backend.git\", \"FrontEnd\": \"https://github.com/a036920022002/PJ1-musclecore-FrontEnd.git\"}','https://muscle-core.zeabur.app/','Musclecore'),(3,'Personal Profile','網站整合我個人資訊的作品集平台，讓訪客能快速了解我的背景與特色。\n在首頁可以看到我的簡介，包括學歷、過去的工作經驗與目前的職涯方向。\n作品集區則整理了我完成的專案與實作內容，每個作品都附上技術細節與開發心得，讓人能更清楚看見我的能力與成長歷程。\n\n整體網站以簡潔的介面與清楚的分類，呈現我在前端／後端／全端領域的技能，讓每位訪客都能輕鬆找到想了解的資訊。\n不論是企業、合作夥伴，或是對我個人工作經驗有興趣的人，都能透過這個平台更深入地認識我。','[\"1763007251982-761304495.png\",\"1763007251987-709249574.png\",\"1763007251996-275267624.png\",\"1763007252001-479207103.png\",\"1763007252004-541593517.png\",\"1763007252010-896659980.png\",\"1763007252013-10440162.png\"]','{\"framework\": \"Vue.js\", \"programming_language\": \"Javascript\"}','{\"framework\": \"Express\", \"programming_language\": \"Javascript\"}','MySQL','[\"Git\", \"VS Code\"]','[\"個人簡介\", \"學歷\", \"工作經驗\", \"作品集\"]','{\"BackEnd\": \"https://github.com/a036920022002/PJ2-personalprofile-backend.git\", \"FrontEnd\": \"https://github.com/a036920022002/PJ2-Personal-Project.git\"}','','Personal Profile');
/*!40000 ALTER TABLE `works` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-18 14:40:19
