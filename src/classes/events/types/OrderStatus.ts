export enum Orderstatus {
  // Item not yet reserved but the order was created
  Created = "created",
  Cancelled = "cancelled",
  // Item has been reserved and is waiting to be completed or cancelled
  AwaitingPayment = "awaiting:payment",
  Completed = "completed",
}
