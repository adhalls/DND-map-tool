const { createApp } = Vue
createApp({
    data() {
        return {
            message: 'Finally figured it out!',
            getX: "100",
            getY: "20"
        }
    },

    methods: {
        giveCoords(event) {
            this.getX = event.pageX
            this.getY = event.pageY
        },
    },

    computed: {

    },

}).mount('#wrapper')