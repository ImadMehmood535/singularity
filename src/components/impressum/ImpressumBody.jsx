import Link from "next/link";
import React from "react";

const ImpressumBody = ({ content }) => {
  return (
    <div className="ImpressumBody bg-[#0F121D] text-white">
      <div className="containerCust">
        <div className="flex flex-col items-center gap-5 containerCust !py-12">
          {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
          <h1>Legal Notice and Copyright</h1>

          <p>
            The information included on this website is legally subject to a
            disclaimer and copyright notice.
          </p>

          <h2>Angaben gemäß § 5 TMG:</h2>
          <p>
            Singularity GmbH
            <br />
            Steuerberatungsgesellschaft
          </p>

          <h3>Die Gesellschaft wird vertreten durch ihren Geschäftsführer:</h3>
          <p>Diplom-Ökonom, Marko Kaiser, Steuerberater</p>

          <h3>Sitz der Gesellschaft:</h3>
          <p>Heiligenhaus</p>

          <h3>Handelsregister:</h3>
          <p>Amtsgericht Wuppertal, HRB 33191</p>

          <h3>Anschrift:</h3>
          <p>
            Goerscheider Weg 50
            <br />
            42579 Heiligenhaus
          </p>

          <h3>Kontakt:</h3>
          <p>
            Telefon: +49-2163-951-89690
            <br />
            Telefax: +49-2163-927-4995
            <br />
            E-Mail: info@singularity.tax
            <br />
            Web: www.singularity.tax
          </p>

          <h3>Umsatzsteuer-ID:</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            DE 323427930
          </p>

          <h3>Berufsbezeichnung und berufsrechtliche Regelungen:</h3>
          <p>
            Berufsbezeichnung: Steuerberater
            <br />
            Verliehen in: Deutschland
          </p>

          <h3>Zuständige Kammer:</h3>
          <p>
            Steuerberaterkammer Düsseldorf
            <br />
            Grafenberger Allee 98
            <br />
            40237 Düsseldorf
            <br />
            Postfach 10 48 55
            <br />
            40039 Düsseldorf
            <br />
            Telefon: 0211 – 66 90 6-0
            <br />
            Telefax: 0211 – 66 90 6-600
            <br />
            E-Mail: mail@stbk-dusseldorf.de
            <br />
            Internet: www.stbk-dusseldorf.de
          </p>

          <h3>Es gelten folgende berufsrechtliche Regelungen:</h3>
          <ul>
            <li>
              Steuerberatungsgesetz (StBerG) einsehbar unter:{" "}
              <Link href="https://www.gesetze-im-internet.de/stberg/">
                gesetze-im-internet.de
              </Link>
            </li>
            <li>
              Durchführungsverordnung zum Steuerberatungsgesetz (DVStB)
              einsehbar unter:{" "}
              <Link href="https://www.gesetze-im-internet.de/stbdv/">
                gesetze-im-internet.de 
              </Link>
            </li>
            <li>
              Berufsordnung der Bundes-Steuerberaterkammer (BOStB) einsehbar
              unter:{" "}
              <Link href="https://www.bstbk.de/downloads/bstbk/recht-und-berufsrecht/gesetze-und-verordnungen/BStBK_Berufsordnung.pdf">
                 bstbk.de
              </Link>
            </li>
            <li>
              Steuerberatervergütungsverordnung (StBVV) einsehbar unter:{" "}
              <Link href="https://www.gesetze-im-internet.de/stbgebv/BJNR014420981.html">
                https://www.gesetze-im-internet.de/stbgebv/BJNR014420981.html
              </Link>
            </li>
          </ul>

          <h3>Angaben zur Berufshaftpflichtversicherung:</h3>
          <p>
            Name und Sitz des Versicherers:
            <br />
            HDI Versicherung AG
            <br />
            HDI Platz 1<br />
            30659 Hannover
            <br />
            Telefon: +49 511 3031 447
            <br />
            Telefax: +49 511645-1152916
          </p>

          <h3>Geltungsraum der Versicherung:</h3>
          <p>Bundesrepublik Deutschland</p>

          <h3>Redaktionell verantwortlich:</h3>
          <p>
            Diplom-Ökonom Marko Kaiser, Steuerberater
            <br />
            Goerscheider Weg 50, 42579 Heiligenhaus
          </p>

          <h3>EU-Streitschlichtung:</h3>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <Link href="https://ec.europa.eu/consumers/odr/">
              https://ec.europa.eu/consumers/odr/
            </Link>
            .<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h3>Verbr/aucherstreitbeilegung/Universalschlichtungsstelle:</h3>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbr/aucherschlichtungsstelle
            teilzunehmen.
          </p>

          <h3>Haftung für Inhalte:</h3>
          <p>[Content for Haftung für Inhalte]</p>

          <h3>Haftung für Links:</h3>
          <p>[Content for Haftung für Links]</p>

          <h3>Urheberrecht:</h3>
          <p>[Content for Urheberrecht]</p>

          <h2>Legal Notice</h2>

          <h3>Information according to § 5 TMG:</h3>
          <p>
            Singularity GmbH
            <br />
            Tax Consulting Company
          </p>

          <p>
            The company is represented by its Managing Director, Diplom-Ökonom
            Marko Kaiser, Tax Consultant
          </p>

          <h3>Registered office of the company:</h3>
          <p>Heiligenhaus</p>

          <h3>Commercial register:</h3>
          <p>Amtsgericht Wuppertal, HRB 33191</p>

          <h3>Address:</h3>
          <p>Goerscheider Weg 50, 42579 Heiligenhaus</p>

          <h3>Contact:</h3>
          <p>
            Telephone: +49-2163-951-89690
            <br />
            Fax: +49-2163-927-4995
            <br />
            E-Mail: info@singularity.tax
            <br />
            Website: www.singularity.tax
          </p>

          <h3>German VAT ID:</h3>
          <p>
            German VAT ID number according to § 27 a Umsatzsteuergesetz: DE
            323427930
          </p>

          <h3>Professional title and professional regulations:</h3>
          <p>
            Professional title: Tax consultant
            <br />
            Awarded in: Germany
          </p>

          <h3>Responsible chamber:</h3>
          <p>
            Chamber of Tax Consultants Düsseldorf
            <br />
            Grafenberger Allee 98
            <br />
            40237 Düsseldorf
            <br />
            P.O. Box 10 48 55
            <br />
            40039 Düsseldorf
            <br />
            Telephone: 0211 – 66 90 6-0
            <br />
            Fax: 0211 – 66 90 6-600
            <br />
            E-Mail: mail@stbk-dusseldorf.de
            <br />
            Website: www.stbk-dusseldorf.de
          </p>

          <h3>The following professional regulations apply:</h3>
          <ul>
            <li>
              Tax Consultancy Act (StBerG) Available at:{" "}
              <Link href="https://www.gesetze-im-internet.de/stberg/">
                https://www.gesetze-im-internet.de/stberg/
              </Link>
            </li>
            <li>
              Implementing Ordinance to the Tax Consultancy Act (DVStB) can be
              viewed at:{" "}
              <Link href="https://www.gesetze-im-internet.de/stbdv/">
                https://www.gesetze-im-internet.de/stbdv/
              </Link>
            </li>
            <li>
              Professional Code of Conduct of the Federal Chamber of Tax
              Consultants (BOStB) available at:{" "}
              <Link href="https://www.bstbk.de/downloads/bstbk/recht-und-berufsrecht/gesetze-und-verordnungen/BStBK_Berufsordnung.pdf">
                https://www.bstbk.de/downloads/bstbk/recht-und-berufsrecht/gesetze-und-verordnungen/BStBK_Berufsordnung.pdf
              </Link>
            </li>
            <li>
              Tax Consultant Remuneration Ordinance (StBVV) available at:{" "}
              <Link href="https://www.gesetze-im-internet.de/stbgebv/BJNR014420981.html">
                https://www.gesetze-im-internet.de/stbgebv/BJNR014420981.html
              </Link>
            </li>
          </ul>

          <h3>Details of professional liability insurance:</h3>
          <p>
            Name and registered office of the insurer:
            <br />
            HDI Versicherung AG
            <br />
            HDI Place 1<br />
            30659 Hannover
            <br />
            Telephone: +49 511 3031 447
            <br />
            Fax: +49 511645-1152916
          </p>

          <h3>Area of validity of the insurance:</h3>
          <p>Federal Republic of Germany</p>

          <h3>Editorially responsible:</h3>
          <p>
            Diplom-Ökonom Marko Kaiser, Tax Consultant
            <br />
            Goerscheider Weg 50, 42579 Heiligenhaus
          </p>

          <h3>EU Dispute Resolution:</h3>
          <p>
            The European Commission provides a platform for online dispute
            resolution (OS):{" "}
            <Link href="https://ec.europa.eu/consumers/odr/">
              https://ec.europa.eu/consumers/odr/
            </Link>
            . You can find our e-mail address in the imprint above.
          </p>

          <h3>
            Consumer dispute resolution/universal dispute resolution body:
          </h3>
          <p>
            We are not willing or obliged to participate in dispute resolution
            proceedings before a consumer arbitration board.
          </p>

          <h3>Liability for contents:</h3>
          <p>
            As a service provider, we are responsible for our own content on
            these pages in accordance with general legislation pursuant to
            Section 7 (1) of the German Telemedia Act (TMG). According to §§ 8
            to 10 TMG, however, we are not obligated as a service provider to
            monitor, transmit or store third-party information or to investigate
            circumstances that indicate illegal activity.
          </p>
          <p>
            Obligations to remove or block the use of information under the
            general laws remain unaffected. However, liability in this regard is
            only possible from the point in time at which a concrete
            infringement of the law becomes known. If we become aware of such
            infringements, we will remove this content immediately.
          </p>

          <h3>Liability for links:</h3>
          <p>
            Our offer contains links to external websites of third parties, on
            whose contents we have no influence. Therefore, we cannot assume any
            liability for these external contents. The respective provider or
            operator of the sites is always responsible for the content of the
            linked sites. The linked pages were checked for possible legal
            violations at the time of linking. Illegal contents were not
            recognised at the time of linking. However, a permanent control of
            the contents of the linked pages is not reasonable without concrete
            evidence of a violation of the law. If we become aware of any
            infringements, we will remove such links immediately.
          </p>

          <h3>Copyright:</h3>
          <p>
            The contents and works created by the site operators on these pages
            are subject to German copyright law. Duplication, processing,
            distribution, or any form of commercialization of such material
            beyond the scope of the copyright law shall require the prior
            written consent of its respective author or creator. Downloads and
            copies of this site are only permitted for private, non-commercial
            use. Insofar as the content on this site was not created by the
            operator, the copyrights of third parties are respected. In
            particular, third-party content is identified as such. Should you
            nevertheless become aware of a copyright infringement, please inform
            us accordingly. If we become aware of any infringements, we will
            remove such content immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpressumBody;
