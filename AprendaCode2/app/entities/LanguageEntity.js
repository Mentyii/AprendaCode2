export default class LanguageEntity {
  constructor({ id, slug, nome, icone = null, corPrimaria = null, descricaoCurta = "" } = {}) {
    this.id = String(id ?? ""); this.slug = String(slug ?? "").toLowerCase();
    this.nome = String(nome ?? ""); this.icone = icone; this.corPrimaria = corPrimaria;
    this.descricaoCurta = String(descricaoCurta ?? "");
  }
  static fromDto(dto = {}) { return new LanguageEntity(dto); }
  get key() { return this.id; }
}