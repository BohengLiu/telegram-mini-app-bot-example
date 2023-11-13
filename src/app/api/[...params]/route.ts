import getConfig from "next/config";
// export const runtime = "edge"

export async function GET(request: Request) {
  // get params from nexjs public config
  const { publicRuntimeConfig } = getConfig();
  const env = publicRuntimeConfig.env;

  // const url = request.url
  const url = new URL(request.url);
  const chainbaseApiPath = url.pathname.replace("/api", "");

  try {
    // 目标 URL
    const baseUrl =
      env === "dev" ? "http://127.0.0.1:8080" : "http://1.116.37.183:8080";
    const params = url.searchParams;
    params.delete("params");
    const targetUrl = url.searchParams.toString()
      ? baseUrl + chainbaseApiPath + "?" + url.searchParams.toString()
      : baseUrl + chainbaseApiPath;

    // 使用 fetch 请求目标 URL
    const response = await fetch(targetUrl, {
      headers: {
        accept: "application/json",
      },
    });

    // 检查响应是否成功
    if (!response.ok) {
      return new Response(response.body, {
        status: response.status,
      });
    }

    if (response.body) {
      // 将目标服务器的流式响应发送至客户端
      return new Response(response.body as any as ReadableStream);
    } else {
      return new Response("Error", {
        status: 500,
      });
    }
  } catch (error) {
    return new Response("Error", {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  // get params from nexjs public config
  const { publicRuntimeConfig } = getConfig();
  const env = publicRuntimeConfig.env;

  // const url = request.url
  const url = new URL(request.url);
  const body = await request.text();

  const chainbaseApiPath = url.pathname.replace("/api", "");

  try {
    // 目标 URL
    url.searchParams.delete("params");
    const baseUrl =
      env === "dev" ? "http://127.0.0.1:8080" : "http://1.116.37.183:8080";
    const targetUrl = url.searchParams.toString()
      ? baseUrl + chainbaseApiPath + "?" + url.searchParams.toString()
      : baseUrl + chainbaseApiPath;

    // 使用 fetch 请求目标 URL
    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
      },
      body: body,
    });

    // 检查响应是否成功
    if (!response.ok) {
      return new Response(response.body, {
        status: response.status,
      });
    }

    if (response.body) {
      // 将目标服务器的流式响应发送至客户端
      return new Response(response.body as any as ReadableStream);
    } else {
      return new Response("Error", {
        status: 500,
      });
    }
  } catch (error) {
    console.log(error);
    return new Response("Error", {
      status: 500,
    });
  }
}
