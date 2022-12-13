CREATE DATABASE IE;
USE IE;
DROP TABLE informacion;
CREATE TABLE informacion (
    IDINFO int AUTO_INCREMENT PRIMARY KEY NOT NULL COMMENT 'Contiene el identificador que controla el numero de informacion que se registra para su posterior respuesta.',
    DOCINFO CHAR(12) NOT NULL COMMENT 'Contiene el numero de documento de indentidad para diferenciarlo el DNI=8 digitos y el carnet de estranjería =12 digitos',
    APENOMINFO Varchar(80) NOT NULL COMMENT 'Contiene los apellidos y nombres del solicitante',
    EMAINFO Varchar(80) NOT NULL COMMENT 'Contiene el correo electronico del usuario solicitante para poder dar respuesta a su pregunta.',
    CELINFO Char(9) NOT NULL COMMENT 'Contiene el numero de celular del solicitante',
    ASUINFO VARCHAR(200) NOT NULL COMMENT 'Contiene la informacion del asunto.',
    FECHORINFO timestamp NOT NULL DEFAULT current_timestamp COMMENT 'Contiene la fecha y hora del ingreso del solicitante.'
) COMMENT 'Contiene los datos  de la persona que solicita información';


INSERT INTO informacion
(DOCINFO, APENOMINFO,EMAINFO, CELINFO, ASUINFO)
VALUES
('72720487', 'SANCHEZ RAMOS ROBERTO', 'roberto.sanchez@vallegrande.edu.pe', '970300311', 'consulta de vacantes');

SELECT * FROM informacion; 