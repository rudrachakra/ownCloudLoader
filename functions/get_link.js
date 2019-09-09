exports.default = (folder, id) => {
  var owncloud = require('js-owncloud-client');
  var oc = new owncloud('##url##');   
    // Login
  oc.login('userit', 'edrftgyh').then(status => {
        //console.log(status);
  }).catch(error => {
        // HANDLE ERROR
  }); 
    
  oc.shares.shareFileWithLink('/' + folder).then((m) => {
    console.log('Получили линк ' + m['shareInfo']['url']);

    func('post_link')(m['shareInfo']['url'], id);
  }).catch(error => {
    access = true;
  });
}