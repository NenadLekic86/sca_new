import { ContentBlock } from '../../types/blog';
import './blogContent.scss';

interface BlogContentProps {
    content: ContentBlock[];
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
    const authorBlock = content.find(block => block.type === 'author');
    const mainContent = content.filter(block => block.type !== 'author');

    return (
        <article className="blog-content">
            <div className="blog-body">
                {mainContent.map((block, index) => (
                    <div key={index}>
                        {block.type === 'text' && <p className="mb-4">{block.content}</p>}
                        {block.type === 'heading' && (
                            <h3 className="text-2xl font-bold my-6">{block.content}</h3>
                        )}
                        {block.type === 'image' && (
                            <figure className="my-8">
                                <img src={block.src} alt={block.alt} className="w-full" />
                                {block.caption && (
                                    <figcaption className="text-center mt-2 text-sm text-gray-600">
                                        {block.caption}
                                    </figcaption>
                                )}
                            </figure>
                        )}
                        {block.type === 'video' && (
                            <figure className="my-8">
                                <video 
                                    src={block.src} 
                                    controls
                                    className="w-full rounded-lg"
                                    title={block.alt}
                                >
                                    Your browser does not support the video tag.
                                </video>
                                {block.caption && (
                                    <figcaption className="text-center mt-2 text-sm text-gray-600">
                                        {block.caption}
                                    </figcaption>
                                )}
                            </figure>
                        )}
                    </div>
                ))}
            </div>

            {authorBlock && (
                <div className="blog-author mt-12 pt-6 border-t border-gray-200">
                    <p className="text-right italic text-gray-600">{authorBlock.content}</p>
                </div>
            )}
        </article>
    );
};

export default BlogContent;
