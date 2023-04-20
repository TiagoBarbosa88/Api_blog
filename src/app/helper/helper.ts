// Classe do tamanho do titulo
export class MyComponent {
  MAX_TITLE_LENGTH = 50; // define o limite máximo de caracteres
  truncateTitle(title: string): string {
    if (title.length > this.MAX_TITLE_LENGTH) { // verifica se o título excede o limite máximo
      return title.substring(0, this.MAX_TITLE_LENGTH) + "..."; // truncar o título se exceder o limite máximo
    }
    return title;
  }
}
