###

```markdown
增
curl -X POST http://localhost:3000/users -d '{"name": "xinxin", "pass": "9999", "isActive": false}' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsIm5hbWUiOiJ4aW54aW4iLCJpYXQiOjE3Mzc4OTI3NjIsImV4cCI6MTczNzg5MzM2Mn0.DjZwBfeZ9aje108dzwWME1_E2aQuUHOZkqcQyACbxMQ"
```

```markdown
查
curl http://localhost:3000/users/3
```

```markdown
删
curl -x delete http://localhost:3000/users/3
```

```
登陆
curl -X POST http://localhost:3000/login -d '{"name": "xinxin", "pass": "666"}' -H "Content-Type: application/json"
```
