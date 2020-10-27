### Exercício 1

a) 
* VARCHAR - retorna uma string
* DATE - number que retorna uma data em forma de string

b) 
* O SHOW DATABASE retorna os bancos de dados presentes
* SHOW TABLES retorna as tabelas dentro do banco de dados

c) Foi possível visualizar a estrutura referente à tabela Actor

### Exercício 2
a)
``` 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
 1200000,
  "1963-08-23", 
  "female"
);
```

b) A primary key não permite criar mais de um dado com a mesma informação.
c) A quantidade de colunas não corresponde à quantidade de linhas declaradas.
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) Falta a linha 'name' criada inicialmente
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

e) Estão faltando as aspas
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

f)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

### Exercício 3
a) 
```
SELECT * FROM Actor WHERE gender = "female"
```
b) 
``` 
SELECT salary FROM Actor WHERE name = "Tony Ramos"
```
c) 
```
SELECT * FROM Actor WHERE gender = "invalid"
```
* Retorna todas as informações como null. O valor digitado ultrapassa o limite máximo de caracteres.

d) 
```
SELECT id, name, salary FROM Actor WHERE salary <= 500000
```
e) Um typo na informação "name", está como "nome".
```
SELECT id, name from Actor WHERE id = "002"
```

### Exercício 4
a) A query verifica se o nome do(a) ator/atriz inicia com A ou J e com o AND para verificar se esses recebem mais de 300000 reais.
b) 
```
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000
```
c) 
```
SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%")
```
d) 
```
SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000
```

### Exercício 5

a)
```
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```

b) 
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES ("001", 
"Se Eu Fosse Você", 
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", 
"2006-01-06", 
7);
```

c) 
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES ("002", 
"Doce de mãe", 
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", 
"2012-12-27", 
10);
```

d)
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES ("003", 
"Dona Flor e Seus Dois Maridos", 
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", 
"2017-11-02", 
8);
```

e) 
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES ("004", 
"O Auto da Compadecida", 
"Chicó e João Grilo, dois pobres homens que vivem próximos da cidade de Taperoá na Paraíba, conseguem um emprego na padaria da cidade, onde moram o padeiro Eurico e sua esposa Dora, que vive sempre o traindo.", 
"2000-09-15", 
10);
```
