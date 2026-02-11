# Engine Tutorial [DE]

### Einführung

Hi und danke, dass ihr die “wareware” engine von riprip testet! Wir suchen immer noch nach einem Namen für die Engine, sagt gerne Bescheid, falls ihr eine Idee habt.

Diese Version des Handbuch ist veraltet. Die Englische Version ist aktueller!

Die Engine ist noch im early alpha development, also nicht super stabil. Speichert häufig, wenn ihr an etwas wichtigem arbeitet! Ganz viele Sachen sind auch noch nicht fertig oder ein bisschen janky vom UI, wundert euch nicht 🫠 Aber trotzdem freuen wir uns wenn ihr Feedback für uns habt!

![image.png](tutorial/image.png)

Mit der “untitled engine” könnt ihr kleine interaktive Welten bauen. Falls ihr schon mal **bitsy** benutzt habt, könnt ihr euch ungefähr vorstellen, wie das aussehen könnte.

Der Arbeitsbereich ist in 2 Teile aufgeteilt. Auf der rechten Seite seht ihr den **Room Editor**, links befinden sich eure **Werkzeuge**.

Wir gehen alles der Reihe nach durch und beginnen links bei **Rooms**.

### Rooms

![image.png](tutorial/image%201.png)

**Rooms** nennen wir die einzelnen Level oder Abschnitte eines Spiels. Es müssen aber nicht unbedingt _literally Räume_ sein, es kann auch ein Strand, ein Waldstück oder das Deck eines Schiffes sein - so wie es für euch passt!

Ihr könnt oben eure Rooms benennen, ihnen einen Alt-Text geben und zwischen ihnen wechseln.

- **Duplicate Room**: Dupliziert den aktuellen Room mit allen Characters, Dialogen und Eigenschaften.
- **Delete Room**: Löscht den aktuellen Room (kann nicht rückgängig gemacht werden).
- **Place Chara**: Platziert den Doggo, mit dem ihr im Play-Modus umherlaufen könnt.
- **Place Teleport**: Rooms sind immer über Teleports miteinander verbunden. Dazu später mehr im Abschnitt zu Sprites.
- **Background Color**: Ändert die Farbe des Hintergrunds (hat Einfluss auf die Lichttemperatur, spielt also viel damit rum!)

### Blocks

![image.png](tutorial/image%202.png)

Hier seht ihr eure aktuelle Palette an Blöcken. Über das **+** könnt ihr ganz einfach eigene Blöcke hinzufügen. Die Blöcke sehen unserer Meinung nach am Besten aus, wenn sie 16x16 Pixel groß sind, aber ihr könnt auch alle möglichen anderen Fotos oder Bilder hochladen.

Die Blöcke lassen sich auch **animieren**. Dafür muss die Grafik **genau doppelt so breit wie hoch** sein. Zum Beispiel ist das Feuer unten 16x32 groß, hat also 2 Frames. Du könntest aber auch 4 Frames animieren, dann müsste das Feuer 16x64 groß sein. Besonders einfach geht die Erstellung von animierten Blöcken mit dem Sprite Sheet Feature von Aseprite.

![flame-sheet.png](tutorial/flame-sheet.png)

Über der Palette seht ihr 3 Bau-Optionen: **Cube**, **Slope** und **Detail**

- **Cube**: Die Grafik wird als Würfel im Room platziert. Alle 6 Seiten erhalten hierbei die gleiche Textur.
  ![image.png](tutorial/image%203.png)
- **Slope**: Die Grafik wird als Slope im Room platziert. VORSICHT: Dieses Feature ist noch nicht fertig. Doggo kann noch keine Slopes hoch/runterlaufenDaher bitte nur als Deko einsetzen.
  Mit **R** rotierst du die Slope.
  ![image.png](tutorial/image%204.png)
- **Detail**: Die Grafik wird als aufrecht stehende Fläche im Room platziert. Die Fläche richtet sich immer zur Kamera aus.
  ![image.png](tutorial/image%205.png)

### Sprites

![image.png](tutorial/image%206.png)

Sprites sind die einzigen interaktiven Objekte, die Actions ausführen, wenn Doggo gegen sie läuft. Ähnlich wie Details sind sie flach und richten sich immer zur Kamera.
Über das **+** fügst du neue Sprites hinzu (funktioniert alles wie bei den Blöcken).
Wenn du ein Sprite platziert hast, öffnet sich unter der Rubrik Sprites folgender Dialog:

![image.png](tutorial/image%207.png)

Hier kannst du festlegen, was passieren soll, wenn Doggo gegen den Sprite läuft. Bis jetzt gibt es 3 Optionen: **message, teleport** und **sound/music.**

- **message:** So schreibst du Dialog, der in einer kleinen Sprechblase über dem Sprite erscheint. Er muss immer so formatiert sein.:
  `message(”Hier euer Text”)`
  Jedes “message” leitet eine neue Sprechblase ein.
  **Hinweis:** Pass ein bisschen mit Anführungszeichen und Klammern auf, weil diese Zeichen momentan noch den Dialog beenden. Es ist ratsam den Dialog auch außerhalb der Engine zu schreiben/speichern, damit nichts verloren geht.
  ![image.png](tutorial/image%208.png)
- **teleport:** So kannst du Doggo teleportieren. Klicke oben in der Kategorie Room auf “Place Teleport” und platziere ihn. Der Befehl für den Teleport wird automatisch in deine Zwischenablage kopiert und du kannst ihn in die Actions des Sprites einfügen.
  ![image.png](tutorial/image%209.png)
- **sound, music:** Klicke auf einen hinzugefügten Sound. Die Action wird in deine Zwischenablage kopiert und lässt sich wie beim Teleport in die Aktionen des Sprites einfügen. Wenn Doggo gegen das Sprite läuft, wird der Sound abgespielt. Mehr dazu im Abschnitt **Sound und Music**.
  ![image.png](tutorial/image%2010.png)

**Sprite auswählen**: Wenn du ein Sprite ausgewählt hast, kannst du im Room Editor auf ein anderes Sprite rechts-klicken. Dann öffnet sich wieder der Sprite Editor.

**Tip:** mit **TAB** kannst du schnell zwischen Block und Sprite Modus wechseln!

### Sound und Music

![image.png](tutorial/image%2011.png)

Wir unterscheiden zwischen **Sound und Music**. Beides lässt sich über Actions im Sprite Editor triggern.

- **Sound**: Wird pro Trigger **ein einziges** **Mal** abgespielt. Es können mehrere Sounds gleichzeitig abgespielt werden.
- **Music**: Music **loopt**, wenn sie getriggert wird und läuft zwischen Rooms weiter. Es kann immer nur eine Music gleichzeitig laufen.

### Room Editor

Im Room Editor baust du aus Blöcken und Sprites dein Spiel. Die Steuerung ist ca. wie in Infiniminer oder Minecraft - du stapelst Blöcke übereinander, indem du mit dem Cursor die freiliegende Seite eines bereits platzierten Blocks anvisierst.

- **Kamera rotieren**: mittlere Maustaste gedrückt halten
- **Zoom**: mittlere Maustaste scrollen
- **Kamera bewegen**: Shift + mittlere Maustaste
- **Block platzieren**: Linksklick
- **Block löschen**: Rechtsklick

Mit gehaltener Shift-Taste kannst du Blöcke frei und unabhängig der anderen Blöcke platzieren.

Mit **Shift + Q oder E** kannst du den Block nach unten und oben bewegen.

### Play

![image.png](tutorial/image%2012.png)

Mit dem Play-Button oben links startest du dein Spiel. Mit den Pfeiltasten oder der gehaltenen Maustaste bewegst du Doggo durch deine Welt und interagierst mit Sprites.

### Game Data

![image.png](tutorial/image%2013.png)

- New Game: Öffnet ein neues Spiel.
- Save: Speichert das aktuelle Spiel als Cookie im Browser.
- Load: Lädt den letzten Speicherstand.
- Export Game: Lädt alle Spieldateien als RIP-File herunter.
- Import Game: Öffnet ein RIP-File.

Bislang kann man das Spiel leider noch nicht als HTML File expotieren.
