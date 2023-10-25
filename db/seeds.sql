INSERT INTO department (name)
    VALUES
        ("Sales"),
        ("Service"),
        ("Accounting");

    INSERT INTO role (title, salary, department_id)
    VALUES 
        ("Sales Professional", 75000, 1),
        ("Sales Manager", 100000, 1),
        ("Finance Manager", 100000, 1),
        ("Service Writer", 50000, 2),
        ("Oil Tech", 30000, 2),
        ("Service Manager", 100000, 2),
        ("Cashier", 50000, 3),
        ("Accounting Manager", 60000, 3);
       
  INSERT INTO employee (first_name, last_name, role_id, manager_id) 
  VALUES
    ("Sam", "Atencio", 2, null),
    ("Bo", "Waddell", 2, 1),
    ("Marcus", "Cobb", 1, 1),
    ("Sleepy", "Purvey", 1, 1),
    ("Mike", "Barnes", 6, 1),
    ("Wes", "Miller", 4, 5),
    ("Dante", "Miller", 2, 1),
    ("Gail", "Cain", 8, 1),
    ("Christian", "Taylor", 7, 8);




    