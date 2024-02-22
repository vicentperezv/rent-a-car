CREATE TABLE Vendedor (
    VendedorID INT PRIMARY KEY,
    Nombre NVARCHAR(100),
);

CREATE TABLE MarcaAuto (
    MarcaID INT PRIMARY KEY,
    Nombre NVARCHAR(100)
);

CREATE TABLE ModeloAuto (
    ModeloID INT PRIMARY KEY,
    MarcaID INT FOREIGN KEY REFERENCES MarcaAuto(MarcaID),
    Nombre NVARCHAR(100),
);

CREATE TABLE Solicitudes (
    SolicitudID INT PRIMARY KEY,
    VendedorID INT FOREIGN KEY REFERENCES Vendedor(VendedorID),
    ModeloID INT FOREIGN KEY REFERENCES ModeloAuto(ModeloID),
    Fecha DATE,
    Monto MONEY,
);

-- Insertar datos de ejemplo en la tabla Vendedor
INSERT INTO Vendedor (VendedorID, Nombre) VALUES
(1, 'Juan Perez'),
(2, 'Ana Gomez'),
(3, 'Carlos Ruiz');

-- Insertar datos de ejemplo en la tabla MarcaAuto
INSERT INTO MarcaAuto (MarcaID, Nombre) VALUES
(1, 'Toyota'),
(2, 'Ford'),
(3, 'Chevrolet'),
(4, 'Suzuki'),
(5, 'Mazda');

-- Insertar datos de ejemplo en la tabla ModeloAuto
INSERT INTO ModeloAuto (ModeloID, MarcaID, Nombre) VALUES
(1, 1, 'Corolla'),
(2, 1, 'Camry'),
(3, 2, 'Mustang'),
(4, 2, 'Fiesta'),
(5, 3, 'Camaro'),
(6, 3, 'Spark'),
(7, 4, 'Spresso'),
(8, 4, 'Swift'),
(9, 5, 'CX-3'),
(10, 5, 'CX-9');

-- Insertar datos de ejemplo en la tabla Solicitudes
INSERT INTO Solicitudes (SolicitudID, VendedorID, ModeloID, Fecha, Monto) VALUES
(1, 1, 1, '2024-02-01', 20000.00),
(2, 1, 2, '2024-02-03', 25000.00),
(3, 2, 5, '2024-01-15', 30000.00),
(4, 3, 3, '2024-02-10', 28000.00),
(5, 3, 4, '2023-12-05', 17000.00),
(6, 2, 1, '2024-02-12', 22000.00),
(7, 1, 6, '2024-01-20', 15000.00),
(8, 2, 5, '2024-02-18', 35000.00),
(9, 3, 1, '2024-02-05', 21000.00),
(10, 1, 3, '2023-11-11', 29000.00),
(11, 1, 8, '2023-05-01', 20000.00),
(12, 1, 6, '2023-12-03', 22000.00),
(13, 2, 9, '2023-11-15', 35000.00),
(14, 3, 8, '2023-06-10', 15000.00),
(15, 3, 10, '2023-12-25', 21000.00),
(16, 2, 6, '2023-02-14', 22000.00),
(17, 1, 8, '2024-01-25', 15000.00),
(18, 2, 9, '2024-02-08', 35000.00),
(19, 3, 10, '2024-02-07', 21000.00),
(20, 1, 10, '2023-11-11', 21000.00);