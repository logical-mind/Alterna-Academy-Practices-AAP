CREATE DATABASE node_mysql_ts;

CREATE TABLE empleado(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cedula VARCHAR(200) NOT NULL,
    fullname VARCHAR(200) NOT NULL,
    pagoPorHora INT
);

DESCRIBE empleadoHoras;

CREATE TABLE horasTrabajadas(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    horasTrabajadas INT,
    empleadoId INT(11),
    FOREIGN KEY (empleadoId) REFERENCES empleado(id) ON DELETE CASCADE
);

DESCRIBE horasTrabajadas;