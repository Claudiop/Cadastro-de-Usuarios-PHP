-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06-Fev-2020 às 02:47
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.3.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `banco_tc`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `adms`
--

CREATE TABLE `adms` (
  `ID` int(11) NOT NULL,
  `Login` varchar(500) NOT NULL,
  `Senha` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `adms`
--

INSERT INTO `adms` (`ID`, `Login`, `Senha`) VALUES
(1, 'PHELIPPE', '1234'),
(2, 'claudiophelippe@gmail.com', '1234'),
(3, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Estrutura da tabela `registro`
--

CREATE TABLE `registro` (
  `ID` int(11) NOT NULL,
  `NOME` varchar(200) DEFAULT NULL,
  `TIPO_CADASTRO` varchar(20) DEFAULT NULL,
  `TIPO_PESSOA` varchar(20) DEFAULT NULL,
  `CPF_CNPJ` varchar(30) DEFAULT NULL,
  `RZ_SOCIAL` varchar(500) DEFAULT NULL,
  `ENDERECO` varchar(500) DEFAULT NULL,
  `NUMERO` varchar(50) DEFAULT NULL,
  `COMPLEMENTO` varchar(500) DEFAULT NULL,
  `CEP` varchar(20) DEFAULT NULL,
  `MUNICIPIO` varchar(200) DEFAULT NULL,
  `CIDADE` varchar(200) DEFAULT NULL,
  `EMAIL` varchar(250) DEFAULT NULL,
  `TELEFONE` varchar(20) DEFAULT NULL,
  `CELULAR` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `registro`
--

INSERT INTO `registro` (`ID`, `NOME`, `TIPO_CADASTRO`, `TIPO_PESSOA`, `CPF_CNPJ`, `RZ_SOCIAL`, `ENDERECO`, `NUMERO`, `COMPLEMENTO`, `CEP`, `MUNICIPIO`, `CIDADE`, `EMAIL`, `TELEFONE`, `CELULAR`) VALUES
(22, 'Claudio Phelippe De Sousa Lima', 'cliente', 'PESSOA FISICA', '186.437.777-14', 'CPF= VALIDO', 'Casa', '552', 'PERTO DE UMA ESCOLA', '21.520-350', 'RIO DE JANEIRO', 'RIO DE JANEIRO', 'claudiophelippe@gmail.com', '(21) 3468-9787', '(21) 9724-28300'),
(23, 'ANDRE AUGUSTO', 'CLIENTE', 'PESSOA FISICA', '776.565.645-66', 'CPF= INVALIDO', 'RUA GUATAMBU', '34', 'TTE', '21.555-350', 'MARECHAL HERMES', 'RIO DE JANEIRO', 'jj.@ggd.com', '(21) 2121-2121', ''),
(24, '123333gghH', 'CLIENTE', 'PESSOA JURIDICA', '23.123.123/123', 'CPF= INVALIDO', 'RUA JUNO', '', '', '21.520-350', 'PAVUNA', 'fffH', '', '', ''),
(25, 'PEDRO ANTONIO 3', 'FORNECEDOR', 'PESSOA JURIDICA', '88.484.848/4844-44', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', ''),
(26, 'TESTE 01', 'FUNCIONARIO', 'PESSOA JURIDICA', '00.011.123/3323-23', 'undefined', 'RUA JUNO', '334', 'PERTO DO PERTO', '21.520-350', 'PAVUNA', 'RIO DE JANEIRO', 'undefined', 'undefined', ''),
(27, 'GUSTAVO', 'FORNECEDOR', 'PESSOA FISICA', '123.233.443-42', 'CPF= INVALIDO', 'RUA 3', '5543', 'SLA', '22.350-521', 'DO MUNICIPIO', 'CIDADE', 'email@email.com', '(21) 2121-2121', '(00) 0000-00000'),
(29, 'LUIZ FERNndo', 'FUNCIONARIO', 'PESSOA JURIDICA', '81.928.371/2731-87', 'CPF-OK', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', '(33) 3333-33333'),
(30, 'paulo', 'FORNECEDOR', 'PESSOA FISICA', '884.848.323-42', 'CPF= INVALIDO', '...', '0000000000', 'teste nulo', '12.323-123', '...', '...', '', '', ''),
(31, 'TOTAL CONTROLL', 'FORNECEDOR', 'PESSOA JURIDICA', '04.753.171/0001-42', 'TOTAL CONTROL INFORMATICA EIRELI', 'RUA LEANDRO MARTINS', '00047', 'NÃO EXISTE', '20.080-070', 'CENTRO', 'RIO DE JANEIRO', 'financeiro@totalcontrol.com.br', '(21) 3232-3737', '(00) 0000-00000'),
(57, 'GUSTAVO LIMA', 'CLIENTE', 'PESSOA FISICA', '144.992.767-05', 'CPF= VALIDO', 'TRAVESSA SÃO PEDRO', '56', '', '20.921-230', 'SÃO CRISTÓVÃO', 'RIO DE JANEIRO', 'email@email.com.br', '(25) 2525-2525', '(00) 6060-6060'),
(58, 'GUSTAVO 2', 'FORNECEDOR', 'PESSOA FISICA', '144.992.767-03', 'CPF= INVALIDO', 'TRAVESSA SÃO PEDRO', '4443', 'gg2', '20.921-230', 'SÃO CRISTÓVÃO', 'RIO DE JANEIRO', 'KKKK@J.COM', '(88) 8888-8888', '(77) 7777-77777'),
(59, 'TESTER', 'FORNECEDOR', 'PESSOA JURIDICA', '14.771.478/0001-20', 'EMPORIO NOVA CITTA CAFETERIA LANCHES E SIMILARES LTDA', 'R CORREIA VASQUES', '56', '', '20.211-140', 'CIDADE NOVA', 'RIO DE JANEIRO', 'jj.@ggd.com', '(21) 3186-2026/ (21)', '2199999'),
(60, 'MARIA', 'CLIENTE', 'PESSOA JURIDICA', '28.369.381/0001-08', 'MARIA CLAUDIA VIANNA PAQUELET DE BARROS 17243247725', 'RUA QUINTINO BOCAIUVA', '45', '', '26.210-150', 'CENTRO', 'NOVA IGUACU', 'mariapaquele@gmail.com', '(21) 2767-1116', ''),
(61, 'BEST PISCINAS', 'CLIENTE', 'PESSOA JURIDICA', '31.885.652/0001-84', 'BEST PISCINAS LTDA', 'AVENIDA VITORIA REGIA', '8871', 'LOJA 105 QUADRA0087 LOTE 17B SETOR LOTEAMENTO SETOR JD ATLANTICO', '24.936-430', 'BARROCO (ITAIPUACU)', 'MARICA', 'bestpiscinasrj@gmail.com', '(21) 2638-8389 / (21', ''),
(62, 'BR ZZ', 'FUNCIONARIO', 'PESSOA JURIDICA', '24.183.276/0002-00', 'BR ZZ DISTRIBUIDORA, IMPORTACAO E EXPORTACAO EIRELI', 'AVENIDA JOAQUIM DA COSTA LIMA', '20', '', '26.183-255', 'LOTE XV', 'BELFORD ROXO', '', '(21) 7118-6960', ''),
(63, 'LANCHES', 'FORNECEDOR', 'PESSOA JURIDICA', '17.163.976/0001-88', 'LANCHONETE TO TROPICAL EIRELI', 'R CARLOS SEIDL', 'SN', 'RUA QUATRO, 65', '20.931-005', 'CAJU', 'RIO DE JANEIRO', '', '(21) 2290-0444', ''),
(64, 'SJ', 'FUNCIONARIO', 'PESSOA JURIDICA', '25.183.424/0001-60', 'MERCADO SAO JOAO COMERCIO DE ALIMENTOS LTDA', 'R BELA', '948', 'A E B AND 2 E 3', '20.930-380', 'SAO CRISTOVAO', 'RIO DE JANEIRO', '', '(21) 3149-9467', ''),
(65, 'LUIZ PAZ', 'CLIENTE', 'PESSOA FISICA', '777.888.774-44', 'CPF= INVALIDO', 'RUA NOSSA SENHORA DE FÁTIMA', '888777', 'AQUELE LUGAR', '21.320-350', 'PRAÇA SECA', 'RIO DE JANEIRO', 'EMAIL@EMAIL.EMAIL.COM', '(77) 7444-4777', '(11) 1222-55555');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `adms`
--
ALTER TABLE `adms`
  ADD PRIMARY KEY (`ID`);

--
-- Índices para tabela `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `adms`
--
ALTER TABLE `adms`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `registro`
--
ALTER TABLE `registro`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
