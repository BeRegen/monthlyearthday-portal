import { useState } from 'react';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  email?: string;
}

interface CommentSectionProps {
  postId: string;
}

export const CommentSection = ({ postId }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>(() => {
    // Carregar comentários do localStorage
    const savedComments = localStorage.getItem(`blog_comments_${postId}`);
    return savedComments ? JSON.parse(savedComments) : [];
  });
  
  const [newComment, setNewComment] = useState({
    author: '',
    email: '',
    content: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewComment(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!newComment.author.trim()) {
      setError('Please enter your name');
      return;
    }
    
    if (!newComment.content.trim()) {
      setError('Please enter a comment');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    // Simular envio para API
    setTimeout(() => {
      const comment: Comment = {
        id: Date.now().toString(),
        author: newComment.author.trim(),
        content: newComment.content.trim(),
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        email: newComment.email.trim() || undefined
      };
      
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      
      // Salvar no localStorage
      localStorage.setItem(`blog_comments_${postId}`, JSON.stringify(updatedComments));
      
      // Resetar formulário
      setNewComment({
        author: '',
        email: '',
        content: ''
      });
      
      setSuccess('Comment posted successfully!');
      setIsSubmitting(false);
      
      // Limpar mensagem de sucesso após alguns segundos
      setTimeout(() => {
        setSuccess('');
      }, 3000);
    }, 1000);
  };
  
  const handleDelete = (commentId: string) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      const updatedComments = comments.filter(comment => comment.id !== commentId);
      setComments(updatedComments);
      localStorage.setItem(`blog_comments_${postId}`, JSON.stringify(updatedComments));
    }
  };
  
  return (
    <div className="comments-section mt-8 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold mb-6">Comments ({comments.length})</h3>
      
      {/* Lista de comentários */}
      {comments.length > 0 ? (
        <div className="space-y-6 mb-8">
          {comments.map(comment => (
            <div key={comment.id} className="bg-light-section p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">{comment.author}</h4>
                  <p className="text-sm text-gray-500">{comment.date}</p>
                </div>
                <button 
                  onClick={() => handleDelete(comment.id)}
                  className="text-gray-400 hover:text-red-500"
                  title="Delete comment"
                >
                  ×
                </button>
              </div>
              <p className="mt-2">{comment.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic mb-6">No comments yet. Be the first to comment!</p>
      )}
      
      {/* Formulário de comentário */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h4 className="text-xl font-bold mb-4">Leave a Comment</h4>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={newComment.author}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email (optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newComment.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Comment *
            </label>
            <textarea
              id="content"
              name="content"
              value={newComment.content}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          {error && (
            <div className="text-red-500 text-sm mb-4">
              {error}
            </div>
          )}
          
          {success && (
            <div className="text-green-500 text-sm mb-4">
              {success}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition flex items-center"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></span>
                Posting...
              </>
            ) : (
              'Post Comment'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
