document.addEventListener('DOMContentLoaded', function () {
    var app = new Vue({
        el: '#form',
        data: {
            url: '',
            width: '',
            height: '',
            widths: [
                320,
                360,
                420,
                640,
                800,
                1024,
                1240,
                1366,
                1920,
                2048
            ],
            heights: [
                480,
                640,
                800,
                768,
                1080,
                1920
            ]
        },
        methods: {
            test: function () {
                window.open(this.url, this.url, 'titlebar=0,status=0,resizable=0,menubar=0,toolbar=0,innerWidth=' + this.width + ',innerHeight=' + this.height);
            }
        }
    })
});