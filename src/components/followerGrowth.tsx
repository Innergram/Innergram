import React from "react";
import { Chart } from "react-google-charts";

function followerGrowth() {
    let follower_count=8;
  const jsonData = [
    
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/prarthana_rout",
            value: "prarthana_rout",
            timestamp: 1695059688,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/krishagrawal161105",
            value: "krishagrawal161105",
            timestamp: 1692853247,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/__shettyananya__",
            value: "__shettyananya__",
            timestamp: 1688803091,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/onlinemarket_trade",
            value: "onlinemarket_trade",
            timestamp: 1687397011,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/om_astrologist",
            value: "om_astrologist",
            timestamp: 1687157549,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/ipriyanshu_283",
            value: "ipriyanshu_283",
            timestamp: 1686846867,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/dagar_pvt1299",
            value: "dagar_pvt1299",
            timestamp: 1686516068,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/being.aryaman",
            value: "being.aryaman",
            timestamp: 1686506339,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/the_artist_soul19",
            value: "the_artist_soul19",
            timestamp: 1684947505,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/parul_a712",
            value: "parul_a712",
            timestamp: 1681902308,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/cute___shivanii",
            value: "cute___shivanii",
            timestamp: 1681646227,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/pallavi._.1302",
            value: "pallavi._.1302",
            timestamp: 1681270187,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/ahmadtanzeel19",
            value: "ahmadtanzeel19",
            timestamp: 1679935321,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/ekansh_2712",
            value: "ekansh_2712",
            timestamp: 1679930740,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/dxxa._.u._",
            value: "dxxa._.u._",
            timestamp: 1679825153,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/gargkushagra58",
            value: "gargkushagra58",
            timestamp: 1679824837,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/arnavkhetan",
            value: "arnavkhetan",
            timestamp: 1679741669,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/kartikagrawal17",
            value: "kartikagrawal17",
            timestamp: 1679634509,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/buddyyyy2.o",
            value: "buddyyyy2.o",
            timestamp: 1679132875,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/thayaruvuppala",
            value: "thayaruvuppala",
            timestamp: 1679129945,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/the_oli__",
            value: "the_oli__",
            timestamp: 1679022944,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/amanbolnayaar",
            value: "amanbolnayaar",
            timestamp: 1678907069,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/lkssmnnbairdd",
            value: "lkssmnnbairdd",
            timestamp: 1678787328,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/sanjay1644381",
            value: "sanjay1644381",
            timestamp: 1678716385,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/terminator_07112003",
            value: "terminator_07112003",
            timestamp: 1678697047,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/jagdish1208",
            value: "jagdish1208",
            timestamp: 1678640088,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/avnish2701",
            value: "avnish2701",
            timestamp: 1678595305,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/champalal_kumawat_007",
            value: "champalal_kumawat_007",
            timestamp: 1678592639,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/mariyamraza31",
            value: "mariyamraza31",
            timestamp: 1678381217,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/syedahkam",
            value: "syedahkam",
            timestamp: 1678321408,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/dg_mon",
            value: "dg_mon",
            timestamp: 1678280444,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/shreyans_0206",
            value: "shreyans_0206",
            timestamp: 1678189893,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/aditya_bharadwaj03",
            value: "aditya_bharadwaj03",
            timestamp: 1678163195,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/kartik._.p3ddu10",
            value: "kartik._.p3ddu10",
            timestamp: 1678083355,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/mainly0ak",
            value: "mainly0ak",
            timestamp: 1677772208,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/divyansh.tibrewal",
            value: "divyansh.tibrewal",
            timestamp: 1677592395,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/ayush_chaturvedi123",
            value: "ayush_chaturvedi123",
            timestamp: 1677482922,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/through.the_wind",
            value: "through.the_wind",
            timestamp: 1677435581,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/parthnayak37",
            value: "parthnayak37",
            timestamp: 1677262015,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/nakshatra_1448",
            value: "nakshatra_1448",
            timestamp: 1677232584,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/i.anuragbisht9",
            value: "i.anuragbisht9",
            timestamp: 1677210024,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/prateek_273",
            value: "prateek_273",
            timestamp: 1677172533,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/made_of_crbon",
            value: "made_of_crbon",
            timestamp: 1677144672,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/varuvat",
            value: "varuvat",
            timestamp: 1677081124,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/manjaryjasrasaria",
            value: "manjaryjasrasaria",
            timestamp: 1677080894,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/gaurangi_pvt",
            value: "gaurangi_pvt",
            timestamp: 1677053761,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/mitali2312",
            value: "mitali2312",
            timestamp: 1677009193,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/_hmmmnn_",
            value: "_hmmmnn_",
            timestamp: 1676912933,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/pakpakpakaaaa",
            value: "pakpakpakaaaa",
            timestamp: 1676885513,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/aaravbagla",
            value: "aaravbagla",
            timestamp: 1676829980,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/mrfatherregistry",
            value: "mrfatherregistry",
            timestamp: 1676827725,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/aastik.aggarwal",
            value: "aastik.aggarwal",
            timestamp: 1676809272,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/tulip_garg19",
            value: "tulip_garg19",
            timestamp: 1676742205,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/khetan__amit",
            value: "khetan__amit",
            timestamp: 1676740278,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/khyati_garg_64",
            value: "khyati_garg_64",
            timestamp: 1676740087,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/prozomatomenureader",
            value: "prozomatomenureader",
            timestamp: 1676739587,
          },
        ],
      },
      {
        title: "",
        media_list_data: [],
        string_list_data: [
          {
            href: "https://www.instagram.com/vaibhav_dagar_2322",
            value: "vaibhav_dagar_2322",
            timestamp: 1676663710,
          },
        ],
      },
    
  ];
  const chartData = jsonData.map((item,index) => [
    new Date(item.string_list_data[0].timestamp * 1000),index+1+follower_count // Convert timestamp to Date
    
  ]);
  const chartFormattedData = [
    ["Timestamp", "Follower Count"], // Replace "Follower Count" with the appropriate label
    ...chartData,
  ];
  return (
    <>
      <Chart
        chartType="ColumnChart"
        data={chartFormattedData}
        width="100%"
        height="400px"
        legendToggle
      />
    </>
  );
}

export default followerGrowth;
