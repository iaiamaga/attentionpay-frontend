import TimelineItem from './TimelineItem';

interface TimelineEvent {
  category: string;
  time: string;
  title: string;
  description: string;
  icon: string;
  color?: string;
  borderColor?: string;
  borderLeft?: string;
  hasButton?: boolean;
  dimmed?: boolean;
}

interface TimelineProps {
  events: TimelineEvent[];
  title?: string;
}

const Timeline = ({ events, title = 'Timeline de Eventos' }: TimelineProps) => {
  return (
    <section className="relative">
      <h3 className="text-[18px] font-semibold leading-6 text-on-surface mb-4 flex items-center gap-1">
        <span className="material-symbols-outlined text-primary">analytics</span>
        {title}
      </h3>
      <div className="relative ml-4 pl-8 border-l-2 border-white/10 space-y-6">
        {events.map((event, index) => (
          <TimelineItem key={index} {...event} />
        ))}
        
        <div className="flex justify-center py-4">
          <div className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-primary-container mx-2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;