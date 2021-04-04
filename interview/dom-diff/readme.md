# DOM-diff 阿里等级别公司发offer的前奏题

- 读源码的方法
  1. 边写边读， 聚焦主题
    React  不用DOM， 而是MVVM？
    DOM性能不行， 频繁， 重绘重排...
    虚拟DOM Virtual DOM  内存做呢？
    组件树 => DOM树 内存中的操作相比浏览器中一堆的杂事， 更快
    n叉树  内存树中修改， 累积完成之后， 一次性在真实DOM中修改， 提高效率
    内存中的两棵树进行比较的算法DOM-DIFF  prevState  newState  
  2. 先通俗理解
    状态是在改变的， useState  状态驱动界面  不是用DOM操作来驱动
    底下的
    内存中 创建一个虚拟DOM ？ 树
    经过状态改变后， 创建一个新的状态的VirtualDOM 
    这两棵树进行比较时(树的查找，结点的比对)，
    修改的集合，
    一次性的同步到真实DOM中 

- 如何把DOM用virtualDOM 来表示
  <ul>
    <li class="item">白敬亭</li>
    <li class="item">婷婷</li>
  </ul>

  <ul>
    <li class="item">白敬亭</li>
    <li class="item">婷婷</li>
    <li>王燕杰</li>
  </ul>
    [
        {attr:'current'},
        {appendChild:document.createElement('li')}
    ]

- 首先我们GET到了虚拟DOM树的表现形式，递归JSON
```
{
    tag:'ul',
    props:{
        class:'list'
    },
    children: [
        {
            tag:'li',
            props:{
                class:'item'
            },
            children: ['白敬亭']
        }
    ]
}
```

- 利用createElement\setAttribute\appendChild
  将在内存中生成虚拟DOM树 

- 首次渲染
  