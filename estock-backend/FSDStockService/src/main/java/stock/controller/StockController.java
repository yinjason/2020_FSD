package stock.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import stock.entity.Stock;

@RestController
@RequestMapping("/stock")
public class StockController {

	@RequestMapping("/{stockCode}")
	public Stock queryCompanyById(@PathVariable String stockCode) {
		Stock dummyStock = new Stock();
		dummyStock.setStockCode(stockCode);
		dummyStock.setStockName("From StockService: Stock Name for " + stockCode);
		dummyStock.setStockDescription("From StockService: Description for " + stockCode);
		return dummyStock;
	}
}
