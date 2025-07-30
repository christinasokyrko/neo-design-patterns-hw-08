import { BaseRenderer } from "./BaseRenderer";

export class PlainTextRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    return `${" ".repeat(level - 1)}${text.toUpperCase()}\n`;
  }

  renderParagraph(text: string): string {
    return `${text}\n`;
  }

  renderList(items: string[]): string {
    return items.map(item => `* ${item}`).join("\n") + "\n";
  }
}