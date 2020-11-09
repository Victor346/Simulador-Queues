import Queue from './queue';
import { factorial } from '../util/math_operations';

class MMs extends Queue {
    constructor (lambda, mu, s, cw, cs) {
        super(lambda, mu, s, Math.max, cw, cs);
    }

    p0() {
        let summation = 0;
        for(let i=0; i<(this.s-1); i++) {
            let divisor = Math.pow(this.lambda / this.mu, i);
            let dividend = factorial(i);
            summation += (divisor / dividend);
        }

        let mul1 = Math.pow(this.lambda / this.mu, this.s) / factorial(this.s);
        let mul2 = 1 / (1 - this.rho());
        let op_total = summation + mul1 * mul2;
        let total = 1 / op_total;
        return total;
    }

    pn(n) {
        let divisor = Math.pow(this.lambda / this.mu, n);
        let dividend = (n <= this.s) ? factorial(n) : factorial(n) * Math.pow(this.s, n-this.s);
        let total = divisor / dividend * this.p0();
        return total;
    }

    l() {
        return this.lq() + (this.lambda / this.mu);
    }

    lq() {
        let divisor = this.p0() * Math.pow(this.lambda / this.mu, this.s) * this.rho();
        let dividend = factorial(this.s) * Math.pow((1 - this.rho), 2);
        let total = divisor / dividend;
        return total;
    }

    w() {
        return this.wq() + (1 / this.mu);
    }

    wq() {
        return this.lq() / this.lambda;
    }
}

export default MMs;