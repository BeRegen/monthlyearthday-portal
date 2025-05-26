import { useState, useEffect } from 'react';

interface NewsletterProps {
  variant?: 'inline' | 'block';
  title?: string;
  description?: string;
}

export const Newsletter = ({ 
  variant = 'inline',
  title = 'Stay Updated',
  description = 'Join our community and receive updates about our actions and impact'
}: NewsletterProps) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [subscribers, setSubscribers] = useState<string[]>([]);
  const [showExport, setShowExport] = useState(false);

  // Carregar inscritos do localStorage ao iniciar
  useEffect(() => {
    const savedSubscribers = localStorage.getItem('newsletter_subscribers');
    if (savedSubscribers) {
      setSubscribers(JSON.parse(savedSubscribers));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica de email
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('submitting');
    
    // Simular uma chamada de API
    setTimeout(() => {
      // Verificar se o email já está inscrito
      if (subscribers.includes(email)) {
        setStatus('error');
        setMessage('This email is already subscribed');
        return;
      }

      // Adicionar o novo email à lista
      const updatedSubscribers = [...subscribers, email];
      setSubscribers(updatedSubscribers);
      
      // Salvar no localStorage
      localStorage.setItem('newsletter_subscribers', JSON.stringify(updatedSubscribers));
      
      // Atualizar estado
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
      
      // Resetar mensagem após 5 segundos
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    }, 1000);
  };

  // Função para exportar a lista de emails
  const exportSubscribers = (format: 'csv' | 'sheets' | 'email') => {
    if (subscribers.length === 0) {
      alert('No subscribers to export');
      return;
    }

    if (format === 'csv') {
      // Criar conteúdo CSV
      const csvContent = 'data:text/csv;charset=utf-8,' + 
        'Email Address\n' + 
        subscribers.join('\n');
      
      // Criar link de download
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', `monthlyearthday_subscribers_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      
      // Trigger download
      link.click();
      document.body.removeChild(link);
    } 
    else if (format === 'sheets') {
      // Abrir Google Sheets com dados pré-preenchidos
      const sheetsData = subscribers.map(email => `["${email}"]`).join(',');
      const sheetsUrl = `https://docs.google.com/spreadsheets/d/1YoVMqNzAVaOpPHMzlWVX8KZOEKkGQGSJQQkN6mxjwgU/edit#gid=0&range=A1&headers=1&data=${encodeURIComponent(`[["Email Address"],${sheetsData}]`)}`;
      window.open(sheetsUrl, '_blank');
    }
    else if (format === 'email') {
      // Abrir cliente de email com lista de inscritos
      const subject = encodeURIComponent('MonthlyEarthDay Newsletter Subscribers');
      const body = encodeURIComponent(`MonthlyEarthDay Newsletter Subscribers\n\nTotal: ${subscribers.length}\n\n${subscribers.join('\n')}`);
      window.location.href = `mailto:?subject=${subject}&body=${body}`;
    }
  };

  return (
    <div className={`newsletter-container ${variant === 'block' ? 'text-center' : ''}`}>
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {description && <p className="text-sm mb-4 opacity-80">{description}</p>}
      
      <form onSubmit={handleSubmit} className={`flex ${variant === 'block' ? 'flex-col' : 'flex-row'} gap-2`}>
        <div className="flex-grow relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full px-4 py-2 rounded-md text-gray-800"
            disabled={status === 'submitting'}
            aria-label="Email address"
          />
          {status === 'submitting' && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full"></div>
            </div>
          )}
        </div>
        
        <button
          type="submit"
          className="btn-accent text-white px-6 py-2 rounded-md font-bold hover:bg-opacity-90 transition whitespace-nowrap"
          disabled={status === 'submitting'}
        >
          SUBSCRIBE
        </button>
      </form>
      
      {message && (
        <div className={`mt-2 text-sm ${status === 'error' ? 'text-red-500' : 'text-green-500'}`}>
          {message}
        </div>
      )}
      
      <div className="mt-2 text-xs opacity-70">
        <p>We respect your privacy. Unsubscribe at any time.</p>
      </div>

      {/* Admin controls - normally would be protected by authentication */}
      <div className="mt-4">
        <button 
          onClick={() => setShowExport(!showExport)} 
          className="text-xs underline opacity-50 hover:opacity-100"
        >
          {showExport ? 'Hide admin options' : 'Admin options'}
        </button>
        
        {showExport && (
          <div className="mt-2 p-3 border border-gray-200 rounded-md bg-white text-gray-800">
            <div className="text-sm font-bold mb-2">Export {subscribers.length} subscribers:</div>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => exportSubscribers('csv')}
                className="text-xs px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
              >
                Download CSV
              </button>
              <button 
                onClick={() => exportSubscribers('sheets')}
                className="text-xs px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
              >
                Export to Google Sheets
              </button>
              <button 
                onClick={() => exportSubscribers('email')}
                className="text-xs px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
              >
                Send via Email
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
