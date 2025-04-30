import { BlogPost } from '../../types/blog';
import BlogOneMainImg from "../../assets/images/Blogs/ScrumMasters_blogOne.webp";
import BlogOneImgOne from "../../assets/images/Blogs/Blog_one_img1.png";
import BlogOneImgTwo from "../../assets/images/Blogs/Blog_one_img2.png";
import BlogTwoMainImg from "../../assets/images/Blogs/BenefitsofScrumTeamPerformance_blogTwo.webp";
import BlogThreeMainImg from "../../assets/images/Blogs/TimeForSomeAnswers_blogThree.jpg";
// import BojanSmudjaInterviewVideo from "../../assets/images/Blogs/BojanSmudja_interview.mp4";

export const blogPost: BlogPost[] = [
    {
        id: 1,
        title: "Ko su Scrum masteri i kako oni zaradjuju vise od 1.800 evra u Srbiji?",
        imageMain: BlogOneMainImg,
        imageAlt: "Scrum Master",
        description: "Iako su Scrum masteri sve traženiji, kako u svetu, tako i u Srbiji, za ovo zanimanje još mnogi nisu čuli. Ono se ne izučava...",
        date: "May 18, 2023",
        author: "SmartConsultingAgency",
        content: [
            {
                type: 'text',
                content: "Iako su Scrum masteri sve traženiji, kako u svetu, tako i u Srbiji, za ovo zanimanje još mnogi nisu čuli. Ono se ne izučava ni u školama ni na fakultetima, uprkos činjenici da je potražnja na tržištu rada za tom pozicijom sve veća, a da zarađuju više od 1.800 evra u našoj zemlji."
            },
            {
                type: 'image',
                src: BlogOneImgOne,
                alt: "Scrum Master Role Description",
                caption: "Scrum Master diagram",
                content: ""
            },
            {
                type: 'text',
                content: "Scrum master je ključna figura u Scrum timu, odgovoran za vođenje tima kroz Scrum proces, uklanjanje prepreka i osiguranje da tim prati Scrum vrednosti i principe."
            },
            {
                type: 'text',
                content: "U Srbiji, plata Scrum mastera može značajno da varira u zavisnosti od iskustva, industrije i veličine kompanije. Međutim, sa prosečnom platom koja prelazi 1.800 evra, ovo zanimanje postaje sve privlačnije stručnjacima u IT-u i menadžmentu."
            },
            {
                type: 'image',
                src: BlogOneImgTwo,
                alt: "Scrum Master Salary in Serbia",
                caption: "Scrum Master Salary",
                content: ""
            },
            {
                type: 'text',
                content: "Za one koji su zainteresovani da postanu Scrum masteri, preporučuje se sticanje relevantnih sertifikata kao što su Certified ScrumMaster (CSM) ili Professional Scrum Master (PSM), koji mogu pomoći u razumevanju Scrum okvira i povećanju šansi za zapošljavanje."
            }
        ]
    },
    {
        id: 2,
        title: "The Benefits of Scrum: Improving Team Performance and Productivity",
        imageMain: BlogTwoMainImg,
        imageAlt: "Scrum Master",
        description: "Business owners are always looking for ways to boost employee productivity and ways of creating a cohesive team. For...",
        date: "May 20, 2023",
        author: "SmartConsultingAgency",
        content: [
            {
                type: 'text',
                content: "Business owners are always looking for ways to boost employee productivity and ways of creating a cohesive team. For such needs, Scrum is an ideal, lightweight framework solution that brings many methods for improving team performance. "
            },
            {
                type: 'text',
                content: "Scrum is based on the principles of transparency, inspection, and adaptation, allowing teams to optimize their performance and deliver high-quality products."
            },
            {
                type: 'text',
                content: "By implementing Scrum, organizations can improve communication and collaboration within teams, increase flexibility and responsiveness to change, and enhance overall productivity."
            },
            {
                type: 'text',
                content: "In conclusion, Scrum is a powerful framework that can help organizations achieve their goals by improving team performance and productivity. By understanding and implementing Scrum, businesses can stay competitive in today's fast-paced market."
            }
        ]
    },
    {
        id: 3,
        title: "Time for some answers: We asked our certified coach Bojan Smuđa some questions",
        imageMain: BlogThreeMainImg,
        imageAlt: "Time for some answers",
        description: "Our certified coach Bojan Smuđa answered the most frequently asked questions about Scrum in a short...",
        date: "Mar 10, 2023",
        author: "SmartConsultingAgency",
        content: [
            {
                type: 'text',
                content: "Our certified coach Bojan Smuđa answered the most frequently asked questions about Scrum in a short interview."
            },
            {
                type: 'text',
                content: "Is Scrum Master training fun, how long does it take, how long does it take someone to become a Scrum Master, are just some of the questions that Bojan answered. He also explained what Training from the Back of the Room is and why he likes to use it in his training."
            },
            // {
            //     type: 'video',
            //     src: BojanSmudjaInterviewVideo,
            //     alt: "Bojan Smudja Interview",
            //     caption: "Bojan Smudja Interview",
            //     content: ""
            // },
        ]
    }
];