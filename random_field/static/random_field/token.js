function generate_token(b) {
    for (var a = (Math.random() * eval("1e" + ~~(50 * Math.random() + 50))).toString(36).split(""), c = 3; c < a.length; c++) c == ~~(Math.random() * c) + 1 && a[c].match(/[a-z]/) && (a[c] = a[c].toUpperCase());
    a = a.join("");
    a = a.substr(~~(Math.random() * ~~(a.length / 3)), ~~(Math.random() * (a.length - ~~(a.length / 3 * 2) + 1)) + ~~(a.length / 3 * 2));
    if (24 > b) return b ? a.substr(a, b) : a;
    a = a.substr(a, b);
    if (a.length == b) return a;
    for (; a.length < b;) a += generate_token();
    return a.substr(0, b)
};

$(document).ready(function(){
    $('.token_button').on('click', function(e){
        e.preventDefault();
        var tokenfield = $('#'+ $(this).attr('for'));
        var length = tokenfield.attr('data-length');
        tokenfield.val(generate_token(length));
    });
});

