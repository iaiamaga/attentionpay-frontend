export interface SupportTicket {
  id: string;
  userId: string;
  subject: string;
  status: 'open' | 'pending' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}

export interface SupportMessage {
  id: string;
  ticketId: string;
  from: 'user' | 'support';
  content: string;
  createdAt: Date;
}

export interface CreateTicketDTO {
  userId: string;
  subject: string;
  initialMessage: string;
}