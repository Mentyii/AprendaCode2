export default class LessonEntity {
  constructor({ id, topicId, titulo, ordem = 0, conteudo = "", exemplosCodigo = [], recursos = [] } = {}) {
    this.id = String(id ?? ""); 
    this.topicId = String(topicId ?? "");
    this.titulo = String(titulo ?? ""); 
    this.ordem = Number.isFinite(ordem) ? ordem : 0;
    this.conteudo = String(conteudo ?? ""); 
    this.exemplosCodigo = Array.isArray(exemplosCodigo) ? exemplosCodigo : [];
    this.recursos = Array.isArray(recursos) ? recursos : [];
  }
  static fromDto(dto = {}) { return new LessonEntity(dto); }
  get key() { return this.id; }
}