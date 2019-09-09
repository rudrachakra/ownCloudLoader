const get_lead = (id) => {
  request.post({url:'##url##', form: {id: id}}, (err, resp, body) => {   
    if(err) access = true;   

    let json = JSON.parse(resp['body']);

    if(json['result']['STATUS_ID'] == '10' && access){

      console.log('Есть доступ, идем проверять папку');
      func('check_dir')(json['result']['UF_CRM_1547631168'], id);
      

    }
    
    if(json['result']['STATUS_ID'] == '10' && !access) {
      
      console.log('Доступа нет, откатываемся');
      func('locker')(json['result']['ID']);

    }

  });
}

exports.default = get_lead;