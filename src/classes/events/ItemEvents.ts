import { Subjects } from "./Subjects";

export interface ItemCreatedEvent {
  subject: Subjects.ItemCreated;
  data: {
    id: string;
    title: string;
    price: number;
	userId: string;
  };
}

export interface ItemUpdatedEvent {
  subject: Subjects.ItemUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
