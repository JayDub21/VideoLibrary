-- THIS HAS createdAt, updatedAt manually inserted

DROP DATABASE IF EXISTS project2;

CREATE DATABASE project2;

USE project2;

SELECT *
FROM project2.Videos;

INSERT INTO videos
    (title, video_url, rec_date, keyword, createdAt, updatedAt)
VALUES
    ("Testing with Jest", "https://zoom.us/rec/share/7v1LHojr6XNObJXJ1Ub7QLd5P4DqT6a81Ckb86BZzkMys7XL59gxkhTMzwo3wuM", "1-16-2020", "Test Jest Javascript", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO videos
    (title, video_url, rec_date, keyword, createdAt, updatedAt)
VALUES
    ("ES6 Classes", "https://zoom.us/rec/share/9fJTPuuo_ElJXK_gwkjdW_EOH7zHaaa813Ib8_cJzEdcPpnu0B3owKJeuIqk1rxp", "1-17-2020", "ES6 Classes Javascript", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO videos
    (title, video_url, rec_date, keyword, createdAt, updatedAt)
VALUES
    ("Express Yourself", "https://zoom.us/rec/share/otVyc47fr15LGdLnqxHOa5x6B6vreaa81HRLqfJczk5nFPZpDxAsQRWf2pKFg26D", "1-22-2020 Part 1", "Express.js Javascript", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO videos
    (title, video_url, rec_date, keyword, createdAt, updatedAt)
VALUES
    ("Express Yourself & Express Mini-Project", "https://zoom.us/rec/share/v8BaNpHgznpJR4Hn11ryQ6wFB9vJeaa8gyId-PpYzs6p25PxuqbRPAsYn4o5OF8", "1-22-2020 Part 2", "Express.js Javascript", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO videos
    (title, video_url, rec_date, keyword, createdAt, updatedAt)
VALUES
    ("Express Mini-Project Continued & Introduction to MySQL", "https://zoom.us/rec/share/x-kkHoig2D9IZI3B0U2YBKshP5i6T6a80HVN-KAFxE_GILudID85IlrkZjRtWR1E", "1-23-2020", "Express.js MySQL Javascript", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO videos
    (title, video_url, rec_date, keyword, createdAt, updatedAt)
VALUES
    ("Node, the SQL", "https://zoom.us/rec/share/-8J4HovV7iRJSNKOsGKFVY1mL6vDX6a803Mfq_UNzkhkLA98X-B4as5QEQuA74p4", "1-24-2020", "Node SQL Javascript", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO videos
    (title, video_url, rec_date, keyword, createdAt, updatedAt)
VALUES
    ("Intro to Handlebars & Bringing it from the Front to the Back", "https://zoom.us/rec/share/5e0ldIrC7GhLT6fu52TjapMYTt31aaa8hiUfq6AOmh7GNQY62fBWwRqPHHKA5ZoO", "1-28-2020", "Handlebars Javascript", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO videos
    (title, video_url, rec_date, keyword, createdAt, updatedAt)
VALUES
    ("The Power of the ORM", "https://zoom.us/rec/share/wMdOfuzi-XNJR6fL6F7NV7UGM4ffaaa80ygZ-fcNn0uCYX43fF662n16-5KMaVIp", "1-29-2020", "ORM Javascript", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO videos
    (title, video_url, rec_date, keyword, createdAt, updatedAt)
VALUES
    ("Update, Delete with Sequelize & Getting Associated with Relations", "https://zoom.us/rec/share/y-dPI4n78zhJQqvK0Rj9AoIAPtTieaa8gCEW-KFfyxwHJUSI_Yp1ZeAVHFE2Ak-H", "1-31-2020", "Update Delete Sequelize Javascript", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO videos
    (title, video_url, rec_date, keyword, createdAt, updatedAt)
VALUES
    ("Joins in Sequelize", "https://zoom.us/rec/share/xO5OEZuq1TtORYXN2UqDBb8HPJrZaaa8gChMr_Vfyh3xmC7ko-2zapL66yVp9NkB", "2-03-2020", "Joins Sequelize Javascript", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


-- FROM LUKE's GOOGLE DOCS
-- https://zoom.us/rec/share/xO5OEZuq1TtORYXN2UqDBb8HPJrZaaa8gChMr_Vfyh3xmC7ko-2zapL66yVp9NkB
-- Joins in Sequelize
-- 2-3-2020

-- https://zoom.us/rec/share/y-dPI4n78zhJQqvK0Rj9AoIAPtTieaa8gCEW-KFfyxwHJUSI_Yp1ZeAVHFE2Ak-H
-- Update, Delete with Sequelize & Getting Associated with Relations
-- 1-31-2020

-- https:// MISSING… never sent…. 
-- The Sequel to MySQL & Creating and Reading with Sequelize
-- 1-30-2020

-- https://zoom.us/rec/share/wMdOfuzi-XNJR6fL6F7NV7UGM4ffaaa80ygZ-fcNn0uCYX43fF662n16-5KMaVIp
-- The Power of the ORM
-- 1-29-2020

-- https://zoom.us/rec/share/5e0ldIrC7GhLT6fu52TjapMYTt31aaa8hiUfq6AOmh7GNQY62fBWwRqPHHKA5ZoO
-- Intro to Handlebars & Bringing it from the Front to the Back
-- 1-28-2020

-- https:// MISSING… never sent…. 
-- MySQL Big Data
-- 1-27-2020

-- https://zoom.us/rec/share/-8J4HovV7iRJSNKOsGKFVY1mL6vDX6a803Mfq_UNzkhkLA98X-B4as5QEQuA74p4
-- Node, the SQL
-- 1-24-2020

-- https://zoom.us/rec/share/x-kkHoig2D9IZI3B0U2YBKshP5i6T6a80HVN-KAFxE_GILudID85IlrkZjRtWR1E
-- Express Mini-Project Continued & Introduction to MySQL
-- 1-23-2020

-- https://zoom.us/rec/share/v8BaNpHgznpJR4Hn11ryQ6wFB9vJeaa8gyId-PpYzs6p25PxuqbRPAsYn4o5OF8
-- Express Yourself & Express Mini-Project
-- 1-22-2020 PART 2

-- https://zoom.us/rec/share/otVyc47fr15LGdLnqxHOa5x6B6vreaa81HRLqfJczk5nFPZpDxAsQRWf2pKFg26D
-- Express Yourself
-- 1-22-2020 PART 1

-- https:// MISSING… never sent…. 
-- Introduction to Node Servers & Express Yourself
-- 1-21-2020

-- https://zoom.us/rec/share/9fJTPuuo_ElJXK_gwkjdW_EOH7zHaaa813Ib8_cJzEdcPpnu0B3owKJeuIqk1rxp
-- ES6 Classes
-- 1-17-2020

-- https://zoom.us/rec/share/7v1LHojr6XNObJXJ1Ub7QLd5P4DqT6a81Ckb86BZzkMys7XL59gxkhTMzwo3wuM
-- Testing with Jest
-- 1-16-2020
