# sql 基础
1. 建表
  create table person(
   id int primary key,
   name varchar(16) not null,
   age int,
   phone varchar(11),
   address varchar(256)
);

2. 插入语句
  insert into person(id,name,age,phone,address)
  values (1,'yang',22,'123232323','中国上海');

3. 修改语句
  update person set address='浙江杭州' where id = 1;

4. 删除语句
  delete from person where id = 1;  

5. 查询语句
  select * from person; // 查询一条记录中的所有字段
  select * from person where name='yang'&& age=22;  
6. 删除表
  DROP TABLE 'student',
       DATABASE 'ECUT'

