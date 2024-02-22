CREATE PROCEDURE TresMarcasMasSolicitadas
AS
BEGIN
    SELECT TOP 3 MarcaAuto.Nombre, COUNT(Solicitudes.SolicitudID) AS Cantidad
    FROM MarcaAuto
    JOIN ModeloAuto ON MarcaAuto.MarcaID = ModeloAuto.MarcaID
    JOIN Solicitudes ON ModeloAuto.ModeloID = Solicitudes.ModeloID
    GROUP BY MarcaAuto.Nombre
    ORDER BY Cantidad DESC;
END
GO

CREATE PROCEDURE SolicitudesDelMesActual
AS
BEGIN
    SELECT *
    FROM Solicitudes
    WHERE MONTH(Fecha) = MONTH(GETDATE())
    AND YEAR(Fecha) = YEAR(GETDATE());
END
GO

CREATE PROCEDURE VendedorConMenosSolicitudes
AS
BEGIN
    SELECT TOP 1 Vendedor.VendedorID, Vendedor.Nombre, COUNT(Solicitudes.SolicitudID) AS Cantidad
    FROM Vendedor
    JOIN Solicitudes ON Vendedor.VendedorID = Solicitudes.VendedorID
    WHERE Solicitudes.Fecha >= DATEADD(DAY, -30, GETDATE())
    GROUP BY Vendedor.VendedorID, Vendedor.Nombre
    ORDER BY Cantidad ASC;
END
GO

CREATE PROCEDURE ModelosSinSolicitudes
AS
BEGIN
    SELECT ModeloID, Nombre
    FROM ModeloAuto
    WHERE ModeloID NOT IN (SELECT ModeloID FROM Solicitudes);
END
GO

CREATE PROCEDURE MesesConMasIngresos
AS
BEGIN
    SELECT TOP 3 FORMAT(Fecha, 'MMMM yyyy') AS Mes, SUM(Monto) AS Ingresos
    FROM Solicitudes
    GROUP BY FORMAT(Fecha, 'MMMM yyyy')
    ORDER BY Ingresos DESC;
END
GO