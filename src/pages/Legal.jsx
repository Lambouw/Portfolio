// Import Components
import Header from "../sections/Header";
import Footer from "../sections/Footer";

// Import Styles
import "../styles/css/legal.css";

function Legal() {
  return (
    <div className="legal">
      <Header />
      <div className="legal--container">
        <h1>Legal Notice</h1>
        <div className="height-m"></div>
        <section className="legal--container--contact">
          <h3>Information Pursuant to § 5 TMG (Telemedia Act):</h3>
          <div className="height-s"></div>
          <p className="legal--container--contact--header">
            Name and Address of the Owner:
          </p>
          <p>Malte Lindemann</p>
          <p>Loeweweg 3</p>
          <p>71397 Leutenbach</p>
          <p>Germany</p>
          <div className="height-s"></div>
          <p className="legal--container--contact--header">Contact:</p>
          <p>
            E-Mail:&nbsp;
            <a className="extern" href="mailto:jm.lindemann@web.de">
              jm.lindemann@web.de
            </a>
          </p>
          <div className="height-s"></div>
          <p className="legal--container--contact--header">
            Responsible for the content pursuant to § 55 (2) RStV:
          </p>
          <p>Malte Lindemann</p>
          <p>Loeweweg 3</p>
          <p>71397 Leutenbach</p>
          <p>Germany</p>
          <div className="height-xs"></div>
          <p>
            Source:&nbsp;
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
        <h3 className="legal--container--header">Liability for Content:</h3>
        <p className="legal--container--text">
          As a service provider, we are responsible for our own content on these
          pages in accordance with § 7 (1) of the German Telemedia Act (TMG) and
          general laws. However, according to §§ 8 to 10 TMG, we are not
          obligated as a service provider to monitor transmitted or stored
          third-party information or to investigate circumstances that indicate
          illegal activity.
        </p>
        <div className="height-xs"></div>
        <p className="legal--container--text">
          Obligations to remove or block the use of information under general
          laws remain unaffected. However, liability in this regard is only
          possible from the moment we become aware of a specific legal
          violation. Upon becoming aware of such violations, we will promptly
          remove the relevant content.
        </p>
        <div className="height-m"></div>
        <h3 className="legal--container--header">Liability for Links:</h3>
        <p className="legal--container--text">
          Our website contains links to external third-party websites over whose
          content we have no control. Therefore, we cannot assume any liability
          for these external contents. The respective provider or operator of
          the linked websites is always responsible for their content. The
          linked pages were checked for possible legal violations at the time of
          linking. No unlawful content was detected at the time of linking.
        </p>
        <div className="height-xs"></div>
        <p className="legal--container--text">
          A permanent content check of the linked pages is not reasonable
          without concrete evidence of a legal violation. Upon becoming aware of
          any legal violations, we will promptly remove such links.
        </p>
        <div className="height-m"></div>
        <h3 className="legal--container--header">Copyright:</h3>
        <p className="legal--container--text">
          The content and works created by the site operator on these pages are
          subject to German copyright law. Reproduction, editing, distribution,
          and any kind of use outside the limits of copyright law require the
          written consent of the owner. Downloads and copies of this site are
          only permitted for private, non-commercial use.
        </p>
        <div className="height-xs"></div>
        <p className="legal--container--text">
          Insofar as the content on this site was not created by the operator,
          the copyrights of third parties are respected. Third-party content is
          specifically marked as such. If you nonetheless become aware of a
          copyright infringement, we request that you notify us accordingly.
          Upon becoming aware of any legal violations, we will promptly remove
          such content.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Legal;
