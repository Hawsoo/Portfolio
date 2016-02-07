$(document).ready(function () {
    setTimeout(function () {
        // Get blog post SKU
        var url = window.location.pathname;
        url = url.substring(url.lastIndexOf('/') + 1);
        var filename = url.substring(0, url.indexOf('.'));
        console.log(filename);

        // Get name of working directory
        var location = window.location.href;
        var workingDir = location.substring(0, location.lastIndexOf('/'));

        // Goto blog post
        console.log(workingDir + '/../../../blog-post.html?post=' + filename);
        window.location.href = workingDir + '/../../../blog-post.html?post=' + filename;
    }, 500);
});