import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import { BlogPostDetail } from './BlogPostDetail';

// Interface for blog posts
interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  image?: string;
  category: string;
  tags: string[];
}

// Component to display a blog post card
const BlogPostCard = ({ post, isAdmin = false, onEdit, onDelete }: { 
  post: BlogPost, 
  isAdmin?: boolean,
  onEdit?: (post: BlogPost) => void,
  onDelete?: (postId: string) => void
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
      <div className="h-48 bg-gray-200 relative">
        {post.image ? (
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-section">
            <span className="text-4xl">🌍</span>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-secondary text-white text-xs px-2 py-1 rounded">
          {post.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-primary">{post.title}</h3>
        <p className="text-sm text-gray-500 mb-2">
          By {post.author} • {post.date}
        </p>
        <p className="text-gray-700 mb-4">{post.excerpt}</p>
        <Link 
          to={`/blog/${post.id}`} // Link to the public post detail page
          className="text-secondary font-medium hover:underline"
        >
          Read more →
        </Link>
      </div>
      
      {/* Admin controls: Only show if isAdmin is true and handlers are provided */}
      {isAdmin && onEdit && onDelete && (
        <div className="absolute top-2 left-2 flex space-x-2 z-10">
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onEdit(post); }}
            className="bg-white text-gray-700 p-1 rounded-full shadow hover:bg-gray-100"
            title="Edit post"
          >
            ✏️
          </button>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); onDelete(post.id); }}
            className="bg-white text-gray-700 p-1 rounded-full shadow hover:bg-gray-100"
            title="Delete post"
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
};

// Component for creating/editing posts (used only in AdminBlog)
const BlogEditor = ({ 
  onSave, 
  onCancel,
  initialPost = null 
}: { 
  onSave: (post: Omit<BlogPost, 'id' | 'date'>) => void;
  onCancel: () => void;
  initialPost?: BlogPost | null;
}) => {
  const [title, setTitle] = useState(initialPost?.title || '');
  const [content, setContent] = useState(initialPost?.content || '');
  const [excerpt, setExcerpt] = useState(initialPost?.excerpt || '');
  const [author, setAuthor] = useState(initialPost?.author || '');
  const [image, setImage] = useState(initialPost?.image || '');
  const [category, setCategory] = useState(initialPost?.category || 'News');
  const [tags, setTags] = useState(initialPost?.tags.join(', ') || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      title,
      content,
      excerpt,
      author,
      image,
      category,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields for title, excerpt, content, author, image, category, tags */}
       <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Excerpt (short summary)
        </label>
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={2}
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          rows={10}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image URL (optional)
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="News">News</option>
            <option value="Events">Events</option>
            <option value="Success Stories">Success Stories</option>
            <option value="Education">Education</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tags (comma separated)
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="trees, cleanup, education"
          />
        </div>
      </div>
      
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
        >
          {initialPost ? 'Update Post' : 'Create Post'}
        </button>
      </div>
    </form>
  );
};

// Component for the public blog page (read-only)
const PublicBlog = ({ blogPosts }: { blogPosts: BlogPost[] }) => {
  return (
    <div>
      {/* Page banner */}
      <section className="bg-light-section py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="mt-2 text-gray-600">Latest news and updates from #MonthlyEarthDay</p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Blog posts list - Render cards without admin controls */}
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map(post => (
                <BlogPostCard key={post.id} post={post} isAdmin={false} /> // Explicitly set isAdmin to false
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No blog posts available yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// Component for the admin blog area (with editing)
const AdminBlog = ({ 
  blogPosts, 
  onSavePost, 
  onDeletePost 
}: { 
  blogPosts: BlogPost[], 
  onSavePost: (postData: Omit<BlogPost, 'id' | 'date'>, editingId?: string) => void,
  onDeletePost: (postId: string) => void
}) => {
  const [view, setView] = useState<'list' | 'editor'>('list');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  const correctPassword = 'monthlyearthday2025'; // Simple password protection

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(''); // Clear previous errors
    if (password === correctPassword) {
      console.log('Admin login successful');
      setIsAuthenticated(true);
      // Store authentication in session storage for persistence during the session
      try {
        sessionStorage.setItem('blogAdminAuth', 'true');
        console.log('Admin auth status saved to sessionStorage.');
      } catch (error) {
        console.error('Error saving auth status to sessionStorage:', error);
        setLoginError('Could not save login status. Please enable cookies/session storage.');
      }
    } else {
      console.log('Admin login failed: Incorrect password');
      setLoginError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    console.log('Admin logout');
    setIsAuthenticated(false);
    setPassword(''); // Clear password field on logout
    try {
      sessionStorage.removeItem('blogAdminAuth');
      console.log('Admin auth status removed from sessionStorage.');
    } catch (error) {
      console.error('Error removing auth status from sessionStorage:', error);
    }
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setView('editor');
  };

  const handleSavePostInternal = (postData: Omit<BlogPost, 'id' | 'date'>) => {
    onSavePost(postData, editingPost?.id);
    setView('list');
    setEditingPost(null);
  };

  const handleDeletePostInternal = (postId: string) => {
     // Added confirmation dialog before deleting
    if (window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      onDeletePost(postId);
    }
  };

  // Check for existing authentication on component mount
  useEffect(() => {
    try {
      const auth = sessionStorage.getItem('blogAdminAuth');
      console.log('Checking sessionStorage for admin auth:', auth);
      if (auth === 'true') {
        setIsAuthenticated(true);
        console.log('Admin already authenticated from sessionStorage.');
      }
    } catch (error) {
      console.error('Error reading auth status from sessionStorage:', error);
    }
  }, []);

  // Render login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Blog Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            {loginError && (
              <p className="text-red-600 text-sm mb-4">{loginError}</p>
            )}
            <button
              type="submit"
              className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
            >
              Login
            </button>
             <p className="text-xs text-gray-500 mt-4 text-center">
              Access restricted to authorized personnel.
            </p>
          </form>
        </div>
      </div>
    );
  }

  // Render admin panel if authenticated
  return (
    <div>
      {/* Admin header */}
      <section className="bg-gray-800 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Blog Admin Panel</h1>
          <div className="flex items-center space-x-4">
            <Link to="/blog" className="hover:underline text-sm">
              View Public Blog
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </section>

      {/* Main admin content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Admin controls (Create button) - Only show in list view */}
          {view === 'list' && (
            <div className="mb-8 flex justify-between items-center">
              <button
                onClick={() => {
                  setEditingPost(null); // Ensure no post is being edited when creating new
                  setView('editor');
                }}
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
              >
                + Create New Post
              </button>
              
              <span className="text-sm text-gray-600">
                {blogPosts.length} posts
              </span>
            </div>
          )}

          {/* Editor or post list */}
          {view === 'editor' ? (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">
                {editingPost ? 'Edit Post' : 'Create New Post'}
              </h2>
              <BlogEditor 
                onSave={handleSavePostInternal} 
                onCancel={() => {
                  setView('list');
                  setEditingPost(null);
                }}
                initialPost={editingPost}
              />
            </div>
          ) : (
            <>
              {/* Post list with edit/delete controls */}
              {blogPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts.map(post => (
                    <BlogPostCard 
                      key={post.id} 
                      post={post} 
                      isAdmin={true} // Pass isAdmin=true to show controls
                      onEdit={handleEditPost}
                      onDelete={handleDeletePostInternal} // Use internal handler with confirmation
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">No blog posts yet.</p>
                  <button
                    onClick={() => setView('editor')}
                    className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition"
                  >
                    Create Your First Post
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

// Main Blog component that handles routing and state
export const Blog = () => {
  // Example blog posts data (consider fetching from an API or CMS in a real app)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    // Load posts from localStorage on initial render
    try {
      const savedPosts = localStorage.getItem('blogPosts');
      if (savedPosts) {
        console.log('Loaded blog posts from localStorage.');
        return JSON.parse(savedPosts);
      } else {
         console.log('No posts found in localStorage, using default.');
         // Default posts if nothing in localStorage
         return [
            {
              id: '1',
              title: 'Celebrating 47,000 Trees Planted Worldwide',
              excerpt: 'A milestone achievement for our community as we surpass 47,000 trees planted across the globe.',
              content: `# Celebrating 47,000 Trees Planted Worldwide\n\nWe are thrilled to announce... (content truncated for brevity)`, // Keep content short for example
              author: 'The #MonthlyEarthDay Team',
              date: 'May 15, 2025',
              category: 'News',
              tags: ['trees', 'milestone', 'global impact']
            },
            {
              id: '2',
              title: 'Join Our Next Beach Cleanup Event',
              excerpt: 'Help us remove plastic waste from coastal areas in our upcoming international cleanup day.',
              content: `# Join Our Next Beach Cleanup Event\n\nThe #MonthlyEarthDay movement is organizing... (content truncated for brevity)`, // Keep content short for example
              author: 'Beach Cleanup Coordination Team',
              date: 'May 10, 2025',
              category: 'Events',
              tags: ['beach cleanup', 'ocean', 'plastic pollution', 'volunteer']
            }
          ];
      }
    } catch (error) {
      console.error('Error loading posts from localStorage:', error);
      return []; // Return empty array on error
    }
  });

  // Save posts to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
      console.log('Saved blog posts to localStorage.');
    } catch (error) {
      console.error('Error saving posts to localStorage:', error);
    }
  }, [blogPosts]);

  // Function to save a new post or update an existing one
  const handleSavePost = (postData: Omit<BlogPost, 'id' | 'date'>, editingId?: string) => {
    if (editingId) {
      // Update existing post
      setBlogPosts(posts => 
        posts.map(post => 
          post.id === editingId 
            ? { 
                ...post, // Keep original id and date
                ...postData, // Update other fields
              } 
            : post
        )
      );
      console.log(`Updated post with id: ${editingId}`);
    } else {
      // Create new post
      const newPost: BlogPost = {
        ...postData,
        id: Date.now().toString(), // Simple unique ID
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      };
      setBlogPosts(posts => [newPost, ...posts]); // Add new post to the beginning
      console.log(`Created new post with id: ${newPost.id}`);
    }
  };

  // Function to delete a post
  const handleDeletePost = (postId: string) => {
    setBlogPosts(posts => posts.filter(post => post.id !== postId));
    console.log(`Deleted post with id: ${postId}`);
  };

  return (
    <Routes>
      {/* Admin Route */}
      <Route 
        path="/admin" 
        element={
          <AdminBlog 
            blogPosts={blogPosts} 
            onSavePost={handleSavePost} 
            onDeletePost={handleDeletePost} 
          />
        } 
      />
      {/* Single Post Detail Route */}
      <Route 
        path="/:postId" 
        element={<BlogPostDetail posts={blogPosts} />} 
      />
      {/* Public Blog List Route (Default) */}
      <Route 
        path="/" 
        element={<PublicBlog blogPosts={blogPosts} />} 
      />
    </Routes>
  );
};
