const menuList = [
  {
    title: 'ホームページ', // 菜单标题名称
    key: '/home', // 对应的path
    icon: 'home', // 图标名称
    isPublic: true, // 公开的
  },
  {
    title: '商品管理',
    key: '/products',
    icon: 'appstore',
    children: [ // 子菜单列表
      {
        title: 'カテゴリーリスト',
        key: '/category',
        icon: 'bars'
      },
      {
        title: '商品リスト',
        key: '/product',
        icon: 'tool'
      },
    ]
  },

  {
    title: 'ユーザ管理',
    key: '/user',
    icon: 'user'
  },
  {
    title: 'ロール管理',
    key: '/role',
    icon: 'safety',
  },

  {
    title: '商品データの可視化',
    key: '/charts',
    icon: 'area-chart',
    children: [
      {
        title: '棒グラフ',
        key: '/charts/bar',
        icon: 'bar-chart'
      },
      {
        title: '折れ線グラフ',
        key: '/charts/line',
        icon: 'line-chart'
      },
      {
        title: 'パイグラフ',
        key: '/charts/pie',
        icon: 'pie-chart'
      },
    ]
  },

  {
    title: '注文管理',
    key: '/order',
    icon: 'windows',
  },
]

export default menuList