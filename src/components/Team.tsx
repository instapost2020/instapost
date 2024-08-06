import Image from "next/image";
import React from "react";
import { Raleway } from "next/font/google";
import { Badge } from "./ui/badge";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { HeartOff } from "lucide-react";
import Link from "next/link";

const raleway = Raleway({
  subsets: ["latin"],
});
const Team = () => {
  const team = [
    {
      photo: "/team/jelyellow.jpg",
      name: "Jelynson Patricio",
      position: ["Owner | Strategist"],
      facebook: "https://www.facebook.com/profile.php?id=100089485210478",
      instagram: "https://www.instagram.com/thefirsttimemommy",
    },
    {
      photo: "/team/julyellow.jpg",
      name: "Julius Patricio",
      position: ["Owner | Director"],
      facebook: "https://www.facebook.com/jropatpat",
      instagram: "https://www.instagram.com/juliusuperpogi/",
    },
    {
      photo: "/team/sarahyellow.jpg",
      name: "Sarah De Guzman Napay",
      position: ["General Manager"],
      facebook: "https://www.facebook.com/sarah.napayy",
      instagram: "https://www.instagram.com/saraaaaah_chi",
    },
    {
      photo: "/team/chayellow.jpg",
      name: "Charrish Mae Napay",
      position: ["Human Resources"],
      facebook: "https://www.facebook.com/charrishmae",
      instagram: "https://www.instagram.com/charrishhhhh/",
    },
    {
      photo: "/team/jayellow.jpg",
      name: "Ja Jose",
      position: ["Account Lead Manager"],
      facebook: "https://www.facebook.com/jajose00",
      instagram: "https://www.instagram.com/jajose00",
    },
    {
      photo: "/team/mayellow.jpg",
      name: "Ma. Kristina Villar",
      position: ["Creative Head"],
      facebook: "https://www.facebook.com/kristina.mangampovillar",
      instagram: "https://www.instagram.com/krstnvllr",
    },
    {
      photo: "/team/gelayyellow.jpg",
      name: "Angela Dulay",
      position: ["K.O.L Manager"],
      facebook: "https://www.facebook.com/profile.php?id=100008088767813",
      instagram: "https://www.instagram.com/_gelaaayy/",
    },
    {
      photo: "/team/trexxx.jpg",
      name: "Trexie Hamilton",
      position: ["Graphic Artist"],
      facebook: "https://www.facebook.com/mariatrexiejontarciego",
      instagram: "https://www.instagram.com/xiee_jntrcg/",
    },
    {
      photo: "/team/angyellow.jpg",
      name: "Angeline Santos",
      position: ["Video Editor"],
      facebook: "https://www.facebook.com/angeline.santos.3110567",
      instagram: "https://www.instagram.com/anggesantos/",
    },
    {
      photo: "/team/jasyellow.jpg",
      name: "Jason Gotangho",
      position: ["Video Editor | ", "Sales"],
      facebook: "https://www.facebook.com/jasongerald.gotangho",
      instagram: "https://www.instagram.com/gotangho/",
    },
  ];
  return (
    <div className="w-full max-w-7xl mx-auto gap-4 h-full grid px-2 md:px-0 py-8 grid-cols-2 md:grid-cols-4 relative">
      <h1 className="text-5xl lg:text-8xl uppercase font-bold w-full max-w-sm ">
        Meet the <span className="text-red-600">Team</span>
      </h1>
      {team.map((item, index) => (
        <div className="w-full max-w-xl h-auto flex flex-col gap-4" key={index}>
          <div className="w-full h-96 relative">
            <Image
              src={item.photo}
              alt="Item"
              fill
              className="object-cover rounded-xl md:rounded-none"
            />
          </div>
          <div>
            <h1 className={`${raleway.className} text-xl font-semibold`}>
              {item.name}
            </h1>
            <div className="w-full justify-between">
              <Badge className="bg-red-600">
                {item.position.map((pos) => pos)}
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
