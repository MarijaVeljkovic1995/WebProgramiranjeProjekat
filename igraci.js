export class igraci {
    constructor(name, atp, slika, godine) {
        this.name = name;
        this.atp = atp;
        this.slika = slika;
        this.godine = godine;
    }
    crtajIgraca(host) {



        let dv = document.createElement('div');
        dv.className = 'izgled';
        host.appendChild(dv);
        let igracDetalji = document.createElement('img');
        igracDetalji.setAttribute("src", this.slika);
        // igracDetalji.setAttribute("width", "304");
        // igracDetalji.setAttribute("height", "228");
        igracDetalji.setAttribute("alt", "The Pulpit Rock");
        igracDetalji.className = 'slika';
        dv.appendChild(igracDetalji);
        dv = document.createElement('div');
        dv.className = 'izgled';
        host.appendChild(dv);
        igracDetalji = document.createElement('label');
        igracDetalji.innerHTML = 'Ime: ' + this.name;
        dv.appendChild(igracDetalji);


        igracDetalji = document.createElement('label');
        igracDetalji.innerHTML = 'Godine: ' + this.godine;
        dv.appendChild(igracDetalji);


        igracDetalji = document.createElement('label');
        igracDetalji.innerHTML = 'ATP Rang: ' + this.atp;
        dv.appendChild(igracDetalji);


    }
}