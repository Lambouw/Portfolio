// Import Components
import Header from "../sections/Header";
import Footer from "../sections/Footer";

// Import Styles
import "../styles/css/privacy.css";

function Privacy() {
  return (
    <div className="privacy">
      <Header />
      <div className="privacy--container">
        <h1 className="privacy--container--title">Privacy Policy</h1>
        <div className="height-m"></div>
        <h3>General Information and Mandatory Disclosures</h3>
        <div className="height-s"></div>
        <p className="privacy--container--header">Privacy Policy</p>
        <p className="privacy--container--text">
          The operator of this website takes the protection of your personal
          data very seriously. We treat your personal information confidentially
          and in accordance with legal data protection regulations as well as
          this Privacy Policy.
        </p>
        <div className="height-xs"></div>
        <p className="privacy--container--text">
          When you use this website, various personal data is collected.
          Personal data refers to information that can be used to personally
          identify you. This Privacy Policy explains which data we collect and
          how we use it. It also describes how and for what purpose this data is
          processed.
        </p>
        <div className="height-s"></div>
        <p className="privacy--container--header">
          Information on the Responsible Party
        </p>
        <p className="privacy--container--text">
          The responsible party for data processing on this website is:
        </p>
        <div className="height-xs"></div>
        <p className="privacy--container--text">Malte Lindemann</p>
        <p className="privacy--container--text">Loeweweg 3</p>
        <p className="privacy--container--text">71397 Leutenbach</p>
        <p className="privacy--container--text">Germany</p>
        <div className="height-xs"></div>
        <p className="privacy--container--text">
          E-Mail:&nbsp;
          <a className="extern" href="mailto:jm.lindemann@web.de">
            jm.lindemann@web.de
          </a>
        </p>
        <div className="height-xs"></div>
        <p className="privacy--container--text">
          The responsible party is the natural or legal person who, alone or
          jointly with others, determines the purposes and means of processing
          personal data (e.g., names, email addresses, etc.).
        </p>
        <div className="height-s"></div>
        <p className="privacy--container--header">
          Revocation of Your Consent to Data Processing
        </p>
        <p className="privacy--container--text">
          Many data processing activities are only possible with your explicit
          consent. You can revoke any consent you have previously given at any
          time. A simple informal notification via email to us is sufficient for
          this purpose. The legality of the data processing carried out prior to
          the revocation remains unaffected by the revocation.
        </p>
        <div className="height-s"></div>
        <p className="privacy--container--header">
          Right to Lodge a Complaint with the Competent Supervisory Authority
        </p>
        <p className="privacy--container--text">
          In the case of data protection violations, the data subject has the
          right to lodge a complaint with the competent supervisory authority.
        </p>
        <div className="height-m"></div>
        <h3 className="privacy--container--header">
          2. Data Collection on This Website
        </h3>
        <div className="height-s"></div>
        <p className="privacy--container--header">Server-Log-Dateien</p>
        <p className="privacy--container--text">
          The provider of this website (Strato AG, Pascalstraße 10, 10587
          Berlin, Germany) automatically collects and stores information in
          so-called server log files, which your browser automatically transmits
          to us. These include:
        </p>
        <div className="height-xs"></div>
        <p className="privacy--container--list">
          <ul>
            <li>Browser type and version</li>
            <li>Operating system used</li>
            <li>Referrer URL</li>
            <li>Hostname of the accessing computer</li>
            <li>Time of the server requestage</li>
            <li>IP address</li>
          </ul>
        </p>
        <div className="height-xs"></div>
        <p className="privacy--container--text">
          A combination of this data with other data sources is not performed.
        </p>
        <div className="height-xs"></div>
        <p className="privacy--container--text">
          The collection of this data is based on Article 6(1)(f) of the DSGVO.
          The website operator has a legitimate interest in ensuring the
          technically error-free presentation and optimization of the website,
          which requires the recording of server log files.
        </p>
        <div className="height-s"></div>
        <p className="privacy--container--header">Contact Form</p>
        <p className="privacy--container--text">
          If you send us inquiries via the contact form, the information you
          provide in the inquiry form, including the contact details you specify
          (name, email address, subject, and message), will be stored by us for
          the purpose of processing your inquiry and in case of follow-up
          questions. We do not share this data without your consent.
        </p>
        <div className="height-xs"></div>
        <p className="privacy--container--text">
          The processing of data entered into the contact form is carried out
          exclusively based on your consent (Article 6(1)(a) DSGVO). You can
          revoke this consent at any time. An informal email notification to us
          is sufficient for this purpose. The legality of the data processing
          carried out prior to the revocation remains unaffected by the
          revocation.
        </p>
        <div className="height-xs"></div>
        <p className="privacy--container--text">
          The data you enter in the contact form will remain with us until you
          request its deletion, revoke your consent to storage, or the purpose
          for data storage no longer applies (e.g., after your inquiry has been
          fully processed). Mandatory legal provisions — particularly retention
          periods — remain unaffected.
        </p>
        <div className="height-m"></div>
        <h3>3. Hosting with Strato</h3>
        <p className="privacy--container--text">
          This website is hosted by Strato. The provider is Strato AG,
          Pascalstraße 10, 10587 Berlin, Germany. When you visit this website,
          personal data (server log files) is automatically collected by Strato.
          For details on data processing, please refer to Strato's Privacy
          Policy:&nbsp;
          <a
            className="extern"
            href="https://www.strato.de/datenschutz"
            target="blank"
          >
            https://www.strato.de/datenschutz
          </a>
          .
        </p>
        <div className="height-xs"></div>
        <p className="privacy--container--text">
          We have entered into a Data Processing Agreement (DPA) with Strato to
          ensure that data processing is carried out in compliance with data
          protection regulations.
        </p>
        <div className="height-m"></div>
        <h3>4. SSL and TLS Encryption</h3>
        <p className="privacy--container--text">
          This site uses SSL or TLS encryption for security reasons and to
          protect the transmission of confidential information, such as
          inquiries you send to us as the site operator. You can recognize an
          encrypted connection by the browser's address bar switching from
          "http://" to "https://" and by the lock icon in your browser's address
          bar.
        </p>
        <div className="height-xs"></div>
        <p className="dat--container--text">
          When SSL or TLS encryption is activated, the data you transmit to us
          cannot be read by third parties.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
