import { igraci } from './igraci.js';
export class mec {
    constructor(lokacija = 'NN', vreme = 'CET 0000', igracA, igracB, rezultat, gotov) {
        this.lokacija = lokacija;
        this.vreme = vreme;
        this.igracA = igracA;
        this.igracB = igracB;
        this.rezultat = rezultat.split(', ');
        this.setA = parseInt(this.rezultat[0][0]);
        this.setB = parseInt(this.rezultat[0][4]);
        this.poeniA = 0;
        this.poeniB = 0;
        this.kontejner;
        this.gotov = gotov;
    }

    crtaj(host) {
            //console.log(this.setA, this.setB);
            this.kontejner = document.createElement('div');
            this.kontejner.className = 'kontejner';
            host.appendChild(this.kontejner);

            let dv = document.createElement('div');
            dv.className = 'gore';
            this.kontejner.appendChild(dv);

            let lab = document.createElement('label');
            lab.innerHTML = "Lokacija " + this.lokacija;
            dv.appendChild(lab);

            lab = document.createElement('label');
            lab.innerHTML = "Vreme " + this.vreme;
            dv.appendChild(lab);


            dv = document.createElement('div');
            dv.className = 'dole';
            this.kontejner.appendChild(dv);

            let igrac = document.createElement('div');
            igrac.className = 'igrac';
            dv.appendChild(igrac);

            this.igracA.crtajIgraca(igrac);

            let mech = document.createElement('div');
            mech.className = 'mech';
            dv.appendChild(mech);

            igrac = document.createElement('div');
            igrac.className = 'igrac';
            dv.appendChild(igrac);

            this.igracB.crtajIgraca(igrac);

            dv = document.createElement('div');
            dv.className = 'rez';
            mech.appendChild(dv);

            let dets = document.createElement('label');
            dets.innerHTML = "Rezultat:";
            dv.appendChild(dets);

            let rezSet = document.createElement('label');
            rezSet.innerHTML = this.rezultat[0];
            dv.appendChild(rezSet);

            let p = document.createElement('label');
            if (this.rezultat[1] == "-") { p.innerHTML = ""; } else if (this.rezultat[2] == "-") {
                p.innerHTML = "(" + this.rezultat[1] + ")";
            } else {
                p.innerHTML = "(" + this.rezultat[1] + "), " + "(" + this.rezultat[2] + ")";
            }
            dv.appendChild(p);

            dv = document.createElement('div');
            dv.className = 'poeni';
            mech.appendChild(dv);


            dets = document.createElement('label');
            dets.innerHTML = 'Poeni:';
            dv.appendChild(dets);

            let pts = document.createElement('label');
            if (!this.gotov)
                pts.innerHTML = this.poeniA + ' - ' + this.poeniB;
            else
                pts.innerHTML = '- - -';
            dv.appendChild(pts);

            dets = document.createElement('div');
            dets.className = 'btn';
            dv.appendChild(dets);

            let btnA = document.createElement('button');
            btnA.innerHTML = '+';
            btnA.onclick = () => {
                this.poeniA++;
                pts.innerHTML = this.poeniA + ' - ' + this.poeniB;
                if (this.poeniA == 6) {
                    this.setA++;
                    if (p.innerHTML != "") p.innerHTML += ", ";
                    p.innerHTML += "(" + this.poeniA + " - " + this.poeniB + ")";
                    this.poeniA = 0;
                    this.poeniB = 0;
                    rezSet.innerHTML = this.setA + ' - ' + this.setB;
                    if (this.setA + this.setB == 2) {
                        pts.innerHTML = '- - -';
                        alert('Mec je zavrsen.');
                        btnA.setAttribute("disabled", "disabled");
                        btnB.setAttribute("disabled", "disabled");
                    } else {
                        pts.innerHTML = '0 - 0';
                    }
                }
            }
            dets.appendChild(btnA);

            let btnB = document.createElement('button');
            btnB.innerHTML = '+';

            btnB.onclick = () => {
                this.poeniB++;
                pts.innerHTML = this.poeniA + ' - ' + this.poeniB;
                if (this.poeniB == 6) {
                    this.setB++;
                    if (p.innerHTML != "") p.innerHTML += ", ";
                    p.innerHTML += "(" + this.poeniA + " - " + this.poeniB + ")";
                    this.poeniA = 0;
                    this.poeniB = 0;
                    rezSet.innerHTML = this.setA + ' - ' + this.setB;
                    if (this.setA + this.setB == 2) {
                        pts.innerHTML = '- - -';
                        alert('Mec je zavrsen.');
                        btnB.setAttribute("disabled", "disabled");
                        btnA.setAttribute("disabled", "disabled");
                    } else {
                        pts.innerHTML = '0 - 0';
                    }
                }
            }
            dets.appendChild(btnB);
        }
        // dodajpoene(poen1, poen2, pts, rezSet) {
        //     poen1++;
        //     pts.innerHTML = poen1 + ' - ' + poen2;
        //     if (poen1 == 6) {
        //         this.setA++;
        //         if (p.innerHTML != "") p.innerHTML += ", ";
        //         p.innerHTML += "(" + poen1 + " - " + poen2 + ")";
        //         poen1 = 0;
        //         poen2 = 0;
        //         rezSet.innerHTML = this.setA + ' - ' + this.setB;
        //         if (this.setA + this.setB == 2) {
        //             pts.innerHTML = '- - -';
        //             alert('Mec je zavrsen.');
        //             btnA.setAttribute("disabled", "disabled");
        //             btnB.setAttribute("disabled", "disabled");
        //         } else {
        //             pts.innerHTML = '0 - 0';
        //         }
        //     }
        // }
}