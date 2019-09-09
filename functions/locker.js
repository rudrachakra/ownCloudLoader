exports.default = (id) => {
  
  request.post({url:'##url##', form: {
  id: id,
  fields:
  { 
    "STATUS_ID": "8",  
  },
  params: { "REGISTER_SONET_EVENT": "Y" }		
  
  }},function(err,httpResponse,body){ 
      if(!err){
        console.log('Возвращаем статус у лида №' + id);
      }
      access = true;
    }
  );
}