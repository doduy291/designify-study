import { BsPhone } from "react-icons/bs";
import { GiConcentrationOrb } from "react-icons/gi";
import { IoLogoXing } from "react-icons/io";
import { HiCode } from "react-icons/hi";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";

export const featuresData = [
  {
    name: "UI/UX",
    description:
      "Landing Pages, User Flow, Wireframing, Prototyping, Mobile App Design, Web App",
    icon: <BsPhone />,
    imgClass: "one",
  },
  {
    name: "Icon/Illustration",
    description:
      "Character Design, Icon Set, Illustration Guide, Illustration Set",
    icon: <GiConcentrationOrb />,
    imgClass: "two",
  },
  {
    name: "Branding",
    description: "Visual Identity, Stationary Kit, Marketing Materials",
    icon: <IoLogoXing />,
    imgClass: "three",
  },
  {
    name: "Development",
    description:
      "HTML/CSS, JavaScript Animation, WordPress, Responsive Website",
    icon: <HiCode />,
    imgClass: "four",
  },
  {
    name: "Motion",
    description: "2D Animation, UI Motion",
    icon: <MdSlowMotionVideo />,
    imgClass: "five",
  },
  {
    name: "Photography",
    description: "Travel Photography, Product Photography",
    icon: <FaPhotoVideo />,
    imgClass: "six",
  },
];
