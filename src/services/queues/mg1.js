import Queue from "./queue";

class MG1 extends Queue {
  constructor(lambda, mu, std, cw, cs) {
    super(lambda, mu, 1, Math.max, cw, cs);
    this.std = std;
  }

  p0() {
    return 1 - this.rho();
  }

  pn(n) {
    return Math.pow(this.rho(), n) * this.p0();
  }

  l() {
    return this.rho() + this.lq();
  }

  lq() {
    let divisor =
      Math.pow(this.lambda, 2) * Math.pow(this.std, 2) +
      Math.pow(this.rho(), 2);
    let dividend = 2 * (1 - this.rho());
    return divisor / dividend;
  }

  w() {
    return this.wq() + 1 / this.mu;
  }

  wq() {
    return this.lq() / this.lambda;
  }
}

export default MG1;
