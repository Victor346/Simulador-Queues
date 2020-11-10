import Queue from "./queue";

class ME1 extends Queue {
  constructor(lambda, mu, ek, std, cw, cs) {
    super(lambda, mu, 1, Math.max, cw, cs);
    this.std = std;
    this.ek = ek;
  }

  p0() {
    return 1 - this.rho();
  }

  pn(n) {
    return Math.pow(this.rho(), n) * this.p0();
  }

  l() {
    return this.lambda * this.w();
  }

  lq() {
    let mul1 = (1 + this.ek) / (2 * this.ek);
    let mul2 = Math.pow(this.lambda, 2) / (this.mu * (this.mu - this.lambda));
    return mul1 * mul2;
  }

  w() {
    return this.wq() + 1 / this.mu;
  }

  wq() {
    return this.lq() / this.lambda;
  }
}

export default ME1;
