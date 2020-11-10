import Queue from "./queue";
import { factorial } from "../util/math_operations";

class MMsK extends Queue {
  constructor(lambda, mu, s, k, cw, cs) {
    super(lambda, mu, s, k, cw, cs);
  }

  p0() {
    let summation1 = 0;
    for (let i = 0; i <= this.s; i++) {
      let divisor = Math.pow(this.lambda / this.mu, i);
      let dividend = factorial(i);
      summation1 += divisor / dividend;
    }

    let mul = Math.pow(this.lambda / this.mu, this.s) / factorial(this.s);
    let summation2 = 0;
    for (let i = this.s + 1; i <= this.k; i++) {
      summation2 += Math.pow(this.rho(), i - this.s);
    }

    let op_total = summation1 + mul * summation2;
    return 1 / op_total;
  }

  pn(n) {
    let divisor = Math.pow(this.lambda / this.mu, n);
    let dividend =
      n <= this.s
        ? factorial(n)
        : factorial(this.s) * Math.pow(this.s, n - this.s);
    return (divisor / dividend) * this.p0();
  }

  l() {
    return this.lambda_e() * this.w();
  }

  lq() {
    let divisor =
      this.p0() * Math.pow(this.lambda / this.mu, this.s) * this.rho();
    let dividend = factorial(this.s) * Math.pow(1 - this.rho(), 2);
    let sub = this.k - this.s;
    let r_pow = Math.pow(this.rho(), sub);
    let mul = 1 - r_pow - sub * r_pow * (1 - this.rho());
    return (divisor / dividend) * mul;
  }

  w() {
    return this.wq() + 1 / this.mu;
  }

  wq() {
    return this.lq() / this.lambda_e();
  }

  lambda_e() {
    return this.lambda * (1 - this.pn(this.k));
  }
}

export default MMsK;
