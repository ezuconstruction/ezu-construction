// Simplified Chinese text for each service-area page. Structure, icons and links come from locations.ts;
// housing eras and rules are matched by position. Neighbourhood names stay in English, as on street signs.
import type { Location } from './locations';

type Text = Pick<Location, 'title' | 'description' | 'lede' | 'intro'> & {
  housing: { era: string; body: string }[];
  rules: { title: string; body: string; link?: string }[];
};

const zh: Record<string, Text> = {
  markham: {
    title: '万锦装修公司与定制住宅建造商',
    description: '总部位于万锦：在于人村、Cornell、Berczy、Thornhill 及全市建造定制住宅，做扩建、厨房、地下室和合法出租单元。普通话沟通。',
    lede: '我们的办公室就在 Steelcase Road，所以万锦是我们最常施工的地方，也是我们当天就能上门的地方。',
    intro: [
      '万锦的房子比多伦多年轻，但种类同样丰富：Thornhill 和 Milliken 的 1970、80 年代错层屋和两层屋，于人村和 Berczy 的 1990 年代家庭住宅，Cornell 的新城市主义街区，以及 Angus Glen 和 Devil’s Elbow 的大地块豪宅。每个年代都有各自的装修需求，我们大多都做过。',
      '万锦也是全国华人社区最大的城市之一。我们可以用普通话或英语带您了解项目的每一步，图纸、报价和工期安排都写得让全家人都能看懂。',
    ],
    housing: [
      { era: '1960–1980 年代', body: 'Thornhill、Bayview Glen 和 Markham Village 的平房、背错层和两层屋。常见工程：打通一楼、新厨房、地下室出租单元，以及在较大地块上拆旧建新。' },
      { era: '1990–2000 年代', body: '于人村、Berczy、Cachet 和 Milliken 的两层家庭住宅。常见工程：原装厨房和主卫翻新、打开封闭的家庭厅，以及把已装修的地下室改成合法出租单元。' },
      { era: '2000 年代以后', body: 'Cornell、Wismer 和 Cathedraltown。以室内升级、地下室装修为主，地块允许时可加建车库上方或后院小屋。' },
    ],
    rules: [
      { title: '直径 20 厘米起需要树木许可证', body: '万锦的树木保护条例（2023-164）规定，伤害或移除胸径 20 厘米及以上的私人树木需要许可证，包括开挖造成的根部损伤，所以树木保护要在设计阶段考虑。', link: '万锦市树木许可证' },
      { title: '四个历史保护区', body: '于人村、Markham Village、Thornhill 和 Buttonville 是历史保护区。区内的外立面改动、扩建和新建房屋，除建筑许可证外还需要历史保护审批。' },
      { title: '第二、第三个单元', body: '省级规定允许大多数住宅地块拥有最多三个单元，只要符合分区条例的退界和建筑规范。合法地下室出租单元是万锦最常见的做法。' },
      { title: '溪谷地带', body: '靠近 Rouge River 或其支流的地块，可能位于多伦多及区域保护局（TRCA）的管控范围内，施工前需要 TRCA 许可证。' },
    ],
  },
  toronto: {
    title: '多伦多装修公司与定制住宅建造商',
    description: '在多伦多、北约克、士嘉堡和怡陶碧谷建造定制住宅，做扩建、厨房、地下室和后巷屋。真实项目与本地规定。普通话沟通。',
    lede: '从市中心百年历史的半独立屋，到北约克和怡陶碧谷的战后平房，多伦多的房子墙里都藏着历史。我们会提前做好准备。',
    intro: [
      '多伦多的房屋最老、种类最多，建房规定也最详细。在 Leslieville 和在 Willowdale 做装修，结构、许可证和邻里情况可能完全不同。',
      '我们在全市施工，包括北约克、士嘉堡和怡陶碧谷，承接厨房、全屋翻新、扩建、合法地下室出租单元、后巷屋和花园屋，以及填充地块上的新建定制住宅。',
    ],
    housing: [
      { era: '1940 年以前', body: '维多利亚和爱德华时期的半独立屋和独立屋。常见灰泥墙、老式布线（knob-and-tube）、毛石或砌块地基，以及需要下挖加深的低矮地下室。' },
      { era: '1945–1970 年', body: '北约克、士嘉堡和怡陶碧谷大地块上的平房和两层屋。最常见的加建二层和拆旧建新对象。' },
      { era: '1970 年代以后', body: '镇屋、公寓和较新的独立屋。以室内装修为主，公寓的管理规定会影响工期安排。' },
    ],
    rules: [
      { title: '直径 30 厘米起需要树木许可证', body: '在多伦多，伤害或移除直径 30 厘米及以上的私人树木需要许可证，市政府所有的树木不论大小都需要。在溪谷保护区内，任何大小的树木都受保护。', link: '多伦多市树木许可证' },
      { title: '后巷屋、花园屋和多单元住宅', body: '多伦多允许无需改分区建后巷屋、花园屋，以及每块住宅地最多四个单元，需符合面积、高度和间距方面的分区规定。' },
      { title: '历史保护区', body: 'Cabbagetown、Rosedale 和 Wychwood Park 等社区是历史保护区。外立面改动除许可证外还需要历史保护审查。' },
      { title: '调整委员会', body: '多伦多很多地块已接近分区限制。超出限制的扩建需要向调整委员会（Committee of Adjustment）申请小幅变更，通常多花三到六个月。' },
    ],
  },
  'richmond-hill': {
    title: '列治文山装修公司与定制住宅建造商',
    description: '在列治文山做厨房、装修、扩建和定制住宅，从 Bayview Hill、Mill Pond 到 Oak Ridges。本地规定与真实项目。普通话沟通。',
    lede: '列治文山有大多伦多地区最大的一些住宅地块，这也是为什么这里很多老房子选择翻新或重建，而不是出售。',
    intro: [
      '列治文山从 Yonge 和 Major Mackenzie 一带 1950 年代的街道，一直延伸到 Oak Ridges Moraine 上的新社区。南部社区，尤其是 Bayview Hill 和 South Richvale，地块很大，过时的房子往往值得拆旧重建成定制住宅。再往北，较新的房子大多需要翻新厨房、浴室和地下室。',
      '我们在全市翻新和建房，很多列治文山的客户更喜欢用普通话规划项目。我们可以做到。',
    ],
    housing: [
      { era: '1950–1970 年代', body: 'Mill Pond、Crosby 和 Harding 一带的平房和侧错层。常见的扩建、全屋翻新和重建对象。' },
      { era: '1980–1990 年代', body: 'Bayview Hill、South Richvale 和 Doncrest 的大型两层住宅。厨房、主卫和一楼常常还是原装的，很多地块可以建大得多的房子。' },
      { era: '2000 年代以后', body: 'Jefferson、Westbrook、Oak Ridges 和 Elgin Mills。以室内装修和地下室装修为主。' },
    ],
    rules: [
      { title: '直径 15 厘米起需要树木许可证', body: '列治文山现行的树木保护条例保护直径 15 厘米起的私人树木，比很多旧资料说的 20 厘米更低。在树木附近开挖之前请先核实。', link: '列治文山树木许可证' },
      { title: 'Oak Ridges Moraine', body: '列治文山北部位于 Oak Ridges Moraine 上，省级和保护局的规定可能限制在自然地貌附近建房。我们会在可行性评估阶段核查。' },
      { title: '历史建筑', body: '列治文山没有历史保护区，但 Yonge Street 老镇一带的许多房产被列入名录或指定保护，需要额外的历史保护审查。' },
      { title: '第二个单元', body: '和安省其他地方一样，列治文山大多数地块可以有第二、第三个单元，需符合分区退界和建筑规范。' },
    ],
  },
  vaughan: {
    title: '旺市定制住宅建造商与装修公司',
    description: '在旺市建造定制住宅，做扩建和装修：Woodbridge、Maple、Kleinburg、Thornhill 和 Vellore。查看我们的旺市定制住宅和本地建房规定。普通话沟通。',
    lede: '我们 2025 年在旺市建造了一栋定制住宅。这里成熟的家庭住宅和大地块豪宅并存，让我们一次次回到这里。',
    intro: [
      '旺市较早的社区，Woodbridge、Maple 和 Thornhill，是为大家庭而建的，很多房子现在已经到了焕新的时候：新厨房、重新规划一楼、给下一代住的合法地下室单元，或在原地块上彻底重建。',
      'Kleinburg 及周边的豪宅街区是另一类工程：更大的定制住宅，常有精细的木作、石材和造型天花。我们的旺市定制住宅就是这种完成度的一个例子。',
    ],
    housing: [
      { era: '1970–1990 年代', body: 'Woodbridge、Thornhill 和 Maple 的大型两层住宅，常有冷藏地窖和原装厨房。常见工程：一楼翻新和地下室出租单元。' },
      { era: '1990–2010 年代', body: 'Vellore、Sonoma Heights 和 Patterson。厨房、主卫和地下室装修。' },
      { era: '大地块豪宅', body: 'Kleinburg、Islington Woods 和 Woodbridge 部分地区。定制住宅和大型扩建。' },
    ],
    rules: [
      { title: '直径 20 厘米起需要树木许可证', body: '旺市的树木保护条例（052-2018）规定，伤害或移除离地 1.4 米处直径 20 厘米及以上的树木需要许可证，多干树木合计 20 厘米也算。', link: '旺市市政府' },
      { title: '四个历史保护区', body: 'Kleinburg-Nashville、Maple、Thornhill 和 Woodbridge 是历史保护区。区内新建房屋和外立面改动需要历史保护审批。' },
      { title: '溪谷与 Humber 河', body: '靠近 Humber 和 Don 河水系的地块，可能位于 TRCA 管控范围内，需要保护局许可证。' },
      { title: '新增单元', body: '旺市按省级规定允许新增住宅单元，需符合其分区条例。合法地下室单元是最常见的选择。' },
    ],
  },
};

/** The location with its words in the requested language. */
export function localizeLocation(l: Location, lang: 'en' | 'zh' = 'en'): Location {
  if (lang === 'en') return l;
  const z = zh[l.slug];
  return {
    ...l,
    name: l.zh,
    title: z.title, description: z.description, lede: z.lede, intro: z.intro,
    housing: z.housing,
    rules: l.rules.map((r, i) => ({ ...r, title: z.rules[i].title, body: z.rules[i].body, link: r.link && { ...r.link, label: z.rules[i].link ?? r.link.label } })),
  };
}

// Other places we work, for the service-area index
export const areaZh: Record<string, string> = {
  'North York': '北约克', Scarborough: '士嘉堡', Etobicoke: '怡陶碧谷', Unionville: '于人村', Thornhill: 'Thornhill',
  Aurora: '奥罗拉', Newmarket: '新市', Stouffville: 'Stouffville', Pickering: '皮克林', Mississauga: '密西沙加',
};
