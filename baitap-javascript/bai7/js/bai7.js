let x = 0.5;
let mu = 2;
let dau = -1;
let first = 1;
let second = dau * Math.pow(x, mu) / (mu * (mu - 1));
let third = first + second;
let eps = 0.001;

while (Math.abs(third - first) > eps) {
    mu += 2;
    dau = -dau;
    first = third;
    second = dau * Math.pow(x, mu) / (mu * (mu - 1) * (mu - 2));
    third = first + second;
}

document.write(first);