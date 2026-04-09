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
-- Table structure for table `aboutme`
--

DROP TABLE IF EXISTS `aboutme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aboutme` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `englishName` varchar(255) DEFAULT NULL,
  `birth` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `intro` text,
  `introEng` text,
  `fb` varchar(255) DEFAULT NULL,
  `ig` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `LINE` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aboutme`
--

LOCK TABLES `aboutme` WRITE;
/*!40000 ALTER TABLE `aboutme` DISABLE KEYS */;
INSERT INTO `aboutme` VALUES (1,'張毓宸','Female','Carly Chang','1989-08-05','0953770085','chengheng0805@gmail.com','1763142668291-524478839.jpg','新竹縣竹北市','[\"您好，我是張毓宸，畢業於中原大學生物醫學工程所，研究方向為癌症光動力治療。畢業後投入生技產業，至今累積十年以上專業經驗，期間培養了紮實的實驗設計與資料處理能力。在職涯中，我經常需要處理大量實驗數據，並解決不同情境下的技術挑戰，這讓我具備嚴謹的邏輯思維與問題解決能力。\",\"在慧智基因擔任技術組長期間，我帶領 4 位技術人員與 1 位行政人員，協調實驗室日常運作，並負責相關認證文件的建立。同時，我主導新檢測產品的流程設計與導入，確保研發成果能順利轉化為實際應用。這段經歷使我熟悉專案分工、資源調度及跨部門溝通，並深刻理解如何將研發成果轉化為實際效益。\",\"在華聯生物科技任職時，我參與 CytoOne 新產品的研發與改良，並導入 Sage 技術，顯著提升檢測靈敏度。這樣的創新應用不僅提升了檢測平台的穩定性，也加深了我將技術成果實際落地的能力。\",\"近期於健喬信元醫藥生技擔任主管專員，我負責原料與物料的效期控管，成功避免約 300 萬元的報廢損失；同時，依據銷售量進行生產規劃，協助公司更有效率地分配資源、降低成本並提升產能。這段經驗展現了我在資源管理上的敏銳度，也鍛鍊了我在實務中優化流程與提升效能的能力。\",\"在生技產業多年的歷程中，我深刻體會到科技發展正快速改變各行各業，因此開始思考如何將自身的專案管理與實務經驗，結合資訊技術發揮更大價值。這幾年，我持續自學全端工程技能，包含前端框架、後端伺服器與資料庫整合，並透過實作專案不斷累積開發經驗。如今，我希望正式轉職為全端工程師，將過往的專案經驗與新學的技術結合，持續精進，並在未來的職涯中貢獻。\"]','[\"Hello, my name is Yu-Chen Chang. I graduated from the Graduate Institute of Biomedical Engineering at Chung Yuan Christian University, where my research focused on photodynamic therapy for cancer.\",\"After graduation, I entered the biotech industry and have accumulated over ten years of professional experience, during which I developed solid skills in experimental design and data analysis. Throughout my career, I have frequently managed large amounts of experimental data and tackled various technical challenges, which strengthened my logical thinking and problem-solving abilities.\",\"During my tenure as Technical Team Leader at Sofiva Genomics, I led a team of four technical staff and one administrative member, coordinating daily laboratory operations and establishing necessary certification documentation. I also spearheaded the process design and implementation of new testing products, ensuring that R&D outcomes were successfully translated into practical applications. This experience allowed me to become proficient in project delegation, resource allocation, and cross-department communication, while gaining a deep understanding of how to convert research results into tangible benefits.\",\"At Phalax Biotech, I participated in the development and optimization of the CytoOne product and implemented Sage technology, significantly improving detection sensitivity. This innovative application not only enhanced the stability of the testing platform but also deepened my ability to translate technical achievements into practical solutions.\",\"More recently, as a Senior Specialist at Synmosa Biopharma, I was responsible for monitoring the shelf-life of raw materials and supplies, successfully preventing approximately NT$3 million in potential waste. Additionally, I planned production based on sales volumes, helping the company allocate resources more efficiently, reduce costs, and increase output. This experience showcased my keen sense for resource management and strengthened my ability to optimize processes and improve operational efficiency in practice.\",\"Throughout my years in the biotech industry, I have observed how rapidly technology is transforming various sectors. This realization prompted me to explore how I could leverage my project management and practical experience together with information technology to create greater value. Over the past few years, I have been self-learning full-stack development, including front-end frameworks, back-end servers, and database integration, while gaining hands-on experience through project implementation. I am now eager to formally transition into a full-stack engineering role, combining my past project experience with my newly acquired technical skills, continuing to improve, and contributing meaningfully to my future career.\"]','https://www.facebook.com/yu.chen.chang.568120','https://www.instagram.com/woomi_meowmeow/','https://www.linkedin.com/in/%E5%AE%B8%E5%AE%B8-%E5%BC%B5-586320396/','https://line.me/ti/p/jttb1gGZa4');
/*!40000 ALTER TABLE `aboutme` ENABLE KEYS */;
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
