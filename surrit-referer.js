// surrit-referer.js
// 针对 surrit.com CDN 的防盗链请求头注入脚本
// 适用于 Quantumult X 和 Loon
// 核心逻辑：强制为所有 surrit.com 的请求注入 Referer 和 Origin 头部，解决系统播放器 HLS 分离音轨无声的问题。

let headers = $request.headers;

// 注入防盗链头部
headers['Referer'] = 'https://missav.ai/';
headers['Origin'] = 'https://missav.ai';

// 针对部分 CDN 节点，移除 Host 绑定或强制指定 User-Agent 以提高兼容性
if (headers['host']) {
    // 保持 host 头部与请求域名一致
}

$done({ headers: headers });
