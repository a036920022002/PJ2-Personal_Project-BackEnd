# Personal Hub - Backend (Node.js + MySQL)
###### PJ2-personalprofile-backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Bcrypt](https://img.shields.io/badge/Bcrypt-37474F?style=for-the-badge&logo=lock&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

本專案是以專為開發者設計的個人介紹與作品集管理系統。
此資料庫為專案的的後端核心，負責處理資料存取邏輯，並透過 AWS 雲端環境提供穩定的資料庫服務。

## 🚀 技術亮點
* Express.js RESTful API：建立標準化 API 介面，支援前後端分離架構，供前端 Vue.js 進行資料存取。
* 身分驗證機制 (JWT)：整合 JSON Web Token 實作無狀態驗證，確保 API 請求的安全性與使用者狀態管理的靈活性。
* 資安防護實務 (Bcrypt)：採用 Bcrypt 演算法對使用者密碼進行加鹽雜湊 (Salting & Hashing)，確保資料庫數據的高安全性。
* MySQL 關聯式資料庫設計：嚴謹設計 Schema 以儲存教育背景、工作經歷及專案細節，確保數據的一致性。
* AWS 雲端部署實務：資料庫部署於 AWS 環境，實踐雲端數據存儲與穩定性配置。

## 🛠 主要功能
* Auth API：負責使用者註冊、登入驗證及 Token 核發。
* Profile & Experience API：動態提供個人基本資訊、教育背景與專業技術列表。
* Project API：完整存取各項開發專案的詳細說明與網址。

## 🔗 相關連結
* **Live Demo:** [點此查看成品](https://myprofile.zeabur.app/homepage)
* **[FrontEnd Link](https://github.com/a036920022002/PJ2-Personal_Project-FrontEnd.git)**


## 🌟How Start
```npm init```  
```npm run dev```


