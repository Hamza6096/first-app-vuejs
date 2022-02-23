let vm = new Vue({
    el: '#app',
    data: {
        nom: 'nouali',
        prenom: 'hamza',
        creationDate: null,
        birthday: new Date('1996-09-09'),
        showStory: false,
        story: ' ipsum dolor sit amet, consectetur adipisicing elit. Nulla, labore voluptatibus deleniti rem, molestiae et neque qui sunt aperiam reprehenderit magnam maxime laboriosam illo, placeat saepe quidem ullam',
        voyages: ["maroc", "portugal", "roumanie"],
        creationTime: null,
        date: null,
        prix: null,
        quant: null,
        ttc: null,
        ht: null,
        tva: null


    },
    created: function () {
        let date = new Date();

        this.creationDate = date.toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        })

        let time = new Date();
        this.creationTime = time.toLocaleTimeString("fr-FR", {});

        setInterval(() => {
            this.creationTime = new Date().toLocaleTimeString("fr-FR", {})
        }, 1000);

    },


    computed: {
        age: function () {
            let today = new Date();
            let diff = today.getTime() - this.birthday.getTime();
            return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        },

        nomComplet: function () {
            return `${this.prenom} ${this.nom.toUpperCase()}`;
        }
    },


    filters: {
        capitalize: function (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        },

        excerpt: function (value) {
            if (value.length > 10) {
                return value = value.substring(0, 10) + "..." + "Lire la suite"
            }
        }
    },


    methods: {
        sommeHt: function () {
            this.ht = (this.prix * this.quant)
        },

        sommeTva: function () {
            total = this.prix * this.quant;
            this.ttc = (total * this.tva) / 100 + total;
        }
    }


});
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: 
    '<button v-on:click="count++">Vous m\'avez cliqué {{ count }} fois.</button> '

  }),
    new Vue({ el: '#components-demo' })