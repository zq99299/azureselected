(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{242:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"如何使用github-actions部署虚拟机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用github-actions部署虚拟机"}},[t._v("#")]),t._v(" 如何使用GitHub Actions部署虚拟机")]),t._v(" "),s("ContentMeta"),t._v(" "),s("p",[t._v("在部署服务器时，人们要么将其从安装包中解压，要么使用 GUI 进行操作，你也是其中的一员吗？我在事业起步时就是这么操作的。但是，在过去的几年当中，我逐渐适应了通过代码来部署服务器及其相关资源。通过使用PowerShell 或者 Azure CLI，或者两者结合。")]),t._v(" "),s("p",[t._v("我自学了一系列工具，如 Visual Studio Code, Git, GitHub 甚至是 Azure DevOps 来完成任务。一路走来并不容易，但却有趣而充满挑战。")]),t._v(" "),s("p",[t._v("2019年末，GitHub 发布了"),s("a",{attrs:{href:"https://github.blog/2019-11-14-powering-community-led-innovation-with-github-actions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions"),s("OutboundLink")],1),t._v("，GitHub Actions 可以自动从 GitHub 代码库中部署代码。当我的同事和朋友们开始深入了解并演示这项服务时，我就一直饶有兴趣，并决定自己上手，看看能给 IT 专家社区带来些什么，我始终坚定地相信，这些工具可以给 IT 专家们带来很好的机遇。")]),t._v(" "),s("h2",{attrs:{id:"github-actions-术语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-actions-术语"}},[t._v("#")]),t._v(" GitHub Actions 术语")]),t._v(" "),s("p",[t._v("在我详细讲解之前，需要提一提 GitHub Actions 的相关术语。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Action")]),t._v(" – 定义我们能做何种操作，我们可以从市场中免费获得，或自己创建。")]),t._v(" "),s("li",[s("strong",[t._v("Workflow")]),t._v(" – 工作流，事件发生时所完成的一系列环境变量、任务以及步骤。")]),t._v(" "),s("li",[s("strong",[t._v("Jobs")]),t._v(" – 任务，工作流所要执行的任务。")]),t._v(" "),s("li",[s("strong",[t._v("Steps")]),t._v(" - 步骤，任务使用一项 Action 所接收的步骤。")]),t._v(" "),s("li",[s("strong",[t._v("Event")]),t._v(" – 事件，发生时可以触发工作流的事件，例如向一个代码库提交代码时，会触发一个 Issue 或 PR。")])]),t._v(" "),s("h2",{attrs:{id:"你想构建什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你想构建什么？"}},[t._v("#")]),t._v(" 你想构建什么？")]),t._v(" "),s("p",[t._v("简单点说，我想用 GitHub Action 在 Azure 中创建虚拟机(VM)。再明确一点说，我想让它在同一资源群组下，构建虚拟机及其相关的支持性技术（存储磁盘，网络接口，虚拟网络，存储账户等）。这不是最佳的实践范式，但却是一个对新手十分友好的例子，且有详细的文档记录。")]),t._v(" "),s("p",[t._v("只需要使用四段 Azure CLI 代码，就能在 Azure 中创建 VM。第一段代码使用 Azure Service Principal 登录我的 Azure 订阅并执行创建 VM 的必需步骤。")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#region Login")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This logs into Azure with a Service Principal Account")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Logging in to Azure with a service principal..."')]),t._v("\naz login `\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("service"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("principal `\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("username "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$servicePrincipal")]),t._v(" `\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("password "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$servicePrincipalSecret")]),t._v(" `\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("tenant "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$servicePrincipalTenantId")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Done"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#endregion")]),t._v("\n")])])]),s("p",[t._v("下一段代码将选择正确的订阅，确保我的资源分配至正确的位置：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#region Subscription")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#This sets the subscription the resources will be created in")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Setting default azure subscription..."')]),t._v("\naz account "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" `\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("subscription "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$azureSubscriptionName")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Done"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#endregion")]),t._v("\n")])])]),s("p",[t._v("第三段代码将为虚拟机构建赖以生存的资源组：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#region Create Resource Group")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This creates the resource group used to house the VM")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Creating resource group '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resourceGroupName")]),t._v(" in region "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resourceGroupNameRegion")]),t._v('..."')]),t._v("\naz "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),t._v(" create `\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resourceGroupName")]),t._v(" `\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("location "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resourceGroupNameRegion")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Done creating resource group"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#endregion")]),t._v("\n")])])]),s("p",[t._v("第四段代码将在资源组里创建 VM：")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#region Create VM")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create a VM in the resource group")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Creating VM..."')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    az vm create  `\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("resource"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resourceGroupName")]),t._v(" `\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$serverName")]),t._v(" `\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("image win2016datacenter `\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("admin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("username "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$adminLogin")]),t._v(" `\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("admin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("password "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$adminPassword")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VM already exists"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Done creating VM"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#endregion")]),t._v("\n")])])]),s("p",[t._v("这些代码并不复杂， 在很多文档和教程里你都会看到这个著名的示例。在我的脚本中，我使用了多种参数，从而确保信息能被安全的存储或者导入至我的工作流文件中。完整的 PowerShell 脚本 "),s("a",{attrs:{href:"https://gist.github.com/weeyin83/81e7a7bf3caf3d0bce787db5d562b47e?WT.mc_id=blog-itops-salean",target:"_blank",rel:"noopener noreferrer"}},[t._v("请点击此处"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"我该如何创建action？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我该如何创建action？"}},[t._v("#")]),t._v(" 我该如何创建Action？")]),t._v(" "),s("p",[t._v("为了启动VM构建，我们创建一个YAML格式的工作流文件。工作流文件的名字可以是任意合法命名，它以"),s("code",[t._v(".yml")]),t._v("或"),s("code",[t._v(".yaml")]),t._v("结尾作为扩展名。还需要存储在 GitHub 库的特定目录中，即"),s("code",[t._v(".github/workflows")]),t._v("。")]),t._v(" "),s("p",[t._v("您的工作流文件分为几个部分，让我们分别查看每个部分：")]),t._v(" "),s("h3",{attrs:{id:"元数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元数据"}},[t._v("#")]),t._v(" 元数据")]),t._v(" "),s("p",[t._v("我们从命名工作流开始：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GitHub for IT Pro CI/CD Pipeline\n")])])]),s("h3",{attrs:{id:"环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[t._v("#")]),t._v(" 环境变量")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("Env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("OUTPUT_PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $\n")])])]),s("h3",{attrs:{id:"触发器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发器"}},[t._v("#")]),t._v(" 触发器")]),t._v(" "),s("p",[t._v("然后，我们指示如何"),s("a",{attrs:{href:"https://help.github.com/en/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#on",target:"_blank",rel:"noopener noreferrer"}},[t._v("触发"),s("OutboundLink")],1),t._v("该动作 ; 我已将我的操作设置为在将任何内容推送到仓库时开始：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("push"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任务"}},[t._v("#")]),t._v(" 任务")]),t._v(" "),s("p",[t._v("现在，我们开始声明工作流将要执行的任务，我们首先必须声明工作流将在哪个平台上运行（Linux，MacOS或Windows）。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Deploy VM in Azure")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("DeployVM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" windows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n")])])]),s("h3",{attrs:{id:"步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),s("p",[t._v("现在，我们可以从工作流中的步骤开始。 我已指示我的工作流第一步是签出。 这将从我的仓库中获取文件/代码，并将其放入 "),s("code",[t._v("$ github.workspace")]),t._v(" 以便我的工作流访问它。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# checkout code from repo")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" checkout repo\n\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout\n")])])]),s("p",[t._v("下一步是告诉工作流查找有助于构建VM的PowerShell脚本：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" look for ps1 file\n\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\n\n        ls '$\\IaC\\AzCLI'\n")])])]),s("p",[t._v("我们工作流的最后一步是部署和配置VM：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" provision virtual machine in azure\n\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("RESOURCE_GROUP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("githubitpro\n\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("RESOURCE_GROUP_REGION")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" southcentralus\n\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SERVER_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gihtubactions\n\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ADMIN_LOGIN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sarah\n\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n\n        powershell "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("command \"& '$\\IaC\\AzCLI\\vmcreation.ps1'\"\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("servicePrincipal $\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("servicePrincipalSecret $\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("servicePrincipalTenantId $\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("azureSubscriptionName $\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("resourceGroupName %RESOURCE_GROUP%\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("resourceGroupNameRegion %RESOURCE_GROUP_REGION%\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("serverName %SERVER_NAME%\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("adminLogin %ADMIN_LOGIN%\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("adminPassword $\n")])])]),s("p",[t._v("该步骤有很多内容，所以现在让我们进一步分解一下我们正在做的事情：")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" provision virtual machine in azure\n\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("RESOURCE_GROUP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("githubitpro\n\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("RESOURCE_GROUP_REGION")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" southcentralus\n\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("SERVER_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gihtubactions\n\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ADMIN_LOGIN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sarah\n")])])]),s("p",[t._v("第一部分声明了一些环境变量，在这里我设置了Azure资源组名称，我要部署资源组的区域，虚拟机（服务器）的名称以及将要使用的管理员登录帐户名称。")]),t._v(" "),s("p",[t._v("该步骤的第二步是告诉工作流调用我的PowerShell脚本，并从工作流和"),s("a",{attrs:{href:"https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 密钥存储"),s("OutboundLink")],1),t._v("传入下面的变量。为了允许GitHub Actions在我的Azure订阅中部署资源，我创建了一个Azure服务主体。 如果您从未接触过，那么我之前在"),s("a",{attrs:{href:"https://techcommunity.microsoft.com/t5/itops-talk-blog/working-with-azure-service-principal-accounts/ba-p/1086961?WT.mc_id=blog-itopstalk-salean",target:"_blank",rel:"noopener noreferrer"}},[t._v("另一篇文章"),s("OutboundLink")],1),t._v("中介绍了如何创建和使用它们。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n\n        powershell "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("command \"& '$\\IaC\\AzCLI\\vmcreation.ps1'\"\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("servicePrincipal $\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("servicePrincipalSecret $\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("servicePrincipalTenantId $\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("azureSubscriptionName $\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("resourceGroupName %RESOURCE_GROUP%\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("resourceGroupNameRegion %RESOURCE_GROUP_REGION%\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("serverName %SERVER_NAME%\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("adminLogin %ADMIN_LOGIN%\n\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("adminPassword $\n")])])]),s("p",[t._v("此工作流的完整文件可以在"),s("a",{attrs:{href:"https://gist.github.com/weeyin83/b63d320cc814dee9aebb599b847d0a49",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("找到。")]),t._v(" "),s("h2",{attrs:{id:"监控github-action的运行状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监控github-action的运行状态"}},[t._v("#")]),t._v(" 监控GitHub Action的运行状态")]),t._v(" "),s("p",[t._v("Action在运行时，你可以监视其进度。当你导航到GitHub仓库时，你将看到一个名为Actions的选项卡，单击该选项卡将带你进入Workflow部分。 你可以创建新的工作流，编辑工作流并监控工作流的运行进度。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gxcuf89792.i.lithium.com/t5/image/serverpage/image-id/163886i433300750608D8F9/image-size/large?v=1.0&px=999",alt:"undefined"}}),s("em",[t._v("GitHub Actions 标签页")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gxcuf89792.i.lithium.com/t5/image/serverpage/image-id/163889iD61736851B0DA262/image-size/large?v=1.0&px=999",alt:"undefined"}}),s("em",[t._v("监控 GitHub Actions")])]),t._v(" "),s("p",[t._v("工作流完成后，你可以检查Azure订阅，就能看到创建的资源了：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gxcuf89792.i.lithium.com/t5/image/serverpage/image-id/163887i4528F2147C235951/image-size/large?v=1.0&px=999",alt:"undefined"}}),s("em",[t._v("Azure 资源")])]),t._v(" "),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("p",[t._v("这里的示例是一个非常基本的工作流，而正在部署的资源也是一个非常基本的资源，但是对我来说，这是学习GitHub Actions的一个很好的起点。我已经看到我的同事将其用于更复杂的部署和工作流，例如Aaron Powell正在使用它来"),s("a",{attrs:{href:"https://www.aaron-powell.com/posts/2019-12-17-implementing-github-actions-for-my-blog/",target:"_blank",rel:"noopener noreferrer"}},[t._v("部署他的博客"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("我为测试此部署而创建的"),s("a",{attrs:{href:"https://github.com/weeyin83/vm-actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码库"),s("OutboundLink")],1),t._v("是公开的，工作流的输出可供已登录或未登录到GitHub的任何人查看，它包含某些可能被视为敏感的信息，比如我的Azure订阅ID，更重要的是虚拟机的IP地址，给了恶意的人一个容易攻击的机会。因此，如果你正在测试GitHub Action，请注意这一点，并警惕你在Azure中部署的内容以及它的安全性。")]),t._v(" "),s("p",[t._v("我录制了一段视频，记录了代码的过程和每一步，可以在此处找到此视频："),s("a",{attrs:{href:"https://youtu.be/0kDr9OlAzlM",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://youtu.be/0kDr9OlAzlM"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("我很想听听其他IT专业人士是如何使用GitHub Action来部署基础设施的，所以请联系并分享您的故事！")])],1)}),[],!1,null,null,null);a.default=n.exports}}]);