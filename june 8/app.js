new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false
    },
    methods: {
        punch: function(){
            this.health -= 20;
            if ( this.health <= 0 ){
                this.ended = true;
            }
        },
        restart: function(){
            this.health = 100;
            this.ended = false;
        },
        punchhard: function(){
            this.health =0;
            if ( this.health <= 0 ){
                this.ended = true;
            }
        }
    },
    computed: {

    }
});
