###

```markdown
增
curl -X POST http://localhost:3000/users -d '{"name": "xinxin", "pass": "666"}' -H "Content-Type: application/json"
```

```markdown
查
curl http://localhost:3000/users/3
```

```markdown
删
curl -x delete http://localhost:3000/users/3
```