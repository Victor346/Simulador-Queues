import Queue from './queue';
import { factorial } from '../util/math_operations';

class ME1 extends Queue {
    constructor (lambda, mu, std, cw, cs) {
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
        return this.lambda * this.w();
    }

    lq() {
        let mul1 = (1 + this.k) / (2 * this.k);
        let mul2 = Math.pow(this.lambda, 2) / (this.mu * (this.mu - this.lambda)); 
        let total = mul1 * mul2;
        return total;
    }

    w() {
        return this.wq() + (1 / this.mu);
    }

    wq() {
        return this.lq() / this.lambda;
    }
}

export default ME1;