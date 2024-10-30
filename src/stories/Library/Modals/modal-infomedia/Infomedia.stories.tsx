import { Meta, StoryFn } from "@storybook/react";
import { Infomedia } from "./Infomedia";

export default {
  title: "Library / Modals / Infomedia",
  component: Infomedia,
  argTypes: {
    showModal: {
      control: {
        type: "boolean",
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
    text: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof Infomedia>;

const Template: StoryFn<typeof Infomedia> = (args) => <Infomedia {...args} />;

export const Text = Template.bind({});
Text.args = {
  showModal: true,
  title: "BUTLERENS UTROLIGE HISTORIE",
  text: `<p id="p1">Det hele begyndte for fem år siden med tre piger, der sad på en bænk og græd.</p><p id="p2">Wil Haygood dækkede som journalist Barack Obamas valgkamp for Washington Post, og efter et valgmøde i North Carolina mødte han de tre unge kvinder, hvis fædre havde slået hånden af dem, fordi de ville stemme på en sort mand.</p><p id="p3">»Det er en meget stærk beslutning at trodse sin far, men pigerne elskede simpelthen det historiske øjeblik, de selv var med til at skabe«, siger Wil Haygood.</p><p id="p4">Den nat fornemmede han, at Barack Obama ville vinde og blive USA's første farvede præsident, selv om han var langt bagud i målingerne.</p><p id="p5">Og nu fødtes en idé i journalistens hoved: »Jeg ville finde en, som i perioden med raceadskillelse i USA havde arbejdet i Det Hvide Hus - det mest magtfulde sted i verden«. Når filmen ' The Butler' i dag får premiere i Danmark, skyldes det udelukkende den kæde af begivenheder, som Wil Haygood satte i gang den aften i North Carolina.</p><p id="p6">I mellemtiden nåede han at knytte et stærkt venskab til en mand, hvis fascinerende historie om 34 års tjeneste for otte præsidenter præcis lige så godt kunne være endt i historiens glemmebog, men som nu på flere måder er blevet en del af den amerikanske kulturarv - og en del af USA's fortælling om sig selv.</p><p id="p7"><br /><em style="bold">Fra Truman til Reagan</em></p><p id="p8">Måske netop derfor har filmen også vakt en til tider hidsig debat i USA. Især har kritikere beskyldt den for at fremstille Ronald Reagan som racist, hvad han ikke var. Wil Haygood var selv konsulent på filmen og afviser kritikken.</p><p id="p9">Men for at forstå hans svar, er vi nødt til at begynde et andet sted; med historien om, hvordan journalisten krydsede butlerens spor.</p><p id="p10">I sin jagt på en sort amerikaner, der havde arbejdet i Det Hvide Hus, fik Wil Haygood et tip om, at han skulle finde Eugene Allen, som vistnok havde arbejdet for tre præsidenter. Bevæbnet med en telefonbog gik Haygood i gang med at ringe til alle med det navn i Washington-området. Det var som at finde en nål i en høstak, og han vidste ikke engang, om den rigtige Eugene Allen stadig var i live.</p><p id="p11">Ved opringning nummer 57 var der bid.</p><p id="p12">»Jeg præsenterede mig og sagde, at jeg havde opsøgt ham, fordi han havde arbejdet for tre præsidenter. Han sagde, at den første var Harry Truman, og den sidste var Reagan, så han fik det nu til otte præsidenter, men ellers var han den, jeg søgte«, siger Wil Haygood.</p><p id="p13">Fredagen før præsidentvalget i 2008 ringede han for første gang på hos Eugene og Helene Allen. Efter nogle timers samtale var tilliden etableret, og Helene Allen sagde til sin mand: »Nu kan du godt vise ham det«. Overraskelsen i kælderen Den 88-årige mand rejste sig, gik gennem køkkenet og låste døren op til kælderen.</p><p id="p14">Han bad journalisten om at holde hans arm ned ad trappen, for lyset kunne kun tændes nede i kælderen.</p><p id="p15">»Da han tændte lyset, var det som at blive sænket ned i et herligt og forbløffende museum«. I det store rum hang der store, indrammede billeder af Eugene Allen med alle præsidenterne: Truman, Eisenhower, Kennedy, Johnson, Nixon, Ford, Carter og Reagan.</p><p id="p16">Der var også billeder af butleren sammen med kunstnere, som havde optrådt i Det Hvide Hus: Ella Fitzgerald, Frank Sinatra, Elvis Presley og mange flere. Der var indrammede breve fra både de præsidenter og de førstedamer, der havde skrevet til ham. Og så var der gaverne: en tegning fra præsident Truman, en hat fra Johnson og et slips fra Kennedy.</p><p id="p17">»Jeg blev helt bogstaveligt svag i knæene«, siger Wil Haygood.</p><p id="p18">»Her stod jeg sammen med en sort mand, som ingen nogensinde havde hørt om. Det var smukt, fordi hans liv havde strakt sig fra raceadskillelse til integration, og nu stod vi på tærsklen til at vælge den første farvede præsident i et land, der måtte udkæmpe en krig for at få ophævet slaveriet. Ægteparret var begge født i sydstaterne, han var vokset op på en plantage. Det var et meget følelsesladet øjeblik«. Wil Haygood spurgte, om Eugene Allen var sikker på, at ingen nogensinde havde skrevet eller fortalt hans historie.</p><p id="p19">»Han svarede: »Hvis du synes, jeg er værdig til at få min historie fortalt, vil du være den første«. Jeg var nødt til at vende mig om, fordi jeg fik tårer i øjnene«. Hvordan kunne ægteparret være i tvivl om, at de boede med en kulturskat i kælderen? »Jeg tror, det handler om at være tynget af den mangel på respekt, som en sort mand i hans generation havde været nødt til at leve med. Han følte, at det bedste, han kunne gøre, var at opbevare det og håbe på, at der en dag ville dukke nogen op, som ville forstå værdien af hans liv«.</p><p id="p20"><br /><em style="bold">Debatten om Reagan</em></p><p id="p21">Oppe i ægteparrets stue stod kun et enkelt billede fra Det Hvide Hus. Det var fra den aften, da Nancy og Ronald Reagan gav butleren en friaften og inviterede ham og hans hustru med som gæster til en statsmiddag for den vesttyske kansler Kohl.</p><p id="p22">»Det var som Askepot, der kom med til ballet. Forestil dig, hvor majestætisk det er: en butler, der sidder til bords med præsidenter, konger, diplomater og kongresmedlemmer«. Netop scenerne med Ronald Reagan har udløst en heftig debat, fordi filmen fremstiller Reagan som en tilhænger af apartheid, der ikke bekymrede sig om sortes rettigheder. Flere historikere har peget på, at Reagan helt tilbage fra sin tid som skuespiller protesterede, når han oplevede racistisk betinget forskelsbehandling.</p><p id="p23">Wil Haygood mener, at det er objektivt sandt, at Reagan ikke tæller blandt de præsidenter, der satte borgerrettigheder på dagsordenen.</p><p id="p24">»Men selvfølgelig er det ikke sort og hvidt. I det personlige møde var Reagan et formidabelt menneske, og det var derfor, ægteparret havde det billede oppe i stuen«.</p><p id="p25"><br /><em style="bold">Hun er væk</em></p><p id="p26">Klokken var tæt på midnat, da Wil Haygood forlod det ældre ægtepar den fredag aften i november 2008. Da metroen brød sammen på netop den station, hvor Washington Post ligger, besluttede journalisten at skrive en fotobestilling med det samme, så butleren og hans kone kunne blive fotograferet inden valgdagen.</p><p id="p27">Søndag, efter fotografen var færdig med sit arbejde, kom parrets søn på besøg, og Helene Allen sagde til ham, at hun var så glad, fordi nogen omsider ville skrive historien og give hendes mand den anerkendelse, han fortjente.</p><p id="p28">Mandag morgen ringede Wil Haygood til butleren for at høre, hvordan det var gået med fotografen.</p><p id="p29">»Jeg sagde »Godmorgen, hvordan går det?«, og han sagde helt stille: »Hun er væk«. »Undskyld?«. »Det er min kone.</p><p id="p30">Hun er væk. Hun vågnede ikke. Hun er død««. Næste dag stemte Eugene Allen på den første farvede præsident, og den følgende dag bragte Washington Post historien om butleren. Den gik verden rundt, og i mange uger efter dukkede der breve op fra hele verden til både journalisten og butleren. De mødtes af og til og skiftedes til at læse brevene op for hinanden.</p><p id="p31">Helene Allen blev begravet samme dag, som artiklen blev trykt. Wil Haygood kunne ikke undertrykke en følelse af skyld over at bringe historien midt i familiens sorg. Men efter ceremonien kom sønnen hen til ham og sagde: »Forstår du ikke, hvad der skete? Min mor havde ventet på dig. Du gav hende fred i sindet. Hun havde ventet på dig, lige siden den dag min far forlod Det Hvide Hus«.</p><p id="p32">Læs anmelden på næste side.</p><p id="p33">jakob.nielsen@pol.dk </p><p id="p34">Det var smukt, fordi hans liv havde strakt sig fra raceadskillelse til integration Wil Haygood, journalist Det var som Askepot, der kom med til ballet.</p><p id="p35">Forestil dig, hvor majestætisk det er: en butler, der sidder til bords med præsidenter, konger, diplomater og kongresmedlemmer Wil Haygood, journalist.</p><p id="p36"><br /><em style="bold">Fakta: The Butler</em></p><p id="p37">Filmen ' The Butler' er en fri fortolkning af Eugene Allens historie. I filmen har butleren et andet navn, og store dele af hans historie er ændret.</p><p id="p38">Butleren og hans kone spilles af Forest Whitaker og Oprah Winfrey.</p><p id="p39">Filmen er instrueret af Lee Daniels, der var nomineret til en Oscar for ' Precious'.</p><p id="p40">Virkelighedens butler, Eugene Allen, døde i 2010, 90 år gammel.</p>`,
};
