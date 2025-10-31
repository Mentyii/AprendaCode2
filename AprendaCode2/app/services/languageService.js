import LanguageEntity from "../entities/LanguageEntity";
const SEED = [
  { id: "lang_js", slug: "javascript", nome: "JavaScript", corPrimaria: "#F7DF1E" },
  { id: "lang_sql", slug: "sql",        nome: "SQL",        corPrimaria: "#00618A" },
  { id: "lang_py", slug: "python",     nome: "Python",     corPrimaria: "#3776AB" },
  { id: "lang_c",  slug: "c",          nome: "C",          corPrimaria: "#00599C" },
  { id: "lang_html", slug: "html",     nome: "HTML",       corPrimaria: "#E34F26" },
  { id: "lang_css",  slug: "css",      nome: "CSS",        corPrimaria: "#1572B6" },
  { id: "lang_java", slug: "java",     nome: "Java",       corPrimaria: "#5382A1" },
];
export default {
  list() { return SEED.map(LanguageEntity.fromDto); },
  getBySlug(slug) {
    const dto = SEED.find(l => l.slug === String(slug).toLowerCase());
    return dto ? LanguageEntity.fromDto(dto) : null;
  }
};