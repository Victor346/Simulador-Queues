import Queue from './queue';

class MG1 extends Queue {
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
        return this.rho() + this.lq();
    }

    lq() {
        let dividend = 2 * (1 - this.rho());
        let total = Math.pow(this.rho(), 2) / dividend;
        return total;
    }

    w() {
        return this.wq() + (1 / this.mu);
    }

    wq() {
        return this.lq() / this.lambda;
    }
}

export default MG1;