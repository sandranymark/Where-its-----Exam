Ditt uppdrag är att koda ihop en frontend till biljettjänsten Where its @. Den ska se ut enligt nedan mockup. Du har också tillgång till Figma-länk för exportering av assets, färger, kika fonter etc.
![image](https://github.com/sandranymark/Where-its-at-Exam/assets/143543945/cf314d9d-f026-4b23-842f-a6df656d66f5)


# Tekniska Krav för godkänt:

- Pages & Components
- useState & useEffect
- Props
- API-hantering
- Routing mellan Pages
- Avancerad statehantering med externt bibliotek (ex Zustand)


## För att uppnå kraven för välgodkänt har jag använt följande externa bibliotek:
  - [react-icons](https://react-icons.github.io/react-icons/)  :  Detta bibliotek ger tillgång till ett stort antal ikoner från olika ikonbibliotek, såsom Font Awesome, Material Icons, och många fler.<br>
 Jag har använt react-icons för + och - som knappar för att lägga till och ta bort produkter på mina ordrar/beställningar istället för att använda vanliga + och - variablerna.


    
  - [react-barcode](https://github.com/kciter/react-barcode)
React Barcode är ett bibliotek för att generera streckkoder i React. Det kan användas för att skapa streckkoder i olika format som EAN, UPC, Code128, och många fler.<br>
Jag har använt React-barcode till mina event-biljetter där jag även har slumpgenererat ett biljettID.<br>
React-Barcode har varit bra då jag behöve ha en streckkod till biljetter i mitt projekt. Det svåra har dock varit att styla om barcoden (byta bakgrundsfärg,textsnitt, storlek osv.)
Läste i efterhand att man kunde använda sig av filter för att uppnå detta men vet inte om det fungerar.

