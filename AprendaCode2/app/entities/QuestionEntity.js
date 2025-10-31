export default class QuestionEntity {
  constructor({ id, quizId, enunciado, opcoes = [], corretaIndex = 0, explicacao = "", dificuldade = "medio" } = {}) {
    this.id = String(id ?? ""); this.quizId = String(quizId ?? "");
    this.enunciado = String(enunciado ?? ""); this.opcoes = Array.isArray(opcoes) ? opcoes : [];
    this.corretaIndex = Number.isInteger(corretaIndex) ? corretaIndex : 0;
    this.explicacao = String(explicacao ?? ""); this.dificuldade = String(dificuldade ?? "medio");
    if (this.opcoes.length < 2) throw new Error("QuestionEntity: opcoes deve ter pelo menos 2 itens.");
    if (this.corretaIndex < 0 || this.corretaIndex >= this.opcoes.length) throw new Error("QuestionEntity: corretaIndex inválido.");
  }
  static fromDto(dto = {}) { return new QuestionEntity(dto); }
  get key() { return this.id; }
}