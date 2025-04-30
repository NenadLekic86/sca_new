import { useParams, useNavigate } from 'react-router-dom';
import { blogPost } from '../../assets/data/data.ts';
import BlogContent from '../../components/Blog/BlogContent';

import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import './BlogPost.scss';

import Waves from '../../assets/images/svg/Waves';


const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = blogPost.find(post => post.id === Number(id));

  if (!post) {
    navigate('/blogs');
    return null;
  }

  return (
    <div className="blog-post-page relative">
         <div className='pagetitle relative pt-40 pb-30 lg:pt-50 lg:pb-40'>
            <div className='absolute top-0 left-0 w-full h-full'>
                <Waves 
                    className="absolute top-0 right-0 w-1/2 h-auto "
                    color1="#FF9F0C"
                    color2="#ec792b"
                    color3="#e47224"
                />
            </div>
            <div className="container text-center">
                <div className='w-full lg:max-w-6/10 mx-auto'>
                    <h1 className="text-4xl font-bold">{post.title}</h1>
                </div>
            </div>
            <div className='absolute inset-x-0 bottom-15'>
                <div className='flex items-center justify-center mt-4'>
                    <div className="flex items-center mr-4">
                        <MdOutlinePersonOutline className="text-orange-500 mr-2" size={20} />
                        <span className="text-darkBlue-500 text-sm">{post.author}</span>
                    </div>
                    <div className="flex items-center">
                        <MdOutlineCalendarMonth className="text-orange-500 mr-2" size={20} />
                        <span className="text-darkBlue-500 text-sm">{post.date}</span>  
                    </div>
                </div>
            </div>
        </div>
        <div className="container py-10">
            <div className="single-blog-pagetitle mb-10">
                <img 
                    src={post.imageMain} 
                    alt={post.imageAlt} 
                    className="w-full h-auto rounded-lg shadow-lg mb-8"
                />
            </div>
            <div className="max-w-5xl mx-auto">
                <BlogContent content={post.content} />
            </div>
        </div>
    </div>
  );
};

export default BlogPost;