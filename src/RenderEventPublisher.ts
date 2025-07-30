import { RenderEventSubscriber } from "./interfaces/RenderEventSubscriber";
import { RenderContext } from "./interfaces/RenderContext";

export class RenderEventPublisher {
  private static subscribers: RenderEventSubscriber[] = [];

  static subscribe(subscriber: RenderEventSubscriber): void {
    this.subscribers.push(subscriber);
  }

  static unsubscribe(subscriber: RenderEventSubscriber): void {
    this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
  }

  static notify(context: RenderContext): void {
    this.subscribers.forEach(subscriber => subscriber.update(context));
  }
}

