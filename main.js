

const headerSpan1 = document.querySelector('.header__span1')
const textLoad = () => {
    setTimeout(() => {
        headerSpan1.textContent = "biznesingizni"
    }, 0);
    setTimeout(() => {
        headerSpan1.textContent = "loyihangizni"
    }, 4000);
    setTimeout(() => {
        headerSpan1.textContent = "g'oyangizni"
    }, 8000);
}
textLoad();
    setInterval(() => {
        textLoad()
    }, 12000);

    const bizhaqimizda = document.querySelector("#bizhaqimizda")
    const xizmatlar = document.querySelector("#xizmatlar")
    const mijozlar = document.querySelector("#mijozlar")
    const proektlar = document.querySelector("#proektlar")
    const jamoa = document.querySelector("#jamoa")
    const aloqa = document.querySelector("#aloqa")
    const bizboglanish = document.querySelector("#bizboglanish")
    const headertitle = document.querySelector("#headertitle")
    const headertext = document.querySelector("#headertext")
    const headerbtn = document.querySelector("#headerbtn") 
    const htitname = document.querySelector("#htitname") 
    const heatexname = document.querySelector("#heatexname")
    const headertextname = document.querySelector("#headertextname") 
    
    const islam = document.querySelector("#islam")
    const fudbol = document.querySelector("#fudbol")
    const grand = document.querySelector("#grand")
    const asr = document.querySelector("#asr")
    const almoz = document.querySelector("#almoz")
    const bukhara = document.querySelector("#bukhara")
    const safo = document.querySelector("#safo")
    const zamon = document.querySelector("#zamon")
    const alcomfort = document.querySelector("#alcomfort")
    const hodiyev = document.querySelector("#hodiyev")
    const boyyina = document.querySelector("#boyyina")
    const muslimat = document.querySelector("#muslimat")
    const oila = document.querySelector("#oila")
    const vitainfo = document.querySelector("#vitainfo")
    const iqtisodiyot = document.querySelector("#itisodiyot")
    const tibomet= document.querySelector("#tibomet")
    const navoiy = document.querySelector("#navoiy")
    const uzs = document.querySelector("#uzs")
    const inon = document.querySelector("#inon")
    const evg = document.querySelector("#evg")
    const xandaq = document.querySelector("#xandaq")
    const premiar = document.querySelector("#premiar")
    const oxus= document.querySelector("#oxus")
    const salam = document.querySelector("#salam")

    const proekt = document.querySelector("#proekt")
    const ishlar = document.querySelector("#ishlar")
    const filter = document.querySelector("#filter")
    const all = document.querySelector("#all")
    const websayt = document.querySelector("#websayt")
    const telegram = document.querySelector("#telegram")
    const mobil = document.querySelector("#mobil")
    const decktop = document.querySelector("#decktop")
    const grafik = document.querySelector("#grafik")



    function changeLanguage(lang){
        location.hash = lang;
        location.reload();

    }
    let language = {
        eng:{
            bizhaqimizda:"about Us",
            xizmatlar:"Services",
            mijozlar:"Customers",
            proektlar:"projects",
            jamoa:"the team",
            aloqa:"contact",
            bizboglanish:"contact us",
            headertitle:"Perfect 'IT' solutions to develop your idea",
            headertext:"Entrust your project to specialists with more than 10 years of experience and achieve high success in a short period of time",
            headerbtn:"Get in touch now",
            htitname:"Number of people who have trusted us and submitted successfully so far", 
            heatexname:"Assignments",
            headertextname:"Customers",
            islom:"islam.uz",
            fudbol:"Football Association of Uzbekistan",
            grand:"Grand School of Education",
            asr:"New Century University",
            almoz:"Almaz English language center",
            bukhara:"Bukhara Education",
            safo:"Safo Educational Training Center",
            zamon:"Academy of the times",
            alcomfort:"Allcomfort",
            hodiyev:"Hodiyev Education",
            boyyina:"Along",
            muslimat:"Musimaat.uz",
            oila:"Family market",
            vitainfo:"Vitainfo.uz",
            iqtisodiyot:"University of Economics",
            tibomet:"TIBOMET BLACK SEDAN OIL",
            navoiy:"Navoi Institute of Innovations",
            uzs:"Uzscool Education",
            inon:"inon.uz",
            evg:"EVR consulting",
            xandaq:"Ditch Treval",
            premiar:"Premier hotel",
            oxus:"Oxus University",
            salam:"Hello Treval",
            miraman:"Miramandi restaurant",
            proekt:"OUR PROJECTS",
            ishlar:"What we did",
            filter:"FILTER",
            all:"ALL",
            websayt:"WEBSITE",
            telegram:"TELEGRAM BOT",
            mobil:"MOBILE APPLICATIONS",
            decktop:"DESKTOP APPLICATIONS",
            grafik:"GRAPHIC DESIGN",




        
        
        
        },
        rus:{
            bizhaqimizda:"о нас",
            xizmatlar:"Услуги",
            mijozlar:" Клиенты",
            proektlar:"проекты",
            jamoa:"команда",
            aloqa:"контакт",
            bizboglanish:" связаться с нами",
            headertitle:"Идеальные ИТ-решения для развития вашей идеи",
            headertext:"Доверьте свой проект специалистам с более чем 10-летним опытом и добейтесь высокого успеха за короткий период времени.",
            headerbtn:"Свяжитесь с нами сейчас",
            htitname :"Количество людей, которые доверились нам и успешно отправили заявку на данный момент",
            heatexname:"Задания",
             headertextname:"Клиенты",
             islom:"islam.uz",
             fudbol:"Футбольная Ассоциация Узбекистана",
             grand:"Большая школа образования",
             asr:"Yangi Asr Uneversitet",
             almoz:"Центр английского языка Алмаз",
             bukhara:"Бухара Образование",
             safo:"Образовательный учебный центр Сафо",
             zamon:"Академия того времени",
             alcomfort:"Олкомфорт",
             hodiyev:"Ходиев Образование",
             boyyina:"Вдоль",
             muslimat:"Musimaat.uz",
             oila:"Семейный рынок",
             vitainfo:"Vitainfo.uz",
             iqtisodiyot:"Экономический университет",
             tibomet:"ТИБОМЕТ ЧЕРНЫЙ СЕДАН МАСЛО",
             navoiy:"Навоийский институт инноваций",
             uzs:"Узшкольное образование",
             inon:"inon.uz",
             evg:"ЭВР консалтинг",
             xandaq:"Дитч Тревал",
             premiar:"Премьер отель",
             oxus:"Оксусский университет",
             salam:"Привет, Треваль",
             miraman:"Ресторан Мираманди",
             proekt:"НАШИ ПРОЕКТЫ",
            ishlar:"Что мы сделали",
            filter:"ФИЛЬТР",
            all:"ВСЕ",
            websayt:"ВЕБ-САЙТ",
            telegram:"ТЕЛЕГРАММ БОТ",
            mobil:"МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ",
            decktop:"НАСТОЛЬНЫЕ ПРИЛОЖЕНИЯ",
            grafik:"ГРАФИЧЕСКИЙ ДИЗАЙН",
       
        }

    }
    if(window.location.hash){
        if(window.location.hash == "#eng"){
            bizhaqimizda.textContent=
            language.eng.bizhaqimizda
            xizmatlar.textContent=
            language.eng.xizmatlar
            mijozlar.textContent=
            language.eng.mijozlar
            proektlar.textContent=
            language.eng.proektlar
            jamoa.textContent=
            language.eng.jamoa
            aloqa.textContent=
            language.eng.aloqa
            bizboglanish.textContent=
            language.eng.bizboglanish
            headertitle.textContent=
            language.eng.headertitle
            headertext.textContent=
            language.eng.headertext
            htitname.textContent=
            language.eng.htitname
            heatexname.textContent=
            language.eng.heatexname
            headertextname.textContent=
            language.eng.headertextname
            islam.textContent=
            language.eng.islom
            fudbol.textContent=
            language.eng.fudbol
            grand.textContent=
            language.eng.grand
            asr.textContent=
            language.eng.asr
            almoz.textContent=
            language.eng.almoz
            bukhara.textContent=
            language.eng.bukhara
            safo.textContent=
            language.eng.safo
            zamon.textContent=
            language.eng.zamon
            alcomfort.textContent=
            language.eng.alcomfort
            hodiyev.textContent=
            language.eng.hodiyev
            boyyina.textContent=
            language.eng.boyyina
            muslimat.textContent=
            language.eng.muslimat
            oila.textContent=
            language.eng.oila
            vitainfo.textContent=
            language.eng.vitainfo
            iqtisodiyot.textContent=
            language.eng.iqtisodiyot
            tibomet.textContent=
            language.eng.tibomet
            navoiy.textContent=
            language.eng.navoiy
            uzs.textContent=
            language.eng.uzs
            inon.textContent=
            language.eng.inon
            evg.textContent=
            language.eng.evg
            xandaq.textContent=
            language.eng.xandaq
            premiar.textContent=
            language.eng.premiar
            oxus.textContent=
            language.eng.oxus
            salam.textContent=
            language.eng.salam
            proekt.textContent=
            language.eng.proekt
            ishlar.textContent=
            language.eng.ishlar
            filter.textContent=
            language.eng.filter
            all.textContent=
            language.eng.all
            websayt.textContent=
            language.eng.websayt
            telegram.textContent=
            language.eng.telegram
            mobil.textContent=
            language.eng.mobil
            decktop.textContent=
            language.eng.decktop
            grafik.textContent=
            language.eng.grafik
            
        }

      else  if(window.location.hash == "#rus"){
            bizhaqimizda.textContent=
            language.rus.bizhaqimizda
            xizmatlar.textContent=
            language.rus.xizmatlar
            mijozlar.textContent=
            language.rus.mijozlar
            proektlar.textContent=
            language.rus.proektlar
            jamoa.textContent=
            language.rus.jamoa
            aloqa.textContent=
            language.rus.aloqa
            bizboglanish.textContent=
            language.rus.bizboglanish
            headertitle.textContent=
            language.rus.headertitle
            headertext.textContent=
            language.rus.headertext
            htitname.textContent=
            language.rus.htitname
            heatexname.textContent=
            language.rus.heatexname
            headertextname.textContent=
            language.rus.headertextname
            islam.textContent=
            language.rus.islom
            fudbol.textContent=
            language.rus.fudbol
            grand.textContent=
            language.rus.grand
            asr.textContent=
            language.rus.asr
            almoz.textContent=
            language.rus.almoz
            bukhara.textContent=
            language.rus.bukhara
            safo.textContent=
            language.rus.safo
            zamon.textContent=
            language.rus.zamon
            alcomfort.textContent=
            language.rus.alcomfort
            hodiyev.textContent=
            language.rus.hodiyev
            boyyina.textContent=
            language.rus.boyyina
            muslimat.textContent=
            language.rus.muslimat
            oila.textContent=
            language.rus.oila
            vitainfo.textContent=
            language.rus.vitainfo
            iqtisodiyot.textContent=
            language.rus.iqtisodiyot
            tibomet.textContent=
            language.rus.tibomet
            navoiy.textContent=
            language.rus.navoiy
            uzs.textContent=
            language.rus.uzs
            inon.textContent=
            language.rus.inon
            evg.textContent=
            language.rus.evg
            xandaq.textContent=
            language.rus.xandaq
            premiar.textContent=
            language.rus.premiar
            oxus.textContent=
            language.rus.oxus
            salam.textContent=
            language.rus.salam
            miraman.textContent=
            language.rus.miraman
            proekt.textContent=
            language.rus.proekt
            ishlar.textContent=
            language.rus.ishlar
            filter.textContent=
            language.rus.filter
            all.textContent=
            language.rus.all
            websayt.textContent=
            language.rus.websayt
            telegram.textContent=
            language.rus.telegram
            mobil.textContent=
            language.rus.mobil
            decktop.textContent=
            language.rus.decktop
            grafik.textContent=
            language.rus.grafik
        }
    }


































   
   
   
   
   
   
   
   
   
   
   
    const finalform = document.querySelector("#finalform")
    const ism = document.querySelector("#ism")
    const familiya = document.querySelector("#familiya")
    const telefon = document.querySelector("#telefon")
    const select = document.querySelector("#select")
    const fikr = document.querySelector("#fikr")
    const finalbtn= document.querySelector("#finalbtn")
    
    finalform.addEventListener("submit", function(event){
        event.preventDefault();

fetch("https://jsonplaceholder.typicode.com/posts",{
   method: "POST",
   body:JSON.stringify({
    name:ism.value,
    phone:telefon.value,
   }),
   headers:{
    "content-type":"aplication/jason; charset=UTF-8"
   }
})
.then((Response) => Response.json())
 .then((json)=>{
    localStorage.setItem("phone",telefon.value)
    localStorage.setItem("name", ism.value)
 }) 

    })
