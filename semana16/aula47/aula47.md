### Exercício 1

a) A chave estrangeira permite a comunicação entre tabelas.

b) 
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
	comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"1",
    "Muito bom!",
    6,
	"001"
);
```
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"2",
    "Excelente!",
    7,
    "002"
);
```
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"3",
    "Sensacional!",
    9,
    "003"
);
```

c) 
```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"4",
    "Ok!",
    3,
    "004"
);
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jackson-marcela-militello`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
* Não pode ser adicionada uma nova avaliação, já que o id do filme não existe.

d) 
```
ALTER TABLE Movie DROP COLUMN rating;
```

e) 
```
DELETE FROM Movie WHERE id="001";
```

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jackson-marcela-militello`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
* A chave estrangeira não permite rodar o comando para deletar ou atualizar uma linha que esteja em uma tabela em junção com outra. 

### Exercício 2

a) Uma tabela com duas colunas foi criada com VARCHAR limitado a 255 caracteres. Duas chaves estrangeiras foram criadas para relacionar as colunas desta tabela criada com o id contido na tabela Movie e o id contido na tabela Actor.

b) 
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"001",
    "001"
);
````

c) 
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "001"
);
```

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jackson-marcela-militello`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
* Não pode ser adicionada uma nova informação, já que o id do filme não existe, a chave estrangeira não permite.

d) 
```
DELETE FROM Actor WHERE id="001"; 
```

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jackson-marcela-militello`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
* Não pode ser deletada uma informação que esteja atrelada a duas tabelas, a chave estrangeira não permite.

### Exercício 3

a) Este operador une uma informação da uma tabela com uma informação de outra tabela.

b) 
``` 
SELECT m.id as movie_id, m.title as Título, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```

### Exercício 4

a) 
```
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
```

b) 
```
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```

c) 
```
SELECT AVG(r.rate) as rate_average, m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```

### Exercício 5

a) A tabela Movie foi unida à tabela de junção MovieCast primeiro e só depois, com outro comando JOIN, a tabela Actor foi unida à tabela de junção também.

b) 
```
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

c) 
```
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
Error Code: 1054. Unknown column 'm' in 'field list'
* Tem um typo (,) no comando (m,title deveria ser m.title)

d) 
```

```

### Exercício 6

a) N:M

b)
```
CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
	type VARCHAR(255)
);
```
```
INSERT INTO Oscar (id, type)
VALUES ("a", "Melhor Filme");
```
```
INSERT INTO Oscar (id, type)
VALUES ("b", "Melhor Filme Estrangeiro");
```
```
INSERT INTO Oscar (id, type)
VALUES ("c", "Melhor Filme de Animação");
```
```
INSERT INTO Oscar (id, type)
VALUES ("d", "Melhor Direção");
```

c) 
```
INSERT INTO Premiacao (movie_id, oscar_id, ano)
VALUES (
	"001", "a", 2020
);
```

d) 

```
SELECT title, type, ano FROM Movie m
LEFT JOIN Premiacao p ON m.id = p.movie_id
JOIN Oscar o ON o.id = p.oscar_id;
```
