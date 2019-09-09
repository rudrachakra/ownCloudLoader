  exports.default = (path, id) => {
  
 
  let files = "##folder##";

  let dir = files + func('dirname')(path);

/* скачивается файл на 1.17 */
  const copier = (p, f) => {

    const fs = require("fs");

    const get_type = (name) => {    
      fs.stat(dir + '/' + name, (err, stats) => {
          
        if(stats.isDirectory()){
          fs.unlink(dir + '/' + name + '/Thumbs.db', function(err){
            if (err) {
              console.log(err);
            } else {
              console.log("Файл удалён");
            }
          });
        }
      });
    }



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
      
      let filelist = list.map(item => {
        return path + '/' + item['name'];
      }).filter(val => {
        if(val !== path + '/' + 'Thumbs.db') return true;
      });
      
     
      
      ftp.download(filelist, f + func('dirname')(path) + '/', function(err){
        if(!err){
          console.log('Загружаю файлы... на 1.17');
          ftp.close();


          fs.readdir(dir, function(err, items) {
            console.log(err);
            for (var i=0; i<items.length; i++) {
              
              get_type(items[i]);
              
            }

            func('uploader')(dir, id);

          });

          
        }else{
          access = true;
        }
      });	
      

    });
   
  }

  copier(path, files);
  
}

