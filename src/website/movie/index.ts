import fetch from 'node-fetch';
import fs from 'fs-extra';
import { JSDOM } from 'jsdom';
import dayjs from 'dayjs';
import { readCsv, writeCsv } from '@/fs';
import { delay } from '@/utils';
import puppeteer from 'puppeteer-core';
import * as R from 'ramda';

const years = [];

const movies = [
  // [`幸福时光`, `2002.6.26`, `HappyTimes`],
  // [`和你在一起`, `2003.05.30`, `Together with You`],
  // [`那山那人那狗`, `2003.12.25`, `Postmen In The Mountains`],
  // [`周渔的火车`, `2004.07.16`, `Zhou Yu's Train`],
  // [`英雄`, `2004.08.27`, `Hero`],
  // [`天地英雄`, `2004.09.03`, `Warriors of Heaven and Earth`],
  // [`十面埋伏`, `2004.12.23`, `House of Flying Daggers`],
  // [`功夫`, `2005.04.08`, `Kung Fu Hustle`],
  // [`世界`, `2005.07.01`, `World`],
  // [`无极`, `2006.05.05`, `The Promise`],
  // [`千里走单骑`, `2006.09.01`, ` Riding Alone for Thousands of Miles`],
  // [`满城尽带黄金甲`, `2006.12.21`, `Curse of the Golden Flower`],
  // [`美人依旧`, `2007.09.21`, `Beauty is still`],
  // [`盲山`, `2008.03.12`, `Blind Mountain`],
  // [`苹果`, `2008.01.25`, `Lost in Beijing`],
  // [`长江七号`, `2008.03.07`, `Chang Jiang Qi Hao`],
  // [`三峡好人`, `2008.01.13`, `Still Life`],
  // [`图雅的婚事`, `2008.04.04`, `Tuya's Marriage`],
  // [`蓝莓之夜`, `2008.04.04`, `My Blueberry Nights`],
  // [`赤壁（上）`, `2009.11.18`, `Red Cliff`],
  // [`投名状`, `2010.04.02`, `The Warlords`],
  // [`三枪拍案惊奇`, `2010.09.03`, `A Simple Noodle Story`],
  // [`唐山大地震`, `2010.12.29`, `Aftershock`],
  // [`非诚勿扰2`, `2010.12.24`, `If You Are The One`],
  // [`叶问2：宗师传奇`, `2011.01.28`, `Ip Man 2: Legend of the Grandmaster`],
  // [`我知女人心`, `2011.02.03`, `What Women Want`],
  // [`战国`, `2011.04.22`, `The Warring State`],
  // [`南京！南京！`, `2011.05.11`, `City of Life and Death`],
  // [`建党伟业`, `2011.06.24`, `Beginning of the Great Revival`],
  // [`新少林寺`, `2011.09.09`, `Shaolin`],
  // [`狄仁杰之通天帝国`, `2011.09.02`, `Detective Dee and the Mystery of the Phantom Flame`],
  // [`辛亥革命`, `2011.10.07`, `Xin Hai Ge Ming`],
  // [`一九四二`, `2012.11.30`, `Untitled Remembering 1942 Project`],
  // [`金陵十三钗`, `2012.11.20`, `The Flowers Of War`],
  // [`让子弹飞`, `2012.03.02`, `Let The Bullets Fly`],
  // [`赵氏孤儿`, `2012.07.27`, `Sacrifice`],
  // [`画皮2`, `2012.08.18`, `Painted Skin：The Resurrection`],
  // [`龙门飞甲`, `2012.08.30`, `Flying Swords of Dragon Gate`],
  // [`大话西游`, `2013.2.10	`, `Journey to the West`],
  // [`私人订制`, `2013.12.19`, `Personal Tailor`],
  // [`致青春`, `2013.4.25`, `So Young`],
  // [`狄仁杰之神都郡王`, `2013.9.28`, `Young Detective Dee: Rise of the Sea Dragon`],
  // [`北京遇上西雅图`, `2013.3.21`, `Finding Mr. Right`],
  // [`小时代`, `2013.6.27`, `Tiny Times`],
  // [`一代宗师`, `2013.1.7`, `The Grandmaster`],
  // [`分手合约`, `2013.4.12`, `A Wedding Invitation`],
  // [`特殊身份`, `2013.10.18`, `Special ID`],
  // [`毒战`, `2013.4.2`, `Drug War`],
  // [`智取威虎山`, `2014.12.23`, `The Taking of Tiger Mountain`],
  // [`分手大师`, `2014.6.27`, `The Breakup Guru`],
  // [`匆匆那年`, `2014.12.4`, `Fleet of Time`],
  // [`回家`, `2014.5.16`, `Coming Home`],
  // [`微爱之渐入佳境`, `2014.12.24`, `Love on the Cloud`],
  // [`撒娇女人最好命`, `2014.11.28`, `Women Who Flirt`],
  // [`一生一世`, `2014.9.5`, `But Always`],
  // [`冰封重生之门`, `2014.4.25`, `Iceman`],
  // [`功夫丛林`, `2014.10.31`, `Kung Fu Jungle`],
  // [`港囧`, `2015.09.25`, `Lost in Hong Kong`],
  // [`夏洛特烦恼`, `2015.10.09`, `Goodbye Mr. Loser`],
  // [`老炮儿`, `2015.12.24`, `Mr. Six`],
  // [`狼图腾`, `2015.09.11`, `Wolf Totem`],
  // [`恶棍天使`, `2015.12.31`, `Devil and Angel`],
  // [`滚蛋吧，肿瘤君`, `2015.08.14`, `Go Away Mr. Tumor`],
  // [`奔跑吧，兄弟`, `2015.01.30`, `Running Man`],
  // [`栀子花开`, `2015.07.10`, `Forever Young`],
  // [`重返20岁`, `2015.01.16`, `Miss Granny`],
  // [`我们结婚吧`, `2015.04.03`, `Let's Get Married`],
  // [`有一个地方只有我们知道`, `2015.02.13`, `Somewhere Only We Know`],
  // [`失孤`, `2015.03.20`, `Lost and Love`],
  // [`我是证人`, `2015.10.30`, `The Witness`],
  // [`解救吾先生`, `2015.10.02`, `Saving Mr. Wu`],
  // [`美人鱼`, `2016.02.19`, `The Mermaid`],
  // [`功夫熊猫3`, `2016.01.29`, `Kung Fu Panda 3`],
  // [`长城`, `2016.02.17`, `The Great Wall`],
  // [`湄公河行动`, `2016.09.30`, `Operation Mekong`],
  // [`从你的全世界路过`, `2016.09.30`, `I Belonged to You`],
  // [`情圣`, `2016.01.13`, `The Magnificent Scoundrels`],
  // [`我不是潘金莲`, `2016.11.18`, `I Am Not Madame Bovary`],
  // [`原来你还在这里`, `2016.07.15`, `Never Gone`],
  // [`封神榜`, `2016.07.29`, `Recounting of Immortals`],
  // [`驴得水`, `2016.10.28`, `Mr. Donkey`],
  // [`战狼2`, `2017.07.28`, `Wolf Warrior 2`],
  // [`前任3`, `2017.12.29`, `The Ex-File 3: The Return of The Exes`],
  // [`功夫瑜伽`, `2017.01.27`, `Kung Fu Yoga`],
  // [`芳华`, `2017.12.15`, `Youth`],
  // [`乘风破浪`, `2017.02.10`, `Duckweed`],
  // [`追龙`, `2017.09.29`, `Chasing the Dragon`],
  // [`三生三世十里桃花`, `2017.08.11`, `Once Upon A Time`],
  // [`奇门遁甲`, `2017.12.15`, `The Miracle Fighters`],
  // [`喜欢你`, `2017.05.05`, `This Is Not What I Expected`],
  // [`逆时营救`, `2017.06.30`, `Reset`],
  // [`二十二`, `2017.09.08`, `Twenty Two`],
  // [`非凡任务`, `2017.04.07`, `Extraordinary Mission`],
  // [`红海行动`, `2018.02.23`, `Operation Red Sea`],
  // [`唐人街探案2`, `2018.02.16`, `Detective Chinatown 2`],
  // [`捉妖记2`, `2018.02.16`, `Monster Hunt 2`],
  // [`一出好戏`, `2018.08.10`, `The Island`],
  // [`超时空同居`, `2018.05.25`, `How Long Will I Love U`],
  // [`无名之辈`, `2018.11.16`, `A Cool Fish`],
  // [`黄金兄弟`, `2018.09.28`, `Golden Job`],
  // [`南极之恋`, `2018.02.02`, `Till The End Of The World`],
  [`哪吒`, `2019.08.29`, `Ne Zha`],
  [`流浪地球`, `2019.02.05`, `The Wandering Earth`],
  [`我和我的祖国`, `2019.10.01`, `My People, My Country`],
  [`中国机长`, `2019.10.18`, `The Captain`],
  [`烈火英雄`, `2019.08.09`, `The Bravest`],
  [`少年的你`, `2019.11.08`, `Better Days`],
  [`扫毒2：天地对决`, `2019.07.12`, `The White Storm 2: Drug Lords`],
  [`叶问4：完结篇`, `2019.12.25`, `Ip Man 4: The Finale`],
  [`攀登者`, `2019.09.30`, `The Climbers`],
  [`银河补习班`, `2019.07.19`, `Looking Up`],
  [`反贪风暴`, `2019.04.04`, `P Storm`],
  [`使徒行者2：谍影行动`, `2019.08.16`, `Line Walker 2: Invisible Spy`],
  [`白蛇：缘起`, `2019.11.15`, `White Snake`],
  [`追龙2：追缉大富豪`, `2019.06.07`, `Chasing the Dragon II: Wild Wild Bunch`],
  [`受益人`, `2019.11.08`, `My Dear Liar`],
  [`下一任：前任`, `2019.05.03`, `Always Miss You`],
  [`八佰`, `2020.08.28`, `The Eight Hundred`],
  [`急先锋`, `2020.11.20`, `Vanguard`],
  [`紧急救援`, `2020.12.18`, `The Rescue`],
  [`夺冠`, `2020.09.25`, `Leap`],
  [`长津湖`, `2021.11.19`, `The Battle at Lake Changjin`],
  [`我和我的父辈`, `2021.10.08`, `My Country, My Parents`],
  [`怒火 重案`, `2021.08.13`, `Raging Fire`],
  [`长津湖之水门桥`, `2022.02.11`, `Water Gate Bridge`],
  [`奇迹笨小孩`, `2022.03.18`, `Nice View`],
  [`这个杀手不太冷静`, `2022.02.28`, `Too Cool to Kill`],
];

async function getM() {
  const bro = await puppeteer.launch({
    executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    headless: false,
    defaultViewport: { width: 1920, height: 1080 },
  });

  const page = await bro.newPage();
  for (const [zhTitle, year, title] of movies) {
    const tYear = parseInt(year.split('.')[0], 10);
    await page.goto(`https://www.rottentomatoes.com/search?search=${encodeURIComponent(title)}`, { waitUntil: 'networkidle2' });
    await page.waitForTimeout(4000);
    const movList = await page.$$eval(
      '[slot="movie"] search-page-media-row',
      (nodelist, tYear) => {
        return nodelist
          .map((node) => {
            const cast = node.getAttribute('cast');
            const title = (node.querySelector('a[data-qa="info-name"]')?.textContent || '').replace(/[\s]+/g, ' ');
            const releaseYear = parseInt(node.getAttribute('releaseyear') || '0', 10);
            const href = node.querySelector('a[data-qa="thumbnail-link"]')?.getAttribute?.('href') || '';
            return { cast, releaseYear, href, title };
          })
          .filter((d) => d.href && tYear + 5 >= d.releaseYear && tYear - 5 <= d.releaseYear);
      },
      tYear
    );
    if(!movList.length){
      console.log('no find', zhTitle);
    }
    for (const mov of movList) {
      await page.goto(mov.href + '/reviews', { waitUntil: 'networkidle2' });
      while (true) {
        await page.waitForTimeout(4000);
        const commentList = await page.$$eval('[data-qa="review-text"]', (nodeList) =>
          nodeList
            .map((n) => ({ comment: (n.textContent || '').replace(/[\s]+/g, ' ') }))
            .filter((d) => d.comment.replace(/[\s]+/g, '').length)
        );
        const csvList = commentList.map((co) => {
          return {
            zhTitle: zhTitle,
            title: mov.title,
            cast: mov.cast,
            year: mov.releaseYear,
            sourceYear: year,
            comment: co.comment,
          };
        });
        writeCsv('./data/co.csv', csvList);
        const d = await page.$('[data-qa="next-btn"]:not(.hide)');
        if (!d) {
          break;
        }
        await d.click();
      }
      console.log(zhTitle);
    }
  }
  await bro.close();
}

getM();
