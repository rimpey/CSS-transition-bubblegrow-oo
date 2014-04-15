$(document).ready(function () {

    //Create a JavaScript class
    function Bubble(text, width, x, y, side, colour) {
        this.width = width;
        this.y = y;
        //either left or right
        this.side = side;
        this.x = x;
        this.colour = colour;

        //set css properties
        var css = { top: y + 'px', 'background-color': colour, 'color': '#FFFFFF' };
        css[side] = x + 'px';

        //create div element with - text set - css properties applied and - css class added
        this.$bubble = $('<div/>')
            .html(text)
            .css(css)
            .addClass('bubble');

        //prepend adds element as first child of body
        $('body').prepend(this.$bubble);
    }

    //Create a method for JavaScript class
    Bubble.prototype.Draw = function () {
        var lwidth = this.width + 20;
        //'this' in the second setTimeout function no longer references the current object so saved to 'self' here
        var self = this;

        //grow the bubble
        this.$bubble.css({
            height: lwidth + 'px',
            width: lwidth + 'px',
            'line-height': (lwidth - 10) + 'px',
            'border-width': '5px',
            'font-size': '22px',
            'border-radius': (lwidth / 2) + 'px',
            opacity: 1,
            //transform is required so that the circle appears to be growing from the centre and not moving
            //as it grows - left bubble (grows top left botton right) - right bubble (grows top right bottom left) 

            //check if the side value is left if so use a minus sign with the value of half width 
            //for left (x-axis) and a minus half width for top (y-axis) - translate from original position of object
            transform: 'translate(' + (this.side === 'left' ? '-' : '') + (lwidth / 2) + 'px, -' + (lwidth / 2) + 'px)'
        });
        setTimeout(function () {
            //once bubble grows 0 to oversized shrink it to desired size
            self.$bubble.css({
                height: self.width + 'px',
                width: self.width + 'px',
                'line-height': (self.width - 10) + 'px',
                'font-size': '20px',
                'border-radius': (self.width / 2) + 'px',
                transform: 'translate(' + (self.side === 'left' ? '-' : '') + (self.width / 2) + 'px, -' + (self.width / 2) + 'px)'
            });
        }, 500);
    }
    
    /* TODO: Bubble text across two lines 
       TODO: Investigate percentage values for css transform: translate with view to make responsive */

    /*** BUBBLES ON THE LEFT ***/

    /* Level 1 Skills - width: 90 - colour: orange */
    var agile = new Bubble('Agile', 90, 270, 80, 'left', '#BE6D45');
    var maps = new Bubble('Maps', 90, 140, 130, 'left', '#BE6D45');
    var analytics = new Bubble('Analytics', 90, 240, 200, 'left', '#BE6D45');
    var videoaudio = new Bubble('Video', 90, 130, 270, 'left', '#BE7D45');
    /* level 2 Skills - width: 110 - colour: blue */
    var jscanvas = new Bubble('Canvas', 110, 190, 380, 'left', '#AD4448');
    /* level 3 Skills - width: 130 - colour: pink */
    var photoshop = new Bubble('Photoshop', 130, 320, 320, 'left', '#547EA4');

    /*** BUBBLES ON THE RIGHT ***/

    /* level 2 Skills - width: 110 - colour: blue */
    var responsive = new Bubble('Responsive', 110, 350, 80, 'right', '#AD4448');
    var bootstrap = new Bubble('Bootstrap', 110, 130, 300, 'right', '#AD4448');
    /* level 3 Skills - width: 130 - colour: pink */
    var lesssass = new Bubble('Less/SASS', 130, 210, 170, 'right', '#547EA4');
    var flexslider = new Bubble('FlexSlider', 130, 270, 320, 'right', '#547EA4');
    /* Level 1 Skills - width: 90 - colour: orange */
    var media = new Bubble('Media', 90, 340, 200, 'right', '#BE6D45');
    var seo = new Bubble('SEO', 90, 200, 430, 'right', '#BE6D45');
    var twitter = new Bubble('Twitter', 90, 390, 380, 'right', '#BE6D45');

    /*** DRAW BUBBLES LEFT ***/

    setTimeout(function () {
        agile.Draw();
        maps.Draw();
        analytics.Draw();
        videoaudio.Draw();
    }, 1000);

    setTimeout(function () {
        jscanvas.Draw();
    }, 2000);

    setTimeout(function () {
        photoshop.Draw();
    }, 3000); 

    /*** DRAW BUBBLES RIGHT ***/

    setTimeout(function () {
        lesssass.Draw();
        flexslider.Draw();
    }, 4000);

    setTimeout(function () {
       responsive.Draw(); 
       bootstrap.Draw();
    }, 5000);

    setTimeout(function () {
        media.Draw();
        seo.Draw();
        twitter.Draw();
    }, 6000); 

});

    
