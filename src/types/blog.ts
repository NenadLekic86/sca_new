export interface ContentBlock {
    type: 'text' | 'heading' | 'image' | 'author' | 'video';
    content: string;
    level?: number;
    src?: string;
    alt?: string;
    caption?: string;
}

export interface BlogPost {
    id: number;
    title: string;
    imageMain: string;
    imageAlt: string;
    description: string;
    date: string;
    content: ContentBlock[];
    author: string;
}