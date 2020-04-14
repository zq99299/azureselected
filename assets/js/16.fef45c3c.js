(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{255:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"can-you-use-blazor-for-only-part-of-an-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#can-you-use-blazor-for-only-part-of-an-app"}},[t._v("#")]),t._v(" Can You Use Blazor for Only Part of an App?")]),t._v(" "),s("ContentMeta"),t._v(" "),s("p",[s("a",{attrs:{href:"https://docs.microsoft.com/en-gb/aspnet/core/blazor/?view=aspnetcore-3.0&WT.mc_id=aaronpowell-blog-aapowell",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blazor"),s("OutboundLink")],1),t._v(" is designed to be a platform where you create a complete web application and we saw that in the last "),s("a",{attrs:{href:"https://www.aaron-powell.com/posts/2019-11-29-implementing-search-in-blazor-webassembly-with-lucenenet",target:"_blank",rel:"noopener noreferrer"}},[t._v("experiment with Blazor"),s("OutboundLink")],1),t._v(" where we created a stand-alone search site for my blog. But like any tool in our toolbox, it isn't "),s("em",[t._v("always")]),t._v(" the right one for the job.")]),t._v(" "),s("p",[t._v("Take my blog for example, it's pretty much a read-only site with the content "),s("a",{attrs:{href:"https://github.com/aaronpowell/aaronpowell.github.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("stored in GitHub"),s("OutboundLink")],1),t._v(" as markdown that I use "),s("a",{attrs:{href:"https://gohugo.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hugo"),s("OutboundLink")],1),t._v(" to convert into HTML files. Now sure, it's possible to do it as a Blazor WASM application, we could get a .NET Markdown library could be used and the pages generated on-the-fly, but that'd an inefficient way to have my website run and would provide a sub-optimal experience to readers.")]),t._v(" "),s("p",[t._v("But if we want to integrate the search app that we've previously built, how do we go about that?")]),t._v(" "),s("h2",{attrs:{id:"understanding-how-blazor-starts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#understanding-how-blazor-starts"}},[t._v("#")]),t._v(" Understanding How Blazor Starts")]),t._v(" "),s("p",[t._v("To think about how we can run Blazor WebAssembly within another application we need to learn a bit about how a Blazor WebAssembly application runs.")]),t._v(" "),s("p",[t._v("When you create a new project there's a file called "),s("code",[t._v("wwwroot/index.html")]),t._v(" that you might never have dug into, but this is an important piece of the puzzle. It looks like this:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Project Name"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("base")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("css/bootstrap/bootstrap.min.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("css/site.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Loading..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("_framework/blazor.webassembly.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("And really, it's pretty simple, the important pieces that we need are these two lines:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Loading..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("_framework/blazor.webassembly.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("We'll get to the "),s("code",[t._v("<app>")]),t._v(" element shortly, but first, let's take a look at the JavaScript file. You might notice that this file doesn't appear anywhere on disk, and that's because it's part of the build output. You can find the source of this on GitHub in the ASP.NET Core repository at "),s("a",{attrs:{href:"https://github.com/aspnet/AspNetCore/blob/5bdf75f3e160bc90768526ba07c30e594b08b96d/src/Components/Web.JS/src/Boot.WebAssembly.ts",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("src/Components/Web.JS/src/Boot.WebAssembly.ts")]),s("OutboundLink")],1),t._v(" (at the time of writing anyway). This file shares some stuff in common with Blazor Server, but with the main difference of using the "),s("a",{attrs:{href:"https://github.com/aspnet/AspNetCore/blob/e72223eaf58a3ee6660a922064d2449e47b78253/src/Components/Web.JS/src/Platform/Mono/MonoPlatform.ts",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("MonoPlatform")]),s("OutboundLink")],1),t._v(" which does a bunch of WASM interop.")]),t._v(" "),s("p",[t._v("This file is critical, without it your Blazor application won't ever start up since it's responsible for initializing the WASM environment that hosts Mono (by injecting "),s("a",{attrs:{href:"https://github.com/aspnet/AspNetCore/blob/e72223eaf58a3ee6660a922064d2449e47b78253/src/Components/Web.JS/src/Platform/Mono/MonoPlatform.ts#L197-L200",target:"_blank",rel:"noopener noreferrer"}},[t._v("a script into the DOM"),s("OutboundLink")],1),t._v(") and then it will use another generated file, "),s("code",[t._v("_framework/blazor.boot.json")]),t._v(", to work out what .NET DLL's will need to be loaded into the Mono/WASM environment.")]),t._v(" "),s("p",[t._v("So you need to have this JS file included and the "),s("code",[t._v("_framework")]),t._v(" folder needs to be at the root since that's how it finds the JSON file (see "),s("a",{attrs:{href:"https://github.com/aspnet/AspNetCore/blob/e72223eaf58a3ee6660a922064d2449e47b78253/src/Components/Web.JS/src/Boot.WebAssembly.ts#L61-L62",target:"_blank",rel:"noopener noreferrer"}},[t._v("this comment"),s("OutboundLink")],1),t._v(").")]),t._v(" "),s("h3",{attrs:{id:"lazy-loading-blazor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lazy-loading-blazor"}},[t._v("#")]),t._v(" Lazy-Loading Blazor")]),t._v(" "),s("p",[t._v("An interesting aside which I came across while digging in the source is that you can delay the load of Blazor by adding "),s("code",[t._v('autostart="false"')]),t._v(" to the "),s("code",[t._v("<script>")]),t._v(" tag, as per "),s("a",{attrs:{href:"https://github.com/aspnet/AspNetCore/blob/e72223eaf58a3ee6660a922064d2449e47b78253/src/Components/Web.JS/src/BootCommon.ts#L5",target:"_blank",rel:"noopener noreferrer"}},[t._v("this line"),s("OutboundLink")],1),t._v(" and then call "),s("code",[t._v("window.Blazor.start()")]),t._v(" in JavaScript to start the Blazor application.")]),t._v(" "),s("p",[t._v("I'm not going to use it for this integration, but it's good to know that you can have a user-initiated initialisation, rather than on page load.")]),t._v(" "),s("h2",{attrs:{id:"placing-your-blazor-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#placing-your-blazor-app"}},[t._v("#")]),t._v(" Placing Your Blazor App")]),t._v(" "),s("p",[t._v("Now that we understand what makes our Blazor app start, how do we know where in the DOM it'll appear? Well, that's what the "),s("code",[t._v("<app>")]),t._v(" element in our HTML is for, but how does "),s("strong",[t._v("Blazor")]),t._v(" know about it?")]),t._v(" "),s("p",[t._v("It turns out that that is something that we control from our "),s("code",[t._v("Startup")]),t._v(" class:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" Microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AspNetCore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" Microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Extensions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DependencyInjection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" DemoProject\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Startup")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConfigureServices")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IServiceCollection")]),t._v(" services"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Configure")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IComponentsApplicationBuilder")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("See how on line 14 we're using "),s("code",[t._v("AddComponent")]),t._v(" and specifying a DOM selector of "),s("code",[t._v("app")]),t._v("? That's how it knows what element in the DOM the application will start. This is something that you can change, maybe make it a selector to a ID of a DOM element or to a "),s("code",[t._v("<div>")]),t._v(", or to anything else that you want, but it's not that important, so I just leave it as "),s("code",[t._v("<app>")]),t._v(".")]),t._v(" "),s("p",[s("em",[t._v("Aside: I haven't tried it yet, but given that you specify the DOM element and the entry component (via generics, this points to "),s("code",[t._v("App.razor")]),t._v(" in the above sample) you could potentially have multiple independent Blazor apps running on a page. Why would you do this, I have no idea... but you can in theory!")])]),t._v(" "),s("h2",{attrs:{id:"hosting-blazor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hosting-blazor"}},[t._v("#")]),t._v(" Hosting Blazor")]),t._v(" "),s("p",[t._v("When it comes to hosting Blazor WASM "),s("a",{attrs:{href:"https://docs.microsoft.com/en-gb/aspnet/core/host-and-deploy/blazor/webassembly?view=aspnetcore-3.1&WT.mc_id=aaronpowell-blog-aapowell",target:"_blank",rel:"noopener noreferrer"}},[t._v("there are a few options"),s("OutboundLink")],1),t._v(" but I want to focus on the "),s("a",{attrs:{href:"https://docs.microsoft.com/en-gb/aspnet/core/host-and-deploy/blazor/webassembly?view=aspnetcore-3.1&WT.mc_id=aaronpowell-blog-aapowell#azure-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Storage static sites"),s("OutboundLink")],1),t._v(" approach, which is how my blog is hosted.")]),t._v(" "),s("p",[t._v("First thing we'll need to do is publish the app in Release mode using "),s("code",[t._v("dotnet publish --configuration Release")]),t._v(". From that we'll grab the contents of the "),s("code",[t._v("bin/Release/{TARGET FRAMEWORK}/publish/{ASSEMBLY NAME}/dist/_framework")]),t._v(" folder, which will contain "),s("code",[t._v("blazor.boot.json")]),t._v(", "),s("code",[t._v("blazor.server.js")]),t._v(", "),s("code",[t._v("blazor.webassembly.js")]),t._v(", a folder called "),s("code",[t._v("_bin")]),t._v(" and a folder called "),s("code",[t._v("wasm")]),t._v(".")]),t._v(" "),s("p",[t._v("We want to copy this "),s("code",[t._v("_framework")]),t._v(" folder and place it in the root of our static site, maintaining all the paths so that Blazor can start up.")]),t._v(" "),s("p",[s("em",[t._v("Note: According to the docs you can change the "),s("code",[t._v("content-root")]),t._v(" and "),s("code",[t._v("path-base")]),t._v(" when hosting using "),s("code",[t._v("dotnet run")]),t._v(" but I haven't found them working when it's published. Also, Hugo is very aggressive at setting absolute paths so I found it easiest to put my WASM files in the same structure that "),s("code",[t._v("dotnet run")]),t._v(" used.")])]),t._v(" "),s("p",[t._v("Since this is a search application let's create a new page called "),s("a",{attrs:{href:"https://raw.githubusercontent.com/aaronpowell/aaronpowell.github.io/fac2ae4c8db58f6b4b010522769fc928eb0e1983/src/content/search.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Search"),s("OutboundLink")],1),t._v(" and put in our required HTML:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/_framework/blazor.webassembly.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Now generate your static site (or whatever host you're using) and navigate to the "),s("code",[t._v("/search")]),t._v(" router.")]),t._v(" "),s("p",[t._v("If everything has gone correctly you'll have just received an error!")]),t._v(" "),s("blockquote",[s("p",[t._v("Sorry, there's nothing at this address.")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://www.aaron-powell.com/images/doh.gif",alt:"D'oh"}})]),t._v(" "),s("h2",{attrs:{id:"blazor-routing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blazor-routing"}},[t._v("#")]),t._v(" Blazor Routing")]),t._v(" "),s("p",[t._v("If you remember back to "),s("a",{attrs:{href:"https://www.aaron-powell.com/posts/2019-11-29-implementing-search-in-blazor-webassembly-with-lucenenet",target:"_blank",rel:"noopener noreferrer"}},[t._v("our last post"),s("OutboundLink")],1),t._v(" we learnt about the "),s("code",[t._v("@page")]),t._v(" directive in Razor Components. Here you specify the route that the page will match on and up until now we've had "),s("code",[t._v('@page "/"')]),t._v(" there. But, we're now on "),s("code",[t._v("/search")]),t._v(" and Blazor's routing engine has looked at the URL and executed your "),s("code",[t._v("App.razor")]),t._v(" component:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Router")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("AppAssembly")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@typeof(Program).Assembly"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Found")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Context")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("routeData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("RouteView")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("RouteData")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@routeData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("DefaultLayout")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@typeof(MainLayout)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Found")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("NotFound")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("LayoutView")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("Layout")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("@typeof(MainLayout)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Sorry, there's nothing at this address."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("LayoutView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("NotFound")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("Since the "),s("code",[t._v("Router")]),t._v(" didn't find a matched route to use "),s("code",[t._v("RouteView")]),t._v(" against it's fallen through to "),s("code",[t._v("NotFound")]),t._v(" and that is why we have this error!")]),t._v(" "),s("p",[t._v("Don't worry, it's an easy fix, just update the "),s("code",[t._v("@page")]),t._v(" directive to match the route that you want it to match on in your published site "),s("em",[t._v("or")]),t._v(" simplify your "),s("code",[t._v("App.razor")]),t._v(" to not care about routing.")]),t._v(" "),s("p",[t._v("Once a new publish is done and the files copied across it'll be happy.")]),t._v(" "),s("h2",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),s("p",[t._v("Blazor is a great way which we can build rich applications, but there is value in generating static content upfront and using Blazor to enhance an application rather than own it.")]),t._v(" "),s("p",[t._v("Here we've taken a bit of a look at the important files used to run a Blazor application within an HTML page and we've also looked at what it takes to drop it into some other kind of application.")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);