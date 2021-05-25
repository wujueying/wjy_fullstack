1. 进程与线程？
  每个进程都有相应的线程，在执行程序时，实际上是执行相应的一系列线程。
  进程是资源分配的最小单位
  线程是CPU调度的最小单位。

  I/O 密集型一般用多线程
  计算 密集型一般用多进程

  线程的调度比进程要快

  协程
  在用户态切换，由应用程序控制

2. 内核态与用户态？
  操作系统内核关键程序放在内核态
  编程的应用程序都放在用户态

  用户态切换到内核态一般有三种情况：
  1. 系统调用 
  2. 异常 
  3. 硬中断

  常见调度算法
  1. 先来先服务（排队）
  2. 短进程优先
  3. 最高优先权调度
  4. 时间片轮转
  5. 多级反馈队列 

  内核态（Kernel Mode）：运行操作系统程序，操作硬件 
  用户态（User Mode）：运行用户程序

3. CPU与显卡
  CPU是指令级运算，显卡是浮点型运算
4. 死锁产生的必要条件
    1. 互斥条件：进程要求对所分配的资源进行排它性控制，即在一段时间内某资源仅为一进程所占用。
    2. 请求和保持条件：当进程因请求资源而阻塞时，对已获得的资源保持不放。（我不会让）
    3. 不剥夺条件：进程已获得的资源在未使用完之前，不能剥夺，只能在使用完时由自己释放。（你不准抢）
    4. 循环等待条件：在发生死锁时，必然存在一个进程--资源的环形链。

死锁的原因：资源竞争
解决死锁的办法：银行家算法

5. 外存
虚拟内存： 从逻辑上对内存容量加以扩充，实际数据是存储在外存上。

分页：用户程序的地址空间被划分成若干个固定大小的区域，称为页，内存空间被分成若干个物理块，用户程序可以将任一页放在任一块中。

分段：用户程序的地址空间分成若干个大小不等的区域，称为段，每段都是一组相对完整的逻辑信息，段和段之间可以不相邻。

内存淘汰算法
1. OPT 最佳置换算法（不可能实现）
2. LRU 最近最久未使用
3. NRU 时间置换算法 
4. FIFO 先进先出