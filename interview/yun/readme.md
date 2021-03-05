# 当你有了一台服务器后， 可以干什么？

# 当你在浏览器输入了一个url后，可以干什么？
    docker 一台物理主机 虚拟出来很多的云服务器
    - IP
      124.71.174.51  ？  提供什么服务？  可以看到网页呢？
      浏览器域名或IP访问，https    www.baidu.com  ->  ip
      centos 7.6 ？ web 服务器， 
      Nginx  是一个高性能的HTTP和反向代理的web服务器

    - putty 远程  SSH  链接  华为云服务器
        root    password  
    - web 服务   Ngnix 安装
      安装ngnix 的依赖
      yum -y install gcc gcc-cc autoconf pcre-devel make automake
      yum -y install wget httpd-tools vim

      yum list | grep ngnix
      yum install ngnix
      ngnix -v
      