export default class TopicEntity {
  constructor({ id, languageId, titulo, ordem = 0 } = {}) {
    this.id = String(id ?? ""); this.languageId = String(languageId ?? "");
    this.titulo = String(titulo ?? ""); this.ordem = Number.isFinite(ordem) ? ordem : 0;
  }
  static fromDto(dto = {}) { return new TopicEntity(dto); }
  get key() { return this.id; }
}