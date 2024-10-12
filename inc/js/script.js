document.addEventListener('DOMContentLoaded', function() {
    function loadHTML(url, elementId) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (this.readyState !== 4) return;
            if (this.status !== 200) return;
            document.getElementById(elementId).innerHTML = this.responseText;
        };
        xhr.send();
    }

    // Load header
    loadHTML('header.html', 'header-placeholder');

    // Load footer
    loadHTML('footer.html', 'footer-placeholder');
});