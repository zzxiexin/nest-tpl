### docker运行数据库
```markdown
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:latest  

mysql -u root -p   

show databases;   

use databases;   

show tables;   

select * from table_name;  
```

### 使用教程

```markdown
登陆获取授权

curl -X POST http://localhost:3000/login -d '{"name": "xinxin", "pass": "666"}' -H "Content-Type: application/json"
```

```markdown
新增

curl -X POST http://localhost:3000/users -d '{"name": "xinxin", "pass": "777", "isActive": false}' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsIm5hbWUiOiJ4aW54aW4iLCJpYXQiOjE3Mzc4OTYwNDUsImV4cCI6MTczNzg5NjY0NX0.1Omrf-SkgnSY5QrwQPRcSBQh2hgO8Yfu4nQweosCAc8"
```

```markdown
查询单个信息

curl http://localhost:3000/users/3
```

```markdown
删除某个

curl -X DELETE http://localhost:3000/users/12
```