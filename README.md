# IT Professionals — webová stránka (Next.js)

Moderní, minimalistická jednostránková prezentace firmy IT Professionals.
Postavená na **Next.js 14 + TypeScript + Tailwind CSS**, připravená k nasazení na **Vercel**.
Vizuální styl a struktura vychází z reference **bellhurry.com**, obsah je převzatý
z **itprofessionals.cz**.

---

## 1) Jak to celé funguje (přehled procesu)

1. **Definice** – hotovo: struktura, sekce, texty (viz `lib/content.ts`).
2. **Design** – hotovo: tmavý minimalistický styl, žlutý akcent.
3. **Vývoj** – hotovo: kód této složky.
4. **Ladění** – vy upravíte texty a doplníte reálné reference/loga (viz bod 3).
5. **Nasazení na Vercel** – návod v bodě 5. Výsledkem je veřejná adresa (URL).

---

## 2) Struktura projektu

```
itprofessionals-web/
├─ app/
│  ├─ layout.tsx        # HTML kostra, fonty, SEO metadata
│  ├─ page.tsx          # skládá všechny sekce dohromady
│  └─ globals.css       # globální styly a pomocné třídy
├─ components/          # jednotlivé sekce (Hero, Services, Method…)
├─ lib/
│  └─ content.ts        # ⭐ VŠECHNY TEXTY jsou tady – tohle upravujte
├─ tailwind.config.ts   # barvy, fonty, animace
├─ package.json         # seznam závislostí a příkazy
└─ README.md            # tento návod
```

---

## 3) Co si upravit (než web zveřejníte)

Otevřete soubor **`lib/content.ts`** – najdete v něm veškeré texty na jednom místě.
Vyhledejte komentáře **`// TODO: replace`** – to jsou místa s ukázkovým (placeholder)
obsahem, který je vhodné nahradit skutečným:

- **Reference / loga klientů** (`credentials.partners`) – zatím jen názvy odvětví.
- **Case studies** (`work.items`) – teď jsou to oblasti zaměření; můžete je nahradit
  konkrétními projekty (klient, zadání, výsledek).
- **Testimonials** (`testimonials.items`) – ukázkové citace bez jmen; doplňte reálné.
- **Adresa a IČO/DIČ** (`site.address`, `site.vat`) – doplňte, pokud je chcete zobrazit.

Změna **barev / fontů**: soubor `tailwind.config.ts` (žlutý akcent je `accent: "#F3C21B"`).

> Tip: po každé úpravě souboru se web při běžícím `npm run dev` sám obnoví v prohlížeči.

---

## 4) Spuštění na vlastním počítači (volitelné, pro náhled)

Potřebujete **Node.js 18.17 nebo novější** (doporučeno 20+): https://nodejs.org

V terminálu ve složce projektu:

```bash
npm install      # jednorázově stáhne závislosti
npm run dev      # spustí web na http://localhost:3000
```

Otevřete v prohlížeči `http://localhost:3000`. Ukončení: `Ctrl + C`.

Ověření produkčního buildu (stejný, jaký poběží na Vercelu):

```bash
npm run build
npm start
```

---

## 5) Nasazení na Vercel (veřejná adresa)

Máte dvě cesty. **Doporučená je varianta A** (přes GitHub) – po ní se web
automaticky aktualizuje pokaždé, když něco změníte.

### Varianta A — přes GitHub (doporučeno)

1. Založte si účet na **https://github.com** (pokud ještě nemáte).
2. Vytvořte nový **repository** (např. `itprofessionals-web`), nechte ho prázdný.
3. Nahrajte do něj obsah této složky. Buď přetažením souborů ve webovém
   rozhraní GitHubu (tlačítko **Add file → Upload files**), nebo v terminálu:

   ```bash
   git init
   git add .
   git commit -m "IT Professionals web"
   git branch -M main
   git remote add origin https://github.com/VAS-UCET/itprofessionals-web.git
   git push -u origin main
   ```

4. Přihlaste se na **https://vercel.com** tlačítkem **Continue with GitHub**.
5. **Add New… → Project** → vyberte svůj repository → **Import**.
6. Vercel sám pozná, že jde o Next.js. Nic nenastavujte, klikněte **Deploy**.
7. Za ~1 minutu dostanete veřejnou adresu typu
   `https://itprofessionals-web.vercel.app` — web je online. ✅

Od teď platí: jakmile do GitHubu nahrajete změnu, Vercel web automaticky přebuiluje.

### Varianta B — přes Vercel CLI (rychlé, bez GitHubu)

```bash
npm install -g vercel     # jednorázově
vercel login              # přihlášení (e-mailem)
vercel                    # nahraje náhledovou verzi
vercel --prod             # nasadí do produkce (veřejná adresa)
```

---

## 6) Vlastní doména (itprofessionals.cz)

1. Ve Vercelu otevřete projekt → **Settings → Domains → Add**.
2. Zadejte `itprofessionals.cz` (a případně `www.itprofessionals.cz`).
3. Vercel vám ukáže DNS záznamy (obvykle `A` záznam a/nebo `CNAME`).
4. Tyto záznamy vložte u svého správce domény (tam, kde doménu spravujete).
5. Po propagaci DNS (minuty až hodiny) poběží web na vaší doméně, včetně HTTPS.

> Pozn.: doména dnes směřuje na Squarespace. Přepnutím DNS na Vercel nahradíte
> starý web novým. Doporučuji nový web nejdřív vyzkoušet na `*.vercel.app`
> a doménu přepnout, až budete s podobou spokojený.

---

## 7) Časté dotazy

**Musím umět programovat?** Ne. Pro spuštění a nasazení stačí následovat příkazy výše.
Pro úpravu textů stačí editovat `lib/content.ts` v běžném textovém editoru.

**Kolik stojí Vercel?** Pro tento typ webu je zdarma (Hobby plán).

**Jak přidat další stránku (např. samostatný blog)?** Řekněte mi a rozšíříme to –
struktura na to je připravená.
