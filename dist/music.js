const ap = new APlayer({
    container: document.getElementById('aplayer'),
	lrcType: 1,
    fixed: true,
    autoplay: false,
    audio: [
    {
        name: "lemon",
        artist: '米津玄師',
        url: 'http://www.ytmp3.cn/down/49951.mp3',
        cover: 'http://img.ytmp3.cn/image/56.jpg',
		lrc: '[00:00.850]如果这一切都是梦境该有多好\n[00:06.650]至今仍能与你在梦中相遇\n[00:12.340]如同取回遗忘之物一般\n[00:17.660]细细拂去将回忆覆盖的尘埃\n[00:25.820]最终是你让我懂得了\n[00:31.580]这世间亦有无法挽回的幸福\n[00:36.980]那些未对他人提及过的黑暗往事\n[00:42.550]如果不曾有你的话 它们将永远沉睡在黑暗中\n[00:48.230]我知道这世上一定没有\n[00:53.750]比这更令人难过的事情了\n[00:58.660]那日的悲伤\n[01:01.410]与那日的痛苦\n[01:04.150]连同深爱着这一切的你\n[01:09.800]化作了深深烙印在我心中的\n[01:12.730]苦涩柠檬的香气\n[01:15.730]在雨过天晴前都无法归去\n[01:21.240]时至今日 你仍是我的光芒\n[01:37.600]在黑暗中追寻着你的身影\n[01:42.980]那轮廓至今仍鲜明地刻印于心\n[01:48.800]每当遇到无法承受的苦痛时\n[01:54.400]总是不禁泪如泉涌\n[01:59.990]你都经历过什么\n[02:02.760]又目睹过什么呢\n[02:05.580]脸上浮现着我不曾见过的神情\n[02:10.390]如果你正在什么地方\n[02:13.380]与我一样\n[02:15.950]终日过着以泪洗面的寂寞生活的话\n[02:21.470]就请你将我的一切全部遗忘吧\n[02:27.490]这是我发自内深处唯一的祈愿\n[02:32.910]时至今日 你仍是我的光芒\n[02:41.600]我深深地恋慕着你 甚至超出了我自己的想象\n[02:52.410]自此每当想起你 都如同窒息般痛苦\n[03:03.360]你曾亲密伴我身旁 如今却如烟云般消散\n[03:14.140]唯一能确定的是 我永远都不会将你遗忘\n[03:30.430]那日的悲伤\n[03:33.200]与那日的痛苦\n[03:35.910]连同深爱着这一切的你\n[03:41.320]化作了深深烙印在我心中的\n[03:44.280]苦涩柠檬的香气\n[03:47.730]在雨过天晴前都无法归去\n[03:52.840]如同被切开的半个柠檬一般\n[03:58.590]时至今日 你仍是我的光芒',
    },
    {
        name: 'Loser',
        artist: '米津玄師',
        url: 'http://www.ytmp3.cn/down/49909.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002kl9Hs4WaKFO.jpg?max_age=2592000',
		lrc: '[00:01.00]米津玄師\n[00:30.62]いつもどおりの通り独り こんな日々もはや懲り懲り 一如既往日复一日 这种日子再难承受\n[00:34.40]もうどこにも行けやしないのに 夢見ておやすみ 明明已经无处可逃 去梦中吧祝你好眠\n[00:38.38]いつでも僕らはこんな風に ぼんくらな夜に飽き飽き 我们一直都是如此 厌倦着这样昏昏沉沉的夜\n[00:42.21]また踊り踊り出す明日に 出会うためにさよなら 仍然还要继续起舞 为了明天的相会挥手作别\n[00:46.93]歩き回ってやっとついた ここはどうだ楽園か？ 四处彷徨后终于到达 这里总该是乐园了吧？\n[00:50.88]今となっちゃもうわからない 可事到如今已经不敢确定\n[00:54.84]四半世紀の結果出来た 经历四分之一世纪所得的的结果\n[00:56.84]青い顔のスーパースターがお腹すかしては待ってる 面色惨白的Superstar饿着肚子大笑着\n[01:02.28]アイムアルーザー どうせだったら遠吠えだっていいだろう I m a LOSER 所以就算虚张声势也无所谓吧\n[01:06.12]もう一回もう一回行こうぜ 僕らの声 再一次 再一次穿透吧 我们的声音\n[01:10.12]アイムアルーザー ずっと前から聞こえてた I m a LOSER 很久以前就已经听到\n[01:13.61]いつかポケットに隠した声が 那不知何时 被深藏于口袋之中的声音\n[01:26.11]ああだのこうだの知ったもんか 幸先の空は悪天候 这样那样的知晓之事 预兆出不祥的天空\n[01:29.98]ほら窓から覗いた摩天楼 からすりゃ塵のよう 快看窗外的摩天楼 照亮的似乎尽是灰尘\n[01:33.99]イアンもカートも昔の人よ 中指立ててもしょうがないの 变了的或没变的曾经的人们 仍然呆立着束手无措\n[01:37.86]今勝ち上がるためのお勉強 朗らかな表情 现在做着为了向上的努力 展露着无比开朗的表情\n[01:42.18]踊る阿呆に見る阿呆 我らそれを端から笑う阿呆 跳舞的傻瓜 看着的傻瓜 在我们身边笑着的傻瓜\n[01:45.64]デカイ自意識抱え込んではもう 磨耗 すり減って残る酸っぱい葡萄 紧抱着的巨大的自我意识已被磨耗 像被消磨着残留下的酸涩的葡萄\n[01:49.82]膝抱えてもなんもねえ ほら長い前髪で前が見えねえ 抱着膝盖也不会发生什么 看吧 长长的刘海已遮住了前方\n[01:53.47]笑っちまうねパッと沸き立って フワッと消えちゃえるこんな輪廻 不禁笑出了声 突然间厌倦了 可能会猛然间消失的这样的轮回\n[01:57.76]愛されたいならそう言おうぜ 思ってるだけじゃ伝わらないね 想要被爱的话就那样说出来吧 只是想的话是传递不了的\n[02:01.66]永遠の淑女もそっぽ向いて 天国は遠く向こうのほうへ 永远的居所也不予理睬 天国依然在遥远的另一端\n[02:05.67]ああわかってるって 深く転がる 俺は負け犬 啊啊 已经明白了 摔了个大跟头的 我是一只败犬\n[02:09.67]ただどこでもいいから遠くへ行きたいんだ それだけなんだ 只是想去往在远处的任何地方 只是这样\n[02:13.91]耳をすませ遠くで今 響きだした音を逃すな 呼吸を整えて 用心倾听 不要错过 远方正在响彻的声音 调整好呼吸\n[02:22.04]いつかは出会えるはずの 黄金の色したアイオライトを 那何时也许会遇见的 散发金色光芒的页里的光\n[02:26.13]きっと掴んで離すな 一定要牢牢抓住不让它流走\n[02:29.56]アイムアルーザー なんもないならどうなったっていいだろう I m a LOSER 什么都没有的话变成怎样都无所谓吧\n[02:33.53]うだうだしてフラフラしていちゃ今に 灰 左様なら 放声高歌 悠然自得 在离开之前 让我们告别吧\n[02:37.47]アイムアルーザー きっといつかって願うまま I m a LOSER  「终有一天会」这样祈祷着\n[02:40.95]進め ロスタイムのそのまた奥へ行け 前进吧 去往LOSS TIME的更深处\n[02:47.45]愛されたいならそう言おうぜ 思ってるだけじゃ伝わらないね 想要被爱的话就那样说出来吧 只是想的话是传递不了的\n[02:55.28]永遠の淑女もそっぽ向いて 天国は遠く向こうのほうへ 永远的居所也不予理睬 天国依然在遥远的另一端\n[03:03.28]ここいらでひとつ踊ってみようぜ 夜が明けるまで転がっていこうぜ 在这试着跳一次舞吧 在天亮之前磕绊着前进吧\n[03:11.19]聞こえてんなら声出していこうぜ 能听见的话就大喊着前进吧\n[03:17.19]アイムアルーザー どうせだったら遠吠えだっていいだろう I m a LOSER 所以就算虚张声势也无所谓吧\n[03:21.04]もう一回もう一回行こうぜ 僕らの声 再一次 再一次 穿透吧 我们的声音\n[03:25.12]アイムアルーザー ずっと前から聞こえてた I m a LOSER 很久以前就已经听到\n[03:28.54]いつかポケットに隠した声が 那不知何时 被深藏于口袋之中的声音\n[03:35.00]ここいらでひとつ踊ってみようぜ 夜が明けるまで転がっていこうぜ 在这试着跳一次舞吧 在天亮之前磕绊着前进吧\n[03:42.81]聞こえてんなら声出していこうぜ 能听见的话就大喊着前进吧'
    },
    {
        name: '盗将行',
        artist: '花粥 / 马雨阳',
        url: 'http://www.ytmp3.cn/down/48303.mp3',
        cover: 'http://p2.music.126.net/-qHPT3rhxDlu5zQV9NcQ-A==/109951163555860423.jpg?param=130y130',
		lrc: ' [00:00.000] 作曲 花粥\n[00:01.000] 作词 姬霄\n[00:08.825] 编曲/混音：马雨阳\n[00:18.217] 劫过九重城关\n[00:21.184] 我座下马正酣\n[00:23.656] 看那轻飘飘的衣摆\n[00:26.975] 趁擦肩把裙掀\n[00:29.877] 踏遍三江六岸\n[00:33.210] 借刀光做船帆\n[00:35.945] 任露水浸透了短衫\n[00:39.393] 大盗睥睨四野\n[00:43.735] 枕风宿雪多年\n[00:47.194] 我与虎谋早餐\n[00:49.688] 拎着钓叟的鱼弦\n[00:53.357] 问卧龙几两钱\n[00:55.874] 蜀中大雨连绵\n[00:59.291] 关外横尸遍野\n[01:02.138] 你的笑像一条恶犬\n[01:05.303] 撞乱了我心弦\n[01:23.009] 谈花饮月赋闲\n[01:25.771] 这春宵艳阳天\n[01:28.275] 待到梦醒时分睁眼\n[01:31.770] 铁甲寒意凛冽\n[01:34.304] 夙愿只隔一箭\n[01:37.704] 故乡近似天边\n[01:40.608] 不知何人浅唱弄弦\n[01:44.009] 我彷徨不可前\n[01:51.313] 枕风宿雪多年\n[01:54.645] 我与虎谋早餐\n[01:57.337] 拎着钓叟的鱼弦\n[02:00.841] 问卧龙几两钱\n[02:03.517] 蜀中大雨连绵\n[02:07.049] 关外横尸遍野\n[02:09.771] 你的笑像一条恶犬\n[02:13.137] 撞乱我心弦\n[02:15.916] 烽烟万里如衔\n[02:19.290] 掷群雄下酒宴\n[02:22.002] 谢绝策勋十二转\n[02:25.539] 想为你窃玉簪\n[02:28.204] 入巷间吃汤面\n[02:31.690] 笑看窗边飞雪\n[02:34.340] 取腰间明珠弹山雀\n[02:37.721] 立枇杷于庭前\n[02:45.748] 入巷间吃汤面\n[02:49.694] 笑看窗边飞雪\n[02:53.209] 取腰间明珠弹山雀\n[02:57.041] 立枇杷于庭前',
    }
    ]
});