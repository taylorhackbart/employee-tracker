-- DROPS PREVIOUS TRACKER_DB IF ALREADY EXISTS--
DROP DATABASE IF EXISTS tracker_db;
--CREATES TRACKER DATABASE--
CREATE DATABASE tracker_db;
--USE DATABASE--
USE tracker_db;
--CREATE DEPARTMENT TABLE--
CREATE TABLE department (
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);
--CREATE ROLE TABLE--
CREATE TABLE role (
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INTEGER(10),
  PRIMARY KEY (id)
);
--CREATE EMPLOYEE TABLE 

CREATE TABLE employee (
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL, 
  last_name VARCHAR(30) NOT NULL, 
  role_id INTEGER(10), NOT NULL,
  manager_id INTEGER(10), 
  PRIMARY KEY (id)
);

INSERT INTO department (id, name)
VALUES ("pizza", 10);

INSERT INTO role (id, title, salary, department_id)
VALUES ("pizza", 10);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ("pizza", 10);