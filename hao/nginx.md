conf.d 是所有Ngnix配置文件的目录  
default.d Ngnix默认配置文件  
  
fastcgi.conf ngx_http_fastcgi_module 模块对应的参数文件  
ngnix.conf  Ngnix 的主配置文件

// HTTP 服务器
http{
    log_format  日志的格式
    access_log  日志的存储位置
    keeplive_timeout 60; 连接的超时时间， 单位s

    配置反向代理
    server{
        listen 80; 监听的端口号
        server_name 监听的地址

        匹配的路径
        location{
            root 资源的根目录(作为静态资源代理时使用)
            expires 过期时间

            proxy_pass 转发到某个服务地址
        }

        error_page 配置错误页
    }
}

const server = http.createServer((req,res) => {
    res.write('Hello\n');
    res.end();
});

server.listen(8080, () => {
    console.log('server started')
});

