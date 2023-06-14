'use client';
import Container from "../Container"
// add import for a school icon for the categories using react-icons
import { FaSchool } from 'react-icons/fa'
// Auditorium
import { FaMicrophoneAlt } from 'react-icons/fa';

// Gymnasium
import { IoMdBasketball } from 'react-icons/io';

// Banquet Hall
import { AiFillCrown } from 'react-icons/ai';

// Meeting Room
import { RiSlideshow2Fill} from 'react-icons/ri';

// Outdoor Amphitheater
import { BiCameraMovie,} from 'react-icons/bi';

// Classroom
import { IoIosSchool } from 'react-icons/io';



// Exhibition Hall
import { AiOutlineApartment} from 'react-icons/ai';

// Lounge
import { FiCoffee} from 'react-icons/fi';



// Lecture Hall
import { IoMdSchool } from 'react-icons/io';

// Library
import { RiBookOpenLine } from 'react-icons/ri';

// Sports Field
import { AiOutlineTrophy } from 'react-icons/ai';

// Theater
import { GiDramaMasks } from 'react-icons/gi';

// Conference Room
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";


export const categories = [
  {
    label: 'School',
    icon: FaSchool,
    description: 'This Venue is a school',
  },
  {
    label: 'Auditorium',
    icon: FaMicrophoneAlt,
    description: 'Large, spacious halls equipped with seating arrangements, stages, and audio-visual facilities for hosting conferences, performances, or presentations.',
  },
  {
    label: 'Gymnasium',
    icon: IoMdBasketball,
    description: 'Versatile indoor spaces suitable for sports events, fitness classes, workshops, or exhibitions. They often have equipment like basketball hoops, volleyball nets, or gymnastics mats.',
  },
  {
    label: 'Banquet Hall',
    icon: AiFillCrown,
    description: 'Elegant and well-appointed halls for hosting formal events like weddings, receptions, galas, or corporate banquets. They typically offer catering services as well.',
  },

    {
    label: 'Meeting Room',
    icon: RiSlideshow2Fill,
    description: 'Small, private rooms for hosting meetings, interviews, or workshops. They often have audio-visual equipment and whiteboards.',
    },

    {
    label: 'Outdoor Amphitheater',
    icon: BiCameraMovie,
    description: 'Open-air venues with tiered seating for hosting performances, concerts, or movie screenings.',
    },


    {
    label: 'Exhibition Hall',
    icon: AiOutlineApartment,
    description: 'Large, spacious halls equipped with seating arrangements, stages, and audio-visual facilities for hosting conferences, performances, or presentations.',
    },

    {
    label: 'Lounge',
    icon: FiCoffee,
    description: 'Small, private rooms for hosting meetings, interviews, or workshops. They often have audio-visual equipment and whiteboards.',
    },


    {
    label: 'Lecture Hall',
    icon: IoMdSchool,
    description: 'Large, spacious halls equipped with seating arrangements, stages, and audio-visual facilities for hosting conferences, performances, or presentations.',
    },

    {
    label: 'Library',
    icon: RiBookOpenLine,
    description: 'Small, private rooms for hosting meetings, interviews, or workshops. They often have audio-visual equipment and whiteboards.',
    },

    {
    label: 'Theater',
    icon: GiDramaMasks,
    description: 'Elegant and well-appointed halls for hosting formal events like weddings, receptions, galas, or corporate banquets. They typically offer catering services as well.',
    },

    {
    label: 'Sports Field',
    icon: AiOutlineTrophy,
    description: 'Versatile indoor spaces suitable for hosting sports events, fitness classes, workshops, or exhibitions. They often have equipment like basketball hoops, volleyball nets, or gymnastics mats.',
    },



];


const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';
    if (!isMainPage) {
        return null;
    }

    return (
     <Container>
        <div className="pt-4 flex items-center justify-between overflow-x-auto">
            {categories.map((item)=>(
                <CategoryBox
                    key={item.label}
                    label={item.label}
                    selected={category === item.label}
                    icon={item.icon}
                />
            ))}
        </div>
     </Container>   )
}

export default Categories