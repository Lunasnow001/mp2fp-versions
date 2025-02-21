/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
// Section 1
  {
    items: [
      {
        key: "1",
        label: "How do I pay for the services?",
        text: `
                </br>
                <p>Online payment as default, or invoice by request.</p></br>
     
                <p>We currently support worldwide VISA, Mastercard, and JCB credit cards. And debit cards that are activated to be used online. Some cards can also be blocked by issuing bank to only work in the issued country, this can be checked with your bank.</p></br>
                
                <p>For returning customers that order frequently please contact us to know more about monthly billing and custom price schemes. If you have any custom requirements or would like to order bespoke plans please contact us before you make the order for a quotation.</p></br>
    
                <p>For larger order than 10 000 sqf (or 929 sqm) 50% price will be added for each extra multiple above the basic area that are within this limit. We will inform you before we start if you not have considered before you make your order if this occurs.</p></br>
    
                <p>NB! If any trouble with payment in portal please send your order by email: <strong><a class="text-blue-600 underline" href="mailto:contact@mp2fp.com">contact@mp2fp.com</a></strong>, and we will produce your floorplan directly and send you invoice by Paypal or Payoneer.</p></br>
              `,
      },
      {
        key: "2",
        label: "What other services do you provide?",
        text: `
                </br>
                <p>We offer a range of services for Real-estate, Enterprise and Engineering clients and some examples is premium image editing, CGI's, 3D engineering modeling, video editing, VHS (virtual home styling), VR solutions, web/software development and we can handle most of your outsourcing needs. You can also invite us as a collaborator or send us your scanned files and we can complete the walk-through and disable scans that are obsolete etc</p></br>
                
                <p>Yes we have many years experience with all types of BIM and CAD formats. We can produce DWG files in 2D and 3D from any scan or input.</p></br>

                <p>We can deliver Revit and IFC files and other 2D and 3D formats as input to Autodesk software products as well as input and preparations to Unreal Engine, Blender and other high-end 3D software solutions. Send us your input and description of your needs and we will get back to you with a good quotation, and after agreement deliver the ready models within short production time and to a high quality standard.</p></br>
              `,
      },
      {
        key: "3",
        label: "MP2BIM",
        text: `
                </br>
                <p>We have many years experience with all types of <strong>BIM and CAD</strong> formats. We can produce <strong>DWG, DXF, SKP files in 2D and 3D from any pointcloud</strong> from any types of scan or input.</p></br>

                <p>We can deliver <strong><a class="text-blue-600 underline" href="javascript:void(0)">Revit and IFC</a></strong> files and other 2D and 3D formats as input to Autodesk software products as well as input and preparations to Unreal Engine, Blender and other high-end 3D software solutions.</p></br>
                
                <p>These options are designed to streamline your ordering process and save you time. If you have specific requirements or need assistance setting up these options, please don't hesitate to contact our customer support team.</p></br>
              `,
      },
      {
        key: "4",
        label: "Do I need to complete the order form every time?",
        text: `
                </br>
                <p> No, if you want to set up your custom style, we can register your details in our order system which simplifies the order process.</p></br>
              `,
      },
      {
        key: "5",
        label: "How do I amend the floorplan if I need something changed?",
        text: `
                </br>
                <p>You send us an email after you've received the floorplan. It´s easiest if you use a drawing tool and draw directly on the floorplan, but a written description will also suffice for smaller changes.</p></br>
                
              `,
      },
      {
        key: "6",
        label: "Do you do custom floorplans?",
        text: `
                </br>
                <p>Yes we can offer a wide variety and currently handle about 200 different floorplan styles. There is a high number of variables with custom floorplans, so just upload the required style with your order and we´ll replicate it.</p></br>

                <p>Our listed products is template based with objects and materials as showed in examples only.</p></br>
                
                <p>Custom plans will come at additional cost, please contact us for quotation before you make the order. If you prefer to use other input instead of modelpack, like sketches, other scanning equipment and/or apps like Magicplan we can provide floorplans from most types of input.</p></br>
              `,
      },
    ],
  },
// Section 2 
  {
    items: [
      {
        key: "7",
        label: "Do I need to prepare anything?",
        text: `
                </br>
                <p>To take measures from your modelpack model we need you to set our <strong><a class="text-blue-600 underline" href="mailto:contact@mp2fp.com">contact@mp2fp.com</a> </strong> email as collaborator. Another method is to take a print out of screen with 1 or 2 relevant measures shown on the print so that we can calibrate the floorplan and add to the order.</p></br>
                
                <p>If you have specific requirements for the floorplan regarding highest accuracy you can give us access to the scanned file link to our email address (provided to you at MP2FP checkout). With use of the pointcloud file (e.g. .XYZ) we will then be able to check your details better and be able to deliver back to you a more accurate floorplan.</p></br>

                <p>Other extracted or prepared file formats, from the scan or registration, can as well be used as supplemented, but for best accuracy the original .XYZ prefeered.</p></br>
              `,
      },
      {
        key: "8",
        label: "How accurate are the measurements?",
        text: `
                </br>
                <p>We provide the internal area based on Gross Internal Area measurements, which means floor area without internal walls. The floorplan is re-drawn based on the model and control measurements from the workshop. The floorplan is illustrative and recommended for marketing purposes only.</p></br>
                
                <p>If you want highest accuracy we recommend you to send us the link with the XYZ file or make an additional calibrating horizontal measure on a wall (long and accurate as possible) so that we can make a best possible calibration to double check the accuracy.</p></br>
              `,
      },
      {
        key: "9",
        label: "What's your turn around time?",
        text: `
                </br>
                <p>Usually the delivery is completed within early next business day after the day or evening you upload, and we guarantee 24 h within normal business days. Orders placed on Fridays will be delivered on Mondays. We can as well offer faster express delivery by request.</p></br>
              `,
      },
      {
        key: "10",
        label: "Branding of the floorplans",
        text: `
                </br>
                <p>There are no logos or additional branding from MP2FP on the produced floorplans. If you upload your logos and disclaimer text or other fixed content we will add these as default to all your floorplans without any extra charges per prior agreement.</p></br>
                
              `,
      },
      {
        key: "11",
        label: "What do I get in the delivery?",
        text: `
                </br>
                <p>The delivery and default price above includes a full featured property with all floors included*. We provide you with JPG files in A4 size and 300 dpi floorplan layouts as default. We provide you as well with PNG, PDF, SVG and/or PSD by request without any additional charges. We can as well deliver as DWG or IFC (tech drawings/BIM models) as a separate product on request, send us a message to get a quotation.</p></br>
                
              `,
      },
      {
        key: "12",
        label: "Capture options",
        text: `
                </br>
                <p>MP2FP services are independet and flexible to any type of input and are not bounded to any particular technology or method. Below we have made a link to a document we try to keep updated with some thoughts and recomodations. This is not in any way meant to be complete or limited to the methodes or technologies described here but can be used as a idea guidenance. If you have thoughts or ideas please contact us and we will be happy to collaborate to adopt and testing and advice more options.</p></br>
                
                <strong><p><a class="text-blue-600 underline" href="javascript:void(0)">MP2FP Capture Options</a></p></strong></br>
                <strong><p><a class="text-blue-600 underline" href="https://poly.cam/tools/3d-room-scanner" target="_blank">Polycam Roomscan</a></p></strong></br>
                <strong><p><a class="text-blue-600 underline" href="https://poly.cam/capture/4BFE8AD6-C89E-4826-87F6-C8A5D12DA08C" target="_blank">Example roomplan captured project</a></p></strong></br>
              `,
      },
    ],
  },
];

const FAQs = () => {
  return (
    <div className="flex flex-col items-center bg-[#f4f7f9] px-6 sm:px-8 md:px-12 pt-20 pb-24">
      <h1 className="mb-4 font-bold text-3xl text-center">Frequently Asked Questions</h1>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl sm:max-w-5xl md:max-w-6xl">
        {faqData.map((section, index) => (
          <div key={index} className="space-y-2 shadow-sm p-4 sm:p-6 overflow-hidden">
            {section.items.map((item) => (
              <AccordionItem
                key={item.key}
                label={item.label}
                text={item.text}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const AccordionItem = ({ label, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 shadow-sm border border-gray-300 rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center bg-white hover:bg-gray-50 px-4 py-3 w-full font-medium text-gray-800 hover:text-orange-400 text-left transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="px-4 pb-3 overflow-hidden text-gray-800"
      >
        <div className="" dangerouslySetInnerHTML={{ __html: text }}></div>
      </motion.div>
    </div>
  );
};

export default FAQs;
