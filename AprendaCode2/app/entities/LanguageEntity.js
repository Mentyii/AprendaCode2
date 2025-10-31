export default class LanguageEntity {
  constructor({ id, slug, nome, icone = null,} = {}) {
    this.id = String(id ?? ""); 
    this.slug = String(slug ?? "").toLowerCase();
    this.nome = String(nome ?? ""); 
    this.icone = icone;
  }
  static fromDto(dto = {}) { return new LanguageEntity(dto); }
  get key() { return this.id; }
}