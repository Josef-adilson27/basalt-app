interface SystemStatusProps {
  status: 'active' | 'inactive'
  className?: string;
}

const SystemStatus = ({ status = 'active',  className = '' }: SystemStatusProps) => {
  const statusConfig = {
    active: {
      color: '#00FF9D',
      bgColor: 'bg-green-800/30',
      borderColor: 'border-green-500/30',
      text: 'система активна',
      pulse: true
    },
    inactive: {
      color: '#9CA3AF',
      bgColor: 'bg-gray-800/30',
      borderColor: 'border-gray-500/30',
      text: 'система неактивна',
      pulse: false
    }
  };

  const config = statusConfig[status];

  return (

    <div className={`
      px-2  sm:min-w-[155px] h-8 sm:px-3 sm:py-1.5 
      flex items-center justify-center sm:justify-between 
      gap-1 sm:gap-2 rounded-2xl
      ${config.bgColor} ${config.borderColor} 
      border rounded
      ${className}
    `}>

      <div className={`w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full  ${config.pulse ? 'animate-pulse' : ''}`} style={{ backgroundColor: config.color }} />
      <p className="text-[10px] sm:text-sm font-medium whitespace-nowrap" style={{ color: config.color }}> {config.text} </p>
      
    </div>
  );
};

export default SystemStatus;
