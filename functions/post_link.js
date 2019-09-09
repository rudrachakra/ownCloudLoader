exports.default = (url, lead_id) => {
  
  const close_task =  (id) => {
    request.post({url:'##url##', form: [id, {'STATUS': '5'}]},
        
    function(err,httpResponse,body){ 
      console.log('Закрытие задачи №' + id);   
      process.exit(1);
    });            
  }
  
  const post_comments = (tasks) => {

    if(tasks.length !== 0){
      tasks.forEach((item, i, arr) => {    
        request.post({url:'##url##', form: [item['id'], {'POST_MESSAGE': 'Ссылка на файлы заказа ' + url}]},
        
        function(err,httpResponse,body){ 
          console.log('Коммент в задачу №' + item['id']);   
            if(!err){
              close_task(item['id']);  
            }

        });  
      
      });

      access = true;
     

    }

  }

  const get_tasks = (lead) => {
    request.post({url:'##url##', form: {
        
       filter: {'TAG': 'lead ' + lead_id},
       select: ['ID'], 

      }},function(err,httpResponse,body){ 
        
        let resp = JSON.parse(body);

        if(!err){
          post_comments(resp['result']['tasks']);   
        }else{
          access = true;
        }
      }
    );  
  }

  request.post({url:'##url##', form: {
    id: lead_id,
    fields:
    { 
      "STATUS_ID": "11",  
      "UF_CRM_1555060557": url,  
    },
    params: { "REGISTER_SONET_EVENT": "Y" }		
  
    }},function(err,httpResponse,body){ 
      
        console.log(body);
        if(!err){
          get_tasks(lead_id);        
        }else{
          access = true;
        }
    }
  );
}