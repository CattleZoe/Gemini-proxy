addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  let targetURL = new URL('https://generativelanguage.googleapis.com')

  targetURL.pathname = url.pathname
  targetURL.search = url.search

  let newRequest = new Request(targetURL, {
    method: request.method,
    headers: request.headers,
    body: request.body
  })

  let response = await fetch(newRequest)

  // 添加跨域支持
  let corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
    'Access-Control-Allow-Headers': request.headers.get('Access-Control-Request-Headers'),
  }

  // 如果是预检请求，直接返回跨域头
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  // 复制响应以添加新的头
  let responseHeaders = new Headers(response.headers)
  for (let [key, value] of Object.entries(corsHeaders)) {
    responseHeaders.set(key, value)
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: responseHeaders
  })
}
