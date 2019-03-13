<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
<script type="text/javascript">
  // Parse the URL parameter
  function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  // Give the parameter a variable name
  var dynamicText = getParameterByName('dynamic');
   $(document).ready(function() {
    // Check if the URL parameter is 01
    if (dynamicText == '01') {
      $( "#headline").replaceWith( "<h1><strong>Headline 1</strong></span></h1>" );
    } 
    // Check if the URL parameter is 02
    else if (dynamicText == '02') {
      $( "#headline" ).replaceWith( "<h1><strong>Headline 2</strong></span></h1>" );
    } 
    // Check if the URL parmeter is empty. If empty display default a default text.
    else {
      $( "#headline" ).replaceWith( "<h1><strong>My Default Headline</strong></span></h1>" );
    }
  });
</script>