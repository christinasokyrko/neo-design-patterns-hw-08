import { RenderEventSubscriber } from "../interfaces/RenderEventSubscriber";
import { RenderContext } from "../interfaces/RenderContext";

export class SummaryCollector implements RenderEventSubscriber {
  private counters = {
    Section: 0,
    Paragraph: 0,
    List: 0,
  };

  update(context: RenderContext): void {
    this.counters[context.type]++;
  }

  logSummary(): void {
    console.log(`[Summary] Rendered ${this.counters.Section} sections, ${this.counters.Paragraph} paragraphs, ${this.counters.List} lists`);
  }
}