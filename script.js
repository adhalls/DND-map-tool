const { createApp } = Vue
createApp({
    data() {
        return {
            message: 'Finally figured it out!',
            xCoord: "100",
            yCoord: "20",
            hover: false,
            buttonList: [
            ]
        }
    },
    methods: {
        giveCoords(event) {
            this.hover = true;
            this.xCoord = event.offsetX;
            this.yCoord = event.offsetY;
        },
        createButton(event) {
            this.buttonList.push({xPos:event.offsetX, yPos: event.offsetY})
        }
    },
    computed: {

    },
}).mount('#app')