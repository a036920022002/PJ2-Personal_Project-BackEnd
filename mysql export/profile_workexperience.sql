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
-- Table structure for table `workexperience`
--

DROP TABLE IF EXISTS `workexperience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workexperience` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company` varchar(255) NOT NULL,
  `companyEng` varchar(255) DEFAULT NULL,
  `companyType` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `yearInService` varchar(255) DEFAULT NULL,
  `tenure` varchar(255) DEFAULT NULL,
  `jobPosition` varchar(255) DEFAULT NULL,
  `jobPositionEng` varchar(255) DEFAULT NULL,
  `descript` text,
  `descriptEng` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workexperience`
--

LOCK TABLES `workexperience` WRITE;
/*!40000 ALTER TABLE `workexperience` DISABLE KEYS */;
INSERT INTO `workexperience` VALUES (1,'慧智基因股份有限公司','Sofiva Genomics','生化科技研發業','台北市中正區','2014/12-2018/12','4','技術員','Laboratory Technician','[\"主任 NIPT 組技術員，執行 Cell Free DNA Extraction、次世代定序建庫實驗、次世代定序上機。\",\n\"參與 數據判讀與報告製作，確保檢測流程與品質。\",\n\"負責部分 文書作業，提升流程完整性與合規性\"]','[\"Performed Cell Free DNA extraction, NGS library preparation, and sequencing operations.\",\n\"Participated in data analysis and report generation, ensuring testing workflow quality and accuracy.\",\n\"Managed documentation tasks, improving workflow integrity and regulatory compliance.\"]'),(2,'慧智基因股份有限公司','Sofiva Genomics','生化科技研發業','台北市中正區','2019/1-2022/02','4','技術組長','Technical Team Leader','[\"管理 4 位技術人員及 1 位行政人員，協調實驗室運作。\",\n\"負責於子公司建立 IONA 組，並持續維持相關檢測服務運行。\",\n\"主導 實驗室重新配置，優化作業流程與空間使用。\",\n\"建立並審核 標準作業文件 / 表單，通過 LDTs 與 TAF 認證。\",\n\"推出 NIPS v1.0 檢測項目，與海外部門合作，同步於 日本、菲律賓、越南、泰國、香港 推出服務。\",\n\"支援每月約 200 件檢測需求，確保檢測產能與品質穩定。\"]','[\"Supervised 4 laboratory technicians and 1 administrative staff,coordinating overall laboratory operations.\",\n\"Established the IONA testing unit at a subsidiary and maintained stable operation of related testing services.\",\n\"Led laboratory reconfiguration, optimizing workflow and space utilization.\",\n\"Developed and reviewed standard operating procedures(SOPs) and forms, achieving LDTs and TAF certification.\",\n\"Launched NIPS v1.0 testing project in collaboration with overseas teams, expanding services to Japan, Philippines,Vietnam, Thailand, and Hong Kong.\",\n\"Managed approximately 200 tests per month, ensuring stable production capacity and high-quality results.\"]'),(3,'華聯生物科技股份有限公司','Phalanx Biotech Group','生化科技研發業','新竹縣竹北市','2022/02-2023/05','1.5','副研究員','Associate Researcher','[\"參與 CytoOne 晶片試劑研發與測試，支援公司自主開發高密度基因檢測平台。\",\n\"負責 LDTs 認證相關試驗資料整理與提交，確保檢測合規性。\",\n\"協助導入 Sage 檢測技術，提升檢測能力與產品應用範圍。\"]','[\"Participated in R&D and testing of CytoOne chip reagents, supporting the company’s independent development of highdensity genetic testing platforms.\",\n\"Prepared and submitted LDTs certification testing data, ensuring compliance with regulatory standards.\",\n\"Assisted in the implementation of Sage testing technology, enhancing testing capability and expanding product applications.\"]'),(4,'健喬信元醫藥生技股份有限公司','Synmosa Biopharma Corporation','藥品製造業','新竹縣湖口鄉','2023/10-2025/04','1.5','生管專員','Production Specialist','[\"依據公司 庫存、銷售狀況及訂單需求，規劃並安排生產線排程，確保產能與需求平衡。\",\"建立原料效期監督機制，持續追蹤短效原料，降低過期及報廢風險。\",\"負責物料改版與報廢控管，確保物料使用合規並提升成本效益。\",\"強化原料校期控管，於2024年成功 減少原料耗損300萬元。\",\"優化包材管理流程，有效 降低報廢成本79萬元。\"]','[\"Planned and scheduled production lines based on company inventory, sales performance, and order demand, ensuring production capacity met demand.\",\"Established raw material expiration monitoring system, continuously tracking short-shelf-life materials to reduce expiration and waste risks.\",\"Managed material revisions and scrapping processes, ensuring compliance and improving cost efficiency.\",\"Strengthened raw material validation and control, successfully reducing material loss by NT$3 million in 2024.\",\"Optimized packaging material management process, effectively lowering scrap cost by NT$790,000.\"]');
/*!40000 ALTER TABLE `workexperience` ENABLE KEYS */;
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
