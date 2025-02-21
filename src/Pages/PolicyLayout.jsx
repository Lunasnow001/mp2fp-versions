/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ScrollToTop from "../Components/Common/ScrollToTop";

const PolicyLayout = ({ title, lastUpdated, children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#415268] py-16 text-white">
        <div className="mx-auto px-4 container">
          <h1 className="mb-4 font-bold text-4xl">{title}</h1>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-4 py-12 container">
        <div className="mx-auto max-w-4xl">
          {/* Navigation breadcrumbs */}
          <div className="mb-8 text-sm">
            <Link to="/" className="text-orange-400 hover:text-orange-500">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{title}</span>
          </div>

          {/* Main content */}
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <div className="max-w-none prose">{children}</div>
          </div>

          {/* Contact section */}
          <div className="bg-white shadow-lg mt-12 p-8 rounded-lg">
            <h2 className="mb-4 font-semibold text-2xl">
              Questions or Concerns?
            </h2>
            <p className="mb-4 text-gray-600">
              If you have any questions about our {title.toLowerCase()}, please
              don&apos;t hesitate to contact us.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="bg-orange-400 hover:bg-orange-500 px-6 py-2 rounded-md text-white transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="mailto:contact@mp2fp.com"
                className="text-blue-600 hover:text-blue-700"
              >
                contact@mp2fp.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Privacy Policy Page Component
export const PrivacyPolicy = () => {
  return (
    <PolicyLayout
      title="MP2FP Privacy and Policy"
      lastUpdated="February 20, 2025"
    >
      <ScrollToTop />
      {/* Add your privacy policy content here */}
      <div className="space-y-2">
        <p className="text-gray-600">
          Effective Date of Current Policy: January 5, 2018
        </p>
        <p className="text-gray-600">
          Last Updated Date of Current Policy: February 20, 2025
        </p>
        <p className="pt-6 text-gray-600">
          This is the Privacy Policy for mp2fp.com (the &quot;Site&quot;)
        </p>
        <p className="pt-6 text-gray-600">
          This Privacy Policy is also incorporated by reference into the MP2FP
          Terms and Conditions (the “Terms”).
        </p>

        <div className="pt-6 text-gray-500 text-sm">
          <p className="pb-4 text-lg">
            Our Privacy Policy explains how MP2FP may:
          </p>
          <ul className="mt-2 pl-20 list-disc">
            <li>collect,</li>
            <li>use, and</li>
            <li>disclose</li>
          </ul>
        </div>

        <p className="pt-6 text-gray-600">
          personal information about you. In this Privacy Policy, we categorise
          your information in the following ways:
        </p>

        <p className="pt-6 text-gray-600">
          <b className="text-gray-500">“Personal Information”</b> means
          information that alone or when in combination with other information
          may be used to identify or contact you, such as: name, address, email
          address. We do not consider Personal Information to include
          information that has been anonymized so that it does not allow a third
          party to identify a specific inpidual. We may also collect Personal
          Information in connection with surveys (as described below).
        </p>

        <p className="pt-6 text-gray-600">
          <b className="text-gray-500">“Non-Personal Information”</b> means
          information that does not identify any individual.
        </p>

        <h2 className="pt-6 text-gray-900 text-3xl">
          Changes to our Privacy Policy and practices
        </h2>

        <p className="pt-6 text-gray-600">
          <b className="text-gray-500">Posting of Revised Privacy Policy.</b> We
          will post any adjustments to the Privacy Policy on this web page, and
          the revised version will be effective when it is posted. If you are
          concerned about how your information is used, bookmark this page and
          read this Privacy Policy periodically. You can see when the latest
          version of our Privacy Policy was posted at the top of the page. If
          you continue to visit this Site and use the services made available to
          you after such changes have been made, you hereby provide your consent
          to the changes.
        </p>

        <p className="pt-6 text-gray-600">
          <b className="text-gray-500">New uses of Personal Information.</b> If
          our practices change regarding previously collected Personal
          Information in a way that would be materially affect the original
          purpose for which we collected your Personal Information, we will
          provide notice and take steps to seek your consent where required by
          law.
        </p>

        <h2 className="pt-6 text-gray-900 text-3xl">
          The site collects your information
        </h2>

        <div className="pt-6 text-gray-500 text-sm">
          <p className="pb-4 text-lg">
            We collect Personal Information when you choose to provide it to us
            including when you:
          </p>
          <ul className="mt-2 pl-20 list-disc">
            <li>use the Site;</li>
            <li>register with us on the Site;</li>
            <li>order products from us;</li>
            <li>participate in our Referral Programme.</li>
          </ul>
        </div>

        <p className="pt-4 text-gray-600">
          We also collect Non-Personal Information, by using cookies, pixels,
          server logs, and other similar technology as you use the Site subject
          to where these technologies do not personally identify users. Where we
          use third party cookie providers, such providers may also receive this
          Non-Personal Information. Please see the cookies section below.
        </p>

        <p className="pt-4 text-gray-600">
          Please note that we may use third party service providers to help
          operate the Site and these third party service providers will collect
          Personal and Non-Personal Information from our Site as well in
          accordance with this Privacy Policy.
        </p>

        <p className="pt-4 text-gray-600">
          When you visit the Site, we may automatically collect additional
          information about you, such as the type of internet browser you use,
          the website which have come to the Site from, an your IP address (the
          unique address which identifies your device on the internet) which is
          automatically recognised by our web server. You cannot be identified
          by this information. This Non-Personal Information collected helps us
          in providing an effective service on the Site and to collect broad
          demographic information for aggregate use.
        </p>

        <p className="pt-4 text-gray-600">
          <b className="text-gray-500">Personal information collection.</b> When
          you purchase a Digital content or other products from our Site, you
          are given the option to register with the Site. If you do not
          register, you may checkout as a guest. In any event, when you purchase
          a Digital content or other products from our website, you will need to
          provide us with Personal Information, such as your name, email address
          in order for us to process your order and deliver your purchase.
        </p>

        <p className="pt-4 text-gray-600">
          <b className="text-gray-500">Using the Site.</b> We collect
          information about how you use the Site and engage with communications
          we send you. We&apos;ll also collect any information you post to the
          Site. For example, when you interact with other users on the Site by
          posting a review, the Site will collect the information you provide in
          such submissions, including any Personal Information. If you choose to
          submit content to any public area of the Site, such content will be
          considered “public” and will not be subject to the privacy protections
          set forth herein.
        </p>

        {/* Add more sections as needed */}
        <section className="pt-6">
          <h2 className="mb-4 font-semibold text-2xl">Payment processing</h2>
          {/* Add your content here */}
          <p className="pt-2 text-gray-600">
            Credit or Debit Card Payments. All payments and transactions trough
            this site is handled by third party payment processors and we do not
            collect any card information or personal payment information.
          </p>
        </section>

        <section className="pt-6">
          <h2 className="mb-4 font-semibold text-2xl">
            International data transfer
          </h2>
          {/* Add your content here */}
          <p className="pt-2 text-gray-600">
            Information you submit to our Site is sent to and stored on secure
            servers located in the European Union with back up servers located
            in the United States and our staff will process your information in
            the United States following your use of the Site and / or in
            relation to products you purchase from us . We may also transfer the
            information you submit to the Site to third parties. Where we
            transfer your information, we will take steps to ensure that your
            privacy right continue to be protected. By submitting information
            via the Site, you agree to this storing, processing and transfer.
          </p>
        </section>

        <section className="pt-6">
          <h2 className="mb-4 font-semibold text-2xl">Your rights</h2>
          {/* Add your content here */}
          <p className="pt-2 text-gray-600">
            You have a legal right under the Data Protection Act 1998 to a copy
            of all of the Personal Information about you held by us. You can
            request a copy of this information subject to a fee not exceeding
            the maximum amount permitted by law and we will send this to you.
            You also have right to correct any errors in the information held by
            us on you. And you can prevent us using your information for direct
            marketing purposes by following the steps set out above.
          </p>
        </section>

        <section className="pt-6">
          <h2 className="mb-2 font-semibold text-2xl">Remove your data</h2>
          {/* Add your content here */}
          <p className="pt-2 text-gray-600">
            For request to remove any personal data please send request to
            support@mp2fp.com
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
};

// Terms of Service Page Component
export const TermsOfService = () => {
  return (
    <PolicyLayout
      title="MP2FP Terms & Condition"
      lastUpdated="February 20, 2025"
    >
      <ScrollToTop />
      {/* Add your terms of service content here */}
      <div className="space-y-6">
        <section>
          <h2 className="mb-1 font-semibold">
            1. Accounts, Registrations and Passwords
          </h2>
          {/* Add your content here */}
          <p className="text-gray-600">
            To facilitate future purchases on the Site, you may choose to create
            an account by providing an e-mail address and password and certain
            other personal information. Please note that you may choose to use
            the Site and make purchases without creating an account. If you do
            create an account, you confirm that the information you provide to
            MP2FP upon creating an account and at all other times will be true,
            accurate, current and complete. Your account is personal to you, and
            you may not share your account information with, or allow access to
            your account by, any third party. As you will be responsible for all
            activity that occurs under your access credentials, you agree to use
            reasonable efforts to prevent unauthorized access to or use of the
            Site via your account and to preserve the confidentiality of your
            username and password, and any device that you use to access the
            Site. You agree to notify us immediately of any breach in secrecy of
            your log-in information of which you become aware or suspect. If you
            have any reason to believe that your account information has been
            compromised or that your account has been accessed by a third party,
            you agree to immediately notify MP2FP by e-mail to contact@mp2fp.com
            . We reserve the right to terminate your account at any time,
            without notice or liability. Termination will not affect any rights
            or liabilities either you or we already have by the time termination
            takes effect.
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-semibold">2. Ordering and Availability</h2>
          {/* Add your content here */}
          <p className="text-gray-600">
            Products may be ordered by clicking on the items you wish to
            purchase and then following the prompts that will appear on-screen.
            You may check and correct any input errors in your order up until
            the point at which you submit your order to us by clicking the Order
            and Pay button on the checkout page. After placing an order, you
            will receive an e-mail from us acknowledging that we have received
            your order and giving you an order reference number. Please note
            that this does not mean that your order has been accepted. Your
            order constitutes an offer to us to buy a Product. All orders are
            subject to acceptance by us. We are not obliged to accept your order
            and may, at our discretion, decline to accept any order. You do,
            however, acknowledge that by clicking on the “Order and Pay” button
            on the checkout page, you enter into an obligation to pay for the
            Product(s). Where we accept your order, we will confirm such
            acceptance to you by sending you an e-mail that confirms that the
            Product has been despatched (&quot;Despatch Confirmation&quot;). The
            contract between you and us in relation to the Product(s) ordered
            (&quot;Contract&quot;) will only be formed when we send you the
            Despatch Confirmation. After entering into the Contract, we will be
            under a legal duty to supply you with goods that are in conformity
            with the Contract. The Contract will relate only to the Product(s)
            whose despatch we have confirmed in the Despatch Confirmation. We
            will not be obliged to supply any other Product(s) which may have
            been part of your order until the despatch of such Product(s) has
            been confirmed in a separate Despatch Confirmation.
          </p>
        </section>

        {/* Add more sections as needed */}
        <section>
          <h2 className="mb-1 font-semibold">3. Prices and Payments</h2>
          {/* Add your content here */}
          <p className="text-gray-600">
            The price for Products available for purchase through the Site will
            be displayed to you on the Site. The prices displayed include taxes
            and delivery costs, unless you select expedited delivery (if
            available), in which case the appropriate delivery cost will be
            added to the total amount due at checkout. Prices (and charges for
            expedited delivery (if available)) are liable to change at any time,
            but changes will not affect orders in respect of which we have
            already sent you a Despatch Confirmation. Payment for all orders
            must be made by either (i) credit or debit card or (ii) through
            part-payment by instalments through API, which option is available
            only if API approves your credit application. The Site currently
            uses third parties to process payments. For more information on how
            your personal, contact and order details are shared with those
            third-party payment processors, please read our Privacy Policy. You
            should be aware that online payment transactions are subject to
            validation checks by your card issuer and we are not responsible if
            your card issuer declines to authorise payment for any reason.
            Please note, it is possible that your card issuer may charge you an
            online handling fee or processing fee. We are not responsible for
            this. All monetary transactions on the Site take place in Pounds
            Sterling (GBP) and USD
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-semibold">
            4. Discount Codes; Referral Programme
          </h2>
          {/* Add your content here */}
          <p className="text-gray-600">
            From time to time, MP2FP may offer qualified consumers “gift codes”
            or “offer codes” through a variety of promotional activities and
            communications (collectively referred to herein as “offer codes”)
            that are redeemable towards a purchase on MP2FP.com, while supplies
            last, and subject to any merchandise exclusions or any other
            restrictions as may be determined and communicated by MP2FP at the
            point the offer codes are made available and/or on the Site in
            relation to the Products affected. Only valid offer codes provided
            or promoted by MP2FP will be honoured at checkout. Codes supplied or
            promoted by third parties unauthorized by MP2FP (including any
            unauthorized third party websites) will not be considered valid.
            Each offer code promoted by MP2FP is non-transferable and valid for
            single use on an item (or items) of merchandise as determined by
            MP2FP. Offer codes may not be combined; customers are limited to the
            use of a single offer code per order. Offer codes may not be used in
            conjunction with the MP2FP Referral Programme. Offer codes cannot be
            used towards purchase of non-branded merchandise or delivery
            charges. For online purchases, the code must be entered in the
            &apos;offer code&apos; field at checkout. Offer codes are not valid
            in showrooms or stores and are valid online only. MP2FP is not
            responsible for lost, stolen or corrupted codes or any unauthorized
            use of codes. Offer codes cannot be redeemed for cash or any cash
            equivalent; no substitutions or credits will be allowed. The
            monetary value of any offer code will not be refunded or credited
            back if any or all of the merchandise is returned. Expiry dates may
            apply to each offer code. Offer codes are void if copied,
            transferred, sold, exchanged or expired, and where otherwise
            prohibited. Spokespeople. From time to time, MP2FP may engage
            spokespeople, influencers, bloggers, or other individuals or
            entities who have been compensated or incentivized to speak on
            behalf of the brand. If you receive an offer code via a third party
            source, such as a television or radio show host, please note that
            such individuals may have been compensated by MP2FP for their
            statements. Referral Programme. MP2FP offers brand advocates the
            opportunity to refer friends to participate in the MP2FP Referral
            Programme. Participation in the programme is subject to the MP2FP
            Referral Programme Terms.
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-semibold">5. Delivery</h2>
          <p className="text-gray-600">
            When you place an order for Products through the Site, the Products
            will be delivered to your email
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
};

// Refund Policy Page Component
export const RefundPolicy = () => {
  return (
    <PolicyLayout title="MP2FP Refund Policy" lastUpdated="February 20, 2025">
      {/* Add your privacy policy content here */}
      <div className="space-y-2">
        <p className="text-gray-600">
          Please read this policy carefully. This is the Refund Policy of MP2FP.
        </p>
        <section>
          <h2 className="font-medium text-2xl">Digital products</h2>
          {/* Add your content here */}
          <p className="pt-6 text-gray-600">
            We do not issue refunds for digital products once the order is
            confirmed and the product is sent. If you received any promotional
            or other discount when you paid, any refund will only reflect the
            amount you actually paid.
          </p>
          <p className="pt-6 text-gray-600">
            Refunds are made using the same method originally used by you to pay
            for your purchase, unless agreed otherwise.
          </p>
          <p className="pt-6 text-gray-600">
            We recommend contacting us for assistance if you experience any
            issues receiving or downloading our products.
          </p>
        </section>

        <section className="pt-6">
          <h2 className="font-medium text-2xl">Contact us </h2>
          {/* Add your content here */}
          <div className="pt-6 text-gray-500 text-sm">
            <p className="pb-4 text-lg">
              If you have any questions about our Refunds Policy, please contact
              us:
            </p>
            <ul className="mt-2 pl-16 list-disc">
              <li>By email: contact@mp2fp.com</li>
            </ul>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
};

export default { PrivacyPolicy, TermsOfService, RefundPolicy };
