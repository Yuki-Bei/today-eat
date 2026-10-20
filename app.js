const recipes = [
  {
    id: "quinoa-chicken", period: "lunch", type: "healthy", name: "香煎鸡胸藜麦能量碗", emoji: "🥙", caption: "轻盈但满足 · 一人份",
    description: "嫩煎鸡胸搭配藜麦和时蔬，蛋白质、膳食纤维都照顾到，吃完也不会有负担。",
    tags: ["高蛋白", "膳食纤维", "均衡碳水"], calories: 520,
    nutrition: { protein: 38, carbs: 58, fat: 14, fiber: 9, sodium: 620 },
    note: "均衡搭配，给身体稳定的能量。", time: 25,
    ingredients: [["鸡胸肉", "120 g"], ["藜麦（生）", "50 g"], ["西兰花", "80 g"], ["小番茄", "6 颗"], ["橄榄油", "1 茶匙"], ["黑胡椒", "少许"]],
    steps: ["藜麦淘洗后加水煮约 15 分钟，沥干备用。", "鸡胸肉用黑胡椒和少许盐腌 5 分钟，小火煎至两面金黄并熟透。", "西兰花焯熟，小番茄对半切开；与藜麦、切片鸡胸一起装碗，淋少许橄榄油。"]
  },
  {
    id: "salmon-rice", period: "lunch", type: "healthy", name: "照烧三文鱼糙米饭", emoji: "🍱", caption: "好脂肪与好碳水 · 一人份",
    description: "烤三文鱼配糙米和爽口蔬菜，富含优质蛋白与 Omega-3，简单一碗就很满足。",
    tags: ["优质脂肪", "高蛋白", "全谷物"], calories: 565,
    nutrition: { protein: 34, carbs: 62, fat: 19, fiber: 7, sodium: 680 },
    note: "三文鱼含有 Omega-3 脂肪酸，搭配全谷物更耐饱。", time: 30,
    ingredients: [["三文鱼", "120 g"], ["糙米（熟）", "150 g"], ["西兰花", "80 g"], ["低盐酱油", "1 汤匙"], ["蜂蜜", "1 茶匙"], ["柠檬", "1/4 个"]],
    steps: ["糙米提前煮熟；西兰花掰小朵后焯水。", "低盐酱油与蜂蜜混合，刷在三文鱼表面，烤箱 200°C 烤 10–12 分钟至熟。", "将糙米、三文鱼和西兰花装盘，挤上少许柠檬汁即可。"]
  },
  {
    id: "beef-noodles", period: "lunch", type: "treat", name: "番茄牛腩浓汤面", emoji: "🍜", caption: "热乎满足的一碗 · 一人份",
    description: "软嫩牛腩在番茄汤里慢慢炖出浓郁鲜甜，再加一把面条，午餐就该这么踏实。",
    tags: ["暖心主食", "慢炖风味", "满足感拉满"], calories: 720,
    nutrition: { protein: 36, carbs: 82, fat: 27, fiber: 6, sodium: 1080 },
    note: "想减少钠摄入，可以少喝一些汤汁。", time: 45,
    ingredients: [["牛腩", "130 g"], ["面条（熟）", "180 g"], ["番茄", "2 个"], ["洋葱", "1/4 个"], ["生抽", "1 汤匙"], ["葱花", "少许"]],
    steps: ["牛腩切块焯水；番茄和洋葱切块备用。", "锅中少油炒香洋葱，放入番茄炒软，加牛腩、生抽和热水，小火炖至牛腩软嫩。", "面条煮熟后放入碗中，浇上牛腩番茄汤，撒葱花。"]
  },
  {
    id: "crispy-chicken", period: "lunch", type: "treat", name: "香脆鸡腿排芝士饭", emoji: "🍗", caption: "脆脆香香的快乐 · 一人份",
    description: "外皮焦香的鸡腿排配上热米饭和融化芝士，是一份值得认真享受的小小放纵。",
    tags: ["酥脆满足", "芝士控", "快乐加倍"], calories: 785,
    nutrition: { protein: 39, carbs: 76, fat: 36, fiber: 3, sodium: 1160 },
    note: "搭配一份清爽蔬菜，口味和营养都更平衡。", time: 30,
    ingredients: [["去骨鸡腿", "160 g"], ["米饭（熟）", "180 g"], ["芝士片", "1 片"], ["生菜", "适量"], ["面包糠", "20 g"], ["食用油", "适量"]],
    steps: ["鸡腿肉擦干，裹上少量面包糠；平底锅加油煎至两面金黄、中心熟透。", "鸡腿排趁热放上芝士片，盖锅焖至芝士融化。", "将鸡腿排放在米饭上，配生菜一起享用。"]
  },
  {
    id: "tofu-shrimp", period: "dinner", type: "healthy", name: "虾仁豆腐菌菇煲", emoji: "🍲", caption: "暖胃清爽 · 一人份",
    description: "虾仁、嫩豆腐和菌菇一起煮成鲜香小锅，蛋白质丰富、清淡不寡味，很适合晚餐。",
    tags: ["高蛋白", "清爽低负担", "暖胃"], calories: 430,
    nutrition: { protein: 36, carbs: 32, fat: 16, fiber: 8, sodium: 690 },
    note: "晚餐清爽有饱足感，也为身体补充优质蛋白。", time: 20,
    ingredients: [["虾仁", "100 g"], ["嫩豆腐", "150 g"], ["香菇", "3 朵"], ["小白菜", "80 g"], ["姜片", "2 片"], ["低盐生抽", "1 茶匙"]],
    steps: ["香菇切片，豆腐切块；锅中加水和姜片煮开。", "加入香菇和豆腐煮 5 分钟，放入虾仁煮至变色熟透。", "加入小白菜和少许低盐生抽，再煮 1–2 分钟即可。"]
  },
  {
    id: "chicken-salad", period: "dinner", type: "healthy", name: "牛油果鸡肉彩虹沙拉", emoji: "🥗", caption: "色彩满满的轻食 · 一人份",
    description: "嫩鸡肉、牛油果和多彩蔬菜搭配酸香柠檬汁，清爽又有饱足感，晚餐也能吃得很丰盛。",
    tags: ["高蛋白", "丰富蔬菜", "优质脂肪"], calories: 485,
    nutrition: { protein: 35, carbs: 36, fat: 22, fiber: 12, sodium: 540 },
    note: "多种蔬菜带来丰富膳食纤维，牛油果增添好脂肪。", time: 20,
    ingredients: [["鸡胸肉", "100 g"], ["牛油果", "1/2 个"], ["混合生菜", "80 g"], ["玉米粒", "40 g"], ["小番茄", "6 颗"], ["柠檬汁", "1 汤匙"]],
    steps: ["鸡胸肉用少许盐和黑胡椒调味，煎熟后静置片刻再切片。", "牛油果切块，小番茄切半，与生菜、玉米粒放入大碗。", "摆上鸡肉，淋柠檬汁和少许橄榄油，轻轻拌匀。"]
  },
  {
    id: "cheese-burger", period: "dinner", type: "treat", name: "双层芝士牛肉汉堡", emoji: "🍔", caption: "认真享受这一口 · 一人份",
    description: "多汁牛肉饼、融化芝士和松软面包的经典组合，今天就把这份快乐吃个够。",
    tags: ["经典快乐", "芝士加倍", "放纵餐"], calories: 820,
    nutrition: { protein: 42, carbs: 68, fat: 42, fiber: 4, sodium: 1320 },
    note: "这是一份放纵餐，搭配无糖饮品和蔬菜更舒服。", time: 25,
    ingredients: [["牛肉饼", "2 片（共 140 g）"], ["汉堡面包", "1 个"], ["芝士片", "2 片"], ["生菜", "2 片"], ["番茄", "2 片"], ["汉堡酱", "1 汤匙"]],
    steps: ["牛肉饼用平底锅煎至熟透，在最后一分钟放上芝士片焖至融化。", "面包切开后切面稍微烘热，涂上汉堡酱。", "依次放上生菜、牛肉饼和番茄片，盖上面包即可。"]
  },
  {
    id: "creamy-pasta", period: "dinner", type: "treat", name: "奶油蘑菇培根意面", emoji: "🍝", caption: "浓郁奶香的治愈晚餐 · 一人份",
    description: "培根煎出香气，蘑菇与奶油裹住每一根意面，浓郁又治愈，是加班夜的快乐补给。",
    tags: ["奶香浓郁", "治愈系", "放纵餐"], calories: 760,
    nutrition: { protein: 27, carbs: 88, fat: 33, fiber: 5, sodium: 1240 },
    note: "奶油风味较浓，配一份蔬菜或沙拉会更均衡。", time: 25,
    ingredients: [["意面（干）", "90 g"], ["培根", "2 片"], ["口蘑", "100 g"], ["淡奶油", "60 ml"], ["帕玛森芝士", "10 g"], ["黑胡椒", "少许"]],
    steps: ["意面按包装时间煮熟，留少许面汤备用；培根切小片，口蘑切片。", "培根煎出油脂后加入蘑菇炒软，倒入淡奶油和少量面汤。", "加入意面拌匀，撒上帕玛森芝士和黑胡椒即可。"]
  },
  {
    id: "chicken-brown-rice", period: "lunch", type: "healthy", name: "黑椒鸡腿糙米饭", emoji: "🍛", caption: "食堂窗口人气搭配 · 一人份",
    description: "黑椒鸡腿配糙米饭和清炒时蔬，熟悉的食堂风味，也能吃得有荤有素。",
    tags: ["食堂风味", "高蛋白", "全谷物"], calories: 585,
    nutrition: { protein: 39, carbs: 68, fat: 16, fiber: 8, sodium: 760 },
    note: "食堂点餐可选糙米、少油蔬菜，酱汁适量。", time: 25,
    ingredients: [["去皮鸡腿肉", "130 g"], ["糙米（熟）", "160 g"], ["青菜", "100 g"], ["胡萝卜", "40 g"], ["黑胡椒汁", "1 汤匙"]],
    steps: ["糙米饭蒸热，鸡腿肉用黑胡椒和少许生抽腌制。", "鸡腿肉煎熟，青菜和胡萝卜少油快炒。", "鸡腿、糙米饭和蔬菜一起装盘，黑椒汁少量淋在鸡肉上。"]
  },
  {
    id: "tomato-egg-rice", period: "lunch", type: "healthy", name: "番茄炒蛋杂粮饭", emoji: "🍅", caption: "家常食堂经典 · 一人份",
    description: "酸甜番茄炒蛋搭配杂粮饭和一份时蔬，简单家常，营养与口味都很舒服。",
    tags: ["家常食堂菜", "植物纤维", "清爽"],
    calories: 510, nutrition: { protein: 22, carbs: 69, fat: 16, fiber: 9, sodium: 650 },
    note: "搭配一份深色蔬菜，让这一餐颜色更丰富。", time: 20,
    ingredients: [["鸡蛋", "2 个"], ["番茄", "2 个"], ["杂粮饭（熟）", "160 g"], ["小青菜", "100 g"], ["食用油", "1 茶匙"]],
    steps: ["番茄切块，鸡蛋打散炒至凝固后盛出。", "少油炒软番茄，放回鸡蛋翻炒；青菜焯熟或少油炒熟。", "配杂粮饭和青菜一起装盘。"]
  },
  {
    id: "fish-tofu-meal", period: "lunch", type: "healthy", name: "清蒸鱼块豆腐套餐", emoji: "🐟", caption: "清淡高蛋白 · 一人份",
    description: "清蒸鱼块、嫩豆腐和两样蔬菜配米饭，像食堂自选窗口一样简单均衡。",
    tags: ["清蒸少油", "高蛋白", "食堂自选"], calories: 545,
    nutrition: { protein: 37, carbs: 62, fat: 15, fiber: 8, sodium: 720 },
    note: "清蒸鱼和豆腐提供蛋白质，蔬菜可以按喜好替换。", time: 25,
    ingredients: [["鱼块", "130 g"], ["嫩豆腐", "100 g"], ["米饭（熟）", "150 g"], ["西兰花", "80 g"], ["木耳", "40 g"], ["蒸鱼豉油", "1 茶匙"]],
    steps: ["鱼块加姜片蒸熟；豆腐切块蒸热或放入鱼盘同蒸。", "西兰花和木耳焯熟，米饭蒸热。", "鱼块少量淋蒸鱼豉油，与豆腐、蔬菜和米饭一起装盘。"]
  },
  {
    id: "potato-beef-rice", period: "lunch", type: "treat", name: "土豆炖牛肉盖饭", emoji: "🥘", caption: "食堂大锅菜的香气 · 一人份",
    description: "软糯土豆和牛肉裹着浓郁汤汁，浇在热米饭上，是食堂里让人惦记的满足一餐。",
    tags: ["食堂经典", "炖菜入味", "满足主食"], calories: 735,
    nutrition: { protein: 34, carbs: 88, fat: 27, fiber: 7, sodium: 1040 },
    note: "炖菜酱汁通常含钠较高，可少浇一些汤汁。", time: 40,
    ingredients: [["牛肉", "120 g"], ["土豆", "150 g"], ["米饭（熟）", "180 g"], ["胡萝卜", "50 g"], ["生抽", "1 汤匙"]],
    steps: ["牛肉切块焯水，土豆和胡萝卜切块。", "牛肉加热水和生抽炖至半软，加入土豆、胡萝卜继续炖熟。", "将土豆牛肉连少量汤汁浇在米饭上。"]
  },
  {
    id: "sweet-sour-pork", period: "lunch", type: "treat", name: "糖醋里脊双拼饭", emoji: "🍚", caption: "食堂窗口的酸甜快乐 · 一人份",
    description: "酸甜酥香的里脊配米饭和清爽配菜，想念食堂窗口时就来一份。",
    tags: ["食堂窗口", "酸甜口", "放纵一下"], calories: 780,
    nutrition: { protein: 32, carbs: 94, fat: 30, fiber: 5, sodium: 1120 },
    note: "糖醋酱汁和炸物风味较浓，配清炒蔬菜更平衡。", time: 30,
    ingredients: [["猪里脊", "140 g"], ["米饭（熟）", "180 g"], ["青椒", "50 g"], ["菠萝", "40 g"], ["糖醋汁", "2 汤匙"], ["淀粉", "适量"]],
    steps: ["里脊切条，薄薄裹淀粉后煎或炸至熟透。", "锅中加糖醋汁、青椒和菠萝，放入里脊快速翻匀。", "糖醋里脊配米饭和一份蔬菜装盘。"]
  },
  {
    id: "curry-chicken", period: "lunch", type: "treat", name: "食堂咖喱鸡排饭", emoji: "🍛", caption: "浓香咖喱浇饭 · 一人份",
    description: "酥香鸡排遇上浓郁咖喱汁，再配热米饭，熟悉的食堂套餐也可以偶尔安排。",
    tags: ["食堂套餐", "浓郁咖喱", "酥香满足"], calories: 810,
    nutrition: { protein: 35, carbs: 96, fat: 34, fiber: 6, sodium: 1200 },
    note: "咖喱汁和鸡排较浓郁，蔬菜可以加量、酱汁少一些。", time: 30,
    ingredients: [["鸡排", "140 g"], ["米饭（熟）", "180 g"], ["土豆", "80 g"], ["胡萝卜", "50 g"], ["咖喱块", "1 小块"]],
    steps: ["土豆、胡萝卜切块煮至软熟，加入咖喱块搅匀。", "鸡排煎至两面金黄并确保中心熟透。", "米饭盛碗，放上鸡排并浇少量咖喱蔬菜汁。"]
  },
  {
    id: "chicken-veggie-set", period: "dinner", type: "healthy", name: "香菇蒸鸡杂粮套餐", emoji: "🍱", caption: "清爽食堂自选 · 一人份",
    description: "香菇蒸鸡配杂粮饭和清炒青菜，晚餐吃得清爽，也能补足蛋白质。",
    tags: ["蒸制少油", "杂粮主食", "食堂自选"], calories: 530,
    nutrition: { protein: 37, carbs: 62, fat: 14, fiber: 8, sodium: 700 },
    note: "蒸鸡保留食材原味，青菜可按食堂当日供应替换。", time: 25,
    ingredients: [["去皮鸡腿肉", "120 g"], ["香菇", "60 g"], ["杂粮饭（熟）", "150 g"], ["上海青", "100 g"], ["生抽", "1 茶匙"]],
    steps: ["鸡肉切块与香菇、生抽拌匀，蒸 15–18 分钟至熟。", "杂粮饭蒸热，上海青焯熟或少油快炒。", "蒸鸡、杂粮饭和青菜一起装盘。"]
  },
  {
    id: "tofu-egg-rice", period: "dinner", type: "healthy", name: "家常豆腐鸡蛋盖饭", emoji: "🥚", caption: "简单暖心的家常晚餐 · 一人份",
    description: "豆腐鸡蛋配菌菇和米饭，食材常见、做法简单，适合轻松解决一顿晚餐。",
    tags: ["经济实惠", "植物蛋白", "家常搭配"], calories: 505,
    nutrition: { protein: 27, carbs: 58, fat: 18, fiber: 7, sodium: 680 },
    note: "豆腐与鸡蛋搭配，补充蛋白质同时兼顾饱腹感。", time: 20,
    ingredients: [["北豆腐", "150 g"], ["鸡蛋", "1 个"], ["米饭（熟）", "140 g"], ["香菇", "50 g"], ["小白菜", "80 g"]],
    steps: ["豆腐切块煎至表面微黄，鸡蛋炒熟后盛出。", "香菇炒香，加少许水和豆腐焖 3 分钟，再放回鸡蛋。", "配米饭和焯熟的小白菜装盘。"]
  },
  {
    id: "shrimp-corn-set", period: "dinner", type: "healthy", name: "虾仁玉米时蔬饭", emoji: "🌽", caption: "鲜甜清爽的晚餐套餐 · 一人份",
    description: "鲜虾、玉米和两样时蔬搭配米饭，清清爽爽的一盘，吃完刚刚好。",
    tags: ["高蛋白", "蔬菜丰富", "清爽晚餐"], calories: 490,
    nutrition: { protein: 34, carbs: 60, fat: 12, fiber: 9, sodium: 610 },
    note: "虾仁与多彩蔬菜让晚餐清爽又有营养。", time: 20,
    ingredients: [["虾仁", "110 g"], ["米饭（熟）", "140 g"], ["玉米粒", "50 g"], ["西兰花", "80 g"], ["胡萝卜", "40 g"]],
    steps: ["虾仁擦干，西兰花和胡萝卜切成适口大小。", "少油炒熟虾仁，加入蔬菜和玉米粒翻炒至熟。", "搭配蒸热的米饭装盘，调味适量即可。"]
  },
  {
    id: "pork-cutlet-rice", period: "dinner", type: "treat", name: "日式炸猪排咖喱饭", emoji: "🍛", caption: "食堂热门咖喱套餐 · 一人份",
    description: "外酥里嫩的猪排配浓郁咖喱和米饭，食堂热门口味，偶尔犒劳一下自己。",
    tags: ["食堂热门", "酥脆猪排", "咖喱满足"], calories: 830,
    nutrition: { protein: 37, carbs: 98, fat: 36, fiber: 6, sodium: 1280 },
    note: "炸物与咖喱热量较高，可搭配蔬菜并适量取用咖喱汁。", time: 35,
    ingredients: [["猪里脊", "140 g"], ["米饭（熟）", "180 g"], ["面包糠", "25 g"], ["土豆", "60 g"], ["胡萝卜", "40 g"], ["咖喱块", "1 小块"]],
    steps: ["猪里脊拍松，裹蛋液和面包糠，煎或炸至中心熟透。", "土豆、胡萝卜煮软，加入咖喱块搅匀。", "猪排切条，搭配米饭和咖喱蔬菜装盘。"]
  },
  {
    id: "mapo-tofu-rice", period: "dinner", type: "treat", name: "麻婆豆腐肉末盖饭", emoji: "🍚", caption: "麻辣下饭的食堂经典 · 一人份",
    description: "嫩豆腐裹着麻辣肉末酱汁，再来一碗热米饭，是让人胃口大开的食堂经典。",
    tags: ["食堂经典", "麻辣下饭", "放纵餐"], calories: 735,
    nutrition: { protein: 29, carbs: 82, fat: 30, fiber: 5, sodium: 1180 },
    note: "麻婆酱料钠含量较高，喜欢清淡口味可减少酱料。", time: 20,
    ingredients: [["嫩豆腐", "180 g"], ["猪肉末", "60 g"], ["米饭（熟）", "180 g"], ["豆瓣酱", "1 茶匙"], ["葱花", "少许"]],
    steps: ["豆腐切块；少油炒香肉末和少量豆瓣酱。", "加入豆腐和少量水，小火煮 5 分钟至入味。", "麻婆豆腐浇在米饭上，撒葱花即可。"]
  },
  {
    id: "fried-chicken-rice", period: "dinner", type: "treat", name: "香酥鸡排双拼饭", emoji: "🍗", caption: "食堂炸鸡窗口的快乐 · 一人份",
    description: "大块香酥鸡排配米饭和两样小菜，食堂熟悉的双拼套餐，香香脆脆很满足。",
    tags: ["食堂双拼", "香酥鸡排", "满足晚餐"], calories: 790,
    nutrition: { protein: 38, carbs: 82, fat: 34, fiber: 5, sodium: 1190 },
    note: "炸鸡排油脂较多，选配清炒或凉拌蔬菜更合适。", time: 30,
    ingredients: [["鸡排", "150 g"], ["米饭（熟）", "170 g"], ["面包糠", "25 g"], ["黄瓜", "60 g"], ["紫甘蓝", "50 g"]],
    steps: ["鸡排裹少量面包糠，煎或炸至金黄并确认中心熟透。", "黄瓜、紫甘蓝切丝，简单凉拌。", "鸡排配米饭和凉拌蔬菜一起装盘。"]
  },
  {
    id: "braised-pork-rice", period: "dinner", type: "treat", name: "红烧肉卤蛋盖饭", emoji: "🥚", caption: "食堂卤味窗口 · 一人份",
    description: "软糯红烧肉和入味卤蛋配热米饭，浓香下饭，是食堂里经典的满足系晚餐。",
    tags: ["食堂卤味", "浓香入味", "放纵一下"], calories: 850,
    nutrition: { protein: 32, carbs: 78, fat: 42, fiber: 4, sodium: 1360 },
    note: "红烧汁和卤味钠含量偏高，可以少浇汁并搭配蔬菜。", time: 45,
    ingredients: [["五花肉", "120 g"], ["鸡蛋", "1 个"], ["米饭（熟）", "170 g"], ["青菜", "80 g"], ["红烧汁", "适量"]],
    steps: ["五花肉切块焯水，与红烧汁和热水小火炖至软糯。", "鸡蛋煮熟去壳，放入肉汁中继续卤至入味。", "配米饭和焯熟青菜装盘，红烧汁少量浇在肉上。"]
  }
];

const macroDefinitions = [
  { key: "protein", label: "蛋白质", unit: "g", maximum: 50 },
  { key: "carbs", label: "碳水化合物", unit: "g", maximum: 100 },
  { key: "fat", label: "脂肪", unit: "g", maximum: 50 },
  { key: "fiber", label: "膳食纤维", unit: "g", maximum: 25 },
  { key: "sodium", label: "钠", unit: "mg", maximum: 2000 }
];

const state = { period: "lunch", type: "healthy", meal: recipes[0] };
const elements = {
  visual: document.querySelector("#meal-visual"),
  badge: document.querySelector("#meal-badge"),
  time: document.querySelector("#meal-time"),
  emoji: document.querySelector("#meal-emoji"),
  caption: document.querySelector("#meal-caption"),
  kicker: document.querySelector("#meal-kicker"),
  name: document.querySelector("#meal-name"),
  calories: document.querySelector("#meal-calories"),
  description: document.querySelector("#meal-description"),
  tags: document.querySelector("#meal-tags"),
  nutritionCalories: document.querySelector("#nutrition-calories"),
  macroList: document.querySelector("#macro-list"),
  nutritionNote: document.querySelector("#nutrition-note"),
  recipeTime: document.querySelector("#recipe-time"),
  ingredients: document.querySelector("#ingredient-list"),
  steps: document.querySelector("#step-list"),
  menuCount: document.querySelector("#menu-count")
};

function renderMeal(meal) {
  state.meal = meal;
  const isTreat = meal.type === "treat";
  const typeLabel = isTreat ? "放纵餐" : "健康餐";
  const periodLabel = meal.period === "lunch" ? "午餐" : "晚餐";

  elements.visual.classList.toggle("is-treat", isTreat);
  elements.badge.textContent = isTreat ? "快乐放纵" : "清爽健康";
  elements.time.replaceChildren(document.createTextNode(`${periodLabel}灵感 `));
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  elements.time.append(arrow);
  elements.emoji.textContent = meal.emoji;
  elements.caption.textContent = meal.caption;
  elements.kicker.textContent = `今天的${periodLabel} · ${typeLabel}`;
  elements.name.textContent = meal.name;
  elements.calories.textContent = meal.calories;
  elements.description.textContent = meal.description;
  elements.tags.replaceChildren(...meal.tags.map((tag) => {
    const element = document.createElement("span");
    element.className = "food-tag";
    element.textContent = tag;
    return element;
  }));
  elements.nutritionCalories.textContent = meal.calories;
  elements.nutritionNote.textContent = meal.note;
  elements.macroList.replaceChildren(...macroDefinitions.map((macro) => {
    const row = document.createElement("div");
    row.className = "macro-row";
    const percentage = Math.min(100, Math.round((meal.nutrition[macro.key] / macro.maximum) * 100));
    row.innerHTML = `<span class="macro-name">${macro.label}</span><span class="macro-track"><span class="macro-fill" style="width: ${percentage}%"></span></span><span class="macro-value">${meal.nutrition[macro.key]} ${macro.unit}</span>`;
    return row;
  }));
  elements.recipeTime.textContent = `⏱ 约 ${meal.time} 分钟`;
  elements.ingredients.replaceChildren(...meal.ingredients.map(([name, amount]) => {
    const item = document.createElement("li");
    const ingredientName = document.createElement("span");
    const ingredientAmount = document.createElement("span");
    ingredientName.textContent = name;
    ingredientAmount.textContent = amount;
    item.append(ingredientName, ingredientAmount);
    return item;
  }));
  elements.steps.replaceChildren(...meal.steps.map((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    return item;
  }));
  const periodRecipes = recipes.filter((item) => item.period === state.period);
  const healthyCount = periodRecipes.filter((item) => item.type === "healthy").length;
  const treatCount = periodRecipes.filter((item) => item.type === "treat").length;
  elements.menuCount.textContent = `${periodLabel}共 ${periodRecipes.length} 道：健康餐 ${healthyCount} · 放纵餐 ${treatCount}${meal.cafeteria ? " · 食堂自选随机搭配" : ""}`;
}

function chooseMeal({ replace = false } = {}) {
  const available = recipes.filter((meal) => meal.period === state.period && meal.type === state.type);
  const alternatives = available.filter((meal) => meal.id !== state.meal.id);
  const choices = replace && alternatives.length > 0 ? alternatives : available;
  renderMeal(choices[Math.floor(Math.random() * choices.length)]);
}

const cafeteriaMenus = {
  healthy: {
    staple: [
      { name: "杂粮饭", amount: "150 g", calories: 210, protein: 5, carbs: 44, fat: 2, fiber: 4, sodium: 10 },
      { name: "米饭", amount: "150 g", calories: 195, protein: 4, carbs: 43, fat: 0, fiber: 1, sodium: 5 },
      { name: "蒸紫薯", amount: "180 g", calories: 165, protein: 3, carbs: 38, fat: 0, fiber: 5, sodium: 40 }
    ],
    protein: [
      { name: "香菇蒸鸡", amount: "120 g", calories: 210, protein: 30, carbs: 5, fat: 8, fiber: 1, sodium: 420 },
      { name: "番茄炒蛋", amount: "一份", calories: 180, protein: 12, carbs: 12, fat: 10, fiber: 3, sodium: 380 },
      { name: "清蒸鱼块", amount: "120 g", calories: 160, protein: 27, carbs: 2, fat: 5, fiber: 0, sodium: 350 },
      { name: "家常豆腐", amount: "150 g", calories: 190, protein: 15, carbs: 10, fat: 11, fiber: 3, sodium: 400 }
    ],
    vegetable: [
      { name: "清炒时蔬", amount: "100 g", calories: 75, protein: 3, carbs: 9, fat: 3, fiber: 4, sodium: 180 },
      { name: "凉拌黄瓜", amount: "100 g", calories: 45, protein: 2, carbs: 7, fat: 1, fiber: 2, sodium: 220 },
      { name: "西兰花胡萝卜", amount: "100 g", calories: 65, protein: 4, carbs: 11, fat: 1, fiber: 5, sodium: 140 },
      { name: "木耳炒白菜", amount: "100 g", calories: 60, protein: 3, carbs: 8, fat: 2, fiber: 3, sodium: 160 }
    ]
  },
  treat: {
    staple: [
      { name: "米饭", amount: "180 g", calories: 235, protein: 5, carbs: 52, fat: 1, fiber: 1, sodium: 5 },
      { name: "炒饭", amount: "180 g", calories: 330, protein: 9, carbs: 48, fat: 11, fiber: 2, sodium: 520 },
      { name: "葱油拌面", amount: "一份", calories: 390, protein: 10, carbs: 66, fat: 10, fiber: 3, sodium: 760 }
    ],
    protein: [
      { name: "糖醋里脊", amount: "120 g", calories: 310, protein: 22, carbs: 24, fat: 14, fiber: 1, sodium: 620 },
      { name: "红烧肉", amount: "100 g", calories: 380, protein: 18, carbs: 12, fat: 29, fiber: 0, sodium: 620 },
      { name: "香酥鸡排", amount: "120 g", calories: 330, protein: 27, carbs: 16, fat: 18, fiber: 1, sodium: 680 },
      { name: "鱼香肉丝", amount: "一份", calories: 270, protein: 20, carbs: 18, fat: 14, fiber: 3, sodium: 720 }
    ],
    vegetable: [
      { name: "地三鲜", amount: "100 g", calories: 160, protein: 3, carbs: 19, fat: 8, fiber: 4, sodium: 360 },
      { name: "干锅包菜", amount: "100 g", calories: 110, protein: 3, carbs: 12, fat: 6, fiber: 4, sodium: 380 },
      { name: "酸辣土豆丝", amount: "100 g", calories: 125, protein: 2, carbs: 20, fat: 4, fiber: 3, sodium: 420 },
      { name: "蒜蓉西兰花", amount: "100 g", calories: 85, protein: 4, carbs: 10, fat: 3, fiber: 5, sodium: 250 }
    ]
  }
};

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function createCafeteriaMeal() {
  const menu = cafeteriaMenus[state.type];
  const staple = randomItem(menu.staple);
  const protein = randomItem(menu.protein);
  const vegetableChoices = [...menu.vegetable];
  const firstVegetable = randomItem(vegetableChoices);
  const secondVegetable = randomItem(vegetableChoices.filter((item) => item.name !== firstVegetable.name));
  const selected = [staple, protein, firstVegetable, secondVegetable];
  const nutrition = Object.fromEntries(
    ["protein", "carbs", "fat", "fiber", "sodium"].map((key) => [key, selected.reduce((total, item) => total + item[key], 0)])
  );
  const meal = {
    id: `cafeteria-${Date.now()}`,
    period: state.period,
    type: state.type,
    cafeteria: true,
    name: `食堂自选：${staple.name} + ${protein.name}`,
    emoji: "🍱",
    caption: "主食 + 荤菜 + 两份蔬菜 · 一人份",
    description: `这次随机搭配了${staple.name}、${protein.name}、${firstVegetable.name}和${secondVegetable.name}，像在食堂自选窗口一样按喜好组合。`,
    tags: ["食堂自选", state.type === "healthy" ? "均衡搭配" : "满足口味", "随机组合"],
    calories: selected.reduce((total, item) => total + item.calories, 0),
    nutrition,
    note: "营养值按本次随机选中的菜品估算；食堂做法和实际份量会影响结果。",
    time: 20,
    ingredients: selected.map((item) => [item.name, item.amount]),
    steps: ["先选一份主食，再搭配一份荤菜或蛋白质主菜。", "从食堂窗口选两份蔬菜，尽量搭配不同颜色。", "按估算份量装盘；少淋酱汁可减少额外钠和油脂。"]
  };
  renderMeal(meal);
}

document.querySelectorAll("[data-period]").forEach((button) => {
  button.addEventListener("click", () => {
    state.period = button.dataset.period;
    document.querySelectorAll("[data-period]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    chooseMeal();
  });
});

document.querySelectorAll("[data-type]").forEach((button) => {
  button.addEventListener("click", () => {
    state.type = button.dataset.type;
    document.querySelectorAll("[data-type]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    chooseMeal();
  });
});

document.querySelector("#replace-button").addEventListener("click", () => chooseMeal({ replace: true }));
document.querySelector("#cafeteria-button").addEventListener("click", createCafeteriaMeal);
renderMeal(state.meal);
