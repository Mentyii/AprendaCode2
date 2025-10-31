export default class QuizResultEntity {
  constructor({ id, quizId, userId, acertos = 0, total = 0, percentual = null, realizadoEm = null } = {}) {
    this.id = String(id ?? ""); 
    this.quizId = String(quizId ?? ""); 
    this.userId = String(userId ?? "");
    this.acertos = Number.isFinite(acertos) ? acertos : 0; 
    this.total = Number.isFinite(total) ? total : 0;
    const perc = percentual ?? (this.total > 0 ? Math.round((this.acertos / this.total) * 100) : 0);
    this.percentual = Number.isFinite(perc) ? perc : 0; 
    this.realizadoEm = realizadoEm ? new Date(realizadoEm) : new Date();
  }
  static fromDto(dto = {}) { return new QuizResultEntity(dto); }
  get key() { return this.id; }
}