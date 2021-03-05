import { OrderStatus } from "./types/OrderStatus";
import { Subjects } from "./types/Subjects";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    version: number;
    item: {
      id: string;
      price: number;
    };
  };
}

export interface OrderUpdatedEvent {
  subject: Subjects.OrderUpdated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    version: number;
    item: {
      id: string;
      price: number;
    };
  };
}

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    userId: string;
    version: number;
    item: {
      id: string;
    };
  };
}
