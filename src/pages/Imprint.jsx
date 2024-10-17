import { NavLink } from "react-router-dom";

// Import Components
import Header from "../sections/Header";
import Footer from "../sections/Footer";

// Import Styles
import "../styles/css/imprint.css";

function Imprint() {
  return (
    <div className="imprint">
      <Header />
      <div className="imprint--container">
        <h1>Legal Notice</h1>
        <div className="height-m"></div>
        <section className="imprint--container--contact">
          <h3>Angaben gemäß § 5 TMG:</h3>
          <div className="height-s"></div>
          <p className="imprint--container--contact--header">
            Name und Anschrift des Inhabers:
          </p>
          <p>Malte Lindemann</p>
          <p>Loeweweg 3</p>
          <p>71397 Leutenbach</p>
          <p>Deutschland</p>
          <div className="height-s"></div>
          <p className="imprint--container--contact--header">Kontakt:</p>
          <p>
            E-Mail:&nbsp;
            <a className="extern" href="mailto:jm.lindemann@web.de">
              jm.lindemann@web.de
            </a>
          </p>
          <div className="height-s"></div>
          <p className="imprint--container--contact--header">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
          </p>
          <p>Malte Lindemann</p>
          <p>Loeweweg 3</p>
          <p>71397 Leutenbach</p>
          <p>Deutschland</p>
          <div className="height-xs"></div>
          <p>
            Quelle:&nbsp;
            <a
              className="extern"
              target="_blank"
              rel="noreferrer"
              href="https://www.e-recht24.de"
            >
              E-Recht24
            </a>
          </p>
        </section>
        <div className="height-m"></div>
        <h3 className="imprint--container--header">Haftung für Inhalte:</h3>
        <p className="imprint--container--text">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <div className="height-xs"></div>
        <p className="imprint--container--text">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>
        <div className="height-m"></div>
        <h3 className="imprint--container--header">Haftung für Links:</h3>
        <p className="imprint--container--text">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <div className="height-xs"></div>
        <p className="imprint--container--text">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <div className="height-m"></div>
        <h3 className="imprint--container--header">Urheberrecht:</h3>
        <p className="imprint--container--text">
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
          diesen Seiten unterliegen dem deutschen Urheberrecht. Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
          außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung des Inhabers. Downloads und Kopien dieser Seite sind nur
          für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <div className="height-xs"></div>
        <p className="imprint--container--text">
          Soweit die Inhalte auf dieser Seite nicht von dem Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Imprint;
