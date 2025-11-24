import Footer from "../components/Footer";
import { Row, Col, Container } from "react-bootstrap";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Nav from "../components/Navbar";
import Plus from "../assets/plus.png";
import "./faq.css";

const Faq = () => {
  return (
    <div>
       <Nav />
      <Row className="dark-blue-bg">
        <span className="text-center m-auto new-heading">FAQ</span>
      </Row>
      <Container className="accordion-container">
        <Row className="mt-3 mb-5">
          <Col md={2} />
          <Col md={8}>
            <Accordion allowZeroExpanded className="remove-outline">
              <AccordionItem>
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton>
                    <div className="d-flex justify-content-between">
                      <span className="faq-header">What is SpottR</span>
                      <span>
                        <img src={Plus} alt="" className="plus-img" />
                      </span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    SpottR uses Google maps, cryptocurrency and APIs to make it
                    easy for any one, no matter where they are and what they do,
                    to find what they want and get it delivered to them within
                    minutes of thinking about it.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded className="remove-outline">
              <AccordionItem>
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton>
                    <div className="d-flex justify-content-between">
                      <span className="faq-header">Who is it for?</span>
                      <span>
                        <img src={Plus} alt="" className="plus-img" />
                      </span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>SpottR is for everyone</p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded className="remove-outline">
              <AccordionItem>
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton>
                    <div className="d-flex justify-content-between">
                      <span className="faq-header">
                        How can a business sign up?
                      </span>
                      <span>
                        <img src={Plus} alt="" className="plus-img" />
                      </span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Regular users and small businesses sign up the same way on
                    SpottR through the SpottR application(s). However, larger
                    organizations, structured and specialized institutions can
                    only sign up through this website and will need to speak to
                    our representatives in order to be set up for success.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>

            <Accordion allowZeroExpanded className="remove-outline">
              <AccordionItem>
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton>
                    <div className="d-flex justify-content-between">
                      <span className="faq-header">
                        Who can be a corporate user?
                      </span>
                      <span>
                        <img src={Plus} alt="" className="plus-img" />
                      </span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Anyone who needs the additional functionality. However, to
                    accommodate smaller organizations, corporate
                    membership/pricing is available in three (3) levels. To
                    begin, simply sign up and a representative will get in
                    touch.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>

            <Accordion allowZeroExpanded className="remove-outline">
              <AccordionItem>
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton>
                    <div className="d-flex justify-content-between">
                      <span className="faq-header">
                        What is the difference between a Regular User, a
                        Business and a Corporate User?
                      </span>
                      <span>
                        <img src={Plus} alt="" className="plus-img" />
                      </span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    A regular user is a potential small business as they can
                    post an opportunity without extra rigor. Corporate users are
                    entities with established value chains, strong staff
                    strength/memberships and distributed service offerings that
                    reach hundreds or thousands of people. These ones need
                    additional visibility and additional functionality like
                    building and administering their dedicated ecosystems by
                    accepting and declining users, sending broadcast messages,
                    making community payments/splitting commissions etc.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>

            <Accordion allowZeroExpanded className="remove-outline">
              <AccordionItem>
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton>
                    <div className="d-flex justify-content-between">
                      <span className="faq-header" id="advertising">
                        Advertising
                      </span>
                      <span>
                        <img src={Plus} alt="" className="plus-img" />
                      </span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Beyond basic listings, businesses leverage several
                    advertising options that available on SpottR. Some are
                    obvious and face the customer while others are not. SpottR
                    works with brands, small or big, to help them get to their
                    target consumers because that’s who we are.
                  </p>
                  <div className="mt-2">
                    <ul>
                      <li>
                        In-app ads that face the customer: In app, a user can
                        utilize either of two (2) ad options directly from a
                        product that has been uploaded to the app. These ads
                        target search lists and our Google powered map(s). Their
                        pricing is published on the go and users can set the
                        duration of their campaigns.
                      </li>
                      <li>
                        Other ads and campaigns: SpottR uses advanced AI to make
                        the connection between buyers and sellers and this
                        allows us to push specific interest and location based
                        ads to wandering users. These ad campaigns are mostly
                        suited to corporate users or businesses who want to
                        activate new products, push discount promotions or
                        generally make a statement in our ecosystem. They
                        include Proximity Targeting, Map Takeover, Banners and
                        Bundled Ads. To deploy these ads, advertisers need to
                        speak to a SpottR representative.
                      </li>
                    </ul>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded className="remove-outline">
              <AccordionItem>
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton>
                    <div className="d-flex justify-content-between">
                      <span className="faq-header">
                        What is the in-app coin user for?{" "}
                      </span>
                      <span>
                        <img src={Plus} alt="" className="plus-img" />
                      </span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The SpottR in-app coins are used for completing transactions
                    as an alternative to the fiat and crypto options that are
                    available in the users wallet. However, certain features in
                    the SpottR app will be tied exclusively to the in-app coins
                    like rewarding tasks participants. Coins are easily
                    converted to fiat and our dedicated CLIQ token
                    cryptocurrency ($CT) and are pegged to the dollar i.e.,
                    1SUSD=$1
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded className="remove-outline">
              <AccordionItem>
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton>
                    <div className="d-flex justify-content-between">
                      <span className="faq-header">What is CLIQ token? </span>
                      <span>
                        <img src={Plus} alt="" className="plus-img" />
                      </span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    CLIQ Token ($CT) is SpottR’s ecosystem cryptocurrency
                    powered by Ethereum (ERC-20) and acts as an alternative to
                    completing transactions. It is also a gateway to certain
                    features and products as it guarantees access to our loan,
                    affiliate, barter and futures products.{" "}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded className="remove-outline">
              <AccordionItem>
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton>
                    <div className="d-flex justify-content-between">
                      <span className="faq-header">
                        Where can I buy CLIQ tokens?{" "}
                      </span>
                      <span>
                        <img src={Plus} alt="" className="plus-img" />
                      </span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Visit{" "}
                    <a
                      href=" https://cliqtoken.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CLIQ Token
                    </a>
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded className="remove-outline">
              <AccordionItem>
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton>
                    <div className="d-flex justify-content-between">
                      <span className="faq-header">Spottr Financing</span>
                      <span>
                        <img src={Plus} alt="" className="plus-img" />
                      </span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    SpottR generally gives credit to users to make a purchase
                    from our ecosystem. To qualify, users must have held a
                    minimum amount of CLIQ Tokens in their wallets for a period
                    of time. A user will also be required to make an equity
                    contribution in CLIQ tokens before loans are disbursed. The
                    tokens will be held as collateral in case the user defaults.
                  </p>
                  <div className="mt-2">
                    Users can access our BNPL product in 3 ways
                  </div>
                  <div className="mt-2">Loans are either disbursed;</div>
                  <ul className="mt-2">
                    <li>To the requester wallet</li>
                    <li>
                      Paid to a merchant to complete a transaction from our
                      app/web under our Buy Now Pay Later Scheme.
                    </li>
                    <li>
                      Paid to a merchant to complete a transaction from partner
                      app/web under our Buy Now Pay Later Scheme.
                    </li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            <Accordion allowZeroExpanded className="remove-outline">
              <AccordionItem>
                <AccordionItemHeading className="accordion-header">
                  <AccordionItemButton>
                    <div className="d-flex justify-content-between">
                      <span className="faq-header">
                        Spottr Affiliate Programs
                      </span>
                      <span>
                        <img src={Plus} alt="" className="plus-img" />
                      </span>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    SpottR operates a number of affiliate programs to catalyze
                    its ecosystem. Users sign up to these programs by verifying
                    their affiliate accounts.
                  </p>
                  <ul className="mt-2">
                    <li>
                      Affiliate Marketers: SpottR Affiliate Marketers act as
                      distributors or retailers to small businesses in the
                      ecosystem. They pick up items from merchants and vendors
                      who indicate that they would be needing the services of
                      affiliates and go ahead to sell these items offline for a
                      fee. Fees are mostly commission based and are disbursed
                      once the affiliate returns the proceeds from a period’s
                      sale. To become an affiliate, users need to upgrade their
                      accounts and deposit CLIQ Tokens for every merchandise
                      they pick up to deliver.
                    </li>
                    <li>
                      SpottR Agents: SpottR Agents act as physical banks and
                      Automated Teller Machines (ATMs) so that users in our
                      ecosystem can get cash, crypto or SpottR coins at any
                      time, no matter where they are and irrespective of data
                      coverage. To become an agent, users must upgrade their
                      accounts and deposit CLIQ Tokens ($CT) to be approved.
                    </li>
                    <li>
                      Peer2Peer: SpottR Peer-to-Peer network allows ecosystem
                      users to exchange cryptocurrency for cash. Users must
                      upgrade their accounts to begin.
                    </li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </Col>
          <Col md={2} />
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Faq;
