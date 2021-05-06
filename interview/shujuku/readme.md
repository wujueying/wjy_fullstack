数据库索引
普通索引 create index idx_name on tablename(column);
联合索引 create index idx_name2 on tablename(col1,col2);
唯一索引 create unique uniq_name in xxx;
创建主键 alter table tablename add primary key(col);
删除索引 drop index idx_name on tablename;

常见索引结构：
1. 二叉搜索树  要求是每个节点的左子树节点小于父子树节点，右子节点大于父节点，查询效率较高，时间复杂度是O（logN） 
2. 有序序列  可以区间查询，但增加删除记录性能低，需要每次都挪动数据，一般用于静态数据存储，对静态数据做索引
3. 哈希表  键值对的方式存储，只适用于等值查询，无法区间查询，比如redis(key-value数据库)

mysql索引类型：
innodb (b+树)
myisam （b树）

B-Tree

B树和B+树的区别
1. B+树只有叶子节点会存数据，B树的每个节点都会存放数据;
2. B+树的叶子节点都会通过链表连接，能够很快地实现区间查询;
3. B树可以在非叶子节点结束查找，最好情况是O（1），但B+树的时间复杂度是O（logN）;
4. B树的插入性能比B+树要高;

第一范式： 原子性，列不可再分；
第二范式： 唯一性，每一列都与主键相关；
第三范式： 独立性，避免字段冗余，不能存在能被其他字段推导出的字段


商品表  单价  数量  总价   
    