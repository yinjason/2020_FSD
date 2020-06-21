package companyservice.entity;

public class Stock {
	private int id;
	private String stockCode;
	private String stockName;
	private String stockDescription;
	

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getStockCode() {
		return stockCode;
	}
	public void setStockCode(String stockCode) {
		this.stockCode = stockCode;
	}
	public String getStockName() {
		return stockName;
	}
	public void setStockName(String stockName) {
		this.stockName = stockName;
	}
	public String getStockDescription() {
		return stockDescription;
	}
	public void setStockDescription(String stockDescription) {
		this.stockDescription = stockDescription;
	}
}
