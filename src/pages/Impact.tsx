import { BarChartProps, PieChartProps, SuccessStoryProps, DownloadDocumentProps } from '../types';

// Componente para exibir gráfico de barras
const BarChart = ({ title, data }: BarChartProps) => {
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <h3 className="text-center mb-2">{title}</h3>
      <div className="flex items-end h-64 gap-8 mt-4 mb-6">
        {data.map((item, index: number) => {
          const height = (item.value / maxValue) * 100;
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                className="w-full bg-green-600 rounded-t-md" 
                style={{ height: `${height}%` }}
              ></div>
              <span className="mt-2">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Componente para exibir gráfico de pizza
const PieChart = ({ title, segments }: PieChartProps) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <h3 className="text-center mb-2">{title}</h3>
      <div className="flex justify-center my-4">
        <div className="w-48 h-48 rounded-full bg-gray-200 relative overflow-hidden">
          {/* Simplificação visual do gráfico de pizza */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-green-600"></div>
          <div className="absolute top-0 right-0 w-1/4 h-1/2 bg-blue-600"></div>
          <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-amber-700"></div>
        </div>
      </div>
      <div className="mt-4">
        {segments.map((segment, index: number) => (
          <div key={index} className="flex items-center mb-2">
            <div className={`w-4 h-4 ${segment.color} mr-2`}></div>
            <span>{segment.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Componente para exibir mapa de impacto
const ImpactMap = () => {
  return (
    <div className="border border-gray-300 p-4 rounded-md bg-blue-100 h-80 relative">
      <h3 className="text-center mb-2">Global Impact Map</h3>
      {/* Pontos representando locais de impacto */}
      {[...Array(10)].map((_, index) => {
        const left = Math.random() * 90 + 5;
        const top = Math.random() * 70 + 15;
        return (
          <div 
            key={index} 
            className="absolute w-3 h-3 bg-primary rounded-full"
            style={{ left: `${left}%`, top: `${top}%` }}
          ></div>
        );
      })}
    </div>
  );
};

// Componente para exibir histórias de sucesso
const SuccessStory = ({ title, content }: SuccessStoryProps) => {
  return (
    <div className="border border-gray-300 p-6 rounded-md mb-4">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

// Componente para exibir documentos para download
const DownloadDocument = ({ title, icon }: DownloadDocumentProps) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md flex flex-col items-center">
      <span className="text-4xl mb-2">{icon}</span>
      <h4 className="font-bold mb-1">{title}</h4>
      <a href="#" className="text-blue-600 hover:underline">Download PDF</a>
    </div>
  );
};

export const Impact = () => {
  // Dados que podem ser facilmente editados pelo usuário
  const yearlyTreesData = [
    { label: '2022', value: 5000 },
    { label: '2023', value: 12000 },
    { label: '2024', value: 18000 },
    { label: '2025', value: 12000 } // Current year
  ];
  
  const activitySegments = [
    { label: 'Tree Planting', color: 'bg-primary' },
    { label: 'Beach Cleanups', color: 'bg-secondary' },
    { label: 'Environmental Education', color: 'bg-secondary-teal' }
  ];
  
  const successStories = [
    {
      title: 'Riparian Forest Recovery in Minas Gerais',
      content: 'In partnership with local communities, we managed to plant more than 5,000 native trees along an important river for the region, helping to restore the ecosystem and protect water resources.'
    },
    {
      title: 'Beach Cleanup in Santa Catarina',
      content: 'We mobilized more than 100 volunteers for a cleanup action that removed more than 2 tons of waste from a beach important for sea turtle nesting.'
    }
  ];
  
  const documents = [
    { title: 'Annual Report', icon: '📄' },
    { title: 'Methodology', icon: '📊' },
    { title: 'Social Impact', icon: '👥' },
    { title: 'Raw Data', icon: '📈' }
  ];

  return (
    <div>
      {/* Título da página */}
      <section className="bg-light-section py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Our Impact</h1>
        </div>
      </section>

      {/* Métricas de impacto */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6">Impact Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BarChart 
              title="Trees Planted by Year" 
              data={yearlyTreesData} 
            />
            <PieChart 
              title="Activity Distribution" 
              segments={activitySegments} 
            />
          </div>
        </div>
      </section>

      {/* Mapa de impacto */}
      <section className="bg-gradient-section py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6">Global Impact Map</h2>
          <ImpactMap />
        </div>
      </section>

      {/* Histórias de sucesso */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6">Success Stories</h2>
          {successStories.map((story, index) => (
            <SuccessStory key={index} {...story} />
          ))}
        </div>
      </section>

      {/* Relatórios e documentação */}
      <section className="bg-light-section py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6">Reports and Documentation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {documents.map((doc, index) => (
              <DownloadDocument key={index} {...doc} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
