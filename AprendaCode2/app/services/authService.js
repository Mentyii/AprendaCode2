const authService = {
  me() { return null; },
  async login(email, senha) { throw new Error("authService.login: not implemented"); },
  async logout() { return; }
};
export default authService;