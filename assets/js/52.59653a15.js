(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{237:function(e,t,r){"use strict";r.r(t);var a=r(19),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"開始-azure-機器學習的最佳方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#開始-azure-機器學習的最佳方式"}},[e._v("#")]),e._v(" 開始 Azure 機器學習的最佳方式")]),e._v(" "),r("ContentMeta"),e._v(" "),r("p",[e._v("我知道許多資料科學家，包括我自己，都在配備 GPU 的機器使用 Jupyter Notebooks 或某些 Python IDE，也許本地端或在雲完成大部分工作。近兩年來，作為 AI/ML 軟體工程師，我在做沒有 GPU 的機器上處理資料，然後在雲中使用 GPU 虛擬機器做訓練。")]),e._v(" "),r("p",[e._v("另一方面，您可能已經聽說過"),r("a",{attrs:{href:"https://docs.microsoft.com/azure/machine-learning/?WT.mc_id=azureselected-content31-xinglzhu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure 機器學習"),r("OutboundLink")],1),e._v("——一個特別的機器學習平台服務。但是，當你開始參考一些"),r("a",{attrs:{href:"https://docs.microsoft.com/azure/machine-learning/tutorial-train-models-with-aml/?WT.mc_id=azureselected-content31-xinglzhu",target:"_blank",rel:"noopener noreferrer"}},[e._v("入門教程"),r("OutboundLink")],1),e._v("，您可能意識到，使用Azure 的ML 會繁瑣及重工產生很多不必要的開銷，使用過程不是很理想。例如，訓練腳本是透過 Jupyter Cell 的文本文件創建的，沒有編碼補全，也無法方便地在本地端執行或調校。這些額外的開銷也是我們並沒有在我們的項目中盡可能多的使用它的原因。")]),e._v(" "),r("p",[e._v("不過，最近我找到一個擴充"),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-ai&WT.mc_id=azureselected-content31-xinglzhu#overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code Extension for Azure ML"),r("OutboundLink")],1),e._v("。透過這個擴充，您可以在 VS Code 中直接開發您的的訓練編碼，並在本地端運行，然後將相同的編碼提交到集群上進行訓練，這些過程只需幾下點擊。並且還有幾個重要的好處：")]),e._v(" "),r("ul",[r("li",[e._v("您可以將主要的時間花在本地機器上，並"),r("strong",[e._v("在需要訓練時使用強大的雲端GPU資源")]),e._v("。訓練集群可以根據需求自動調整大小，當將機器的最小量設置為0後，你可以根據需要調整 VM。")]),e._v(" "),r("li",[e._v("您"),r("strong",[e._v("將訓練的所有結果")]),e._v("包括指標和創建模型維護在一個中心位置，你不在需要手工為每個實驗保留精確度的記錄。")]),e._v(" "),r("li",[e._v("如果"),r("strong",[e._v("幾個人在同一項目上工作")]),e._v("——他們可以使用同一個集群（所有實驗將進行排隊），並且可以查看彼此的實驗結果。例如，您可以使用"),r("strong",[e._v("教室環境中的 Azure ML")]),e._v("，創建一個集群供所有人使用，而不是給每個學生創建一個單獨的 GPU 機器，並促進學生之間為模型精確度進行競爭。")]),e._v(" "),r("li",[e._v("如果您需要進行大量訓練，例如用於"),r("strong",[e._v("超參數優化")]),e._v("——所有這些可以通過幾個命令來完成，無需手動運行一系列的實驗。")])]),e._v(" "),r("p",[e._v("我希望已經說服您來嘗試一下 Azure ML！下面是如何開始使用的最佳方式：")]),e._v(" "),r("ul",[r("li",[e._v("安裝"),r("a",{attrs:{href:"http://code.visualstudio.com/?WT.mc_id=azureselected-content31-xinglzhu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode.azure-account&WT.mc_id=azureselected-content31-xinglzhu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Sign In"),r("OutboundLink")],1),e._v(" 和"),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-toolsai.vscode-ai&WT.mc_id=azureselected-content31-xinglzhu#overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure ML"),r("OutboundLink")],1),e._v(" 擴展")]),e._v(" "),r("li",[e._v("克隆庫 https://github.com/CloudAdvocacy/AzureMLStarter ——它包含了一些示例代碼來訓練識別 MNIST 數字模型。然後，您可以在 VS Code 中打開該克隆庫。")]),e._v(" "),r("li",[e._v("繼續閱讀！")])]),e._v(" "),r("h2",{attrs:{id:"azure-ml-的工作區和門戶"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#azure-ml-的工作區和門戶"}},[e._v("#")]),e._v(" Azure ML 的工作區和門戶")]),e._v(" "),r("p",[e._v("Azure ML 中的一切都圍繞著一個"),r("strong",[e._v("工作區")]),e._v("進行組織。這是您提交實驗、存儲數據和結果模型的中心位置。還有一個特殊的"),r("a",{attrs:{href:"http://ml.azure.com/?WT.mc_id=azureselected-content31-xinglzhu",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Azure ML Portal")]),r("OutboundLink")],1),e._v("，為您的工作區提供Web 界面，從這裡您可以執行很多操作，如監視您的實驗和指標等等。")]),e._v(" "),r("p",[e._v("您可以通過"),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azureselected-content31-xinglzhu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Portal"),r("OutboundLink")],1),e._v(" 的Web 界面創建一個工作區（可參考"),r("a",{attrs:{href:"https://docs.microsoft.com/azure/machine-learning/how-to-manage-workspace/?WT.mc_id=azureselected-content31-xinglzhu",target:"_blank",rel:"noopener noreferrer"}},[e._v("步驟說明"),r("OutboundLink")],1),e._v("），或使用Azure CLI（"),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/machine-learning/how-to-manage-workspace-cli/?WT.mc_id=azureselected-content31-xinglzhu",target:"_blank",rel:"noopener noreferrer"}},[e._v("介紹"),r("OutboundLink")],1),e._v("）。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("az extension add -n azure-cli-ml\naz group create -n myazml -l northeurope\naz ml workspace create -w myworkspace -g myazml\n")])])]),r("p",[e._v("工作區包含了一些"),r("strong",[e._v("計算")]),e._v("資源。一旦您有了一個訓練腳本，可以"),r("strong",[e._v("提交實驗")]),e._v("到工作區，並指定"),r("strong",[e._v("計算目標")]),e._v("——這將確保實驗在指定的位置運行，並將實驗的所有結果存儲在工作區，以供將來參考。")]),e._v(" "),r("h2",{attrs:{id:"mnist-訓練腳本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mnist-訓練腳本"}},[e._v("#")]),e._v(" MNIST 訓練腳本")]),e._v(" "),r("p",[e._v("在我們的範例中，我們將展示如何使用 MNIST 數據集來解決非常"),r("a",{attrs:{href:"https://www.kaggle.com/c/digit-recognizer",target:"_blank",rel:"noopener noreferrer"}},[e._v("傳統的手寫數字識別問題"),r("OutboundLink")],1),e._v("。以同樣的方式，您將能夠運行其他任何訓練腳本。")]),e._v(" "),r("p",[e._v("我們的樣本庫包含簡單的 MNIST 訓練腳本 "),r("code",[e._v("train_local.py")]),e._v("。這個腳本從 OpenML 下載 MNIST 數據集，然後使用 SKLearn "),r("code",[e._v("邏輯回歸")]),e._v(" 訓練模型並打印結果精確度：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("mnist = fetch_openml('mnist_784')\nmnist['target'] = np.array([int(x) for x in mnist['target']])\n\nshuffle_index = np.random.permutation(len(mist['data']))\nX, y = mnist['data'][shuffle_index], mnist['target'][shuffle_index]\n\nX_train, X_test, y_train, y_test =\n  train_test_split(X, y, test_size = 0.3, random_state = 42)\n\nlr = LogisticRegression()\nlr.fit(X_train, y_train)\ny_hat = lr.predict(X_test)\nacc = np.average(np.int32(y_hat == y_test))\n\nprint('Overall accuracy:', acc)\n")])])]),r("p",[e._v("當然，我們使用邏輯回歸僅是為了作為示例，並不意味著這是解決這個問題的最好方式……")]),e._v(" "),r("h2",{attrs:{id:"在-azure-ml-中運行腳本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在-azure-ml-中運行腳本"}},[e._v("#")]),e._v(" 在 Azure ML 中運行腳本")]),e._v(" "),r("p",[e._v("您可以在本地運行此腳本並查看結果。然而，如果我們選擇使用 Azure ML，會給我們帶來兩大好處：")]),e._v(" "),r("ul",[r("li",[e._v("在集中式計算資源上調度和運行訓練，其性能通常比本地計算機更強大。 Azure ML 會使用合適的配置將腳本打包到 Docker 容器中。")]),e._v(" "),r("li",[e._v("將訓練結果記錄到 Azure ML 工作區內的集中位置。要做到這一點，我們需要將下面的代碼添加到腳本中，用來記錄指標：")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("from azureml.core.run import Run\n...\ntry:\n    run = Run.get_submitted_run()\n    run.log('accuracy', acc)\nexcept:\n    pass\n")])])]),r("p",[e._v("此腳本修改後的版本被稱為"),r("code",[e._v("train_universal.py")]),e._v("（它比上面呈現的代碼更複雜一些），它既可以在本地運行（不使用 Azure ML），也可以運行在遠程計算資源上。")]),e._v(" "),r("p",[e._v("為了從 VS Code 中運行在 Azure ML 上，請遵循這些步驟：")]),e._v(" "),r("ol",[r("li",[e._v("確保您的 Azure 擴展連接到您的雲帳戶。選擇左側菜單的 Azure 圖標。如果您沒有連接，您會看到在右下角顯示一個通知以便您連接（"),r("a",{attrs:{href:"https://habrastorage.org/webt/7b/ii/u6/7biiu6ktpygayub0ff17-u36om4.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("見圖"),r("OutboundLink")],1),e._v("）。點擊它，並通過瀏覽器登錄。您也可以按下 "),r("strong",[e._v("Ctrl-Shift-P")]),e._v("，將彈出命令面板，輸入 "),r("strong",[e._v("Azure Sign In")]),e._v(" 進行登錄。")]),e._v(" "),r("li",[e._v("然後，您應該能夠在 Azure 欄部分的 "),r("strong",[e._v("MACHINE LEARNING")]),e._v(" 中看見您的工作區：\n   "),r("img",{attrs:{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--db7R9m4s--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://habrastorage.org/webt/uf/yu/da/ufyudahlxeed3roay5yppqu_cwq.png",alt:"VS Code 中的Azure ML 工作區"}}),e._v("\n   在這裡，您會看到工作區中的不同對象：計算資源，實驗等。")]),e._v(" "),r("li",[e._v("回到文件列表，並用鼠標右鍵點擊 "),r("code",[e._v("train_universal.py")]),e._v(" 並選擇 "),r("strong",[e._v("Azure ML: Run as experiment in Azure")]),e._v("。\n   "),r("img",{attrs:{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--GfBPAe07--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://habrastorage.org/webt/x7/i7/ex/x7i7exvh6uatgqqmhvtte9u89ae.png",alt:"VS Code 中的Azure ML 工作區"}})]),e._v(" "),r("li",[e._v("確認您的Azure訂閱和您的工作區，然後選擇"),r("strong",[e._v("創建新實驗")]),e._v("：\n   "),r("img",{attrs:{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--yUX026iW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://habrastorage.org/webt/uq/p1/l1/uqp1l1mazrais_juw3zcfegnyds.png",alt:"VS Code 中的Azure ML 工作區"}}),e._v(" "),r("img",{attrs:{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--uYXYdSal--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://habrastorage.org/webt/hk/of/ff/hkofffhrmy-mapz-zybagzi5pj4.png",alt:"VS Code 中的Azure ML 工作區"}}),e._v(" "),r("img",{attrs:{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--uppA0zaX--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://habrastorage.org/webt/hd/nb/0c/hdnb0clmrgnq534iaktd20q8w2u.png",alt:"Azure ML Workspace in VS Code"}})]),e._v(" "),r("li",[e._v("創建新的 "),r("strong",[e._v("Compute")]),e._v(" 和 "),r("strong",[e._v("compute configuration")]),e._v("：\n   - "),r("strong",[e._v("Compute")]),e._v(" 定義了用於訓練/推理的計算資源。您可以使用本地計算機或任何云資源。在我們的示例中，我們將使用 AmlCompute 集群。請建立 STANDARD_DS3_v2 機器的可擴展群集，節點配置為 min=0和max=4。您可以從 VS Code 中，或從"),r("a",{attrs:{href:"http://ml.azure.com/?WT.mc_id=azureselected-content31-xinglzhu",target:"_blank",rel:"noopener noreferrer"}},[e._v("ML 門戶"),r("OutboundLink")],1),e._v("中進行配置。 "),r("img",{attrs:{src:"https://res.cloudinary.com/practicaldev/image/fetch/s---rv4Ptrh--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://habrastorage.org/webt/az/qq/tt/azqqttrje6jx8nsepdycwtosh04.png",alt:"VS Code 中的Azure ML 工作區"}}),e._v("\n   - "),r("strong",[e._v("Compute Configuration")]),e._v(" 定義遠程資源上創建的用於執行訓練的容器選項。特別是，它指定所有要安裝的庫。在我們的例子中，選擇 "),r("em",[e._v("SkLearn")]),e._v("，並確認庫列表。 "),r("a",{attrs:{href:"https://res.cloudinary.com/practicaldev/image/fetch/s--jmmNby__--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://habrastorage.org/webt/0x/wv/u_/0xwvu_iu7tovivowbhmrbjkml2m.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code 中的Azure ML 工作區"),r("OutboundLink")],1),r("img",{attrs:{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--FaXAgED7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://habrastorage.org/webt/fx/t-/hv/fxt-hvhaeanmz6_ztcoh1q5tc8u.png",alt:"VS Code 中的Azure ML 工作區"}})]),e._v(" "),r("li",[e._v("然後您會看到一個窗口，顯示下一個實驗的 JSON 描述。您可以在其中編輯信息，例如改變實驗或集群名稱，並調整一些參數。當您準備好後，點擊 "),r("strong",[e._v("Submit Experiment")]),e._v("：\n   "),r("img",{attrs:{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--joFeivEz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://habrastorage.org/webt/vj/r0/6_/vjr06_o6idgburn_bs84xtau7qe.png",alt:"Azure ML Workspace in VS Code"}})]),e._v(" "),r("li",[e._v("在VS Code 中成功提交實驗後，您會得到一個鏈接，指向"),r("a",{attrs:{href:"http://ml.azure.com/?WT.mc_id=azureselected-content31-xinglzhu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure ML 門戶"),r("OutboundLink")],1),e._v("中的實驗進度和結果。\n   "),r("img",{attrs:{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--2oWg9AGT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://habrastorage.org/webt/_2/dc/mg/_2dcmguwlzuegyt8feqtmy2fyfg.png",alt:"Azure ML 門戶中的Azure ML 實驗結果"}}),e._v("\n   您還可以從"),r("a",{attrs:{href:"http://ml.azure.com/?WT.mc_id=azureselected-content31-xinglzhu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure ML 門戶"),r("OutboundLink")],1),e._v(" 中的"),r("strong",[e._v("Experiments")]),e._v(" 選項卡，或VS Code 中的"),r("strong",[e._v("Azure Machine Learning")]),e._v(" 欄找到您的實驗：\n   "),r("img",{attrs:{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--ZOptBzGn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://habrastorage.org/webt/sf/aj/zi/sfajzixi7onq59cbfgnjzq2ay7u.png",alt:"VS Code 中的Azure ML 工作區"}})]),e._v(" "),r("li",[e._v("在您的代碼調整一些參數後，如果要再次運行實驗，這個過程會更快、更容易。用鼠標右鍵單擊您的訓練文件，您會看到一個新的菜單選項 "),r("strong",[e._v("Repeat last run")]),e._v(" ——只需選擇它，實驗將立即被提交。\n   "),r("img",{attrs:{src:"https://res.cloudinary.com/practicaldev/image/fetch/s--o_ITr5kJ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://habrastorage.org/webt/uh/u0/vg/uhu0vgjdtifxczq6saeerxhsdys.png",alt:"VS Code 中的Azure ML 工作區"}}),e._v("\n   然後，您將在 Azure ML 門戶中看到所有運行的指標結果，如上面的截圖所示。")])]),e._v(" "),r("p",[e._v("現在您已了解，將運行提交到 Azure ML 並不複雜，而且一些功能（如從您的運行、模型等存儲所有的統計數據）是免費的。")]),e._v(" "),r("p",[e._v("您可能已經註意到，對我們的範例來說，在集群上運行腳本所花費的時間比本地運行要長——它甚至可能需要幾分鐘。當然，這需要花一些資源，如將腳本和所有環境打包到容器中，並將其發送到雲端。如果群集被設置為自動縮放到0節點——可能還會有一些額外的開銷，如虛擬機的啟動，並且當這個範例腳本小到僅需要幾秒鐘來執行的時候，這些開銷都是顯而易見的。然而，在現實的場景中，當訓練需要幾十分鐘，有時甚至更多的時候——這種開銷變得幾乎不再重要，尤其是對從集群中獲得的速度提升來說。")]),e._v(" "),r("h2",{attrs:{id:"下一步是什麼？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下一步是什麼？"}},[e._v("#")]),e._v(" 下一步是什麼？")]),e._v(" "),r("p",[e._v("現在您已經了解瞭如何將腳本提交到遠程群集上來執行，可以開始在您的日常工作中使用 Azure ML了。您可以在一般 PC 上開發腳本，然後在 GPU 虛擬機或集群上自動計劃執行，並在一個地方保存所有的結果。")]),e._v(" "),r("p",[e._v("不過，使用 Azure ML 不僅僅只有這兩個優勢。 Azure ML 也可用於數據存儲和數據集處理——使用不同的訓練腳本來訪問相同的數據會更加方便。另外，您還可以通過 API 自動提交實驗、改變參數——從而進行一些超參數優化。此外，Azure ML 中內置的稱為"),r("a",{attrs:{href:"https://docs.microsoft.com/azure/machine-learning/how-to-tune-hyperparameters/?WT.mc_id=azureselected-content31-xinglzhu",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[e._v("Hyperdrive")]),r("OutboundLink")],1),e._v("的特定技術，能夠進行更聰明的超參數搜索。我將在下一篇文章中討論這些功能和技術。")]),e._v(" "),r("h2",{attrs:{id:"有用的資源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#有用的資源"}},[e._v("#")]),e._v(" 有用的資源")]),e._v(" "),r("p",[e._v("如果您想了解更多信息，Microsoft Learn 提供的以下課程可能會很有用：")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/learn/modules/intro-to-azure-machine-learning-service/?WT.mc_id=azureselected-content31-xinglzhu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure 機器學習服務介紹"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/ru-ru/learn/paths/build-ai-solutions-with-azure-ml-service/?WT.mc_id=azureselected-content31-xinglzhu",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用Azure 機器學習服務構建AI 解決方案"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/ru-ru/learn/modules/train-local-model-with-azure-mls/?WT.mc_id=azureselected-content31-xinglzhu",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用Azure 機器學習服務訓練本地模型"),r("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);