# Ekonomika – redovisningsbyrå

En enkel statisk webbplats. Huvudsidan ligger i `index.html` och bilderna/logotyperna ligger i `assets/`.

## Publicera gratis med GitHub Pages

1. Skapa ett konto på [GitHub](https://github.com/) om du inte redan har ett.
2. Skapa ett nytt **Public** repository, till exempel `balans-hemsida`.
3. Ladda upp `index.html` från den här mappen via **Add file → Upload files** och välj **Commit changes**.
4. Öppna repositoryts **Settings → Pages**.
5. Under **Build and deployment**, välj **Deploy from a branch**, sedan `main` och `/(root)`. Klicka **Save**.
6. När publiceringen är klar visas hemsidans adress på samma Pages-sida. Efter framtida uppladdningar publiceras ändringarna från `main` automatiskt.

GitHub Pages på gratisplanen kräver ett publikt repository. Webbplatsen är ändå offentlig när den publiceras, och i ett publikt repository kan andra också se webbplatsens källkod. Lägg därför inte in lösenord eller privata uppgifter här.

## Koppla en egen domän senare

När du har köpt domänen går du till **Settings → Pages → Custom domain** och anger domänen. Därefter lägger du in de DNS-poster som GitHub visar hos domänleverantören och aktiverar **Enforce HTTPS** när alternativet blir tillgängligt. Det kan ta lite tid innan DNS och HTTPS fungerar.

Byt också ut exempeladressen `hej@dittforetag.se` i `index.html` mot byråns riktiga e-postadress innan hemsidan publiceras.
