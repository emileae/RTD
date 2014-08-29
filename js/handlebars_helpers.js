/* HAndlebars helpers */
        
Handlebars.registerHelper("TrueFalse", function(T_F) {
    if(T_F == "T"){
        var html = "<option value='T' selected>True</option><option value='F'>False</option>";
    }else{
        var html = "<option value='T'>True</option><option value='F' selected>False</option>"
    };
    
    return html;
});

Handlebars.registerHelper("MultChoice", function(T_F, id) {
    if(T_F == "T"){
        var html = '<input type="checkbox" id="'+id+'_C" data-option="'+id+'" checked/>Mark as Correct Answer<br/>';
    }else{
        var html = '<input type="checkbox" id="'+id+'_C" data-option="'+id+'" />Mark as Correct Answer<br/>';
    };
    
    return html;
});

Handlebars.registerHelper("JoinBox", function(option) {
    if(option == "T3O0"){
        var html = '<option value="T3O0" selected>Option 1</option><option value="T3O1">Option 2</option><option value="T3O2">Option 3</option><option value="T3O3">Option 4</option><option value="T3O4">Option 5</option><option value="T3O5">Option 6</option><option value="T3O6">Option 7</option><option value="T3O7">Option 8</option><option value="T3O8">Option 9</option><option value="T3O9">Option 10</option>';
    }else if(option == "T3O1"){
        var html = '<option value="T3O0">Option 1</option><option value="T3O1" selected>Option 2</option><option value="T3O2">Option 3</option><option value="T3O3">Option 4</option><option value="T3O4">Option 5</option><option value="T3O5">Option 6</option><option value="T3O6">Option 7</option><option value="T3O7">Option 8</option><option value="T3O8">Option 9</option><option value="T3O9">Option 10</option>';
    }else if(option == "T3O2"){
        var html = '<option value="T3O0">Option 1</option><option value="T3O1">Option 2</option><option value="T3O2" selected>Option 3</option><option value="T3O3">Option 4</option><option value="T3O4">Option 5</option><option value="T3O5">Option 6</option><option value="T3O6">Option 7</option><option value="T3O7">Option 8</option><option value="T3O8">Option 9</option><option value="T3O9">Option 10</option>';
    }else if(option == "T3O3"){
        var html = '<option value="T3O0">Option 1</option><option value="T3O1">Option 2</option><option value="T3O2">Option 3</option><option value="T3O3" selected>Option 4</option><option value="T3O4">Option 5</option><option value="T3O5">Option 6</option><option value="T3O6">Option 7</option><option value="T3O7">Option 8</option><option value="T3O8">Option 9</option><option value="T3O9">Option 10</option>';
    }else if(option == "T3O4"){
        var html = '<option value="T3O0">Option 1</option><option value="T3O1">Option 2</option><option value="T3O2">Option 3</option><option value="T3O3">Option 4</option><option value="T3O4" selected>Option 5</option><option value="T3O5">Option 6</option><option value="T3O6">Option 7</option><option value="T3O7">Option 8</option><option value="T3O8">Option 9</option><option value="T3O9">Option 10</option>';
    }else if(option == "T3O5"){
        var html = '<option value="T3O0">Option 1</option><option value="T3O1">Option 2</option><option value="T3O2">Option 3</option><option value="T3O3">Option 4</option><option value="T3O4">Option 5</option><option value="T3O5" selected>Option 6</option><option value="T3O6">Option 7</option><option value="T3O7">Option 8</option><option value="T3O8">Option 9</option><option value="T3O9">Option 10</option>';
    }else if(option == "T3O6"){
        var html = '<option value="T3O0">Option 1</option><option value="T3O1">Option 2</option><option value="T3O2">Option 3</option><option value="T3O3">Option 4</option><option value="T3O4">Option 5</option><option value="T3O5">Option 6</option><option value="T3O6" selected>Option 7</option><option value="T3O7">Option 8</option><option value="T3O8">Option 9</option><option value="T3O9">Option 10</option>';
    }else if(option == "T3O7"){
        var html = '<option value="T3O0">Option 1</option><option value="T3O1">Option 2</option><option value="T3O2">Option 3</option><option value="T3O3">Option 4</option><option value="T3O4">Option 5</option><option value="T3O5">Option 6</option><option value="T3O6">Option 7</option><option value="T3O7" selected>Option 8</option><option value="T3O8">Option 9</option><option value="T3O9">Option 10</option>';
    }else if(option == "T3O8"){
        var html = '<option value="T3O0">Option 1</option><option value="T3O1">Option 2</option><option value="T3O2">Option 3</option><option value="T3O3">Option 4</option><option value="T3O4">Option 5</option><option value="T3O5">Option 6</option><option value="T3O6">Option 7</option><option value="T3O7">Option 8</option><option value="T3O8" selected>Option 9</option><option value="T3O9">Option 10</option>';
    }else if(option == "T3O9"){
        var html = '<option value="T3O0">Option 1</option><option value="T3O1">Option 2</option><option value="T3O2">Option 3</option><option value="T3O3">Option 4</option><option value="T3O4">Option 5</option><option value="T3O5">Option 6</option><option value="T3O6">Option 7</option><option value="T3O7">Option 8</option><option value="T3O8">Option 9</option><option value="T3O9" selected>Option 10</option>';
    };
    
    return html;
});
Handlebars.registerHelper("index_plus", function(indx) {
    
    indx += 1;
    
    return indx;
});
Handlebars.registerHelper('setIndex', function(value){
    this.index = Number(value);
});

Handlebars.registerHelper("get_letter", function(indx) {
    var letter = ""
    if(indx == 0){
        letter = "A"
    }else if(indx == 1){
        letter = "B"
    }else if(indx == 2){
        letter = "C"
    }else if(indx == 3){
        letter = "D"
    };
    
    return letter;
});

Handlebars.registerHelper('is_length', function(indx, indx_array){
    //console.log(indx_array[indx]["o"]);
    if( indx_array[indx]["o"].length > 0 ){
        return indx_array[indx]
    }else{
        return false
    };
});

Handlebars.registerHelper('ric_check', function(ric){
    if ( ric == "T" ){
        return "checked"
    }else{
        return ""
    };
});







