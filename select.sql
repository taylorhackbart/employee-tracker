USE tracker_db;

SELECT --what we want to see in the results--
  employee.id,
  employee.first_name
  employee.last_name
  employee.role_id as role
  employee.manager_id AS manager
  role.title AS title,
  role.salary AS salary,
  role.department_id AS department
  FROM employee
  LEFT JOIN role ON employee.role_id = role.id

