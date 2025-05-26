import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CommentSection } from '../components/CommentSection';
import { ShareButtons } from '../components/ShareButtons';

interface BlogPostDetailProps {
  posts: any[];
}

export const BlogPostDetail = ({ posts }: BlogPostDetailProps) => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<any | null>(null);
  
  useEffect(() => {
    // Encontrar o post com o ID correspondente
    const foundPost = posts.find(p => p.id === postId);
    if (foundPost) {
      setPost(foundPost);
    }
  }, [postId, posts]);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <p className="mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      {/* Banner do post */}
      <section className="bg-light-section py-10">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-secondary text-white text-sm px-3 py-1 rounded mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
          <div className="mt-4 text-gray-600">
            <span>By {post.author} • {post.date}</span>
          </div>
        </div>
      </section>
      
      {/* Conteúdo do post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Botões de compartilhamento no topo */}
            <div className="mb-8">
              <ShareButtons 
                url={`/blog/${post.id}`}
                title={post.title}
                description={post.excerpt}
                hashtags={['MonthlyEarthDay', ...post.tags]}
              />
            </div>
            
            {/* Imagem destacada */}
            {post.image && (
              <div className="mb-8">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}
            
            {/* Conteúdo formatado */}
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph: string, idx: number) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={idx} className="text-3xl font-bold mt-8 mb-4">{paragraph.substring(2)}</h1>;
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={idx} className="text-2xl font-bold mt-6 mb-3">{paragraph.substring(3)}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={idx} className="text-xl font-bold mt-5 mb-2">{paragraph.substring(4)}</h3>;
                } else if (paragraph.startsWith('- ')) {
                  return <li key={idx} className="ml-6 mb-1">{paragraph.substring(2)}</li>;
                } else if (paragraph.trim() === '') {
                  return <br key={idx} />;
                } else {
                  return <p key={idx} className="mb-4">{paragraph}</p>;
                }
              })}
            </div>
            
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string, idx: number) => (
                    <span 
                      key={idx}
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Botões de compartilhamento no final */}
            <div className="mt-8 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <Link to="/blog" className="text-primary hover:underline">
                  ← Back to Blog
                </Link>
                <ShareButtons 
                  url={`/blog/${post.id}`}
                  title={post.title}
                  description={post.excerpt}
                  hashtags={['MonthlyEarthDay', ...post.tags]}
                />
              </div>
            </div>
            
            {/* Seção de comentários */}
            <CommentSection postId={post.id} />
          </div>
        </div>
      </section>
    </div>
  );
};
