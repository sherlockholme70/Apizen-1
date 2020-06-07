package com.zensar.dashboard.Apizen.services;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.zensar.dashboard.Apizen.beans.card.configurations.APIConfigurationBean;
import com.zensar.dashboard.Apizen.beans.card.configurations.HeaderBean;

@Service
public class APIRequestResponseService {

	@Autowired
	RestTemplate restTemplate;

	public String getAPIResponse(APIConfigurationBean apiConfigurationBean) {

		HashMap<String, String>headersMap=new HashMap<>();
		List<HeaderBean> headers;
		if((headers=apiConfigurationBean.getHeadersMap())!=null)
			for(HeaderBean headerBean: headers) 
				headersMap.put(headerBean.getKey(), headerBean.getValue());
		HttpHeaders httpHeaders= new HttpHeaders();
		httpHeaders.setAll(headersMap);		
		HttpEntity<String> httpEntity=new HttpEntity<>(httpHeaders);

		ResponseEntity<String> responseEntity=restTemplate.exchange(apiConfigurationBean.getUrl(),HttpMethod.GET,httpEntity,String.class);

		return responseEntity.getBody();
	}

	/*	public JsonNodeStructure parseStringToJson(String Json){
		System.out.println("Service main Method Json" +Json);
		ObjectMapper objectMapper= new ObjectMapper();
		try {
			JsonNode jsonRootNode=objectMapper.readTree(Json);
			System.out.println("JSON After coverting int read tree method" +jsonRootNode);
			wrapJson(jsonRootNode);
		} catch (IOException e) {
			System.out.println("Error");
			e.printStackTrace();
		}
		return jsonNodeStructure;
	}
	 */
	/*private void wrapJson(JsonNode jsonRootNode) {
		switch (jsonRootNode.getNodeType()) {
		case ARRAY:
			for(JsonNode jsonNode:jsonRootNode)
				wrapJson(jsonNode);
			break;
		case OBJECT:
			Iterator<String> keys=jsonRootNode.fieldNames();
			while(keys.hasNext()) 
				wrapJson(jsonRootNode.get(keys.next()));		
			break;
		default:
			System.out.println(jsonRootNode.asText());
			break;
		}
	}*/

}

/*private static HashMap print(JsonNode node) throws IOException {
        HashMap map = new HashMap();
		System.out.println("inside print method" +node);

        Iterator<Map.Entry<String, JsonNode>> fieldsIterator = node.fields();

        while (fieldsIterator.hasNext()) {
            Map.Entry<String, JsonNode> field = fieldsIterator.next();
             String key = field.getKey();
    		System.out.println("Key" +key);

             JsonNode value = field.getValue();
            if (value.isContainerNode()) {
            	System.out.println("value" +value);
                print(value);
            } else {
                map.put(key, value);
                System.out.println(map.get(key)+"@@@@@@@@@");
            }
        }
        return map;
    }*/






