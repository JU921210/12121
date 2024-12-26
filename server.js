//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();
var bodyParser = require("body-parser");

//web root
server.use(express.static(__dirname));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

var fileUpload = require("express-fileupload");
server.use(fileUpload({defCharset:'utf8', defParamCharset:'utf8'}));


var DB = require("nedb-promises");
var ProfolioDB = DB.create(__dirname+"/profolio.db");
var ContactDB = DB.create(__dirname+"/contact.db");
 

 /*ProfolioDB.insert([
    {
        name: "貓",
        description: "以色鉛筆細膩的筆觸展現貓的真實質感與神韻，強調毛髮的層次感和光影的變化，捕捉其靈動的眼神，展現生命力與溫暖感。透過柔和的色彩疊加，呈現貓的自然美，傳遞對動物純真的熱愛與尊重，同時讓觀者感受到貓咪帶來的療癒力量。",
        image: "assets/img/3.jpg",
        link: "#",
        skills: [
          "assets/img/skills-react.svg",
          "assets/img/skills-sass.svg",
          "assets/img/skills-tailwind-css.svg"
        ]
      },
      {
        name: "梵谷鳶尾花",
        description: "以梵谷的鳶尾花進行二創，經由線搞、色塊及運用色票製作的方式設計獨一無二之色票，再進行圖樣套置，使每種色票層次堆疊。並分前中後景以不同明度去表現，完成這幅經典名畫之作品。",
        image: "assets/img/18.jpg",
        link: "#",
        skills: [
          "assets/img/skills-figma.svg",
          "assets/img/skills-photoshop.svg"
        ]
      },
      {
        name: "塔羅皇后3",
        description: "利用多意圖型的原理繪製出女王的臉及無窮無盡的生命，結合小麥、白鴿、樹林，象徵著世界和平外，也表現出母親般寬廣的胸襟，守護著萬物。作品中使用了點、線、面等元素結合，表現前中後景的空間感。",
        image: "assets/img/16.jpg",
        link: "#",
        skills: [
          "assets/img/skills-html.svg",
          "assets/img/skills-css.svg",
          "assets/img/skills-javascript.svg"
        ]
      },
      {
        name: "Barbershop Website",
        description: "使用麥克筆加色鉛筆進行繪製，從過程中學到一點透視、光影變化、顏色運用及上色技法。此作品表現出內心的構思及理想居所，河邊旁的咖啡廳，希望即使在高壓的環境中仍然能讓人放鬆且舒適的安心地。",
        image: "assets/img/15.jpg",
        link: "#",
        skills: [
          "assets/img/skills-react.svg",
          "assets/img/skills-sass.svg",
          "assets/img/skills-tailwind-css.svg"
        ]
      },
      {
        name: "點線面海報設計",
        description: "這張海報以點、線、面為主要設計元素，營造出獨特的視覺效果，展現了細膩的空間層次感與建築細節。設計中透過黑白對比與幾何圖案，突出建築與人物的關係，創造出懷舊與現代交融的氛圍，吸引觀者的注意。",
        image: "assets/img/17.jpg",
        link: "#",
        skills: [
          "assets/img/skills-html.svg",
          "assets/img/skills-css.svg",
          "assets/img/skills-javascript.svg"
        ]
      }
 ])*/

server.get("/services", (req, res)=>{
    //DB find
    var Services=[
        {icon: "fa-shopping-cart", heading:"E-Commerce", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
        {icon: "fa-laptop", heading:"Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
    ];
    res.send(Services);
});

server.get("/profolio", (req,res)=>{
      //DB
      ProfolioDB.find({}).then(results=>{
        if(results != null){
             res.send(results);
        }else{
            res.send("Error!");
        }
      })
})

server.post("/contact_me", (req,res)=>{
     ContactDB.insert(req.body);
     res.redirect("/#contact");
})

server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})