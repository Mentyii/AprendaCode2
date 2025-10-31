import LanguageEntity from "../entities/LanguageEntity";
const SEED = [
  { id: "lang_js", slug: "javascript", nome: "JavaScript"},
  { id: "lang_sql", slug: "sql",        nome: "SQL"},
  { id: "lang_py", slug: "python",     nome: "Python"},
  { id: "lang_c",  slug: "c",          nome: "C"},
  { id: "lang_html", slug: "html",     nome: "HTML" },
  { id: "lang_css",  slug: "css",      nome: "CSS" },
  { id: "lang_java", slug: "java",     nome: "Java"},
];
export default {
  list() { return SEED.map(LanguageEntity.fromDto); },
  getBySlug(slug) {
    const dto = SEED.find(l => l.slug === String(slug).toLowerCase());
    return dto ? LanguageEntity.fromDto(dto) : null;
  }
};