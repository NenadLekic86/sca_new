import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { blogPost } from '../../assets/data/data.ts';
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import './blogs.scss';
import Waves from '../../assets/images/svg/Waves';
import { animateSplitLetters } from '../../utils/animateElements/animateSplitLetters';
import { initializeAnimations } from '../../utils/animateElements/animateElements';

const Blogs = () => {
    useEffect(() => {
        // Initialize both animation systems
        const animatedElements = document.querySelectorAll('[data-animate-letters]');
        animatedElements.forEach(element => {
            animateSplitLetters(element as HTMLElement);
        });
        initializeAnimations(); // Initialize element animations
    }, []);

  return (
    <div className='blogs-page relative'>
        <div className='pagetitle relative pt-40 pb-30 lg:pt-50 lg:pb-40'>
            <div className='absolute top-0 left-0 w-full h-full'>
                <Waves 
                    className="absolute top-0 right-0 w-1/2 h-auto "
                    color1="#FF9F0C"
                    color2="#ec792b"
                    color3="#e47224"
                />
            </div>
            <div className="container">
                <h1 className="text-4xl font-bold text-center">Our Blogs</h1>
            </div>
        </div>
        <div className="container mx-auto px-4 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPost.map((post) => (
                    <Link to={`/blog/${post.id}`} key={post.id} className="blog-card" data-animate="fade-in-up">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-500 ease-in-out hover:-translate-y-4">
                            <div className="aspect-w-16 aspect-h-9">
                                <img 
                                    src={post.imageMain} 
                                    alt={post.imageAlt} 
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className='flex items-center justify-between mb-4'>
                                    <div className="flex items-center mb-2">
                                        <MdOutlinePersonOutline className="text-orange-500 mr-2" size={20} />
                                        <span className="text-darkBlue-500 text-sm">{post.author}</span>
                                    </div>
                                    <div className="flex items-center mb-2">
                                        <MdOutlineCalendarMonth className="text-orange-500 mr-2" size={20} />
                                        <span className="text-darkBlue-500 text-sm">{post.date}</span>  
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
                                <p className="text-gray-600 line-clamp-3">{post.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Blogs;
