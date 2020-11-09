class Queue {
  constructor(lambda, mu, s, k, cw, cs) {
    this.lambda = lambda;
    this.mu = mu;
    this.s = s;
    this.k = k;
    this.cw = cw;
    this.cs = cs;
  }

  lq() {}

  rho() {
    return this.lambda / (this.s * this.mu);
  }

  ct() {
    return this.lq() * this.cw + this.s * this.cs;
  }
}

export default Queue;
