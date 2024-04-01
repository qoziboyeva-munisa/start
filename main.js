

const menuBtn = document.querySelector(".navbar__btn")
const modal = document.querySelector(".modal")
const modalBtn = document.querySelector(".modal__btn")


menuBtn.addEventListener("click", function(){
    modal.style.display = "block";
    modal.style.background = "yellow";  

})

modalBtn.addEventListener("click", function(){
    modal.style.display = "none";

})

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
    const iqtisodiyot = document.querySelector("#iqtisodiyot")
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

    const xil = document.querySelector("#xil")
    const tur = document.querySelector("#tur")
    const WEB = document.querySelector("#WEB")
    const marketing = document.querySelector("#marketing")
    const platforma = document.querySelector("#platforma")
    const internet = document.querySelector("#internet")
    const crm = document.querySelector("#crm")
    const bosing = document.querySelector("#bosing")
    const bosing1 = document.querySelector("#bosing1")
    const bosing2 = document.querySelector("#bosing2")
    const bosing3 = document.querySelector("#bosing3")
    const bosing4 = document.querySelector("#bosing4")
    const ilova = document.querySelector("#ilova")
    const android = document.querySelector("#android")
    const los = document.querySelector("#los")
    const ilovalar = document.querySelector("#ilovalar")
    const windows = document.querySelector("#windows")
    const mac = document.querySelector("#mac")
    const linux = document.querySelector("#linux")
    const bot = document.querySelector("#bot")
    const tolov = document.querySelector("#tolov")
    const murakab = document.querySelector("#murakkab")
    const dostavka = document.querySelector("#dostavka")
    const integr = document.querySelector("#integr")
    const dizayn = document.querySelector("#dizayn")
    const smm = document.querySelector("#smm")
    const logotib = document.querySelector("#logotip")
    const youtube = document.querySelector("#yutube")
    const reklama = document.querySelector("#reklama")

    
   const responsive = document.querySelector("#responsive")
   const olcham = document.querySelector("#olcham")
   const start = document.querySelector("#start")


   const vaqt = document.querySelector("#vaqt")
   const ismoil = document.querySelector("#ismoil")
   const full = document.querySelector("#full")
   const onyil = document.querySelector("#onyil")
   const axmadjon = document.querySelector("#axmadjon")
   const beshyil = document.querySelector("#beshyil")
   const islombek = document.querySelector("#islombek")
   const biryil = document.querySelector("#biryil")
   const ulugbek = document.querySelector("#ulugbek")
   const dizayner = document.querySelector("#dizayner")
   const ikkiyil = document.querySelector("#ikkiyil")


   const boglanish = document.querySelector("#boglanish")
   const manzil = document.querySelector("#manzil")
   const andijon = document.querySelector("#andijon")
   const telefon1 = document.querySelector("#telefon")
   const email = document.querySelector("#email")
   const axmad = document.querySelector("#axmad")

   const malumot = document.querySelector("#malumot")
   const xodimlar = document.querySelector("#xodimlar")
   const ismingiz = document.querySelector("#ismingiz")
   const familiyangiz = document.querySelector("#familiyangiz")
   const qoldirish = document.querySelector("#qoldirish")
   const huquq = document.querySelector("#huquq")
   const bizbilan = document.querySelector("#bizbilan")
   const cholpon = document.querySelector("#cholpon")
   const yoshlar = document.querySelector("#yoshlar")
   const gmail = document.querySelector("#gmail")
   const sax = document.querySelector("#sax")
   const bizhaq = document.querySelector("#bizhaq")
   const xizma = document.querySelector("#xizma")
   const mij = document.querySelector("#mij")
   const pro = document.querySelector("#pro")
   const jamo = document.querySelector("#huquq")
   const alo = document.querySelector("#alo")
   const qol = document.querySelector("#qol")
   const tel = document.querySelector("#tel")

   

console.log(ismingiz)

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
            xil:"5 different",
            tur:"We have the following types of services:",
            WEB:"Websites",
            marketing:"and for on-page marketing and other purposes",
            platforma:"Educational Platforms An educational platform that includes payment systems",
            internet:"Internet stores + payment systems",
            crm:"Web programs, CRM, LMS systems",
            bosing:"Click to view",
            bosing1:"Click to view",
            bosing2:"Click to view",
            bosing3:"Click to view",
            bosing4:"Click to view",
            ilova:"Mobile applications",
            android:"Android",
            los:"los",
            ilovalar:"Decktop applications",
            windows:"windows",
            mac:"MacOs",
            linux:"Linux",
            bot:"Telegram bots",
            tolov:"Bots that include payment systems",
            murakab:"Bots of all complexity",
            dostavka:"Bots for delivery and various projects",
            integr:"Integrating the site into the bot",
            dizayn:"Graphic design",
            smm:"SMM posts",
            logotib:"Branding & Logo",
            youtube:"Youtube video banners",
            reklama:"Advertising banners",
            responsive:"RESPONSIVE",
            olcham:"Web applications compatible with any screen size",
            start:"Startapp ensures that your website or mobile app works equally well on all devices",
            vaqt:"Save time and money by choosing our professional team",
            ismoil:"Ismailjon Madgaziyev",
            full:"FULL STACK",
            onyil:"Full stack web developer and graphic designer with 10 years of experience",
            axmadjon:"Akhmadjod Madgaziyev",
            beshyil:"Full stack web developer and graphic designer with 5 years of experience",
            islombek:"Islambek Komilov",
            biryil:"Full stack web developer with 1 year of experience",
            ulugbek:"Ulugbek Madgaziyev",
            dizayner:"GRAPHIC DESIGNER",
            ikkiyil:"Graphic designer with 2 years of experience",
            boglanish:"contact us",
            manzil:"Andijan, Cholpon shox street 34, near the Youth center and school 15",
            telefon1:"Phone",
            email:"",
            axmad:"",
            malumot:"Leave us your information",
            xodimlar:"",
            ismingiz:"your name",
            familiyangiz:"your last name",
            qoldirish:"Leave",
            huquq:"All rights reserved.",
            bizbilan:"contact us",
            cholpon:"Address: Andijan, Cholpon shox street 34",
            yoshlar:"Destination: Near the Youth Center and 15th School",
            gmail:"ahmadjonmadaziiev3@gmail.com ",
            sax:"Pages",
            bizhaq:"about Us",
            xizma:"Services",
            mij:"Customers",
            pro:"Projects",
            jamo:"Team",
            alo:"Communication",
            qol:"Leave information",
            tel:"Leave your phone number and we will contact you soon",


    
           



        
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
            xil:"5 разных",
            tur:"У нас есть следующие виды услуг:",
            WEB:"Веб-сайты",
            marketing:"а также для внутреннего маркетинга и других целей",
            platforma:"Образовательные платформы Образовательная платформа, включающая платежные системы.",
            internet:"Интернет-магазины + платежные системы",
            crm:"Веб-программы, CRM, LMS-системы",
            bosing:"Нажмите, чтобы просмотреть",
            bosing1:"Нажмите, чтобы просмотреть",
            bosing2:"Нажмите, чтобы просмотреть",
            bosing3:"Нажмите, чтобы просмотреть",
            bosing4:"Нажмите, чтобы просмотреть",
            ilova:"Мобильные приложения",
            android:"Андроид",
            los:"Лос",
            ilovalar:"Настольные приложения",
            windows:"окна",
            mac:"МакОс",
            linux:"Линукс",
            bot:"Телеграм-боты",
            tolov:"Боты, включающие платежные системы",
            murakab:"Боты любой сложности",
            dostavka:"Боты для доставки и различных проектов",
            integr:"Интеграция сайта в бота",
            dizayn:"Графический дизайн",
            smm:"SMM-посты",
            logotib:"Брендинг и логотип",
            youtube:"Видеобаннеры на Ютуб",
            reklama:"Рекламные баннеры",
            responsive:"ОТВЕТСТВЕННЫЙ",
            olcham:"Веб-приложения, совместимые с любым размером экрана",
            start:"Startapp гарантирует, что ваш веб-сайт или мобильное приложение одинаково хорошо работает на всех устройствах.",
            vaqt:"Экономьте время и деньги, выбирая нашу профессиональную команду.",
            ismoil:"Исмаилджон Мадгазиев",
            full:"ПОЛНЫЙ СТЕК",
            onyil:"Full stack веб-разработчик и графический дизайнер с 10-летним опытом работы.",
            axmadjon:"Ахмаджод Мадгазиев",
            beshyil:"Full stack веб-разработчик и графический дизайнер с 5-летним опытом работы.",
            islombek:"Исламбек Комилов",
            biryil:"Full stack веб-разработчик с опытом работы от 1 года.",
            ulugbek:"Улугбек Мадгазиев",
            dizayner:"ГРАФИЧЕСКИЙ ДИЗАЙНЕР",
            ikkiyil:"Графический дизайнер с опытом работы от 2 лет.",
            boglanish:"связаться с нами",
            manzil:"Андижан, улица Чолпон шокс 34, рядом с Молодёжным центром и школой 15",
            telefon1:"Телефон",
            email:"",
            axmad:"",
            malumot:"Оставьте нам свою информацию",
            xodimlar:"",
            ismingiz:"ваше имя",
            familiyangiz:"ваше фамилия",
            qoldirish:"Оставлять",
            huquq:"Все права защищены.",
            bizbilan:"связаться с нами",
            cholpon:"Адрес: г. Андижан, улица Чолпон шокс 34",
            yoshlar:"Назначение: Рядом с Молодёжным центром и 15-й школой.",
            gmail:"ahmadjonmadaziiev3@gmail.com",
            sax:"Страницы",
            bizhaq:"о нас",
            xizma:"Услуги",
            mij:"Клиенты",
            pro:"Проекты",
            jamo:"Команда",
            alo:"Коммуникация",
            qol:"Оставить информацию",
            tel:"Оставьте свой номер телефона и мы свяжемся с вами в ближайшее время",
            
            


       
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
            headerbtn.textContent=
            language.eng.headerbtn
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
            xil.textContent=
            language.eng.xil
            tur.textContent=
            language.eng.tur
            WEB.textContent=
            language.eng.WEB
            marketing.textContent=
            language.eng.marketing
            platforma.textContent=
            language.eng.platforma
            internet.textContent=
            language.eng.internet
            crm.textContent=
            language.eng.crm
            bosing.textContent=
            language.eng.bosing
            bosing1.textContent=
            language.eng.bosing1
            bosing2.textContent=
            language.eng.bosing2
            bosing3.textContent=
            language.eng.bosing3
            bosing4.textContent=
            language.eng.bosing4
            ilova.textContent=
            language.eng.ilova
            android.textContent=
            language.eng.android
            los.textContent=
            language.eng.los
            ilovalar.textContent=
            language.eng.ilovalar
            windows.textContent=
            language.eng.windows
            mac.textContent=
            language.eng.mac
            linux.textContent=
            language.eng.linux
            bot.textContent=
            language.eng.bot
            tolov.textContent=
            language.eng.tolov
            murakab.textContent=
            language.eng.murakab
            dostavka.textContent=
            language.eng.dostavka
            integr.textContent=
            language.eng.integr
            dizayn.textContent=
            language.eng.dizayn
            smm.textContent=
            language.eng.smm
            logotib.textContent=
            language.eng.logotib
            youtube.textContent=
            language.eng.youtube
            reklama.textContent=
            language.eng.reklama
            responsive.textContent=
            language.eng.responsive
            olcham.textContent=
            language.eng.olcham
            start.textContent=
            language.eng.start
            vaqt.textContent=
            language.eng.vaqt
            ismoil.textContent=
            language.eng.ismoil
            full.textContent=
            language.eng.full
            onyil.textContent=
            language.eng.onyil
            axmadjon.textContent=
            language.eng.axmadjon
            beshyil.textContent=
            language.eng.beshyil
            islombek.textContent=
            language.eng.islombek
            biryil.textContent=
            language.eng.biryil
            ulugbek.textContent=
            language.eng.ulugbek
            dizayner.textContent=
            language.eng.dizayner
            ikkiyil.textContent=
            language.eng.ikkiyil
            boglanish.textContent=
            language.eng.boglanish
            manzil.textContent=
            language.eng.manzil
            andijon.textContent=
            language.eng.andijon
            telefon1.textContent=
            language.eng.telefon1
            email.textContent=
            language.eng.email
            axmad.textContent=
            language.eng.axmad
            malumot.textContent=
            language.eng.malumot
            ismingiz.textContent=
            language.eng.ismingiz
            familiyangiz.textContent=
            language.eng.familiyangiz
            qoldirish.textContent=
            language.eng.qoldirish
            huquq.textContent=
            language.eng.huquq
            bizbilan.textContent=
            language.eng.bizbilan
            cholpon.textContent=
            language.eng.cholpon
            yoshlar.textContent=
            language.eng.yoshlar
            gmail.textContent=
            language.eng.gmail
            sax.textContent=
            language.eng.sax
            bizhaq.textContent=
            language.eng.bizhaq
            xizma.textContent=
            language.eng.xizma
            mij.textContent=
            language.eng.mij
            pro.textContent=
            language.eng.pro
            jamo.textContent=
            language.eng.jamo
            alo.textContent=
            language.eng.alo
            qol.textContent=
            language.eng.qol
            tel.textContent=
            language.eng.tel
            
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
            headerbtn.textContent=
            language.rus.headerbtn
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
            xil.textContent=
            language.rus.xil
            tur.textContent=
            language.rus.tur
            WEB.textContent=
            language.rus.WEB
            marketing.textContent=
            language.rus.marketing
            platforma.textContent=
            language.rus.platforma
            internet.textContent=
            language.rus.internet
            crm.textContent=
            language.rus.crm
            bosing.textContent=
            language.rus.bosing
            bosing1.textContent=
            language.rus.bosing1
            bosing2.textContent=
            language.rus.bosing2
            bosing3.textContent=
            language.rus.bosing3
            bosing4.textContent=
            language.rus.bosing4
            ilova.textContent=
            language.rus.ilova
            android.textContent=
            language.rus.android
            los.textContent=
            language.rus.los
            ilovalar.textContent=
            language.rus.ilovalar
            windows.textContent=
            language.rus.windows
            mac.textContent=
            language.rus.mac
            linux.textContent=
            language.rus.linux
            bot.textContent=
            language.rus.bot
            tolov.textContent=
            language.rus.tolov
            murakab.textContent=
            language.rus.murakab
            dostavka.textContent=
            language.rus.dostavka
            integr.textContent=
            language.rus.integr
            dizayn.textContent=
            language.rus.dizayn
            smm.textContent=
            language.rus.smm
            logotib.textContent=
            language.rus.logotib
            youtube.textContent=
            language.rus.youtube
            reklama.textContent=
            language.rus.reklama
            responsive.textContent=
            language.rus.responsive
            olcham.textContent=
            language.rus.olcham
            start.textContent=
            language.rus.start
            vaqt.textContent=
            language.rus.vaqt
            ismoil.textContent=
            language.rus.ismoil
            full.textContent=
            language.rus.full
            onyil.textContent=
            language.rus.onyil
            axmadjon.textContent=
            language.rus.axmadjon
            beshyil.textContent=
            language.rus.beshyil
            islombek.textContent=
            language.rus.islombek
            biryil.textContent=
            language.rus.biryil
            ulugbek.textContent=
            language.rus.ulugbek
            dizayner.textContent=
            language.rus.dizayner
            ikkiyil.textContent=
            language.rus.ikkiyil
            boglanish.textContent=
            language.rus.boglanish
            manzil.textContent=
            language.rus.manzil
            andijon.textContent=
            language.rus.andijon
            telefon1.textContent=
            language.rus.telefon1
            email.textContent=
            language.rus.email
            axmad.textContent=
            language.rus.axmad
            malumot.textContent=
            language.rus.malumot
            ismingiz.textContent=
            language.rus.ismingiz
            familiyangiz.textContent=
            language.rus.familiyangiz
            qoldirish.textContent=
            language.rus.qoldirish
            huquq.textContent=
            language.rus.huquq
            bizbilan.textContent=
            language.rus.bizbilan
            cholpon.textContent=
            language.rus.cholpon
            yoshlar.textContent=
            language.rus.yoshlar
            gmail.textContent=
            language.rus.gmail
            sax.textContent=
            language.rus.sax
            bizhaq.textContent=
            language.rus.bizhaq
            xizma.textContent=
            language.rus.xizma
            mij.textContent=
            language.rus.mij
            pro.textContent=
            language.rus.pro
            jamo.textContent=
            language.rus.jamo
            alo.textContent=
            language.rus.alo
            qol.textContent=
            language.rus.qol
            tel.textContent=
            language.rus.tel
        
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
