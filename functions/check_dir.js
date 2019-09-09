exports.default = (path, id) => {
  
  var EasyFtp = require('easy-ftp');
  var ftp = new EasyFtp();
  var config = {
    host: '##ip##',
    port: 21,
    username: '##login##',
    password: '##pass##',
    type : 'ftp'
  };
   
  ftp.connect(config);	

  
  ftp.ls(path, function(err, list){
    
    if(err) access = true;

    console.log('Файлы: ' + JSON.stringify(list));
    
    ftp.close();
    
    if(JSON.stringify(list) !== '[]'){
    
      console.log('Забираю файлы');
      access = false;
      func('get_files')(path, id);

    }else{
    
      console.log('Нет файлов, откатываюсь к статусу 8');
      
      func('no_files_error')('6', id);

    }
    

  });



}


   