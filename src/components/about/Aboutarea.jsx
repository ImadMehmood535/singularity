import React from "react";
import Image from "next/image";
import { about1 } from "@/assets";

const Aboutarea = () => {
  return (
    <div className="Aboutarea bg-[#0F121D]">
      <div className="containerCust">
        <div className="flex flex-col items-center gap-5 containerCust !py-12">
          <h2>Who We Are</h2>
          <p>
            Singularity GmbH is a reputable tax advisory firm based in Germany
            that assembles the best local and international experts and
            consultants. We have been providing professional services,
            especially in Germany, the EU, and beyond, for more than two
            decades, and our services are now complete to serve your needs. We
            are immensely proficient in handling matters of German Value Added
            Tax or VAT.
          </p>
          <p>
            Our focus is long-term business partnerships and creating an
            exciting working climate by offering tailored added-value solutions.
            Organized in leading office addresses in all the major centers of
            the European continent and the Middle East, our teams are committed
            to working passionately and relentlessly for our clients.
          </p>

          <p>
            Since our company is young, it focuses on strict compliance with
            ethical norms, active use of recent advances in business and
            technical innovations, and adapting the organization to modern
            consumer preferences. Some achievements include many victories,
            overall customer satisfaction, and the capacity to work with
            companies of different sizes and industries.
          </p>
          <p>
            Tax advisory remains another area we offer at Singularity GmbH:
            corporate tax advising, personal tax advising, and other
            international tax strategies. This means that our team works with
            the current tax law and regulatory framework to ensure the clients
            get the best advice. The firm also has specialized services and
            focus areas: transfer pricing, tax audit defense, and cross-border
            tax structuring to assist businesses with complicated international
            tax systems.
          </p>

          <Image
            src={about1.src}
            width={1000}
            height={1000}
            alt="about-1"
            className="mt-12 mb-12 w-full"
          />
          <p>
            Singularity is one of the most renowned VAT compliance and
            registration specialists for all the EU nations. We provide clients
            with a wide range of services that would help them deal with such a
            critical area of taxation as VAT and stay legal. Based on
            Singularity&apos;s interactions with various clients from different parts
            of the world, the company specializes in managing the complexity of
            VAT legislation so that it does not catch up with clients penalizing
            them for incorrect tax positions. Essentially, Singularity&apos;s selling
            point is the ability to present solutions that help companies
            register for VAT in an easy and smooth way.
          </p>
          <p>
            VAT registration is one of Singularity&apos;s primary services. Regarding
            VAT numbers, we help receive them in several EU countries while
            strictly following the state&apos;s legislation. Our personnel undertakes
            all the legal formalities involving tax issues and interaction with
            the taxation bodies corresponding to our clients. This service is
            beneficial, especially for firms involved in cross-border trading,
            since it helps them observe the set VAT laws and regulations and, in
            the process, continue with their business in the EU market.
          </p>
          <p>
            Besides registration, Singularity also continuously offers VAT
            compliance services to the client company. These involve filing VAT
            returns, keeping records, and making appropriate payments. Our
            timely approach helps organizations be ready for legal demands, thus
            minimizing the likelihood of failure. A clear understanding of the
            client&apos;s business needs coupled with elaborate knowledge of EU VAT
            laws enables Singularity to offer advisory services to assist the
            client in reducing their VAT cost and consequently getting the most
            of their cash.
          </p>
          <p>
            The company also provides VAT consulting services for specialized
            industries. We give information on ways of maximizing VAT revenues,
            planning for cross-border VAT, and dealing with risks arising from
            VAT. The consulting offerings of the firm always involve
            problem-solving and focus on the client&apos;s needs, whether it is
            handling cumbersome transactions or grasping the implications of
            changes in VAT regulatory laws or audits. With the help of a large
            amount of experience and detailed knowledge of the European market,
            Singularity helps companies make the right decisions to remain
            competitive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutarea;
