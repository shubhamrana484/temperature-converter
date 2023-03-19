 var celi = document.getElementById("celi");
      var fahr = document.getElementById("fahr");
      celi.addEventListener("input", function () {
        let c = this.value;
        let f = (c * 9) / 5 + 32;
        fahr.value = f;
        if (!Number.isInteger(f)) {
          f = f.tofixed(4);
        }
      });
      fahr.addEventListener("input", function () {
        let f = this.value;
        let c = ((f - 32) * 5) / 9;
        celi.value = c;
        if (!Number.isInteger(c)) {
          c = c.tofixed(4);
        }
      });