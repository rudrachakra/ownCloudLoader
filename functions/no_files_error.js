exports.default = (status, id) => {

  request.post({url:'##url##', form: {
    id: id,
    fields:
    { 
      "STATUS_ID": status
    },
    params: { "REGISTER_SONET_EVENT": "Y" }		
  
    }},function(err,httpResponse,body){ 
      
        console.log(body);
        if(!err){
          console.log('Нет файлов в загружаемой папке');
          access = true;
        }
    }
  );
}