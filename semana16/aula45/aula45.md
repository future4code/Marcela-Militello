### Exercício 1

a) O comando DROP irá apagar totalmente a coluna salary

b) O comando CHANGE irá modificar o nome da coluna gender para sex

c) O comando CHANGE irá modificar a atribuição VARCHAR, aumentando o limite de caracteres

d) 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2
a)
``` 
UPDATE Actor
SET name = "Moacyr Franco", birth_date = "1936-10-05"
WHERE id = "003"
```

b) 
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes"
```
```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

c) 
```
UPDATE Actor
SET name = "Sônia Braga", salary = 500000, birth_date = "1950-06-08", gender = "female"
WHERE id = "005"
```

d) Nenhuma linha foi afetada, pois a informação id "123" não existe

### Exercício 3
a) 
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
b) 
``` 
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000
```

### Exercício 4
a) 
```
SELECT MAX(salary) FROM Actor;
```

b) 
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c) 
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d) 
```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5

a) A query retorna uma tabela agrupando os atores e atrizes de acordo com o gênero

b) 
```
SELECT id, name FROM Actor ORDER BY name DESC;
```

c) 
```
SELECT * FROM Actor ORDER BY salary ASC;
```

d) 
```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

e)
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercício 6

a) 
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```

b)
```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c) 
```
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";
```
```
UPDATE Movie
SET
	playing_limit_date = "2000-01-01"
WHERE id = "002";
```

d) 
```
DELETE FROM Movie WHERE id = "004";
```
* Nenhuma linha é afetada, pois a informação foi deletada.

### Exercício 7

a) 
```
SELECT * FROM Movie WHERE rating > 7.5;
```

b)
```
SELECT AVG(rating) FROM Movie;
```

c) 
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```

d) 
```
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```

e)
```
SELECT MAX(rating) FROM Movie;
```

f)
```
SELECT MIN(rating) FROM Movie;
```

### Exercício 8

a)
```
SELECT * FROM Movie ORDER BY title ASC;
```

b)
```
SELECT * FROM Movie ORDER BY title ASC LIMIT 5;
```

c)
```
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```

d) 
```
SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
```