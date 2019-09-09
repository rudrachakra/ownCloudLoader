exports.default = (path, id) => {

  let fs = require('fs');

  let dirname = func('dirname')(path);
 
  /* удаление отосланной папки */
  const remover = (d) => {
    console.log('Удаляю файлы на 1.17');

    let exec = require('child_process').exec;
    exec('rm -Rf ' + d, () => {
      console.log('Удалена папка ' + d);
    });

  }

  var owncloud = require('js-owncloud-client');
  var oc = new owncloud('##url##');
    
  oc.login('userit', 'edrftgyh').then(status => {
        //console.log(status);
  }).catch(error => {
        // HANDLE ERROR
  });

  const putdir = () => {
    oc.files.putDirectory('/', 'files/' + dirname).then(m => {
    
      console.log('Загружаю файлы на owncloud');
      
      remover('##folder##' + dirname + '/');  

      if(m){
        func('get_link')(dirname, id)  
      }

      
      
    }).catch(error => {
      remover('##folder##' + dirname + '/');  
      access = true;
    });
  }

  oc.files.fileInfo('/' + dirname).then(
    m => {
      if(m){
        oc.files.delete('/' + dirname).then(m => {
          
          if(m){
            putdir();
          }
          
        });  
      }  
    }
  ).catch(error => {
    putdir();
  });

}