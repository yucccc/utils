import{_ as s,o as n,c as a,a as l}from"./app.d9a911a4.js";const g=JSON.parse('{"title":"axios\u5C01\u88C5","description":"","frontmatter":{},"headers":[{"level":2,"title":"use","slug":"use","link":"#use","children":[{"level":3,"title":"loading\u4F7F\u7528","slug":"loading\u4F7F\u7528","link":"#loading\u4F7F\u7528","children":[]}]}],"relativePath":"request/axios.md","lastUpdated":1670403229000}'),t={name:"request/axios.md"},p=l(`<h1 id="axios\u5C01\u88C5" tabindex="-1">axios\u5C01\u88C5 <a class="header-anchor" href="#axios\u5C01\u88C5" aria-hidden="true">#</a></h1><h2 id="use" tabindex="-1">use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">HRequest</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@yucccc/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> h </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HRequest</span><span style="color:#A6ACCD;">(config</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> HRequestConfig)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;">(url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> HRequestConfig)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(url: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> HRequestConfig[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> HRequestConfig)</span></span>
<span class="line"><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#A6ACCD;">(url: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> HRequestConfig[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> HRequestConfig)</span></span>
<span class="line"><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">put</span><span style="color:#A6ACCD;">(url: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> HRequestConfig[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> HRequestConfig)</span></span>
<span class="line"><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#A6ACCD;">(url: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> HRequestConfig[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> HRequestConfig)</span></span>
<span class="line"><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">patch</span><span style="color:#A6ACCD;">(url: string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> HRequestConfig[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> HRequestConfig)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="loading\u4F7F\u7528" tabindex="-1">loading\u4F7F\u7528 <a class="header-anchor" href="#loading\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">HRequest</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@yucccc/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> h </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HRequest</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">interceptorHooks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">requestInterceptor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">useLoading</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u663E\u793Aloading\u903B\u8F91</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// loading</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">config</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">responseInterceptor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">useLoading</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u9690\u85CFloading\u903B\u8F91</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// loading</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u9700\u8981\u7ED9\u63A5\u53E3\u4F20\u9012isLoading: true \u4EE3\u8868\u9700\u8981\u4F7F\u7528loading</span></span>
<span class="line"><span style="color:#A6ACCD;">h</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/url/a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">useLoading</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">## HRequestConfig</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;table&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;thead&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;th style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u53C2\u6570&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;th style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u8BF4\u660E&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;th style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u7C7B\u578B&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;th style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u662F\u5426\u5FC5\u586B&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;th style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u53EF\u9009\u503C&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;th style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u9ED8\u8BA4\u503C&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/thead&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;tbody&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;useLoading&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u662F\u5426\u663E\u793Aloading&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;boolean&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;false&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;interceptorHooks&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u62E6\u622A\u5668&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;InterceptorHooks&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;false&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/tbody&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">## InterceptorHooks</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;table&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;thead&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;th style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u53C2\u6570&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;th style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u8BF4\u660E&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;th style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u7C7B\u578B&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;th style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u662F\u5426\u5FC5\u586B&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;th style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u53EF\u9009\u503C&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;th style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u9ED8\u8BA4\u503C&lt;/th&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/thead&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;tbody&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;requestInterceptor&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u8BF7\u6C42\u62E6\u622A\u5668&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;(config: HRequestConfig) =&amp;gt; HRequestConfig&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;false&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;requestInterceptorCatch&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u8BF7\u6C42\u62E6\u622A\u5668\u9519\u8BEF\u5904\u7406&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;(error: T) =&amp;gt; T&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;false&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;responseInterceptor&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u54CD\u5E94\u62E6\u622A\u5668&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;(response: AxiosResponse) =&amp;gt; AxiosResponse&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;false&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;responseInterceptorCatch&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;\u54CD\u5E94\u62E6\u622A\u5668\u9519\u8BEF\u5904\u7406&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;(error: T) =&amp;gt; T&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;false&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;td style=&quot;white-space: nowrap;text-align:left&quot;&gt;&lt;/td&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/tr&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/tbody&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/table&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  const hmrFiles = i<wbr>mport.meta.glob([&quot;../src/axios.ts&quot;], {  eager: true })</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,6),o=[p];function e(c,r,y,C,A,D){return n(),a("div",null,o)}const F=s(t,[["render",e]]);export{g as __pageData,F as default};
