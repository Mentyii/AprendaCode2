export default class ProgressEntity {
  constructor({ id, userId, lessonId, status = "em_andamento", ultimaVisitaEm = null, tempoGastoSeg = 0 } = {}) {
    this.id = String(id ?? ""); this.userId = String(userId ?? ""); this.lessonId = String(lessonId ?? "");
    this.status = status === "concluida" ? "concluida" : "em_andamento"; this.ultimaVisitaEm = ultimaVisitaEm ? new Date(ultimaVisitaEm) : new Date();
    this.tempoGastoSeg = Number.isFinite(tempoGastoSeg) ? tempoGastoSeg : 0;
  }
  static fromDto(dto = {}) { return new ProgressEntity(dto); }
  get key() { return this.id; }
}