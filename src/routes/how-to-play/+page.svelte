<div>
    Jenkins ist toll 

    <h1>Ablauf einer Runde</h1>
    <h2>1. Wette</h2>
    <p>Reihe um wählt jeder Spieler einen Zug und die dazugehörigen Wetten aus.</p>
    <p>Insgesamt stehen 5 Züge zur Verfügung, die aktuell am gewählten Bahnhof ankommen sollten.</p>
    <p>Für den Zug wird auf Ereignisse wie “Verspätung aus vorheriger Fahrt”, “Polizeiliche Ermittlung” oder
        “Bauarbeiten” gewettet.</p>
    <p>Für jedes Ereignis gibt es eine festgelegte Anzahl an Schlücken die man verteilen darf, wenn das Ereignis
        eintritt.</p>
    <p>Genauso gibt es eine festgelegte Anzahl an Schlücken die man trinken muss, wenn das Ereignis nicht
        eintritt.</p>

    <h2>2. Auswertung der Wette</h2>
    <p>Für jeden Spieler wird die Anzahl an Schlücken die er verteilen darf oder trinken muss wie folgt
        berechnet:</p>
    <p>Schluck-Verteilanzahl richtige gewettete Ereignisse – Schluck-Trinkanzahl falsch gewettete Ereignisse =
        Schluckzahl</p>
    <p>Negative Schluckzahl -&gt; Schlücke trinken</p>
    <p>Positive Schluckzahl -&gt; Schlücke verteilen</p>

    <h2>Strafen</h2>
    <p>Wer Verspätungen googelt muss ein Bier trichtern.</p>

    <h1>Wie kommen die Züge und Verspätungsgründe zustande?</h1>
    <p>Beim Rundenstart werden alle Züge, die am gewählten Bahnhof zur aktuellen Zeit ankommen sollten, von der
        Deutschen Bahn angefragt. Aus diesen Zügen werden dann fünf Zufällige gewählt.</p>
    <p>Dazu werden die zugehörigen Verspätungsgründe der Züge gespeichert.</p>
    <p>Die Züge und Verspätungsgründe ändern sich nichtmehr, sobald die Runde gestartet wurde.</p>
    <p>Es wird zusätzlich dafür gesorgt, dass wenn innerhalb kurzer Zeit mehrere Runde gespielt werden, dieselben
        Züge nicht erneut auftreten können.</p>

    <h1>Spielende</h1>
    <p>Wenn Hacke.</p>
</div>

<style>
    h1 {
        margin-top: 42px;
    }
</style>