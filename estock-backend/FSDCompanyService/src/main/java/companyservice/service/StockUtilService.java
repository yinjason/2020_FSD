package companyservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import companyservice.entity.Stock;

@Component
public class StockUtilService {
	
	@Autowired
	private DiscoveryClient discoveryClient;

	@Autowired
	private RestTemplate restTemplate;
	
	public String getStockName(String stockCode) {
		if(stockCode ==null || stockCode.length()==0) {
			return "";
		}
		String url = "";
		boolean isSpringCloud = true;
		if(isSpringCloud) {
			// get m service server list
			List<ServiceInstance> inst = discoveryClient.getInstances("stock-service");
			ServiceInstance instance = inst.get(0);
			url = "http://" + instance.getHost() + ":" + instance.getPort() + "/stock/" + stockCode;
		} else {
			url = "http://localhost:9003/stock/" + stockCode;
		}
		System.out.println("-----calling MService url:"+url+":");
		Stock stock = restTemplate.getForObject(url, Stock.class);
		return stock.getStockDescription();
	}
}
