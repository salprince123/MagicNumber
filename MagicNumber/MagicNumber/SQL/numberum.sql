-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2021 at 06:05 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `ArticleID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Title` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Detail` text COLLATE utf8_unicode_ci NOT NULL,
  `Upvote` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `AuthorID` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ArticleTypeID` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `articletype`
--

CREATE TABLE `articletype` (
  `ArticleTypeID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Detail` text COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `ChatID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `SenderID` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ReceiveID` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chatdetail`
--

CREATE TABLE `chatdetail` (
  `ChatID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `SenderID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Detail` text COLLATE utf8_unicode_ci NOT NULL,
  `Time` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `UserID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `ArticleID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Detail` text COLLATE utf8_unicode_ci NOT NULL,
  `Time` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `number`
--

CREATE TABLE `number` (
  `NumberID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Title` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `Detail` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `number`
--

INSERT INTO `number` (`NumberID`, `Title`, `Detail`) VALUES
('CD07', 'Con s??? 7 - Con s??? c???a s??? ho??n h???o', '??i???m m???nh:\r\n\r\n- Tr?? t?????ng t?????ng t???t, kh??i qu??t h??a m???i th??? th??nh quy lu???t/b??i h???c\r\n\r\n- Th??ch thi??n nhi??n\r\n\r\n- T???t b???ng, kh??ng tham v???ng, kh??ng th??ch b??? ??i???u khi???n\r\n\r\n??i???m y???u:\r\n\r\n- Bi quan, l?????i bi???ng, ti??u qu?? nhu c???u, m?? m???ng\r\n\r\n- D??? b??? ???c ch??? th???n kinh');

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `PermisID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Name` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissiondetail`
--

CREATE TABLE `permissiondetail` (
  `PermisID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `UserID` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Name` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `Birthday` varchar(8) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`ArticleID`);

--
-- Indexes for table `articletype`
--
ALTER TABLE `articletype`
  ADD PRIMARY KEY (`ArticleTypeID`);

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`ChatID`);

--
-- Indexes for table `chatdetail`
--
ALTER TABLE `chatdetail`
  ADD PRIMARY KEY (`ChatID`,`SenderID`,`Time`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`UserID`,`ArticleID`);

--
-- Indexes for table `number`
--
ALTER TABLE `number`
  ADD PRIMARY KEY (`NumberID`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`PermisID`);

--
-- Indexes for table `permissiondetail`
--
ALTER TABLE `permissiondetail`
  ADD PRIMARY KEY (`PermisID`,`UserID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`);
COMMIT;