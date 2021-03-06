import CoreContract from "./core-contract";

export default abstract class DeleteContractTest extends CoreContract {
  async describeIt() {
    await this.describe(done => {
      this.request
        .delete(this.url)
        .query(this.query)
        .send(this.fill)
        .type("application/json")
        .set("Authorization", `Bearer ${this.tokens.access_token}`)
        .end(async (err, res) => {
          if (err) return done(err);
          this.validateStatusCode(res.status).validateResJson(res.body);
          done();
        });
    });
  }

  protected getMethod(): string {
    return "Delete";
  }
}
