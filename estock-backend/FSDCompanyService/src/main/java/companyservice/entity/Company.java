package companyservice.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Company {
	@Id
	@GeneratedValue
	private long id;
	private String companyName;
	private String ceoName;
	private String stockMarket;
	private String turnOver;
	private String description;
	private Date ipoDate;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getCeo() {
		return ceoName;
	}
	public void setCeo(String ceo) {
		this.ceoName = ceo;
	}
	public String getTurnOver() {
		return turnOver;
	}
	public void setTurnOver(String turnOver) {
		this.turnOver = turnOver;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getIpoDate() {
		return ipoDate;
	}
	public void setIpoDate(Date ipoDate) {
		this.ipoDate = ipoDate;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getStockMarket() {
		return stockMarket;
	}
	public void setStockMarket(String stockMarket) {
		this.stockMarket = stockMarket;
	}
	
}
