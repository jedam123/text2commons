jQuery(document).ready(function($) {
    var commonMessage = '';
    var commonProperties = '';
    var prefix = $('input[name=prefix]:checked').val();
    
    $('.run').on('click', function() {
        prefix = $('input[name=prefix]:checked').val();
        commonMessage = '';
        commonProperties = '';
    
        if ($('.message').val().trim() != '') {
            var lines = $('.message').val().split('\n');
    
            for (var i = 0 ;i < lines.length; i++) {
                var trimmedLine = trimAndChange(lines[i]);
    
                if (trimmedLine != null) {
                    commonMessage += "String " + trimmedLine + '();\n';
                    commonProperties += trimmedLine + '=' + createCommonProperties(lines[i]) + '\n';
                }
            }
    
            $('.common-message').val(commonMessage);
            $('.common-properties').val(commonProperties);
        }
    });
    
    function trimAndChange(line) {
        var changedLine = line.trim().replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '_').toLowerCase();
        return changedLine.trim() == '' || changedLine.match(/[a-z]/i) == null ? null : prefix + changedLine;
    }
    
    function createCommonProperties(line) {           
        return line.trim().replace('\'', '\'\'').replace(/\ ̀| ́/g, '\'\'');
    }
});