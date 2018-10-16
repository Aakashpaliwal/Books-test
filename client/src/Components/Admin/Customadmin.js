import React, { Component } from 'react';
import $ from 'jquery'
// set content on click
$('.button').click(function(e) {
    e.preventDefault();
    setContent($(this));
});

// set content on load
$('.button.active').length && setContent($('.button.active'));

function setContent($el) {
    $('.button').removeClass('active');
    $('.container').hide();
    
    $el.addClass('active');
    $($el.data('rel')).show();
}

class Customadmin extends Component {
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Customadmin;