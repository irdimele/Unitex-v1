import React, { createContext, useContext, useState } from 'react';

export const dictionary = {
  EN: {
    nav: {
      whoWeAre: 'WHO WE ARE',
      whatWeDo: 'WHAT WE DO',
      contactUs: 'CONTACT US',
    },
    hero: {
      welcome: 'WELCOME TO UNITEX',
      subtitle: "Your sourcing partner for labels, ribbons, accessories, and packaging built for Albania's textile industry and more.",
    },
    whoWeAre: {
      title: 'WHO WE ARE',
      p1: "Unitex was founded to solve a problem every textile manufacturer and many other manufacturers in Albania knows well: sourcing the right materials, on time, without the back-and-forth and with the right price. We work behind the scenes as a dedicated supply partner, providing producers with the labels, ribbons, accessories, and packaging they need to keep production moving.",
      p2: "Labels and ribbons are at the heart of what we do - and it's an area where we stand apart. Unitex is among the very few companies sourcing ribbons directly within Albania, giving local manufacturers a nearby, reliable alternative to importing from abroad.",
      p3: "From small workshops to established manufacturing lines, we tailor every order to the client's specifications. Our role is simple: handle sourcing with precision and reliability, so our clients can stay focused on producing."
    },
    whatWeDo: {
      title: 'WHAT WE DO',
      subtitle: "We support every stage of garment production and product handling with five core solutions - labels & ribbons, barcode labels, RFID, packaging, and accessories - sourced, quality-checked, and delivered on your schedule.",
      items: [
        {
          title: "Labels & Ribbon Solutions",
          content: (<div className='space-y-4'>
          <p>Woven labels, printed labels, care labels, and hang tags, produced to your exact specifications and compliant with international care-labeling standards - alongside a full range of ribbons, including satin, grosgrain, cotton, for trims, waistbands, drawstrings, and decorative detailing.</p>
            <p>This is a core part of our business, and one where we're proud to stand out: Unitex is among the only companies sourcing ribbons directly within Albania. That means shorter lead times, lower shipping costs, and one dependable local partner in place of multiple overseas suppliers. Whether you need a single brand identity across thousands of garments or a specific ribbon for a limited run, we manage the sourcing so every piece leaves production correctly labeled and finished. </p>
            </div>)
        },
        {
          title: "Barcode Label Solutions",
          content: (
            <div className="text-center max-w-2xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
              <p>
                Barcode labels do a small job with big consequences: they track and identify products at every stage of the supply chain, and they show up on nearly everything - cartons, shipping envelopes, drums, plastics, glass, and more. Getting them right starts with two questions: what surface is the label going on, and how long does it need to hold - a single shipment, or years on a shelf.
              </p>
              <p>
                We source barcode labels in every standard construction, so the answer is ready before you need it. For anything outside these, our team will source the right fit.
              </p>
              <div className="pt-2">
                <p className="font-bold text-black mb-1">Available constructions:</p>
                <div className="space-y-0.5 text-gray-700">
                  <p>· Coated Paper Barcode Labels</p>
                  <p>· Thermal Paper Barcode Labels</p>
                  <p>· PP Film Barcode Labels</p>
                  <p>· Silver Matte Film Barcode Labels</p>
                  <p>· Jewelry Labels</p>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "RFID Label Solutions",
          content: (
    <div className="text-center max-w-2xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
      <p>
        RFID takes tracking a step further than barcodes. Instead of scanning items one at a time, a reader can detect, identify, and log multiple tagged items at once - automatically, remotely, and without needing a clear line of sight. Each tag carries its own unique digital identity, so five identical products stay individually trackable, and inventory stays accurate without manual counting or spreadsheet updates.
      </p>

      <p>
        Read range depends on the setup: entry-level handheld readers cover 2–5 metres, while advanced chips paired with fixed readers and antennas can reach 9–20 metres -enough to track stock without anyone touching, lifting, or even seeing the product. Beyond inventory, RFID opens the door to secure authentication, smart fitting rooms, and connected packaging.
      </p>

      <div className="pt-2">
        <p className="font-bold text-black mb-1">Why RFID:</p>
        <div className="space-y-0.5 text-gray-700">
          <p>· Reads multiple tags at once, from a distance, with no line of sight required</p>
          <p>· Gives every item its own unique digital ID - even identical products are tracked individually</p>
          <p>· Removes manual counting and data-entry errors from inventory tracking</p>
          <p>· Holds more data per tag than a barcode can carry</p>
          <p>· Opens up uses beyond inventory: secure authentication, smart fitting rooms, connected packaging</p>
        </div>
      </div>
    </div>
  )
        },
        {
          title: "Packaging Solutions",
          content: (
    <div className="text-center max-w-2xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
      <p>
        Packaging is the last impression before a garment reaches its buyer, and the first line of protection before it gets there. We source it the way we source everything else - broken down by exactly what you need, not sold as a single generic bundle.
      </p>

      <div className="pt-2">
        <p className="font-bold text-black mb-1">By packaging type:</p>
        <div className="space-y-0.5 text-gray-700">
          <p>· Poly Bags - printed, unprinted, resealable, or biodegradable</p>
          <p>· Cartons & Boxes - shipping cartons, retail-ready boxes, master cartons</p>
          <p>· Tags & Tickets - swing tags, price tickets, size tags</p>
          <p>· Protective Packaging - tissue paper, garment bags, corner protectors, pins and clips</p>
        </div>
      </div>

      <div className="pt-2">
        <p className="font-bold text-black mb-1">By finish:</p>
        <div className="space-y-0.5 text-gray-700">
          <p>· Branded with your logo</p>
          <p>· Plain / unbranded</p>
          <p>· Eco-friendly and biodegradable options</p>
        </div>
      </div>

      <p className="pt-2">
        Mix and match by product line or order everything as one shipment — either way, it's quality-checked and timed to your production schedule, so packaging is never the step that holds things up.
      </p>
    </div>
  )
        },
        {
          title: "Accessory Solutions",
          content: "Buttons, zippers, threads, trims, and every small component that holds a garment together. We source accessories that match your quality standards and production volume, with reliable lead times so a missing trim never holds up your line."
        },
        
      ]
    },
    contactUs: {
      title: 'CONTACT US',
      subtitle: 'Have a project in mind or a sourcing need to solve? Get in touch - we typically respond within one business day.',
      formTitle: 'GET IN TOUCH',
      nameLabel: 'Full Name',
      emailLabel: 'E-Mail',
      messageLabel: 'Your Message',
      submitBtn: 'Send Message'
    }
  },
  AL: {
    nav: {
      whoWeAre: 'KUSH JEMI NE',
      whatWeDo: 'ÇFARË BËJMË NE',
      contactUs: 'NA KONTAKTONI',
    },
    hero: {
      welcome: 'MIRËSEVINI NË UNITEX',
      subtitle: "Partneri juaj i furnizimit për etiketa, shirita, aksesorë dhe paketim - ndërtuar për industrinë tekstile në Shqipëri dhe më gjerë.",
    },
    whoWeAre: {
      title: 'KUSH JEMI NE',
      p1: "Unitex u themelua për të zgjidhur një problem që çdo prodhues tekstili dhe shumë prodhues të tjerë në Shqipëri e njohin mirë: gjetjen e materialeve të duhura, në kohë, pa vonesa e komunikime të pafundme dhe me çmimin e duhur. Ne punojmë në prapaskenë si një partner i përkushtuar furnizimi, duke u ofruar prodhuesve etiketat, shiritat, aksesorët dhe paketimet që u nevojiten për të mbajtur prodhimin në lëvizje.",
      p2: "Etiketat dhe shiritat janë në qendër të punës sonë dhe ky është një sektor ku ne veçohemi. Unitex është ndër të paktat kompani që i siguron shiritat drejtpërdrejt brenda Shqipërisë, duke u ofruar prodhuesve vendas një alternativë të afërt dhe të besueshme ndaj importit nga jashtë.",
      p3: "Nga punishtet e vogla deri te linjat e konsoliduara të prodhimit, ne e përshtatim çdo porosi sipas specifikimeve të klientit. Roli ynë është i thjeshtë: të menaxhojmë furnizimin me precizion dhe besueshmëri, në mënyrë që klientët tanë të mund të përqendrohen te prodhimi."
    },
    whatWeDo: {
      title: 'ÇFARË BËJMË NE',
      subtitle: "Ne mbështesim çdo fazë të prodhimit të veshjeve dhe menaxhimit të produkteve me pesë zgjidhje kryesore – etiketa & shirita, etiketa me barkod, RFID, paketim dhe aksesorë – të siguruara, të kontrolluara për cilësinë dhe të dorëzuara sipas orarit tuaj.",
      items: [
        {
          title: "Zgjidhje për Etiketa & Shirita",
          content: (<div className='space-y-4'>
          <p>Etiketa të thurura, etiketa të printuara, etiketa kujdesi dhe etiketa varëse, të prodhuara sipas specifikimeve tuaja të sakta dhe në përputhje me standardet ndërkombëtare të etiketimit – së bashku me një gamë të plotë shiritash, përfshirë saten, grosgrain dhe pambuk, për punime anësore, breza, kordonë dhe detaje dekorative.</p>
            <p>Kjo është një pjesë kryesore e biznesit tonë dhe një sektor ku jemi krenarë që veçohemi: Unitex është ndër të paktat kompani që siguron shiritat drejtpërdrejt brenda Shqipërisë.
               Kjo do të thotë afate më të shkurtra furnizimi, kosto më të ulëta transporti dhe një partner lokal i besueshëm në vend të furnizuesve të shumtë nga jashtë.
                Sido që të keni nevojë për një identitet të vetëm marke në mijëra veshje apo për një shirit specifik për një seri të kufizuar, 
                ne e menaxhojmë furnizimin në mënyrë që çdo produkt të dalë nga prodhimi i etiketuar dhe i përfunduar saktë. </p>
            </div>)
        },
        {
          title: "Zgjidhje për Etiketa me Barkod",
          content:(
            <div className="text-center max-w-2xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
              <p>Etiketat me barkod kryejnë një punë të vogël me pasoja të mëdha: ato gjurmojnë dhe identifikojnë produktet në çdo fazë të zinxhirit të furnizimit 
                dhe përdoren në pothuajse gjithçka – kartona, zarfe dërgesash, fuçi, plastikë, qelq e më shumë. Zgjedhja e duhur fillon me dy pyetje: 
                në çfarë sipërfaqe do të vendoset etiketa dhe sa kohë duhet të rezistojë – për një dërgesë të vetme apo për vite me radhë në raft.
              </p>
              <p>
                Ne sigurojmë etiketa me barkod në çdo strukturë standarde, kështu që zgjidhja është e gatshme përpara se t'ju nevojitet.
               Për çdo kërkesë jashtë këtyre specifikimeve, ekipi ynë do të gjejë opsionin e duhur.
              </p>
              <div className="pt-2">
                <p className="font-bold text-black mb-1">Llojet e disponueshme:</p>
                <div className="space-y-0.5 text-gray-700">
                  <p>· Etiketa me barkod prej letre të lyer</p>
                  <p>·Etiketa me barkod prej letre termike</p>
                  <p>· Etiketa me barkod me film PP</p>
                  <p>· Etiketa me barkod me film argjendi mat</p>
                  <p>· Etiketa për bizhuteri</p>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Zgjidhje për Etiketa RFID",
          content: (
    <div className="text-center max-w-2xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
      <p>
        RFID-ja e çon gjurmimin një hap më tej se barkodet. Në vend të skanimit të artikujve një nga një, një lexues mund të detektojë, identifikojë dhe regjistrojë me një herë artikuj të shumtë të etiketuar – automatikisht, nga distanca dhe pa pasur nevojë për pamje të drejtpërdrejtë. Çdo etiketë mbart identitetin e vet unik digjital, kështu që pesë produkte identike mbeten të gjurmueshme individualisht dhe inventari mbetet i saktë pa pasur nevojë për numërim manual apo përditësime tabelash.
      </p>

      <p>
     Rrezja e leximit varet nga konfigurimi: lexuesit portativë të nivelit bazë mbulojnë 2–5 metra, ndërsa çipat e avancuar të kombinuar me lexues fiks dhe antena mund të arrijnë 9–20 metra – mjaftueshëm për të gjurmuar stokun pa e prekur, ngritur apo edhe parë produktin dikush. Përveç inventarit, RFID mundëson autentifikim të sigurt, dhoma provimi inteligjente dhe paketim të lidhur në rrjet.
      </p>

      <div className="pt-2">
        <p className="font-bold text-black mb-1">Pse RFID:</p>
        <div className="space-y-0.5 text-gray-700">
          <p>· Lexon etiketa të shumta me një herë, nga distanca, pa pasur nevojë për pamje të drejtpërdrejtë</p>
          <p>·I jep çdo artikulli identitetin e vet unik digjital – madje edhe produktet identike gjurmohen individualisht</p>
          <p>·Eliminon numërimin manual dhe gabimet gjatë hedhjes së të dhënave për inventarin</p>
          <p>· Mban më shumë të dhëna për etiketë sesa mund të bartë një barkod</p>
          <p>· Hap mundësi përdorimi përtej inventarit: autentifikim të sigurt, dhoma provimi inteligjente dhe paketim të lidhur</p>
        </div>
      </div>
    </div>
  )
        },
        {
          title: "Zgjidhje për Paketim",
          content: (
    <div className="text-center max-w-2xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
      <p>
        Paketimi është përshtypja e fundit përpara se një veshje të arrijë te blerësi dhe linja e parë e mbrojtjes përpara se të mbërrijë atje. Ne e sigurojmë atë ashtu si çdo gjë tjetër – të ndarë saktësisht sipas asaj që ju nevojitet, jo të shitur si një paketë e vetme gjenerike.
      </p>

      <div className="pt-2">
        <p className="font-bold text-black mb-1">Sipas llojit të paketimit:</p>
        <div className="space-y-0.5 text-gray-700">
          <p>· Qese plastike – të printuara, të paprintuara, me rimbyllje, ose biodegraduese</p>
          <p>· Kartona & Kuti – kartona dërgesash, kuti të gatshme për shitje me pakicë, kartona kryesorë </p>
          <p>·Etiketa & Biletat – etiketa varëse (swing tags), etiketa çmimi, etiketa mase</p>
          <p>· Paketim mbrojtës – letër mëndafshi, këllëfë për veshje, mbrojtëse këndesh, gjilpëra dhe kapëse</p>
        </div>
      </div>

      <div className="pt-2">
        <p className="font-bold text-black mb-1">Sipas personalizimit:</p>
        <div className="space-y-0.5 text-gray-700">
          <p>·Të personalizuara me logon tuaj</p>
          <p>· Të thjeshta / pa markë</p>
          <p>· Opsione ekologjike dhe biodegraduese</p>
        </div>
      </div>

      <p className="pt-2">
       Kombinojini sipas linjës së produktit ose porositini të gjitha si një dërgesë e vetme – në të dyja rastet, ato kontrollohen për cilësinë dhe koordinohen me orarin tuaj të prodhimit, në mënyrë që paketimi të mos jetë kurrë hapi që ju pengon.
      </p>
    </div>
  )
        },
        {
          title: "Zgjidhjet për aksesorët",
          content: "Kopsa, zinxhirë, fije qepjeje, punime anësore dhe çdo përbërës i vogël që mban të bashkuar një veshje. Ne sigurojmë aksesorë që i përshtaten standardeve tuaja të cilësisë dhe vëllimit të prodhimit, me afate të besueshme furnizimi, në mënyrë që një detaj që mungon të mos e bllokojë kurrë linjën tuaj të prodhimit."
        }
      ]
    },
    contactUs: {
      title: 'NA KONTAKTONI',
      subtitle: 'Keni një projekt në mendje apo një nevojë për furnizim? Na kontaktoni - zakonisht përgjigjemi brenda një dite pune.',
      formTitle: 'NA SHKRUANI',
      nameLabel: 'Emri i Plotë',
      emailLabel: 'E-Mail',
      messageLabel: 'Mesazhi Juaj',
      submitBtn: 'Dërgo Mesazhin'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  // Safeguard: Normalize key to UPPERCASE and fallback to 'EN' if missing
  const currentLangKey = (language || 'EN').toUpperCase();
  const t = dictionary[currentLangKey] || dictionary.EN;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);