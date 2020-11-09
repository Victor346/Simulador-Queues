import Queue from './queue';

class MM1 extends Queue {
    constructor (lambda, mu, cw, cs) {
        super(lambda, mu, 1, Math.max, cw, cs);
    }

    p0() {
        return 1 - this.rho();
    }

    pn(n) {
        return Math.pow(this.rho(), n) * this.p0();
    }

    l() {
        return this.lambda / (this.mu - this.lambda);
    }

    lq() {
        let divisor = Math.pow(this.lambda, 2);
        let dividend = this.mu * (this.mu - this.lambda);
        let total = divisor / dividend;
        return total;
    }

    w() {
        return this.l() / this.lambda;
    }

    wq() {
        return this.lq() / this.lambda;
    }
}

export default MM1;