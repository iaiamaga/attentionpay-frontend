import { createContext, useContext, ReactNode, useState, useCallback } from 'react';

interface Event {
  id: string;
  title: string;
  timestamp: Date;
  score: number;
}

interface EventContextType {
  events: Event[];
  totalEvents: number;
  totalScore: number;
  todayEvents: Event[];
  todayScore: number;
  addEvent: (event: Omit<Event, 'id' | 'timestamp' | 'score'>) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

const MOCK_EVENTS: Event[] = [
  { id: '1', title: 'Login realizado', timestamp: new Date(Date.now() - 1000 * 60 * 30), score: 5 },
  { id: '2', title: 'Dashboard acessado', timestamp: new Date(Date.now() - 1000 * 60 * 60), score: 3 },
  { id: '3', title: 'Transação PIX', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), score: 10 },
  { id: '4', title: 'Carteira conectada', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), score: 8 },
  { id: '5', title: 'Verificação 2FA', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), score: 7 },
];

export function EventProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<Event[]>(MOCK_EVENTS);

  const totalEvents = events.length;
  const totalScore = events.reduce((acc, event) => acc + event.score, 0);

  const todayEvents = events.filter(event => {
    const today = new Date();
    const eventDate = new Date(event.timestamp);
    return eventDate.toDateString() === today.toDateString();
  });

  const todayScore = todayEvents.reduce((acc, event) => acc + event.score, 0);

  const addEvent = useCallback((eventData: Omit<Event, 'id' | 'timestamp' | 'score'>) => {
    const newEvent: Event = {
      ...eventData,
      id: Date.now().toString(),
      timestamp: new Date(),
      score: Math.floor(Math.random() * 10) + 1,
    };
    setEvents(prev => [newEvent, ...prev]);
  }, []);

  return (
    <EventContext.Provider
      value={{
        events,
        totalEvents,
        totalScore,
        todayEvents,
        todayScore,
        addEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
}

export default EventContext;